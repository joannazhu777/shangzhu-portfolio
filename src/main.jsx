import { Fragment, StrictMode, useEffect, useState } from 'react'
import { createRoot } from 'react-dom/client'
import './styles.css'

const experiences = [
  {
    slug: 'bright-saver', company: 'Bright Saver', role: 'Research Analyst', year: 'Mar. 2025 — Mar. 2026', location: 'San Francisco Bay Area',
    summary: 'Policy research and community engagement for accessible clean energy.',
    about: 'As a Research Analyst, I connected policy research, data validation, and student engagement to help make plug-in solar more understandable and actionable. I translated policy findings into recommendations, strengthened a public-facing white paper, and designed a campus program around local clean-energy adoption.',
    aboutLines: ['As a Research Analyst, I connected policy', 'research, data validation, and student engagement', 'to make plug-in solar more understandable', 'and actionable. I translated policy findings into', 'recommendations and campus engagement.'],
    aboutTitle: <>Bringing solar<br/>closer to home.</>, hideResults: true,
    tasks: [
      { title: 'Building campus awareness', bullets: ['Designed and implemented a semester-long student engagement program.', 'Connected UC Berkeley students with local homeowners and landlords.', 'Reached a 300+ student audience to raise awareness of plug-in solar and the product.'], facts: ['300+ students'] },
      { title: 'Strengthening policy evidence', bullets: ['Strengthened a 40+ page policy white paper by validating data and improving clarity.', 'Reviewed 70+ footnotes across the report.', 'Identified and corrected 18 data inconsistencies.'], facts: ['40+ pages', '70+ footnotes', '18 corrections'] },
      { title: 'Mapping the policy landscape', bullets: ['Researched relevant policies to inform strategic planning.', 'Analyzed 40+ legislators across 12 states.', 'Synthesized findings into strategic recommendations.'], facts: ['40+ legislators', '12 states'] },
    ],
    tools: [{ type: 'spreadsheet', name: 'Microsoft Excel' }, { type: 'canva', name: 'Canva' }, { type: 'google-suite', name: 'Google Suite' }], url: 'https://www.brightsaver.org/'
  },
  {
    slug: 'piper-ai', company: 'Piper AI', role: 'Market Intelligence Intern', year: 'Jun. — Jul. 2025',
    summary: 'Market intelligence and product strategy for an AI sales platform.', location: 'Madrid, Spain',
    about: 'As a Market Intelligence Intern, I built the analytical foundations that connected market intelligence, product strategy, and measurement, turning fragmented signals into decisions the team could use across market research, product development, and analytics implementation.',
    aboutLines: ['As a Market Intelligence Intern, I built the', 'analytical foundations that connected market', 'intelligence, product strategy, and measurement,', 'turning fragmented signals into decisions across', 'research, product development, and analytics.'],
    aboutTitle: <>Finding signal<br/>in the market.</>,
    hideResults: true,
    tasks: [
      {
        title: 'Building analytical foundations',
        bullets: [
          'Supported market intelligence and product strategy by building analytical foundations.',
          'Created a competitor intelligence framework profiling ~20 companies across 5 market segments.',
          'Synthesized insights from 10+ industry reports.',
          'Built mathematical models to size market opportunities, including TAM/SAM/SOM across 10 sensitivity cases.',
        ],
        facts: ['~20 companies', '5 segments', '10+ reports', '10 cases'],
      },
      {
        title: 'Translating insight into action',
        bullets: [
          'Delivered a 40-slide presentation to leadership and fielded follow-up analyses to refine positioning.',
          'Translated market findings into product and customer assets.',
          'Prototyped 3 features with the CTO.',
          'Restructured website content, updated core commercial assets and Help Center documentation.',
        ],
        facts: ['40 slides', '3 features'],
      },
      {
        title: 'Strengthening analytics',
        bullets: [
          'Strengthened analytics by auditing Mixpanel tracking pipeline.',
          'Identified 10+ tracking gaps.',
          'Presented an AS-IS assessment.',
          'Executed improvements to track 30+ events.',
        ],
        facts: ['10+ gaps', '30+ events'],
      },
    ],
    tools: [{ type: 'spreadsheet', name: 'Microsoft Excel' }, { type: 'mixpanel', name: 'Mixpanel' }, { type: 'google-suite', name: 'Google Suite' }, { type: 'notion', name: 'Notion' }, { type: 'figma', name: 'Figma' }],
    url: 'https://www.piperai.com/', visual: 'market-map',
    recommendation: {
      name: 'Rodrigo Burillo', role: 'Co-Founder @ PiperAI.com', date: 'August 28, 2025', context: 'Rodrigo managed Shang directly', initials: 'RB', url: 'https://www.linkedin.com/in/shangzhu77/',
      quote: [
        'I had the pleasure of working with Shang during her internship at Piper, where she quickly stood out for her adaptability, ownership, and ability to thrive in a fast-paced startup environment. From day one, she approached every project with curiosity, professionalism, and a genuine willingness to learn.',
        'What impressed me most was how quickly she took responsibility and delivered results with minimal oversight, while also being proactive in asking thoughtful questions and looking for ways to add value.',
        'Beyond her skills, Shang brought a positive attitude and maturity that made working with her a pleasure. I’m confident she will excel in whatever path she pursues next.',
      ],
    },
    reflection: {
      stories: [
        {
          title: 'What ownership made possible.',
          intro: 'PiperAI gave me ownership of my projects, not just an internship at a corporation.',
          paragraphs: [
            { bold: 'The startup environment gave me creative freedom and space for problem-solving.', text: ' My work had no ceiling: research could always go deeper; brainstorming could always stretch further. It was flexible, shaped by my approach and style while keeping success metrics in mind. Having direct access to the co-founders meant feedback was relevant and immediately actionable, helping me refine my research and analysis process.' },
            { bold: 'In this early-stage SaaS startup, ownership comes with speed.', text: ' New features dropped and market dynamics shifted constantly. I learned to think ahead, adapt to what was most needed in the moment, commit right away, and embrace failure. I learned fast, applied fast, and became comfortable figuring things out as I went. This also meant a wider scope of work, often pushing me out of my comfort zone.' },
            { bold: 'I saw my work directly shape decisions that influenced the company’s strategic direction.', text: ' Working closely with leadership, I experienced firsthand AI’s potential to empower through Piper’s philosophy—that AI should augment humans, not replace. Being in the room when key choices were made allowed me to understand new aspects of business, AI, and our future.' },
            { bold: 'Being in a small, close-knit team let me closely know each person.', text: ' Work culture in Spain was more social than anywhere I’ve been. Even without speaking Spanish, I felt included as part of the team. I learned so much about the world from friendships with my colleagues and managers, which extended well beyond office regardless of age, nationality, and culture.' },
            'Having this ownership was undoubtedly a privilege, allowing me to grow as a person and as a leader and inspiring my future.',
          ],
          images: [
            { src: '/piper-team.jpeg', alt: 'Shang with colleagues at Piper AI', caption: 'The people who made ownership feel possible.' },
            { src: '/piper-madrid-gathering.jpg', alt: 'A gathering with friends in Madrid', caption: 'A small moment between the work and everything beyond it.' },
          ],
        },
        {
          title: 'Being global is a mindset, not a passport stamp.',
          intro: 'It’s still a bit surreal to find myself holding a beer at a packed bar in Madrid after work with my colleagues, barely understanding the conversations around me. The cultural references are often new. But I felt so at ease. That’s how my first month working in this city has felt: unfamiliar but natural.',
          paragraphs: [
            'People are sometimes surprised when I say that, all alone, I moved to a new city at 16, then to a new country at 19. It wasn’t always easy; I’ve felt intimidated and lonely. But each time, I kept going. And I know I’d do it again and again.',
            { bold: 'Being global is a mindset, not a passport stamp.', text: ' It means staying open, listening first, and recognizing that my way of thinking is just one of many. Before criticizing anyone, remember that they haven’t had the things you’ve had. Living between cultures, I’ve seen how fast assumptions form. Real understanding takes time, and it starts with seeing with your own eyes and thinking with your own mind.' },
            { bold: 'I also try not to fall into the trap of being transactional.', text: ' The most meaningful connections have come when I’m simply curious about someone and honest about who I am. I would’ve missed so much unexpected magic otherwise.' },
            { bold: 'Lastly, I realized there’s no one right way to live.', text: ' It’s striking to me how people in different places carry such different values and priorities. The world is so wildly diverse and complex. What feels right, fair, or obvious to one group might make no sense to another. That doesn’t make one better; it just makes them different. What matters is finding what truly fits you.' },
          ],
          images: [
            { src: '/piper-madrid-lift.jpeg', alt: 'A mirror selfie with a friend in Madrid', caption: 'Learning to be at ease in a city full of new references.' },
            { src: '/piper-madrid-table.jpeg', alt: 'After-work time with friends in Madrid', caption: 'After work, a table became a place to belong.' },
          ],
        },
      ],
    },
  },
  {
    slug: 'bangers-snacks', company: 'Bangers Snacks', role: 'Business Analyst Intern', year: 'Jan. — Feb. 2025', location: 'San Francisco Bay Area',
    summary: 'Strategy, financial planning, and operations for an emerging consumer brand.',
    about: 'As a Business Analyst Intern, I brought market evidence, financial scenarios, and operational data together to support decisions from early product ideas to retail growth. I worked across competitive research, unit economics, KPI reporting, and supplier outreach to clarify demand, pricing, production, and opportunity.',
    aboutLines: ['As a Business Analyst Intern, I brought market', 'evidence, financial scenarios, and operational data', 'together to support decisions from early product', 'ideas to retail growth, clarifying demand, pricing,', 'production, and opportunity.'],
    aboutTitle: <>Turning data<br/>into decisions.</>, hideResults: true,
    tasks: [
      { title: 'Clarifying the market', bullets: ['Conducted market research across the category to clarify demand, pricing benchmarks, and market gaps.', 'Researched 20+ competitors and completed deep-dive analysis on 7 key players.'], facts: ['20+ competitors', '7 deep-dives'] },
      { title: 'Modeling the opportunity', bullets: ['Built 5+ financial models to assess unit economics and project revenue scenarios.', 'Quantified market opportunities to support data-backed decisions.'], facts: ['5+ models'] },
      { title: 'Running the operating system', bullets: ['Maintained KPI tracking across sales, production, and inventory.', 'Consolidated operational data into recurring dashboards covering 15+ metrics.'], facts: ['15+ metrics'] },
      { title: 'Taking a product to production', bullets: ['Led a new snack product from ideation to early production.', 'Built pitch decks and contacted, sourced, and negotiated with 50+ suppliers and partners.'], facts: ['50+ suppliers'] },
    ],
    tools: [{ type: 'spreadsheet', name: 'Microsoft Excel' }, { type: 'canva', name: 'Canva' }], url: 'https://www.eatbangers.com/', recommendation: {
      name: 'Harry Y.', role: 'Vice President of Operations @ Bangers Snacks', date: 'March 26, 2025', url: 'https://www.linkedin.com/in/shangzhu77/',
      quote: ['I had the pleasure of overseeing Shang during her time as a Business Analyst at Bangers, and she consistently impressed me with her strong communication skills, efficiency, and critical thinking abilities. She has a keen eye for problem-solving and approaches challenges with a strategic mindset.', 'Her ability to analyze complex data and translate it into helpful insights made her a valuable asset to the team. I have no doubt she will excel in any role she takes on in the future.'],
    }
  },
  {
    slug: 'berkeley-haas', company: 'Berkeley Haas', role: 'Research Assistant', year: 'Sept. 2023 — Dec. 2024', location: 'Berkeley, CA',
    summary: 'Research, evaluation, and data infrastructure for better teamwork learning.',
    about: 'As a Research Assistant, I helped build the research and measurement infrastructure behind a multi-year initiative for improving teamwork instruction in engineering courses. I worked across curriculum design, course evaluation, natural-language processing, and prototype testing to make teamwork learning more measurable and useful.',
    aboutLines: ['As a Research Assistant, I helped build research', 'and measurement infrastructure for improving', 'teamwork instruction in engineering courses.', 'I worked across curriculum, evaluation, NLP,', 'and prototype testing to make learning useful.'],
    aboutTitle: <>Making teamwork<br/>visible.</>, hideResults: true,
    tasks: [
      { title: 'Scaling collaboration learning', bullets: ['Supported a multi-year framework used by 3,000+ individuals to improve teamwork instruction in engineering courses.', 'Designed and scaled a training curriculum for team-based environments.'], facts: ['3,000+ participants'] },
      { title: 'Measuring team learning', bullets: ['Calibrated survey instruments and implemented the evaluation process for a graduate-course intervention.', 'Led a workshop and semester-long evaluation assessing how interventions affected 80+ master’s students’ teamwork.'], facts: ['80+ students'] },
      { title: 'Finding patterns in reflection', bullets: ['Engineered an LLM-assisted Python workflow to process 2,600+ student reflections across ~20 survey questions from ~50 courses.', 'Used spaCy for de-identification, then applied topic modeling and clustering with interactive parameter tuning for thematic analysis.'], facts: ['2,600+ responses', '~20 questions', '~50 courses'] },
      { title: 'Sharing and improving the work', bullets: ['Co-authored, published, and presented the team’s methods and findings in an 8-page Frontiers in Education 2024 IEEE conference paper in Washington, D.C.', 'Led user-testing of a reporting tool and synthesized structured interviews to shape the next prototype.'], facts: ['8 pages'] },
    ],
    tools: [{ type: 'python', name: 'Python' }, { type: 'spacy', name: 'spaCy' }, { type: 'spreadsheet', name: 'Microsoft Excel' }, { type: 'google-suite', name: 'Google Suite' }, { type: 'openai', name: 'Open AI' }, { type: 'figma', name: 'Figma' }], recommendation: {
      name: 'Krina Patel', role: 'PhD Student, UC Berkeley School of Engineering', date: 'March 31, 2025', url: 'https://www.linkedin.com/in/shangzhu77/',
      quote: ['I collaborated with Shang through the Teaming by Design research group on a joint workshop and publication. As an undergraduate researcher, Shang impressed me with her exceptional balance of technical skill and interpersonal warmth. Shang brings reliability, clarity, and shared leadership to team settings.', 'She transitions seamlessly between public speaking, workshop facilitation, coding, and writing, approaching each role with professionalism, open-mindedness, flexibility, and confidence. What truly distinguishes Shang is her genuine warmth and humility. Shang is truly a rare colleague who combines technical excellence with a collaborative spirit. She is someone others genuinely enjoy working with. Any research team would be fortunate to have her contributions.'],
    },
    reflection: {
      stories: [
        {
          date: 'Oct. 13–16, 2024',
          title: 'When the work found its voice.',
          compact: true,
          intro: 'I presented and defended our paper as a co-author at the FIE 2024, an IEEE-sponsored conference.',
          paragraphs: [
            'Teamwork is a critical skill, yet it’s often not formally taught either in schools or in the workplace. Our research aims to improve the understanding of how teaming can be learned, by bridging the gap between existing literature on teamwork and student experiences.',
            'We leveraged AI for both quantitative and qualitative analysis of data from over 2,600 students across 50~ courses, spanning 8 years, and I had the privilege of leading the data analysis for this large dataset.',
            'One of our key findings is that while “conflict and conflict resolution” is a major focus in teamwork literature, it’s rarely discussed explicitly by students. Conflict can feel stigmatized, leading people to shy away from addressing it directly, and often no clear guidelines exist on how to navigate disagreements.',
            'It’s been an incredible experience presenting our research and engaging with educators and leaders on a variety of topics, from AI literacy to mental health, within engineering, computing, and STEM education.',
          ],
          images: [
            { src: '/haas-fie-presentation.jpeg', alt: 'Shang presenting at the Frontiers in Education conference', caption: 'Presenting our research at FIE 2024 in Washington, D.C.' },
            { src: '/haas-fie-sign.jpeg', alt: 'Shang at the Frontiers in Education conference', caption: 'A full year of collaborative work, brought into the room.' },
          ],
        },
        {
          title: 'Learning how to research.',
          intro: null,
          images: [],
          midImageAfter: 3,
          midImages: [
            { src: '/haas-krina-workshop.jpeg', alt: 'Shang with mentor Krina Patel', caption: 'With my mentor Krina Patel after co-hosting an in-class workshop for over 80 master’s students.' },
            { src: '/haas-beckman.jpeg', alt: 'Shang with Professor Sara Beckman', caption: 'With Professor Sara Beckman, whose trust, generosity, and guidance changed my trajectory.' },
          ],
          paragraphs: [
            'I still remember that morning when, after an emergent call, I found myself sitting under a tree, quietly crying. I had mistakenly charged our team a significant amount during data analysis, and to make matters worse, my analysis was flawed and needed to be redone. After spending over 20 hours on this, I realized I’d rushed through, missed key details, and failed to communicate when I should have. No one blamed me, which made it even harder. I wrote a heartfelt email to my team, explaining my mistake, offering to cover the costs, and outlining how I’d prevent it in the future. My professor’s response was simple yet powerful: “Water under the bridge; we are all learning.”',
            'I also remember that late night when, overwhelmed by piling tasks, I finally admitted to my mentor, “I’m too tired to power through.” She appreciated my honesty and offered to help redistribute the workload. It hadn’t occurred to me to ask for help; I was determined to prove that I could handle everything on my own. But she reminded me, “We are a team, and we’re here to support each other.”',
            { bold: 'What is research like to me?', text: '' },
            'At first, I sought clear instructions, hoping to follow them step by step, much like completing an assignment. Instead, I kept hearing, “Assess the situation” and “Make your own informed decisions.” I soon realized that my team had given me a remarkable amount of freedom and trust, both empowering and daunting. It often felt like standing at the base of a mountain, unsure of where to take the first step. No one had mapped out the path for me; I had to discover it myself.',
            { bold: 'And what has my team taught me?', text: '' },
            'My team’s constant reminders to “Ask for help” revealed the truth: I wasn’t alone standing before that mountain; there was an entire team supporting me. As I navigated the path on my own, I could regularly check in with those more experienced, asking, “Does this make sense?” “What do you think?” The commitment to “We are a team” is powerful: each person’s direction influences the entire team’s journey.',
            'I’m deeply grateful to my incredible team who have guided me throughout. They’ve shown me that I’m more than just an “assistant” handling simple tasks; I’m a key member of the team making a significant impact. With their experience and expertise leading the way, they’ve consistently reassured me, “You can be a researcher, too.”',
          ],
        },
      ],
    }
  },
  {
    slug: 'lenovo-research', company: 'Lenovo Research', role: 'AI Research Intern', year: 'Jun. — Aug. 2023', location: 'Shanghai, China',
    summary: 'An analysis of AI’s impact on China’s market and Lenovo’s product ecosystem.',
    about: 'As an AI Research Intern, I examined how AI was reshaping China’s market and Lenovo’s global operations, translating internal research and industry signals into strategic direction. I synthesized findings across cloud computing, manufacturing, and consumer electronics to clarify opportunities and vulnerabilities in Lenovo’s product ecosystem.',
    aboutLines: ['As an AI Research Intern, I examined how AI', 'was reshaping China’s market and Lenovo’s', 'global operations, translating research and', 'industry signals into strategic direction across', 'Lenovo’s product ecosystem.'],
    aboutTitle: <>Reading AI’s<br/>next frontier.</>, hideResults: true,
    tasks: [
      { title: 'Reading the market', bullets: ['Researched how AI was reshaping China’s market, with attention to Lenovo’s global operations.', 'Analyzed 50+ internal documents, strategic memos, and industry reports across cloud computing, manufacturing, and consumer electronics.'], facts: ['50+ sources'] },
      { title: 'Assessing the ecosystem', bullets: ['Synthesized opportunities and vulnerabilities in Lenovo’s product ecosystem.', 'Mapped implications across 12 industry verticals spanning cloud computing, manufacturing, consumer electronics, and other contexts.'], facts: ['12 verticals'] },
      { title: 'Turning research into direction', bullets: ['Produced a 20-page analysis outlining strategic opportunities and vulnerabilities.', 'Presented findings and recommendations to 30+ staff and leadership in the Deep Learning Department.'], facts: ['20 pages', '30+ staff'] },
    ],
    tools: [{ type: 'spreadsheet', name: 'Microsoft Excel' }, { type: 'powerpoint', name: 'Microsoft PowerPoint' }, { type: 'openai', name: 'Open AI' }], url: 'https://research.lenovo.com/'
  },
]

