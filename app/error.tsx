'use client';
export default function ErrorPage({reset}:{reset:()=>void}){return <main id="main" className="container empty-state"><h1>Something interrupted your visit.</h1><p>Please try again in a moment.</p><button className="button button-primary" onClick={reset}>Try again</button></main>;}
