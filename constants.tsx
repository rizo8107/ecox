
import React from 'react';
import type { Slide, TableData, Competitor, PieChartSegment } from './types';
import { Table } from './components/Table';
import { PieChart } from './components/PieChart';

// --- ICONS ---
const CheckCircleIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-500" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg>;
const XCircleIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-red-500" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" /></svg>;
const createLogo = (letter: string, color: string) => <div className={`w-12 h-12 flex-shrink-0 flex items-center justify-center rounded-lg ${color} text-white font-bold text-2xl`}>{letter}</div>;

// --- COMPETITORS DATA ---
const competitorsData: Competitor[] = [
    { name: 'Tata Wiron', logo: createLogo('T', 'bg-blue-800'), overview: 'Market leader in GI wires, known for quality and reach.', strengths: ['Strong brand trust', 'Extensive distribution network'], weaknesses: ['Higher price point', 'Less flexible on custom orders'], marketPresence: 'Very High', pricing: '₹80-100', differentiation: 'EcoX competes on specialized coatings and agile manufacturing for custom needs.' },
    { name: 'JSW Steel', logo: createLogo('J', 'bg-red-700'), overview: 'Major steel producer with a strong GI wire segment.', strengths: ['Integrated steel production', 'Consistent quality'], weaknesses: ['Primarily focused on large-volume orders'], marketPresence: 'High', pricing: '₹75-95', differentiation: 'EcoX offers greater customization for small to mid-sized projects.' },
    { name: 'Systematic Group', logo: createLogo('S', 'bg-teal-600'), overview: 'Specializes in fencing and a variety of GI wires.', strengths: ['30+ years of experience', 'Focus on corrosion resistance'], weaknesses: ['Primarily a regional player', 'Weaker brand recognition nationally'], marketPresence: 'Medium', pricing: '₹65-85', differentiation: 'EcoX innovates with advanced Zn-Al-Mg coatings for superior durability.' },
    { name: 'A-1 Fence', logo: createLogo('A', 'bg-gray-600'), overview: 'Leading manufacturer of fencing wire and related products.', strengths: ['Specialized in security fencing', 'Wide range of fencing solutions'], weaknesses: ['Less focus on industrial-use GI wires'], marketPresence: 'Medium', pricing: '₹70-90', differentiation: 'EcoX provides higher tensile strength GI wires suitable for industrial applications beyond fencing.' },
    { name: 'Hindustan Zinc', logo: createLogo('H', 'bg-green-700'), overview: 'Leading zinc producer, supplies raw material and finished wires.', strengths: ['High-quality zinc coating', 'Expertise in anti-corrosion'], weaknesses: ['More focused on B2B supply', 'Limited direct-to-consumer presence'], marketPresence: 'High (Supply Chain)', pricing: '₹85-105', differentiation: 'EcoX offers a finished, customized product with a focus on end-user application and service.' },
];

// --- BUDGET & CAMPAIGN DATA ---
const budgetPieData: PieChartSegment[] = [
    { label: 'Google Ads', value: 25000, color: '#34A853' }, // Green
    { label: 'LinkedIn Ads', value: 10000, color: '#4285F4' }, // Blue
    { label: 'Email Tools', value: 5000, color: '#FBBC05' }, // Yellow
    { label: 'Content & Creative', value: 15000, color: '#EA4335' }, // Red
    { label: 'Service Fees', value: 20000, color: '#9333ea' }, // Purple
    { label: 'Contingency', value: 10000, color: '#78909c' }, // Slate
];

const budgetData: TableData = {
  headers: ['Category', 'Monthly Allocation', 'Details'],
  rows: [
    ['Media Spend (Ads/Email Tools)', '₹40,000', 'Google Ads (₹25k), LinkedIn (₹10k), Email (₹5k).'],
    ['Content & Creative', '₹15,000', 'Blogs, videos, lead magnets.'],
    ['Service Fees (Management/Analytics)', '₹20,000', 'Campaign setup, reporting, A/B testing.'],
    ['Contingency', '₹10,000', 'Flex for optimizations.'],
    [<strong className="text-slate-800 dark:text-slate-100">Total</strong>, <strong className="text-slate-800 dark:text-slate-100">₹85,000</strong>, ''],
  ],
};