const education = [
  { slug: 'stanford-mse', school: 'Stanford University', program: 'M.S. in Management Science and Engineering', date: 'Expected Mar. 2028', summary: 'Graduate study in management science, engineering, and decision-making.', detail: 'Graduate study in management science, engineering, and decision-making.' },
  { slug: 'uc-berkeley', school: 'University of California, Berkeley', program: 'B.A. Applied Mathematics; B.A. Political Economy; Minor in Data Science', date: 'Aug. 2022 — May 2026', summary: 'A cross-disciplinary undergraduate education, graduated Cum Laude.', detail: 'Graduated Cum Laude.' },
  { slug: 'hbs-negotiation', school: 'Harvard Business School Online', program: 'Negotiation Mastery Certificate Program', date: 'Mar. — May 2026', summary: 'A focused program in practical negotiation strategy and leadership.', detail: 'A focused program in practical negotiation strategy and leadership.' },
  { slug: 'skydeck-ace', school: 'Berkeley SkyDeck', program: 'Accelerating Careers in Entrepreneurship (ACE) Program', date: 'Sept. 2025 — Jan. 2026', summary: 'Career development and entrepreneurship program.', detail: 'Career development and entrepreneurship program.' },
  { slug: 'cfa-level-one', school: 'CFA Institute', program: 'Chartered Financial Analyst® (CFA®) Program, Level I Passed', date: 'Aug. 2024', summary: 'Completed the CFA Program Level I examination.', detail: 'Completed the CFA Program Level I examination.' },
  { slug: 'bloomberg-markets', school: 'Bloomberg L.P.', program: 'Bloomberg Market Concepts (BMC) Certification', date: 'Oct. 2024', summary: 'Certification in core finance, markets, and Bloomberg Terminal concepts.', detail: 'Certification in core finance, markets, and Bloomberg Terminal concepts.' },
  { slug: 'peking-business', school: 'Peking University Guanghua School of Management', program: 'Doing Business in China (DBIC) Program', date: 'Jun. — Jul. 2024', summary: 'Summer program focused on business practice in China.', detail: 'Summer program focused on business practice in China.' },
]

