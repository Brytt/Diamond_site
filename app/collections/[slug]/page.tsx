import {Suspense} from 'react';
import {Collection} from '@/components/collection';
import {notFound} from 'next/navigation';
import {shapes} from '@/lib/catalog';
export async function generateMetadata({params}:{params:Promise<{slug:string}>}){const {slug}=await params;return {title:slug.replaceAll('-',' '),alternates:{canonical:`/collections/${slug}`}};}
export default async function Page({params}:{params:Promise<{slug:string}>}){const {slug}=await params;const shape=shapes.find(s=>slug===`${s.toLowerCase()}-cut-diamonds`);if(!shape&&slug!=='all-diamonds'&&slug!=='lab-diamonds')notFound();return <Suspense><Collection initialShape={shape||''} initialType={slug==='lab-diamonds'?'Lab-Grown':''}/></Suspense>;}
