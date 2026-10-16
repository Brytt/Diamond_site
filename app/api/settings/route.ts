import { NextResponse } from 'next/server';
import { getSettings } from '@/lib/repository';
export async function GET(){try{return NextResponse.json(await getSettings());}catch{return NextResponse.json({error:'Settings are temporarily unavailable.'},{status:503});}}
