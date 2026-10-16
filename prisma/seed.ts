import {PrismaClient} from '@prisma/client';
import {demoDiamonds,settings} from '../lib/catalog';
const db=new PrismaClient();
async function main(){if(!process.env.DATABASE_URL)throw new Error('Set DATABASE_URL before seeding.');for(const d of demoDiamonds){const data={...d,createdAt:new Date(d.createdAt),pricePerCarat:d.price/d.carat};await db.diamond.upsert({where:{id:d.id},create:{...data,inventory:{create:{status:'DEMO'}}},update:data});}for(const s of settings)await db.ringSetting.upsert({where:{id:s.id},create:s,update:s});console.log(`Seeded ${demoDiamonds.length} synthetic demo diamonds and ${settings.length} illustrative settings. No real inventory or verified certificates.`);}
main().catch(e=>{console.error(e.message);process.exitCode=1;}).finally(()=>db.$disconnect());