const leadership = [
  { slug: 'berkeley-model-un', company: 'UC Berkeley Model United Nations', role: 'Chair', year: 'Mar. 2025', summary: 'Designed and chaired a committee for a three-day annual Model UN conference.', about: 'I designed and chaired a committee for UC Berkeley Model United Nations, shaping a thoughtful and high-energy experience for delegates.', details: ['Designed and chaired a committee for 500+ delegates from 15+ institutions.', 'Guided debate, facilitated discussion, and shaped the delegate experience across the conference.'] },
  { slug: 'asuc-marketing', company: 'Associated Students of the University of California', role: <><br/>Marketing & Design Executive</>, year: 'Jun. 2023 — May 2024', summary: 'Led marketing and design initiatives for UC Berkeley’s largest student organization.', about: 'At ASUC, I led a small team developing campaigns and communications for the campus community.', details: ['Led a five-person team across 12+ marketing initiatives.', 'Reached a 2,000+ audience through campaigns and campus communications.'] },
]

const lifePages = {
  writer: { title: 'Creative Writer', intro: 'Writing is where I slow down, notice more, and make sense of the world in words.' },
  tennis: { title: 'Tennis Player', intro: 'A practice in patience, focus, and enjoying the long game.' },
  fashion: { title: 'Fashion Model', intro: 'A creative space for expression, collaboration, and visual storytelling.' },
  travel: { title: 'Traveler', intro: 'New places have taught me to stay curious, adaptable, and open to different ways of living.' },
}

