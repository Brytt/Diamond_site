import {notFound} from 'next/navigation';
import {CategoryEditorial} from '@/components/editorial';
import {EditorialHeading,ClosingCta} from '@/components/editorial';
import {CareCards} from '@/components/editorial';
const pages:Record<string,'engagement'|'wedding'|'lab'|'diamonds'>={'engagement-rings':'engagement','wedding-rings':'wedding','lab-grown-diamonds':'lab',diamonds:'diamonds'};
export async function generateMetadata({params}:{params:Promise<{slug:string}>}){const {slug}=await params;return {title:slug.split('-').map(s=>s[0].toUpperCase()+s.slice(1)).join(' '),alternates:{canonical:`/pages/${slug}`}};}
export default async function Page({params}:{params:Promise<{slug:string}>}){const {slug}=await params;if(pages[slug])return <CategoryEditorial kind={pages[slug]}/>;if(['jewelry','gemstones'].includes(slug))return <main id="main"><section className="reference-section"><EditorialHeading kicker="THE AURELIA EDIT" title={slug==='jewelry'?'Everyday, made meaningful.':'A world of character.'} description="Explore our educational guides while we prepare future collections. These categories are not yet available to purchase."/></section><CareCards/><ClosingCta/></main>;notFound();}
