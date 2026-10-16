import type {Metadata} from 'next';
import localFont from 'next/font/local';
import './globals.css';
import './luxury-theme.css';
import './reference-theme.css';
import {CookiePreferences,Workshop} from '@/components/editorial-ui';
const displayFont = localFont({ src: '../public/fonts/librebodoni-variable.ttf', variable: '--font-display', weight: '400 700', display: 'swap', fallback: ['Georgia'] });
const interfaceFont = localFont({ src: [{path:'../public/fonts/Lato-Regular.ttf',weight:'400'},{path:'../public/fonts/Lato-Bold.ttf',weight:'700'}], variable: '--font-interface', display: 'swap', fallback: ['Arial'] });
import {Providers} from '@/components/providers';
import {Header,Footer,ComparisonTray} from '@/components/shell';
export const metadata:Metadata={metadataBase:new URL(process.env.NEXT_PUBLIC_SITE_URL||'http://localhost:3000'),title:{default:'Aurelia | A diamond, distinctly yours',template:'%s | Aurelia'},description:'Explore and compare diamonds, find your perfect setting, and create a ring that tells your story. Demonstration catalog.'};
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="en" className={`${displayFont.variable} ${interfaceFont.variable}`}><body><Providers><a className="skip-link" href="#main">Skip to content</a><Header/>{children}<Footer/><ComparisonTray/><Workshop/><CookiePreferences/></Providers></body></html>;}