function Arrow() { return <span className="arrow">↗</span> }

function HandArrow({ direction = 'up' }) {
  if (direction === 'down') return <svg className="hand-arrow hand-arrow-down" viewBox="0 0 48 58" aria-hidden="true"><path d="M20 4c10 7-4 13 3 20 9 8-5 12 5 20"/><path d="m17 40 11 5 8-9"/></svg>
  return <svg className="hand-arrow" viewBox="0 0 52 42" aria-hidden="true"><path d="M5 33c10 2 8-13 18-12 9 1 6-13 17-16"/><path d="m31 5 10 1-3 10"/></svg>
}

function LifeIcon({ type }) {
  if (type === 'writer') return <svg viewBox="0 0 48 48" aria-hidden="true"><path d="m10 37 3-10L31 9a4 4 0 0 1 6 6L19 33l-9 4Z"/><path d="m28 12 8 8M10 41h28"/></svg>
  if (type === 'tennis') return <svg viewBox="0 0 48 48" aria-hidden="true"><circle cx="24" cy="24" r="16"/><path d="M12.7 12.7c7.4 6.8 7.4 15.8 0 22.6M35.3 12.7c-7.4 6.8-7.4 15.8 0 22.6"/></svg>
  if (type === 'fashion') return <svg viewBox="0 0 48 48" aria-hidden="true"><path d="M24 12a4 4 0 1 1 4-4"/><path d="M23.5 12 8 24h32L24.5 12M16 24l2 15h12l2-15"/></svg>
  return <svg viewBox="0 0 48 48" aria-hidden="true"><path d="m34 12-7 15-15 7 7-15 15-7Z"/><path d="m19 19 8 8"/></svg>
}

