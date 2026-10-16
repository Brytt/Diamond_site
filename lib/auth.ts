import NextAuth from 'next-auth';
import Google from 'next-auth/providers/google';
const configured=Boolean(process.env.AUTH_GOOGLE_ID&&process.env.AUTH_GOOGLE_SECRET);
export const {handlers,auth,signIn,signOut}=NextAuth({providers:configured?[Google]:[],session:{strategy:'jwt'},callbacks:{async signIn({user}){if(!process.env.DATABASE_URL||!user.email)return false;const {db}=await import('./db');await db.user.upsert({where:{email:user.email},create:{email:user.email,name:user.name},update:{name:user.name}});return true;}}});
export async function currentUser(){const session=await auth();if(!session?.user?.email||!process.env.DATABASE_URL)return null;const {db}=await import('./db');return db.user.findUnique({where:{email:session.user.email}});}
export const authConfigured=()=>Boolean(process.env.AUTH_SECRET&&process.env.AUTH_GOOGLE_ID&&process.env.AUTH_GOOGLE_SECRET&&process.env.DATABASE_URL);
