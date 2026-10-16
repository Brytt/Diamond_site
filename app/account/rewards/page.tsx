import {Faq} from '@/components/editorial-ui';
import {rewardFaq} from '@/lib/editorial-content';
export const metadata={title:'Rewards questions'};
export default function Page(){return <main id="main" className="rewards-page"><Faq items={rewardFaq} large/></main>;}