function ContactIcon({ type }) {
  if (type === 'work') return <svg viewBox="0 0 48 48" aria-hidden="true"><rect x="8" y="15" width="32" height="23" rx="2"/><path d="m9 18 15 11 15-11M16 15v-5h16v5"/></svg>
  if (type === 'personal') return <svg viewBox="0 0 48 48" aria-hidden="true"><rect x="7" y="13" width="34" height="25" rx="2"/><path d="m8 16 16 12 16-12M15 10h18"/></svg>
  if (type === 'phone') return <svg viewBox="0 0 48 48" aria-hidden="true"><rect x="14" y="6" width="20" height="36" rx="4"/><path d="M21 35h6M19 11h10"/></svg>
  return <svg viewBox="0 0 48 48" aria-hidden="true"><path d="M16 8h17a7 7 0 0 1 7 7v18a7 7 0 0 1-7 7H15a7 7 0 0 1-7-7V15a7 7 0 0 1 7-7Z"/><path d="M17 23v9M17 17v1M23 32v-8M23 17v2M29 32V20M29 17v1"/></svg>
}

function ToolIcon({ type }) {
  if (type === 'canva') return <svg className="brand-canva" viewBox="0 0 48 48" aria-label="Canva"><circle className="brand-fill" cx="24" cy="24" r="20"/><text x="12" y="34">C</text></svg>
  if (type === 'google-suite') return <svg className="brand-google" viewBox="0 0 48 48" aria-label="Google Suite"><path className="brand-fill" d="M39 12 33.5 17A12 12 0 1 0 35.5 29H24v-8h19c.3 1 .4 2 .4 3 0 10.8-8.7 19.5-19.5 19.5S4.5 34.8 4.5 24 13.2 4.5 24 4.5c5.9 0 11.1 2.6 15 7.5Z"/><path className="brand-shade" d="M24 21h19c.3 1 .4 2 .4 3 0 10.8-8.7 19.5-19.5 19.5S4.5 34.8 4.5 24h8a11.5 11.5 0 0 0 23 5H24z"/></svg>
  if (type === 'spreadsheet') return <svg className="brand-excel" viewBox="0 0 48 48" aria-label="Microsoft Excel"><path className="brand-fill" d="M18 5h18a4 4 0 0 1 4 4v30a4 4 0 0 1-4 4H18z"/><path className="brand-shade" d="M18 10h22v29H18z"/><path className="brand-fill" d="M7 12h20v24H7a3 3 0 0 1-3-3V15a3 3 0 0 1 3-3Z"/><path className="brand-cutout" d="m11 18 4 6-4 6h4l2-3 2 3h4l-4-6 4-6h-4l-2 3-2-3z"/></svg>
  if (type === 'mixpanel') return <svg viewBox="0 0 48 48" aria-label="Mixpanel"><path d="M8 39V26M18 39V18M28 39V23M38 39V10"/><path d="m8 21 10-8 10 4 10-10"/><path d="M34 7h4v4"/></svg>
  if (type === 'python') return <svg viewBox="0 0 48 48" aria-label="Python"><rect x="6" y="8" width="36" height="29" rx="3"/><path d="M14 18 20 23 14 28M25 29h9"/><path d="M18 42h12"/></svg>
  if (type === 'spacy') return <svg className="brand-spacy" viewBox="0 0 48 48" aria-label="spaCy"><text x="3" y="31">spaCy</text></svg>
  if (type === 'analytics') return <svg viewBox="0 0 48 48" aria-hidden="true"><path d="M9 38V24M19 38V14M29 38V20M39 38V8"/><path d="m10 19 9-7 10 4 9-10"/></svg>
  if (type === 'slides') return <svg className="brand-slides" viewBox="0 0 48 48" aria-label="Google Slides"><path className="brand-fill" d="M13 4h16l8 8v29a3 3 0 0 1-3 3H13a3 3 0 0 1-3-3V7a3 3 0 0 1 3-3Z"/><path className="brand-cutout" d="M29 4v9h8M16 19h15v13H16zM18 22h11M18 26h7"/></svg>
  if (type === 'notion') return <svg className="brand-notion" viewBox="0 0 48 48" aria-label="Notion"><path className="brand-fill" d="m9 10 27-3 4 4v26l-4 4-27-3-3-4V14z"/><path className="brand-cutout" d="m13 14 19-2 4 3v18l-4 2-19-2z"/><path className="brand-fill" d="M17 32V17l12 15V16h3v18h-4L20 23v9z"/></svg>
  if (type === 'openai') return <img className="brand-openai-image" src="/openai-logo-transparent.png" alt="OpenAI" />
  if (type === 'powerpoint') return <svg className="brand-powerpoint" viewBox="0 0 48 48" aria-label="Microsoft PowerPoint"><circle className="brand-shade" cx="29" cy="24" r="17"/><path className="brand-fill" d="M7 13h20a3 3 0 0 1 3 3v16a3 3 0 0 1-3 3H7a3 3 0 0 1-3-3V16a3 3 0 0 1 3-3Z"/><path className="brand-cutout" d="M12 18h7c6 0 6 9 0 9h-3v5h-4zm4 3v3h3c2 0 2-3 0-3z"/></svg>
  if (type === 'figma') return <svg className="brand-figma" viewBox="0 0 48 48" aria-label="Figma"><rect className="brand-fill" x="11" y="6" width="13" height="12" rx="6"/><rect className="brand-shade" x="24" y="6" width="13" height="12" rx="6"/><rect className="brand-fill" x="11" y="18" width="13" height="12" rx="6"/><circle className="brand-shade" cx="30.5" cy="24" r="6.5"/><path className="brand-fill" d="M11 36a6.5 6.5 0 0 0 13 0v-6H11z"/></svg>
  return <svg viewBox="0 0 48 48" aria-hidden="true"><circle cx="17" cy="12" r="5"/><circle cx="17" cy="24" r="5"/><circle cx="17" cy="36" r="5"/><circle cx="29" cy="18" r="5"/><path d="M29 23v13h5"/></svg>
}

