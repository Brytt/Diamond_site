import type {MetadataRoute} from 'next';
import {articles} from '@/lib/editorial-content';
export default function sitemap():MetadataRoute.Sitemap {
 const base=process.env.NEXT_PUBLIC_SITE_URL||'http://localhost:3000';
 const paths=['','/collections/all-diamonds','/collections/oval-cut-diamonds','/collections/lab-diamonds','/education','/pages/diamonds','/pages/lab-grown-diamonds','/pages/engagement-rings','/pages/wedding-rings','/pages/jewelry','/pages/gemstones',...articles.map(a=>`/education/${a.slug}`)];
 return paths.map(path=>({url:`${base}${path}`,changeFrequency:'weekly',priority:path?0.7:1}));
}
