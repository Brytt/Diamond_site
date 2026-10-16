export type Article={slug:string;title:string;category:string;summary:string;image:string;body:string[];resources?:{label:string;href:string}[]};
export const articles:Article[]=[
 {slug:'choosing-a-diamond',title:'What to look for when choosing a diamond',category:'Diamonds',summary:'Start with the details that matter: proportions, independent grading, clear pricing, and a stone you love.',image:'/editorial/diamond-hero.png',body:['A beautiful diamond is more than a line of specifications. Begin with a comfortable budget and the shape that draws your eye. Then compare stones across carat weight, color, clarity, and proportions.','A grading report is useful evidence, but it does not replace inspecting the actual diamond. For a real purchase, ask for the report number, verify it with the issuing laboratory, and review clear photography or video of the stone.','Our current catalog is a demonstration. Its prices and grading details are synthetic, and no certificates are verified. Use it to explore how filtering and comparison work.']},
 {slug:'natural-vs-lab',title:'Natural and lab-grown: understand your options',category:'Lab Diamonds',summary:'Two origins, one considered decision. Learn how to compare the qualities that matter to you.',image:'/editorial/lab-diamond.png',body:['Natural diamonds form in the earth. Laboratory-grown diamonds are produced in controlled conditions. Both can be evaluated for qualities such as color, clarity, and proportions.','Origin, pricing, availability, and personal meaning all play a role in the decision. Compare actual stones and laboratory reports instead of relying on a category label alone.','The sample prices on this website are illustrative. They are not a market price comparison or investment advice.']},
 {slug:'designing-your-ring',title:'A thoughtful guide to your engagement ring',category:'Engagement Rings',summary:'From your first diamond shortlist to a setting, metal, and size that feel right.',image:'/editorial/engagement-hero.png',body:['Start with a diamond or a setting style. A solitaire lets the center stone take the lead, while halo and pavé settings introduce additional detail.','Explore the relationship between the stone shape and setting. Think about the height of the setting, the width of the band, and how it will sit beside a wedding band.','Use our ring builder to explore a diamond, setting, metal, and US ring size. Generated imagery is inspirational rather than an exact rendering of your configuration.']},
 {slug:'wedding-band-guide',title:'How to choose a wedding band',category:'Wedding Rings',summary:'A guide to metal, profile, finish, and finding a comfortable everyday fit.',image:'/editorial/wedding-bands.png',body:['A wedding band is a piece you may wear every day. Consider how the profile feels on your hand as well as how it looks.','A plain band, a diamond-set band, and an eternity design each offer a different balance of texture, detail, and maintenance. Try different widths before settling on a size.','Have your finger measured by a jeweler before placing a real order. Our wedding-band page is a style guide; wedding bands are not available for purchase in the demo.']},
 {slug:'diamond-color',title:'Understanding diamond color and clarity',category:'Diamonds',summary:'How to use grades to narrow a shortlist without losing sight of the whole diamond.',image:'/editorial/lab-diamond.png',body:['Color and clarity grades describe particular characteristics of a stone. They are best considered alongside shape, proportions, and the actual appearance of the diamond.','D is the most colorless grade on the traditional D–Z scale. Clarity ranges from flawless to included. What you can see in a stone depends on more than its grade alone.','Use the grade filters to explore a range, then compare your shortlisted stones side by side. Verify all real grading details before purchase.']},
 {slug:'jewelry-care',title:'Keep the brilliance in your everyday pieces',category:'Jewelry',summary:'A little attention to storage, cleaning, and regular inspection can go a long way.',image:'/editorial/jewelry-portrait.png',body:['Store jewelry so that pieces do not rub against one another. Check with the jeweler for cleaning instructions specific to the metal, stone, and setting.','Have settings and clasps inspected when needed, particularly if a piece has been knocked or no longer feels secure.','Insurance, care plans, and repair services depend on the provider. No insurance or care plan is sold through this demonstration site.']},
 {slug:'craft-and-settings',title:'A closer look at diamond setting',category:'Engagement Rings',summary:'Discover how proportion, prongs, and craftsmanship bring a ring together.',image:'/editorial/craft-workbench.png',body:['A setting secures the stone and shapes the character of a ring. Fine details such as prong placement, gallery height, and band profile influence both appearance and practical wear.','Inspect a setting from multiple angles and ask the maker how it is constructed, sized, and serviced.','The workshop photographs on this website are generated editorial illustrations. They do not document an Aurelia manufacturing facility.']},
 {slug:'understanding-certification',title:'Understanding diamond certification',category:'Diamonds',summary:'What to ask for, what to compare, and why the actual grading report matters.',image:'/editorial/explore-emerald.png',resources:[{label:'GIA Report Check',href:'https://my.gia.edu/report-check-landing'},{label:'IGI Report Verification',href:'https://lookup.igi.org/index.php/verify-your-report/'}],body:['A laboratory name in a product listing is a starting point. Before a real purchase, ask the seller for the complete grading report and its report number, then use the issuing laboratory’s own verification service.','GIA and IGI are separate grading organizations. Read the actual report for the stone you are considering: origin, measurements, grades, and identifying details should be considered together. A report does not replace inspecting photographs or video of the actual diamond.','Use the official laboratory links below to check a real report. This demonstration does not verify reports itself or provide verified certificates. Laboratory labels, report details, and inventory specifications here are synthetic; do not submit them as real report numbers.']}
];
export const commonFaq:[string,string][]=[
 [
  "What is Aurelia?",
  "Aurelia is an original demonstration diamond storefront. Its catalog and imagery help you explore a shopping experience; it does not represent a live jewelry business."
 ],
 [
  "How do I measure my ring size?",
  "The builder uses US ring sizes. Before a real purchase, ask a jeweler to measure your finger and confirm the sizing system and fit."
 ],
 [
  "How do I choose an engagement ring?",
  "Begin with a budget, diamond shape, and setting style. Use the filters and comparison tools to build a shortlist, then inspect the actual stone and setting before a real purchase."
 ],
 [
  "Can I design my own engagement ring?",
  "Yes. Choose a demonstration diamond, select a setting and metal, then review your configuration in the three-step ring builder."
 ],
 [
  "How long would a custom ring take?",
  "The demo has no manufacturing or delivery service. A real seller must confirm production time and delivery dates for your specific configuration before you order."
 ],
 [
  "What engagement ring settings can I explore?",
  "The builder includes Solitaire, Halo, Hidden Halo, Three Stone, Pavé, Vintage, and Cathedral styles, with four metal choices. Images show style inspiration rather than an exact render of your ring."
 ],
 [
  "Are the diamonds certified or available to buy?",
  "No. The inventory is synthetic and cannot be purchased. Laboratory labels and grading details are illustrative, and no certificates are verified."
 ],
 [
  "What diamond shapes can I explore?",
  "Explore round, oval, princess, cushion, emerald, pear, radiant, asscher, marquise, and heart shapes."
 ],
 [
  "How do I choose a diamond shape?",
  "Use Shop by Shape to explore the silhouettes, then filter by your budget and compare the details of your favorites. The final choice is personal."
 ],
 [
  "What is the difference between natural and lab-grown?",
  "The distinction is origin: one forms in the earth and the other is grown in controlled laboratory conditions. Compare actual stones and real grading reports when making a purchase."
 ],
 [
  "Does Aurelia offer a signature diamond cut?",
  "No proprietary or independently verified signature cut is offered. The editorial campaign introduces the demonstration collection without claiming special certification."
 ],
 [
  "How should I compare GIA and IGI reports?",
  "They are separate grading organizations. Review the complete report for each actual stone, and verify its number with the issuing laboratory. The certification guide explains what to ask for; this demo does not perform report lookup."
 ],
 [
  "Can I schedule an in-person preview?",
  "In-person previews and appointments are not available. You can inspect demonstration specifications, save a shortlist, and compare up to four diamonds on this site."
 ],
 [
  "Are payment plans available?",
  "No. Financing, installment payments, and live purchases are not available in this demonstration."
 ],
 [
  "What shipping and returns policies apply?",
  "No live orders are accepted. Shipping rates, delivery dates, return terms, and merchant support arrangements must be established before selling."
 ],
 [
  "Is jewelry insurance available?",
  "No insurance is sold or arranged through this site. The editorial images do not imply any insurance affiliation or coverage."
 ],
 [
  "Does Aurelia offer a care plan?",
  "No repair subscription, warranty, or care plan is offered. The jewelry care guide provides general considerations for looking after your pieces."
 ],
 [
  "Is there a loyalty program?",
  "The rewards page is a preview only. Enrollment, points, cash back, earning, and redemption have not launched. Signing in does not create a rewards balance."
 ]
];
export const rewardFaq:[string,string][]=[['What is Aurelia Rewards?','This page previews a future loyalty experience. No active points, cash back, or financial rewards are offered in this demonstration.'],['What if I already have an Aurelia account?','Your existing sign-in remains available. Account access does not create a rewards balance or enroll you in a live loyalty program.'],['How can I earn points?','Earning rules have not been launched. We will publish program terms before any real points can be earned.'],['What is the minimum amount required to redeem points?','No redemption threshold is configured because the rewards program is not active.'],['Can rewards be combined with promotions?','Promotion and combination rules will be set out in published terms if the program launches.'],['Do points expire?','No points are currently issued. Any future expiry rules will be clearly stated in program terms.'],['When will points appear in my account?','The demo does not issue or calculate points.'],['Where can I report a problem?','Open the Contact page for the current demonstration support information.'],['Which purchases would be eligible?','Eligibility has not been defined. Demonstration products cannot be purchased and do not earn points.']];
