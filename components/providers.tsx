'use client';
import {QueryClient,QueryClientProvider} from '@tanstack/react-query';
import {useState,useEffect} from 'react';
import {useStore} from '@/lib/store';
export function Providers({children}:{children:React.ReactNode}){const [client]=useState(()=>new QueryClient({defaultOptions:{queries:{staleTime:30000,retry:1}}}));useEffect(()=>{useStore.persist.rehydrate();},[]);return <QueryClientProvider client={client}>{children}</QueryClientProvider>;}