function PortfolioRow({ item, index }) {
  const name = item.company || item.school
  const title = item.role || item.program
  const date = item.year || item.date
  const isEducation = Boolean(item.school)
  return <article className={`portfolio-row reveal-on-scroll ${isEducation ? 'education-item' : ''}`} style={{ '--reveal-delay': `${index * 55}ms` }}>
    <a className="portfolio-row-top" href={`#case/${item.slug}`} aria-label={`Open ${name}`}>
      <span className="row-number">{String(index + 1).padStart(2, '0')}</span>
      <span className="row-main">{isEducation ? <><b>{name}</b><span className="education-title">{title}</span></> : <><b>{name}</b><i>/</i> {title}</>}</span>
      <span className="row-date">{date}</span>
      <span className="row-link"><Arrow /></span>
    </a>
    {!isEducation && <div className="row-detail"><p>{item.summary}</p></div>}
  </article>
}

function CasePage({ item }) {
  const [navCompact, setNavCompact] = useState(false)
  const name = item.company || item.school
  const title = item.role || item.program
  const date = item.year || item.date
  const details = item.details || [item.detail]
  const about = item.about || item.detail
  useEffect(() => {
    const onScroll = () => setNavCompact(window.scrollY > 80)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])
  return <main className="case-page">
    <header className={`case-nav ${navCompact ? 'nav-compact' : ''}`}><a href="#home" className="logo">Shang</a><a href="#home" className="case-home">Back to Home</a><a href="mailto:shangzhu@stanford.edu" className="contact-pill">Contact Me</a></header>
    <section className="case-hero"><div><p className="hand-label"># Details</p><h1>{name}</h1><p>{item.location ? <>{date} <span>/</span> {item.location}</> : <>{title} <span>/</span> {date}</>}</p></div>{item.tools ? <div className="case-visual case-tools"><p>The Tools I Used</p><div className="tool-stack">{item.tools.map(tool => <div className="tool-item" key={tool.name}><span className="tool-icon"><ToolIcon type={tool.type}/></span><span className="tool-reveal"><HandArrow direction="down"/><b>{tool.name}</b></span></div>)}</div></div> : item.visual === 'market-map' ? <div className="case-visual market-map"><span>MARKET INTELLIGENCE</span><b>Signal<br/>Map</b><div className="market-nodes"><i/><i/><i/><i/><i/></div><small>Abstracted from confidential project work.</small></div> : <div className="case-visual"><span>PROJECT VISUAL</span><b>{name}</b><small>Images and work samples will live here.</small></div>}</section>
    {item.results && !item.hideResults && <section className="result-grid">{item.results.map(([number, label], index) => <div key={label}><span>Result 0{index + 1}</span><b>{number}</b><p>{label}</p></div>)}</section>}
    <section className={`case-about ${item.tasks ? 'case-about-simple' : ''}`}><div><p className="hand-label"># About</p><h2>{item.aboutTitle || <>The work,<br/><i>in context.</i></>}</h2></div><div><p className="case-lead">{item.aboutLines ? item.aboutLines.map((line, index) => <span key={line}>{line}{index < item.aboutLines.length - 1 && <br/>}</span>) : about}</p>{!item.tasks && <ul>{details.map(detail => <li key={detail}>{detail}</li>)}</ul>}{item.url && <a href={item.url} target="_blank" rel="noreferrer">Visit company website <Arrow /></a>}</div></section>
    {item.tasks && <section className="case-tasks"><p className="hand-label"># The work</p>{item.tasks.map((task, index) => <article className="reveal-on-scroll" style={{ '--reveal-delay': `${index * 120}ms` }} key={task.title}><div><p className="task-label">0{index + 1} / {task.title}</p>{task.bullets ? <ul className="task-copy task-bullets">{task.bullets.map(point => <li key={point}>{point}</li>)}</ul> : <p className="task-copy">{task.text}</p>}</div><div className="task-facts">{task.facts.map(fact => <span key={fact}>{fact}</span>)}</div></article>)}</section>}
    {item.recommendation && <section className="case-recommendation"><p className="hand-label"># Recommendation</p><article className="recommendation-card">{item.recommendation.pending ? <div className="recommendation-pending"><span className="quote-mark">“</span><p>{item.recommendation.message}</p></div> : <><span className="quote-mark">“</span><div className="recommendation-quote">{item.recommendation.quote.map(paragraph => <p key={paragraph}>{paragraph}</p>)}</div><div className="recommendation-author"><div><span>A note from</span><h3>{item.recommendation.name}</h3><p>{item.recommendation.role}</p></div><small>{item.recommendation.date}</small></div><a className="recommendation-link" href={item.recommendation.url} target="_blank" rel="noreferrer">Open LinkedIn to read more <Arrow /></a></>}</article></section>}
    {item.reflection ? item.reflection.pending ? <section className="case-reflection reflection-pending"><p className="hand-label"># Reflection</p><h2>Research notes<br/>and <i>reflections.</i></h2><p>A longer reflection on this work will live here.</p></section> : <section className="case-reflection"><p className="hand-label"># Reflection</p><div className="reflection-stories">{item.reflection.stories.map((story, index) => <article className={`reflection-story story-${index + 1} ${story.compact ? 'compact' : ''} ${!story.images?.length ? 'no-photo-column' : ''} reveal-on-scroll`} style={{ '--reveal-delay': `${index * 90}ms` }} key={story.title || `story-${index}`}>{story.images?.length ? <div className="story-photo-column">{story.images.map((image, imageIndex) => <figure className="story-image reflection-image reveal-on-scroll" style={{ '--reveal-delay': `${220 + imageIndex * 190}ms` }} key={image.src}><img src={image.src} alt={image.alt}/><figcaption>{image.caption}</figcaption></figure>)}</div> : null}<div className="story-copy-block">{story.date && <p className="story-date">{story.date}</p>}{story.title && <h2>{story.title}</h2>}{story.intro && <p className="story-intro">{story.intro}</p>}{story.paragraphs.map((paragraph, paragraphIndex) => <Fragment key={typeof paragraph === 'string' ? paragraph : paragraph.bold}><p>{typeof paragraph === 'string' ? paragraph : <><strong>{paragraph.bold}</strong>{paragraph.text}</>}</p>{story.midImages && paragraphIndex === story.midImageAfter && <div className="story-mid-images">{story.midImages.map((image, imageIndex) => <figure className="story-image reflection-image reveal-on-scroll" style={{ '--reveal-delay': `${220 + imageIndex * 190}ms` }} key={image.src}><img src={image.src} alt={image.alt}/><figcaption>{image.caption}</figcaption></figure>)}</div>}</Fragment>)}</div></article>)}</div></section> : !item.tasks ? <section className="case-placeholder"><p className="hand-label"># More to come</p><h2>Artifacts, images,<br/>and <i>impact.</i></h2><p>This page is ready for project materials, process notes, and a deeper impact story.</p></section> : null}
    <footer><span>© 2026 SHANG ZHU</span><a href="#home">Back to home</a><a href="mailto:shangzhu@stanford.edu">shangzhu@stanford.edu</a></footer>
  </main>
}

function LifePage({ page }) {
  return <main className="life-page"><header className="case-nav"><a href="#home" className="logo">Shang</a><a href="#about" className="back-link">← Back To About</a><a href="#contact" className="contact-pill">Contact Me</a></header><section className="life-hero"><p className="hand-label"># Beyond work</p><h1>{page.title}</h1><p>{page.intro}</p></section><section className="life-gallery"><div>Photos & Stories<br/>Coming Soon</div><div>Photos & Stories<br/>Coming Soon</div><div>Photos & Stories<br/>Coming Soon</div></section><footer><span>© 2026 SHANG ZHU</span><a href="#about">Back To About</a><a href="mailto:shangzhu@stanford.edu">shangzhu@stanford.edu</a></footer></main>
}

function App() {
  const [showSummary, setShowSummary] = useState(false)
  const [route, setRoute] = useState(window.location.hash)
  const [copiedEmail, setCopiedEmail] = useState('')
  const [navCompact, setNavCompact] = useState(false)
  const [nameRevealKey, setNameRevealKey] = useState(0)
  useEffect(() => { const onHashChange = () => setRoute(window.location.hash); window.addEventListener('hashchange', onHashChange); return () => window.removeEventListener('hashchange', onHashChange) }, [])
  useEffect(() => { const onScroll = () => setNavCompact(window.scrollY > 80); onScroll(); window.addEventListener('scroll', onScroll, { passive: true }); return () => window.removeEventListener('scroll', onScroll) }, [])
  useEffect(() => { const observer = new IntersectionObserver((entries) => entries.forEach(entry => { if (entry.isIntersecting) { entry.target.classList.add('is-visible'); observer.unobserve(entry.target) } }), { threshold: .12 }); document.querySelectorAll('.reveal-on-scroll').forEach(element => observer.observe(element)); return () => observer.disconnect() }, [route])
  const copyEmail = async (email) => { await navigator.clipboard?.writeText(email); setCopiedEmail(email); window.setTimeout(() => setCopiedEmail(''), 1600) }
  const togglePortrait = () => { if (showSummary) setNameRevealKey(key => key + 1); setShowSummary(!showSummary) }
  const caseSlug = route.startsWith('#case/') ? route.replace('#case/', '') : null
  const caseItem = [...experiences, ...education, ...leadership].find(item => item.slug === caseSlug)
  const lifeSlug = route.startsWith('#life/') ? route.replace('#life/', '') : null
  if (caseItem) return <CasePage item={caseItem} />
  if (lifeSlug && lifePages[lifeSlug]) return <LifePage page={lifePages[lifeSlug]} />
  return <main>
    <nav className={`site-nav ${navCompact ? 'nav-compact' : ''}`}><a href="#home" className="logo">Shang</a><div className="landing-links"><a href="#about">About</a><a href="#experience">Experience</a><a href="#education">Education</a><a href="#leadership">Extracurricular</a></div><a href="#contact" className="contact-pill">Contact Me</a></nav>
    <section className="landing" id="home">
      <div className="name-backdrop" aria-hidden="true">Shang Zhu</div>
      <div className="hero-center"><div className="portrait-stage"><div className="quiet-summary"><span>Research & strategy</span><span>Market intelligence</span><span>Data analysis & storytelling</span><span>Python · R · SQL · Excel</span></div><p className="hand-note note-click">click me <HandArrow direction="down"/></p><div className={`portrait-card ${showSummary ? 'show-summary' : ''}`} onClick={togglePortrait} onKeyDown={(event) => { if (event.key === 'Enter') togglePortrait() }} role="button" tabIndex="0" aria-label="Show Shang's quick profile"><span className="portrait-face"><img src="/hero-headshot.jpg" alt="Shang Zhu"/></span><span key={nameRevealKey} className="portrait-name">{'Shang'.split('').map((letter, index) => <span key={letter} style={{ '--letter-delay': `${index * 120}ms` }}>{letter}</span>)}</span><span className="summary-card"><b>Who I Am</b><small className="who-lines">MS&E @ Stanford<br/>Applied Math & Political Economy @ UC Berkeley</small><b className="bring-title">What I Bring</b><small>Research & Strategy<br/>Market Intelligence<br/>Data Analysis & Storytelling<br/>Python · R · SQL · Excel</small><a href="#contact" onClick={(event) => event.stopPropagation()}>Contact Me</a></span></div></div></div>
    </section>

    <section className="about reveal-on-scroll" id="about"><div><p className="hand-label"># A little about me</p><h1>I make<br/>complex things<br/><i>clear.</i></h1></div><div className="about-copy"><p>I’m an interdisciplinary researcher and strategist, originally from Shanghai and now based in the Bay Area. I translate between numbers and words, research and markets, and people across disciplines and places.</p><p>My work pairs rigorous analysis with human context to address complex social challenges and help create opportunities for people who have not had the ones I have.</p><div className="outside-work"><p>Outside My Work</p><div>{[['writer', 'Writer'], ['tennis', 'Tennis Player'], ['fashion', 'Fashion Model'], ['travel', 'Traveler']].map(([type, label]) => <a href={`#life/${type}`} key={type} aria-label={label}><LifeIcon type={type}/><span className="life-label"><HandArrow /><b>{label}</b></span></a>)}</div></div></div></section>

    <section className="list-section work" id="experience"><p className="hand-label"># Selected experience</p><div className="section-intro reveal-on-scroll"><div><h2>What I’ve <i>worked on.</i></h2><p>With a global perspective across the U.S., China, and Europe.</p></div></div><div className="expand-list">{experiences.map((item, index) => <PortfolioRow item={item} index={index} key={item.slug} />)}</div></section>

    <section className="list-section education" id="education"><p className="hand-label"># Education</p><div className="section-intro reveal-on-scroll"><div><h2>Where I’ve <i>learned.</i></h2><p>An interdisciplinary foundation spanning math, policy, business, and engineering.</p></div></div><div className="expand-list">{education.map((item, index) => <PortfolioRow item={item} index={index} key={item.slug} />)}</div></section>

    <section className="list-section leadership" id="leadership"><p className="hand-label"># Leadership</p><div className="section-intro reveal-on-scroll"><div><h2>How I’ve <i>led.</i></h2><p>Building communities, ideas, and momentum beyond the classroom.</p></div></div><div className="expand-list">{leadership.map((item, index) => <PortfolioRow item={item} index={index} key={item.slug} />)}</div></section>

    <section className="contact-section" id="contact"><div><p className="hand-label"># Hire me</p><h2>Let’s get in touch.</h2><p>Open to conversations, questions, and new ideas!</p></div><div className="contact-details"><div><small>Work Email</small><p>shangzhu@stanford.edu <button onClick={() => copyEmail('shangzhu@stanford.edu')}>{copiedEmail === 'shangzhu@stanford.edu' ? 'Copied!' : 'Copy'}</button></p></div><div><small>Personal Email</small><p>shang.zhu.77@gmail.com <button onClick={() => copyEmail('shang.zhu.77@gmail.com')}>{copiedEmail === 'shang.zhu.77@gmail.com' ? 'Copied!' : 'Copy'}</button></p></div><a href="https://www.linkedin.com/in/shangzhu77/" target="_blank" rel="noreferrer">LinkedIn <Arrow /></a></div></section>
    <footer><span>© 2026 SHANG ZHU</span><a href="#home">Back To Top</a><a href="mailto:shangzhu@stanford.edu">shangzhu@stanford.edu</a></footer>
  </main>
}

createRoot(document.getElementById('root')).render(<StrictMode><App /></StrictMode>)