const campaignData: TableData = {
  headers: ['Month', 'Theme', 'Key Campaigns', 'Tactics', 'Targets'],
  rows: [
    ['1', 'Awareness', 'Launch Comparisons', 'Google Ads on keywords; Email blasts to 200 prospects.', '500 sessions, 10 leads.'],
    ['2', 'Engagement', 'Tech Tips & Polls', 'LinkedIn posts vs. rivals; Retargeting ads.', '100 followers, 15 inquiries.'],
    ['3', 'Conversion', 'Webinars & Demos', '\"EcoX vs. Competitors\" webinar; Nurture emails.', '8 bookings, ₹2 crore pipeline.'],
    ['4-6', 'Optimization', 'Case Studies', 'A/B tests; Expand to YouTube.', '25% lead growth.'],
  ],
};

const instagramData: TableData = {
    headers: ['Week', 'Focus', 'Content Ideas', 'Tactics', 'KPIs'],
    rows: [
      ['1', 'Product Showcases', 'Reel: GI wire unboxing vs. rivals.', 'Hashtags: #EcoXStrength, #GIWireIndia.', '200 views/post.'],
      ['2', 'User Stories', 'UGC reposts of installations.', 'Collaborations with micro-influencers.', '50 likes/interactions.'],
      ['3', 'Eco-Tips', 'Story series: \"Sustainable Fencing Hacks\".', 'Polls for engagement.', '10% story completion.'],
      ['4', 'Promotions', 'Carousel: \"EcoX vs. Market Leaders\".', 'Boost top post (₹2,000 budget).', '5 DM inquiries.'],
    ],
};

const BulletList = ({ items, icon }: { items: string[], icon?: React.ReactNode }) => (
  <ul className="space-y-3">
    {items.map((item, index) => (
      <li key={index} className="flex items-start gap-3">
        <span className="flex-shrink-0 w-5 h-5 mt-0.5">{icon || <div className="w-2 h-2 mt-[7px] rounded-full bg-green-500" />}</span>
        <span className="text-slate-600 dark:text-slate-400">{item}</span>
      </li>
    ))}
  </ul>
);

const InfoCard = ({ icon, title, children }: { icon: React.ReactNode, title: string, children: React.ReactNode }) => (
    <div className="bg-white/50 dark:bg-slate-800/50 p-6 rounded-lg ring-1 ring-slate-900/5">
        <div className="flex items-center gap-4 mb-3">
            <div className="w-10 h-10 flex items-center justify-center bg-green-100 dark:bg-green-900/30 rounded-lg text-green-600 dark:text-green-400">{icon}</div>
            <h4 className="text-lg font-bold">{title}</h4>
        </div>
        <div className="text-slate-600 dark:text-slate-400">{children}</div>
    </div>
);


