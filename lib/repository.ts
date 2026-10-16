import { demoDiamonds, settings, filterCatalog, categoryFilters, numericFilters, type Diamond, type Setting, type CatalogResult } from './catalog';
import type { Prisma } from '@prisma/client';
async function database(){return (await import('./db')).db;}
function serialize(d:Record<string,unknown>):Diamond{return {...d,price:Number(d.price),createdAt:new Date(d.createdAt as string).toISOString()} as Diamond;}
export async function getDiamond(id:string):Promise<Diamond|null>{if(!process.env.DATABASE_URL)return demoDiamonds.find(d=>d.id===id)||null;const d=await (await database()).diamond.findUnique({where:{id}});return d?serialize(d):null;}
export async function getSettings():Promise<Setting[]>{if(!process.env.DATABASE_URL)return settings;return (await database()).ringSetting.findMany({where:{available:true},orderBy:{price:'asc'}});}
export async function getCatalog(p:URLSearchParams):Promise<CatalogResult>{
 if(!process.env.DATABASE_URL)return filterCatalog(demoDiamonds,p);
 const db=await database();const where:Prisma.DiamondWhereInput={available:true};
 for(const key of categoryFilters){const v=p.get(key)?.split(',').filter(Boolean);if(v?.length)(where as Record<string,unknown>)[key]={in:v};}
 if(p.get('quickShip')==='true')where.quickShip=true;
 for(const [key,field] of Object.entries(numericFilters)){const min=p.get(`${key}Min`),max=p.get(`${key}Max`);if(min||max)(where as Record<string,unknown>)[key==='pricePerCarat'?'pricePerCarat':field]={...(min?{gte:Number(min)}:{}),...(max?{lte:Number(max)}:{})};}
 const q=p.get('q');if(q)where.OR=[{id:{contains:q,mode:'insensitive'}},{shape:{contains:q,mode:'insensitive'}}];
 const sorts:Record<string,Prisma.DiamondOrderByWithRelationInput>={'price-asc':{price:'asc'},'price-desc':{price:'desc'},'carat-asc':{carat:'asc'},'carat-desc':{carat:'desc'},newest:{createdAt:'desc'},value:{pricePerCarat:'asc'}};
 const total=await db.diamond.count({where});const pages=Math.max(1,Math.ceil(total/12));const page=Math.min(pages,Math.max(1,Number(p.get('page'))||1));const rows=await db.diamond.findMany({where,orderBy:[sorts[p.get('sort')||'value']||sorts.value,{id:'asc'}],skip:(page-1)*12,take:12});
 return {items:rows.map(d=>serialize(d)),total,pages,page,demo:rows.every(d=>d.isDemo)};
}
