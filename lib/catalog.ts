export const shapes = ['Round','Oval','Princess','Cushion','Emerald','Pear','Radiant','Asscher','Marquise','Heart'] as const;
export const colors = ['D','E','F','G','H','I','J','K','L','M'];
export const clarities = ['FL','IF','VVS1','VVS2','VS1','VS2','SI1','SI2','I1'];
export const cuts = ['Ideal','Excellent','Very Good','Good'];
export type Diamond = {
 id: string; shape: string; type: string; price: number; carat: number; color: string; clarity: string; cut: string; certification: string;
 quickShip: boolean; polish: string; symmetry: string; fluorescence: string; width: number; length: number; height: number; depth: number; table: number; ratio: number; crown: number; pavilion: number; culet: string; image: string; isDemo: boolean; available: boolean; createdAt: string;
};
export type Setting = {id:string;name:string;style:string;price:number;description:string};
export const settings: Setting[] = ['Solitaire','Halo','Hidden Halo','Three Stone','Pavé','Vintage','Cathedral'].map((style,i)=>({id:`setting-${i+1}`,name:['The Signature','The Lumière','The Secret','The Trilogy','The Starlight','The Heirloom','The Cathedral'][i],style,price:[790,1250,1150,1690,1090,1490,990][i],description:`A considered ${style.toLowerCase()} design, crafted to bring your center stone into focus.`}));
// Original, reproducible demonstration data. No certificate is represented as verified.
export const demoDiamonds: Diamond[] = Array.from({length:180},(_,i)=>{
 const shape=shapes[i%10]; const carat=Number((0.5+((i*37)%350)/100).toFixed(2)); const lab=i%3===0;
 const width=Number((4+carat*1.3).toFixed(2)); const ratio=['Round','Princess','Asscher','Heart'].includes(shape)?1.02:1.32+(i%5)*0.04;
 return {id:`AU-${String(i+1).padStart(5,'0')}`,shape,type:lab?'Lab-Grown':'Natural',carat,price:Math.round(carat*carat*(lab?380:2150)+(i%7)*137),color:colors[(i*3)%10],clarity:clarities[(i*5)%9],cut:cuts[i%4],certification:lab?'IGI':'GIA',quickShip:i%3!==1,polish:['Excellent','Very Good','Good'][i%3],symmetry:['Excellent','Very Good','Good'][(i+1)%3],fluorescence:['None','Faint','Medium','Strong'][i%4],width,length:Number((width*ratio).toFixed(2)),height:Number((width*0.62).toFixed(2)),depth:58+i%9,table:54+i%12,ratio:Number(ratio.toFixed(2)),crown:32+(i%6),pavilion:40+(i%5)*0.3,culet:i%5?'None':'Very Small',image:`/diamonds/${shape.toLowerCase()}.png`,isDemo:true,available:true,createdAt:new Date(Date.UTC(2026,0,1+i)).toISOString()};
});
export type CatalogResult = {items:Diamond[];total:number;page:number;pages:number;demo:boolean};
export const numericFilters: Record<string,keyof Diamond> = {price:'price',carat:'carat',width:'width',length:'length',height:'height',depth:'depth',table:'table',ratio:'ratio',crown:'crown',pavilion:'pavilion',pricePerCarat:'price'};
export const categoryFilters = ['shape','type','color','clarity','cut','certification','polish','symmetry','fluorescence','culet'] as const;
export function filterCatalog(data:Diamond[],params:URLSearchParams):CatalogResult {
 let items=data.filter(d=>d.available);
 for(const key of categoryFilters){const selected=params.get(key)?.split(',').filter(Boolean);if(selected?.length) items=items.filter(d=>selected.includes(String(d[key])));}
 if(params.get('quickShip')==='true')items=items.filter(d=>d.quickShip);
 for(const [key,field] of Object.entries(numericFilters)){
  const min=params.get(`${key}Min`),max=params.get(`${key}Max`);
  items=items.filter(d=>{const value=key==='pricePerCarat'?d.price/d.carat:Number(d[field]);return (!min||value>=Number(min))&&(!max||value<=Number(max));});
 }
 const q=params.get('q')?.trim().toLowerCase();if(q)items=items.filter(d=>`${d.id} ${d.shape} ${d.carat} ${d.type} ${d.color} ${d.clarity}`.toLowerCase().includes(q));
 const sort=params.get('sort')||'value';items.sort((a,b)=>sort==='price-asc'?a.price-b.price:sort==='price-desc'?b.price-a.price:sort==='carat-asc'?a.carat-b.carat:sort==='carat-desc'?b.carat-a.carat:sort==='newest'?b.createdAt.localeCompare(a.createdAt):a.price/a.carat-b.price/b.carat);
 const total=items.length;const pages=Math.max(1,Math.ceil(total/12));const page=Math.min(pages,Math.max(1,Number(params.get('page'))||1));
 return {items:items.slice((page-1)*12,page*12),total,page,pages,demo:data.every(d=>d.isDemo)};
}
export function parseSmartSearch(input:string):URLSearchParams {
 const p=new URLSearchParams(); const q=input.toLowerCase();const shape=shapes.find(s=>new RegExp(`\\b${s.toLowerCase()}\\b`).test(q));if(shape)p.set('shape',shape);
 const budget=q.match(/(?:under|below|up to|budget(?: of)?)\s*\$?\s*([\d,]+(?:\.\d+)?)/);if(budget)p.set('priceMax',budget[1].replaceAll(',',''));
 const carat=q.match(/(\d+(?:\.\d+)?)\s*(?:carat|ct)\b/);if(carat)p.set('caratMin',carat[1]);
 if(/lab/.test(q))p.set('type','Lab-Grown');else if(/natural/.test(q))p.set('type','Natural');
 if(/excellent clarity|high clarity|flawless/.test(q))p.set('clarity','FL,IF,VVS1,VVS2,VS1');
 if(/quick|fast shipping/.test(q))p.set('quickShip','true');return p;
}