export const SLIDES_DATA: Slide[] = [
  {
    id: 'who-is-ecox',
    title: 'Who is EcoX?',
    content: (
      <div className="space-y-6">
        <p>EcoX is a vertically integrated Indian brand specializing in high-performance wire and mesh solutions. Founded on principles of durability, customization, and sustainability, EcoX caters to residential, commercial, agricultural, infrastructure, and industrial sectors.</p>
        <div className="grid md:grid-cols-2 gap-6">
            <InfoCard icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" /></svg>} title="Key Products">
                <BulletList items={[
                    'GI Wires: Hot-dip zinc-coated (70-100 GSM) for superior corrosion resistance.',
                    'Meshes: GI chain-link, welded SS/MS, and phosphor-bronze for diverse applications.'
                ]} />
            </InfoCard>
            <InfoCard icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" /></svg>} title="Unique Selling Points">
                <BulletList items={[
                    'Eco-friendly coatings (e.g., Zn-Al-Mg pilots).',
                    'In-house lab testing & full customization.',
                    'Emphasis on recyclability (LEED standards).'
                ]} />
            </InfoCard>
        </div>
        <div>
            <h4 className="text-lg font-semibold pt-2">Market Position & Background:</h4>
            <p>EcoX is an "eco-premium" challenger in India's ₹50,000 crore wire industry. Evolving from a trader to a manufacturer, we're pioneering innovations like smart meshes with IoT sensors.</p>
        </div>
      </div>
    ),
  },
  {
    id: 'motto',
    title: 'What is Our Motto?',
    content: (
      <div className="space-y-6 text-center">
        <div className="bg-green-100 dark:bg-green-900/30 border-t-4 border-green-500 p-8 rounded-lg">
            <h3 className="text-3xl font-extrabold text-green-800 dark:text-green-200 tracking-tight">"Sustainable Strength, Lasting Protection"</h3>
        </div>
        <p>This motto encapsulates our commitment to delivering robust, eco-conscious solutions that provide long-term durability while minimizing environmental impact.</p>
        <div className="grid sm:grid-cols-3 gap-6 text-left pt-4">
            <InfoCard icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>} title="Sustainability"><p>Recyclable materials & low-VOC coatings.</p></InfoCard>
            <InfoCard icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>} title="Strength"><p>High-tensile products for extreme conditions.</p></InfoCard>
            <InfoCard icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" /></svg>} title="Protection"><p>Versatile applications for safety and security.</p></InfoCard>
        </div>
      </div>
    ),
  },
  {
    id: 'competitors',
    title: 'Who Are Our Competitors?',
    content: (
        <div className="space-y-4">
            <p>We operate in a competitive landscape against established manufacturers. EcoX differentiates through eco-innovation and customization, while competitors often lead in distribution and brand recall.</p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 pt-4">
                {competitorsData.map(c => (
                    <div key={c.name} className="bg-white dark:bg-slate-800/50 rounded-lg shadow-md p-4 flex flex-col ring-1 ring-slate-900/5 hover:ring-green-500/50 transition-shadow duration-300">
                        <div className="flex items-center gap-4 mb-3">
                            {c.logo}
                            <h4 className="font-bold text-lg text-slate-800 dark:text-slate-100">{c.name}</h4>
                        </div>
                        <p className="text-sm text-slate-500 dark:text-slate-400 mb-4 grow">{c.overview}</p>
                        <div className="text-sm space-y-2 mb-4">
                            <BulletList items={c.strengths} icon={<CheckCircleIcon />} />
                            <BulletList items={c.weaknesses} icon={<XCircleIcon />} />
                        </div>
                        <div className="mt-auto pt-3 border-t border-slate-200 dark:border-slate-700 text-xs text-center font-semibold text-slate-700 dark:text-slate-300">
                            Pricing: {c.pricing}/kg
                        </div>
                    </div>
                ))}
            </div>
            <h4 className="text-lg font-semibold pt-4">Competitive Insights:</h4>
            <p>EcoX trails in scale but excels in niche eco-innovations. Our opportunity is to capture share from mid-tier players by focusing on customization and sustainability.</p>
        </div>
    )
  },
  {
    id: 'strategy',
    title: 'What Are We Planning to Do for Strategy?',
    content: (
        <div className="space-y-8">
            <p>Our strategy focuses on three pillars to achieve a <strong className="text-green-600 dark:text-green-400">20% YoY lead increase</strong> and <strong className="text-green-600 dark:text-green-400">15% niche market share gain</strong>. We will position EcoX as the "Eco-Premium Challenger."</p>
            
            <div className="grid md:grid-cols-3 gap-6">
                 <InfoCard icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>} title="Build Trust">Emphasize superior coatings, customization, and claim accuracy.</InfoCard>
                 <InfoCard icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" /></svg>} title="Generate B2B Leads">Use AI-personalized campaigns, ABM, and compelling comparison content.</InfoCard>
                 <InfoCard icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>} title="Enhance Engagement">Collaborate with architects and leverage social media storytelling.</InfoCard>
            </div>

            <div>
                <h4 className="text-lg font-semibold pt-2 mb-4">Phased Roadmap:</h4>
                <div className="relative border-l-2 border-green-500 pl-8 space-y-10">
                    <div className="relative">
                        <div className="absolute -left-10 top-0 w-4 h-4 bg-green-500 rounded-full border-4 border-slate-100 dark:border-slate-950"></div>
                        <h5 className="font-bold">Phase 1 (Months 1-3): Foundation</h5>
                        <p className="text-slate-600 dark:text-slate-400">Launch digital campaigns, create comparison content, and build lead magnets.</p>
                    </div>
                    <div className="relative">
                       <div className="absolute -left-10 top-0 w-4 h-4 bg-green-500 rounded-full border-4 border-slate-100 dark:border-slate-950"></div>
                        <h5 className="font-bold">Phase 2 (Months 4-6): Scaling</h5>
                        <p className="text-slate-600 dark:text-slate-400">Scale partnerships, optimize campaigns based on data, and host webinars.</p>
                    </div>
                    <div className="relative">
                        <div className="absolute -left-10 top-0 w-4 h-4 bg-green-500 rounded-full border-4 border-slate-100 dark:border-slate-950"></div>
                        <h5 className="font-bold">Phase 3 (Months 7+): Innovation</h5>
                        <p className="text-slate-600 dark:text-slate-400">Pilot new products like Zn-Al-Mg coatings and expand into export markets.</p>
                    </div>
                </div>
            </div>
        </div>
    )
  },
  {
    id: 'budget',
    title: 'Aggressive Growth Budget',
    content: (
        <div className="space-y-6">
            <div className="grid md:grid-cols-2 gap-8 items-center">
                 <div className="flex flex-col gap-4">
                    <div className="bg-white/50 dark:bg-slate-800/50 p-6 rounded-lg text-center ring-1 ring-slate-900/5">
                        <div className="text-sm font-semibold text-slate-500 dark:text-slate-400">Total Monthly Budget</div>
                        <div className="text-4xl font-extrabold text-green-600 dark:text-green-400">₹85,000</div>
                    </div>
                    <div className="bg-white/50 dark:bg-slate-800/50 p-6 rounded-lg text-center ring-1 ring-slate-900/5">
                        <div className="text-sm font-semibold text-slate-500 dark:text-slate-400">Expected ROI</div>
                        <div className="text-4xl font-extrabold text-slate-800 dark:text-slate-200">5x Return</div>
                        <p className="text-xs text-slate-500 dark:text-slate-400">Yielding 35-50 qualified leads/month</p>
                    </div>
                </div>
                <div>
                    <h4 className="text-lg font-semibold mb-4 text-center md:text-left">Monthly Allocation Breakdown:</h4>
                    <PieChart data={budgetPieData} />
                </div>
            </div>
            <div>
                 <h4 className="text-lg font-semibold pt-4">Budget Details:</h4>
                 <p className="pb-4">This expanded budget is designed for aggressive growth, assuming a 12-month commitment for optimal ROI.</p>
                 <Table data={budgetData} />
            </div>
        </div>
    )
  },
  {
    id: 'campaigns',
    title: 'Campaign Plans',
    content: (
        <div className="space-y-4">
            <p>Campaigns are full-funnel, focusing on awareness, engagement, and conversion with clear monthly rollouts and KPIs.</p>
             <h4 className="text-lg font-semibold pt-2">Overall Structure:</h4>
            <BulletList items={[
                'Channels: Google Ads, LinkedIn, Email, Content/SEO.',
                'Tactics: Competitor comparisons, lead magnets (e.g., "EcoX vs. Polycab Guide"), webinars.',
                'KPIs: 600 ad clicks/month, 1.5% social engagement, 20 leads.'
            ]} />
            <h4 className="text-lg font-semibold pt-2">Monthly Campaign Calendar:</h4>
            <Table data={campaignData} />
            <p className="pt-2"><strong>Tools:</strong> Google Analytics, HubSpot CRM, Snov.io for emails.</p>
        </div>
    )
  },
  {
    id: 'instagram',
    title: 'Instagram Plan',
    content: (
        <div className="space-y-6">
            <p>Instagram is prioritized for visual storytelling to build engagement (target: 25% vs. B2B avg. 22.5%). We'll focus on reels and stories for a younger, visually-driven audience.</p>
             <h4 className="text-lg font-semibold">Objectives:</h4>
            <p>500 new followers/month, 6.5% engagement rate, 5 leads/month via DMs.</p>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h4 className="text-lg font-semibold pt-2">Content Strategy:</h4>
                <BulletList items={[
                    'Themes: Before-after installations, product macros, eco-tips, subtle competitor comparisons.',
                    'Cadence: 5 posts/week (3 reels, 2 statics/stories).',
                    'Formats: Reels, Stories with polls, Carousels.'
                ]} />
                 <h4 className="text-lg font-semibold pt-4">Growth Tactics & Budget:</h4>
                <p>Run giveaways, use AR filters for virtual installs, and track via Insights. Allocate ₹5,000/month for boosts.</p>
              </div>
              <div className="flex items-center justify-center">
                  <div className="w-full max-w-xs bg-white dark:bg-slate-800 rounded-xl shadow-lg p-2 font-sans">
                      <div className="flex items-center gap-2 p-2">
                         {createLogo('E', 'bg-green-500')}
                          <span className="font-bold text-sm">EcoX_Official</span>
                      </div>
                      <div className="aspect-square bg-slate-200 dark:bg-slate-700 flex items-center justify-center">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 text-slate-400 dark:text-slate-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
                      </div>
                      <div className="p-3 text-xs">
                          <p><strong className="dark:text-white">EcoX_Official</strong> See the difference our eco-friendly GI wire makes. Sustainable strength for every project. #EcoXStrength #GIWireIndia</p>
                      </div>
                  </div>
              </div>
            </div>
            <h4 className="text-lg font-semibold pt-2">Monthly Plan Example:</h4>
            <Table data={instagramData} />
        </div>
    )
  },
];
