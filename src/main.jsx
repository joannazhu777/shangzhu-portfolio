import { Fragment, StrictMode, useEffect, useRef, useState } from 'react'
import { createRoot } from 'react-dom/client'
import './styles.css'
import './fashion-cover.css'

const experiences = [
  {
    slug: 'bright-saver', company: 'Bright Saver', role: 'Research Analyst', year: 'Mar. 2025 — Mar. 2026', location: 'San Francisco Bay Area',
    brandLogo: '/bright-saver-logo.png', brandAccent: '#dfae23', brandInk: '#18283e', brandSurface: '#fff7dd', brandAccentInk: '#18283e',
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
    brandLogo: '/piper-logo.png', brandAccent: '#55c98e', brandInk: '#062b3c', brandSurface: '#e9f8f1', brandAccentInk: '#062b3c',
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
            { src: '/piper-madrid-gathering.jpg', alt: 'A gathering with friends in Madrid', caption: 'A small moment between the work and everything beyond it.', portrait: true },
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
            { src: '/piper-madrid-lift.jpeg', alt: 'A mirror selfie with a friend in Madrid', caption: 'Learning to be at ease in a city full of new references.', portrait: true },
            { src: '/piper-madrid-table.jpeg', alt: 'After-work time with friends in Madrid', caption: 'After work, a table became a place to belong.' },
          ],
        },
      ],
    },
  },
  {
    slug: 'bangers-snacks', company: 'Bangers Snacks', role: 'Business Analyst Intern', year: 'Jan. — Feb. 2025', location: 'San Francisco Bay Area',
    brandLogo: '/bangers-logo-cutout.png', brandAccent: '#ff9600', brandInk: '#191919', brandSurface: '#fff1dc', brandAccentInk: '#191919', brandLogoClass: 'brand-logo-bangers',
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
    brandLogo: '/berkeley-haas-logo-cutout.png', brandAccent: '#fdb515', brandInk: '#172e52', brandSurface: '#eef3fa', brandAccentInk: '#172e52', brandLogoClass: 'brand-logo-haas',
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
            { src: '/haas-fie-sign.jpeg', alt: 'Shang at the Frontiers in Education conference', caption: 'A full year of collaborative work, brought into the room.', portrait: true },
          ],
        },
        {
          title: 'Learning how to research.',
          wide: true,
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
    brandLogo: '/lenovo-logo.png', brandAccent: '#e2231a', brandInk: '#171717', brandSurface: '#fff1ef', brandAccentInk: '#fff', brandLogoClass: 'brand-logo-lenovo',
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
  {
    slug: 'stanford-mse', school: 'Stanford University', heroTitle: 'Stanford University', degreeTitle: 'M.S. in Management Science & Engineering', program: 'M.S. in Management Science and Engineering', date: 'Expected Mar. 2028', credential: 'Degree · In progress', academicProfile: true, institutionLogo: '/stanford-logo.png', institutionAccent: '#8c1515',
    academicDetails: [{ label: 'Timeline', value: 'Expected Mar. 2028' }, { label: 'College', value: 'School of Engineering' }, { label: 'Track', value: '/' }],
    summary: 'The MS prepares engineers to address the critical technical and managerial needs of complex public and private organizations. Combining quantitative analysis with the behavioral challenges of leadership, it develops stronger decision-making, strategy execution, innovation, and entrepreneurial thinking.', detail: 'Graduate study in management science, engineering, and decision-making.', skills: ['Decision Analysis', 'Optimization', 'Operations', 'Data & AI', 'Management Science'], skillsPlaceholder: true, url: 'https://msande.stanford.edu/academics-admissions/graduate/ms-program', websiteLabel: 'Visit program website', hideReflection: true,
  },
  {
    slug: 'uc-berkeley', school: 'University of California, Berkeley', heroTitle: 'UC Berkeley', degreeTitle: 'B.A. Applied Mathematics & Political Economy', degreeLines: ['B.A. in Applied Mathematics;', 'B.A. in Political Economy;', 'Minor in Data Science'], program: 'B.A. Applied Mathematics; B.A. Political Economy; Minor in Data Science', date: 'Aug. 2022 — May 2026', credential: 'Diploma', academicProfile: true, institutionLogo: '/berkeley-logo.png', institutionAccent: '#003262',
    academicDetails: [{ label: 'Timeline', value: 'Aug. 2022 — May 2026' }, { label: 'College', value: 'College of Letters & Science' }, { label: 'Distinction', value: 'Cum Laude' }],
    summary: 'A cross-disciplinary undergraduate education spanning mathematical reasoning, political economy, and data science. Graduated Cum Laude.', detail: 'Graduated Cum Laude.', skills: ['Applied Mathematics', 'Political Economy', 'Data Science', 'Quantitative Research', 'Statistical Modeling'], url: 'https://www.berkeley.edu/', websiteLabel: 'Visit institution website',
    academicPortfolio: {
      eyebrow: 'Three distinct but connected fields',
      title: 'Math, markets, and the systems around them.',
      intro: 'Two majors and a minor gave me three ways to approach the same question: how can rigorous evidence help us understand complex systems and make better decisions?',
      chapters: [
        {
          type: 'Major · B.A.', title: 'Applied Mathematics', subtitle: 'Data Science Cluster',
          summary: 'A proof-based mathematical foundation shaped around computation, modeling, and real-world decision problems.',
          about: 'Applied Mathematics pairs rigorous mathematical foundations with a customizable cluster in another field. I chose Data Science, connecting abstract reasoning with numerical methods, optimization, and computational models for problems across research, technology, and industry.',
          skills: ['Proof & abstraction', 'Numerical methods', 'Optimization', 'Mathematical modeling'],
          tools: ['Python', 'R', 'NumPy', 'pandas'],
          url: 'https://guide.berkeley.edu/undergraduate/degree-programs/applied-mathematics/',
          courseGroups: [
            { label: 'Mathematical foundations', courses: [
              { code: 'MATH 53', title: 'Multivariable Calculus', note: 'Calculus of several variables, vector fields, and multidimensional change.' },
              { code: 'MATH 54', title: 'Linear Algebra & Differential Equations', note: 'Matrix methods, linear systems, eigenvalues, and differential equations.' },
              { code: 'MATH 55', title: 'Discrete Mathematics', note: 'Logic, proofs, combinatorics, graphs, and discrete structures.' },
            ] },
            { label: 'Structure & proof', courses: [
              { code: 'MATH 110', title: 'Abstract Linear Algebra', note: 'Vector spaces, transformations, eigenvectors, factorizations, and quadratic forms.' },
              { code: 'MATH 104', title: 'Introduction to Analysis', note: 'Proof-based foundations for limits, continuity, differentiation, and integration.' },
              { code: 'MATH 113', title: 'Abstract Algebra', note: 'Algebraic structures and rigorous reasoning through groups, rings, and fields.' },
              { code: 'MATH 185', title: 'Complex Analysis', note: 'Analytic functions and complex-variable methods for mathematical problem solving.' },
            ] },
            { label: 'Applied & computational methods', courses: [
              { code: 'MATH 128A', title: 'Numerical Analysis', note: 'Computational approximation, interpolation, integration, and differential equations.' },
              { code: 'MATH 170', title: 'Mathematical Methods for Optimization', note: 'Linear, integer, nonlinear, and convex approaches to constrained decisions.' },
              { code: 'STAT 133', title: 'Concepts in Computing with Data', note: 'R, databases, visualization, statistical learning, and model validation.' },
            ] },
          ],
        },
        {
          type: 'Major · B.A.', title: 'Political Economy', subtitle: 'The Political Economy of the Environment',
          summary: 'A multidisciplinary study of how economic systems are embedded in politics, institutions, history, and society.',
          about: 'Political Economy examines the relationship among government, society, and the economy through both scientific and normative lenses. My concentration in The Political Economy of the Environment focused that perspective on climate governance, resource distribution, development, inequality, and the political institutions that shape environmental action.',
          skills: ['Institutional analysis', 'Micro & macroeconomics', 'Policy evaluation', 'Global systems'],
          tools: ['Economic models', 'Comparative case studies', 'Policy research', 'Literature synthesis'],
          url: 'https://guide.berkeley.edu/undergraduate/degree-programs/political-economy/',
          courseGroups: [
            { label: 'History, theory & economic foundations', courses: [
              { code: 'GLOBAL 45', title: 'Survey of World History', note: 'Historical foundations for understanding global institutions and economic change.' },
              { code: 'POLECON 100', title: 'Classical Theories of Political Economy', note: 'Foundational ideas about markets, states, labor, power, and social order.' },
              { code: 'POLECON 101', title: 'Contemporary Theories of Political Economy', note: 'Modern frameworks for interpreting institutions and economic change.' },
              { code: 'POLECON 106', title: 'Intermediate Microeconomic Theory', note: 'Incentives, consumer and firm behavior, equilibrium, and market structure.' },
              { code: 'POLECON 107', title: 'Intermediate Macroeconomic Theory', note: 'Growth, inflation, employment, and economy-wide policy dynamics.' },
            ] },
            { label: 'Environment, development & globalization', courses: [
              { code: 'ESPM W169', title: 'International Environmental Politics', note: 'International institutions, cooperation, and conflict around environmental problems.' },
              { code: 'GEOG 138', title: 'Global Environmental Politics', note: 'How power, place, markets, and governance shape environmental outcomes.' },
              { code: 'SOCIOL 127', title: 'Development and Globalization', note: 'Social change, global integration, development strategies, and inequality.' },
              { code: 'GPP 115', title: 'Global Poverty', note: 'Evidence and policy approaches for understanding and reducing global poverty.' },
            ] },
            { label: 'Policy in practice', courses: [
              { code: 'ECON 134', title: 'Macroeconomic Policy', note: 'How historical evidence and economic ideas shape modern policy choices.' },
            ] },
          ],
        },
        {
          type: 'Minor', title: 'Data Science', subtitle: 'Methods, computation & inference',
          summary: 'Practical training in the full data lifecycle, paired with critical thinking about models and their implications.',
          about: 'The Data Science minor builds practical fluency in statistics, probability, and computation while emphasizing critical thinking about how data and models are constructed. It prepared me to design rigorous analyses, move from messy information to defensible insight, and communicate results in context.',
          skills: ['Data wrangling', 'Statistical inference', 'Machine learning', 'Data communication'],
          tools: ['Python', 'pandas', 'NumPy', 'R', 'SQL', 'Jupyter'],
          url: 'https://guide.berkeley.edu/undergraduate/degree-programs/data-science/',
          courseGroups: [
            { label: 'Foundations & programming', courses: [
              { code: 'DATA C8', title: 'Foundations of Data Science', note: 'Computation, inference, prediction, and responsible reasoning with data.' },
              { code: 'DATA C88C', title: 'Computational Structures in Data Science', note: 'Algorithms, abstraction, program design, and managing computational complexity.' },
            ] },
            { label: 'Analysis, modeling & application', courses: [
              { code: 'DATA C100', title: 'Principles & Techniques of Data Science', note: 'The data lifecycle from cleaning and visualization to inference and prediction.' },
              { code: 'ENERES 131', title: 'Data, Environment and Society', note: 'Data-driven modeling for energy, resources, and environmental decisions.' },
            ] },
            { label: 'Digital humanities', courses: [
              { code: 'DIGHUM 150A', title: 'Archival Digital Humanities', note: 'Computational approaches to archives, collections, and cultural evidence.' },
              { code: 'DIGHUM 100', title: 'Theory and Method', note: 'Critical frameworks and research methods for digital humanities projects.' },
            ] },
          ],
        },
      ],
    },
    reflection: {
      stories: [{
        title: 'What Berkeley taught me beyond the classroom.',
        intro: 'At Cal, I received an interdisciplinary education, producing highly technical math proofs and code on the one hand, and engaging with intensive English reading and writing on the other.',
        paragraphs: [
          { text: 'After commencement, I was invited to a dinner where a small group of students, faculty, and alumni gathered for roundtable conversations. The first question I was asked was: ', quote: 'What did I learn at Berkeley outside the classroom?' },
          'Too many lessons to list in one reflection, so I will share the three that first came to mind.',
          { bold: 'First, being adaptable and resilient.', text: ' In the summer of 2022, I came to the United States alone, with no family or friends—just a place that worked completely differently from the one I had known. I built a new life from the ground up. I discovered that I can adapt, rebuild, and thrive in unfamiliar environments. Berkeley taught me to meet the unknown with curiosity and excitement, not fear.' },
          'Berkeley was very difficult at times. I cried at my desk, doubted myself, and pushed my body and mind beyond what was healthy. It forced me to confront the limits of endurance and to navigate the discipline of balance. I do not know what comes next, but I know I can meet it.',
          { bold: 'Second, standing up for myself.', text: ' Berkeley offers extraordinary resources, but they do not come delivered to my door. I have had to seek them out, advocate for myself, and fight for what I desire in every way I can. At the same time, I have learned to put my real self out there: unfiltered, without trying to perform or stressing over how I appear.' },
          'In that process, I have realized the importance of building relationships and cultivating a network. I am becoming a more active listener as well as a more resourceful, approachable presence.',
          { bold: 'Third, a clearer view of the world.', text: ' At the dinner, we spoke about Berkeley’s “scrappiness”: an unadorned, grounded sincerity, humble in style but powerful in substance. The culture showed me a more honest world—less sheltered and less skewed.' },
          'Because of Berkeley’s sheer scale and diversity, I met many people with distinct backgrounds, widely varied experiences, mindsets, and ambitions. Here, I learned to listen to, respect, and appreciate each perspective. I came closer to understanding what it means to be open and inclusive.',
          'Berkeley is, and will always be, a part of me.',
        ],
        images: [
          { src: '/berkeley-yearbook.jpeg', alt: 'Shang Zhu in UC Berkeley commencement regalia for her yearbook portrait', caption: 'My UC Berkeley yearbook portrait, Class of 2026.', portrait: true },
          { src: '/berkeley-commencement-stage.mp4', alt: 'Shang Zhu walking down the stage during her UC Berkeley commencement ceremony', caption: 'Walking down the stage at UC Berkeley commencement, wearing a Chinese qipao beneath my graduation gown.', portrait: true, video: true },
        ],
      }],
    },
  },
  {
    slug: 'hbs-negotiation', school: 'Harvard Business School Online', heroTitle: 'Negotiation Mastery', program: 'Negotiation Mastery Certificate Program', date: 'Mar. — May 2026', credential: 'Certificate', credentialImage: '/hbs-negotiation-certificate.jpg', institutionAccent: '#a41034',
    summary: 'Negotiation Mastery develops practical strategies for preparing under uncertainty, creating value, resolving conflict, and identifying walkaway points. Interactive simulations and personalized feedback help participants adapt in real time and strengthen their negotiation approach.',
    detail: 'A focused program in practical negotiation strategy and leadership.',
    skills: ['Strategic Preparation', 'Value Creation', 'Conflict Resolution', 'Adaptive Negotiation', 'Emotional Intelligence'],
    url: 'https://pll.harvard.edu/course/negotiation-mastery', websiteLabel: 'Visit program website',
    reflection: {
      stories: [{
        title: 'Turning tension into value.',
        magazine: true,
        paragraphs: [
          'I think the skill of negotiation is holding tension without breaking it, and mastering that balance is what turns tension into value.',
          { bold: 'I realized negotiation is not a fight.', text: ' I used to think negotiation was mostly about competing. But I learned that the best negotiators do both at once: they create value together while also claiming value for themselves. That balance takes greater creativity and empathy. Sometimes, the smartest move is to give in on what matters less to me so I can create something much better for both sides. Importantly, how the pie is expanded directly affects how it is divided.' },
          { bold: 'In addition, clear goals are critical.', text: ' A strong negotiator needs to know what they want. That means preparing well: analyzing and knowing my target, my ceiling, my walkaway point, and each side’s BATNA. Clear goals sharpen both my tactical decisions and my confidence. They also help me adapt as the negotiation evolves, whether that means reassessing the ZOPA as new information emerges. Goals may shift, but aiming for clarity keeps the process strategic and grounded.' },
          { bold: 'And finally, emotions matter more than I expected.', text: ' The outcome often depends on who is across the table, making it key to read the person and build trust. I learned to ask stronger open-ended questions, encourage the other side to share their priorities, and talk with people, not at them. I also learned that managing my own emotions matters just as much because they shape the interaction. I now actively identify my underlying concerns and anxieties and use rescue routines when I feel off balance.' },
        ],
      }],
    },
  },
  {
    slug: 'skydeck-ace', school: 'Berkeley SkyDeck', heroTitle: 'ACE Intern', program: 'Accelerating Careers in Entrepreneurship (ACE) Program', date: 'Sept. 2025 — Jan. 2026', credential: 'Program certificate', credentialImage: '/skydeck-ace-certificate.png', credentialLandscape: true, institutionAccent: '#003262',
    summary: 'Berkeley SkyDeck’s Accelerating Careers in Entrepreneurship (ACE) Program brings UC Berkeley students together for ten workshops, office hours, and a founder expo. Through conversations with founders, venture capitalists, and Berkeley’s entrepreneurship community, students explore storytelling, branding, fundraising, and the realities of startup life.',
    detail: 'A semester-long entrepreneurship certificate track for UC Berkeley students.',
    skills: ['Entrepreneurial Storytelling', 'Marketing & Branding', 'Venture Capital', 'Fundraising Strategy', 'Founder Engagement'],
    url: 'https://skydeck.berkeley.edu/ace/', websiteLabel: 'Visit program website', hideReflection: true,
  },
  {
    slug: 'cfa-level-one', school: 'CFA Institute', heroTitle: 'CFA Level I', program: 'Chartered Financial Analyst® (CFA®) Program, Level I Passed', date: 'Aug. 2024', credential: 'Exam credential', credentialImage: '/cfa-level-one-credential.png', institutionAccent: '#315efb',
    summary: 'The CFA Program Level I curriculum builds a broad investment foundation across ethics, quantitative methods, economics, financial statement analysis, asset valuation, and portfolio management. Through the Practical Skills Module (PSM), I developed financial modeling skills by building a three-statement model that connects business drivers, forecasts, and financial performance to support scenario analysis and decision-making.',
    detail: 'Passed the CFA Program Level I examination.',
    skills: ['Investment Foundations', 'Financial Modeling', 'Financial Statement Analysis', 'Asset Valuation', 'Portfolio Management'],
    url: 'https://www.cfainstitute.org/programs/cfa-program/candidate-resources/level-i-exam', websiteLabel: 'Visit program website', hideReflection: true,
  },
  {
    slug: 'bloomberg-markets', school: 'Bloomberg L.P.', heroTitle: 'BMC', program: 'Bloomberg Market Concepts (BMC) Certification', date: 'Oct. 2024', credential: 'Certificate', credentialImage: '/bloomberg-market-concepts-certificate.png', credentialLandscape: true, institutionAccent: '#f5a623', accentInk: '#171717',
    summary: 'Bloomberg Market Concepts (BMC) is a self-paced, interactive course that introduces financial markets through the Bloomberg Terminal. Its eight sections cover economic indicators, currencies, fixed income, equities, commodities, stock options, portfolio management, and Terminal navigation.',
    detail: 'Completed Bloomberg Market Concepts certification.',
    skills: ['Economic Indicators', 'Fixed Income Valuation', 'Currency Markets', 'Terminal Navigation', 'Portfolio Analysis'],
    url: 'https://professional.bloomberg.com/products/bloomberg-terminal/education/certificate-courses/', websiteLabel: 'Visit program website', hideReflection: true,
  },
  {
    slug: 'peking-business', school: 'Peking University · Guanghua School of Management', institutionTitle: 'Peking University', heroTitle: 'Peking University', degreeTitle: 'Doing Business in China (DBIC)', program: 'Doing Business in China (DBIC) Program', date: 'Jun. — Jul. 2024', credential: 'Summer program', academicProfile: true, institutionLogo: '/pku-university-logo.png', institutionAccent: '#8f1d22',
    academicDetails: [{ label: 'Timeline', value: 'Jun. — Jul. 2024' }, { label: 'College', value: 'Guanghua School of Management' }, { label: 'Grade', value: '97%' }],
    summary: 'Guanghua’s Doing Business in China program combines online preparation, focused modules, company visits, and cultural activities to explore China’s business landscape. By connecting classroom knowledge with real business practice, it equips students to understand how organizations operate and compete in China.', detail: 'Summer program focused on business practice in China.', skills: ['China Business', 'Market Strategy', 'Cross-cultural Management', 'Economic Policy', 'Global Business'], url: 'https://dbic.gsm.pku.edu.cn/', websiteLabel: 'Visit program website',
    reflection: {
      stories: [{
        title: 'Where analysis met belonging.',
        wide: true,
        intro: 'At DBIC, I engaged with leading experts across the country, delving into economic management, political dynamics, and cultural narratives unique to China. This experience reshaped my understanding of the international economy and cultural relationships.',
        paragraphs: [
          { bold: 'Two courses resonated with my background in applied math and data science.', text: ' In Prof. Wang Hansheng’s class, we explored how “uncertainty” creates business opportunities and used linear and logistic regression to analyze and optimize business operations. In Prof. Weng Xi’s course, we learned how federated learning addresses data isolation concerns and the legal and logistical implications for business.' },
          { bold: 'Equally important were the friendships and professional relationships formed here that span continents.', text: ' I met and bonded with teammates studying around the world, including Hong Kong, the UK, Australia, and Canada. Together, we used data to promote corporate innovation in the project defense.' },
          'This experience was more than educational. It reconnected me with my heritage and opened my eyes to diverse global perspectives.',
        ],
        midImageAfter: 0,
        midImages: [
          { src: '/pku-guanghua.jpeg', alt: 'Shang wearing a red Peking University shirt at Guanghua School of Management', caption: 'At Guanghua School of Management during DBIC.' },
          { src: '/pku-project-defense.jpeg', alt: 'Shang presenting during the DBIC project defense', caption: 'Presenting our data-driven corporate innovation project at the final defense.' },
        ],
      }],
    },
  },
]

const capabilityDescriptions = {
  'Decision Analysis': 'Structure uncertain choices and compare tradeoffs with evidence.',
  Optimization: 'Find the strongest solution within real-world constraints.',
  Operations: 'Design systems that turn resources into reliable outcomes.',
  'Data & AI': 'Use data and intelligent tools to improve decisions and products.',
  'Management Science': 'Combine analytical methods with practical management judgment.',
  'Applied Mathematics': 'Translate complex questions into models that can be tested.',
  'Political Economy': 'Understand how institutions, markets, and power shape outcomes.',
  'Data Science': 'Find useful patterns through computation, statistics, and context.',
  'Quantitative Research': 'Turn evidence into rigorous, defensible insight.',
  'Statistical Modeling': 'Represent uncertainty and relationships through statistical models.',
  'Strategic Preparation': 'Set priorities, limits, and flexible plans before negotiating.',
  'Value Creation': 'Find trades that expand what both sides can gain.',
  'Conflict Resolution': 'Address differences early and keep tension productive.',
  'Adaptive Negotiation': 'Read new signals and adjust strategy in real time.',
  'Emotional Intelligence': 'Build trust, read the room, and manage emotion under pressure.',
  'Investment Foundations': 'Apply the core concepts and formulas used across investment analysis.',
  'Financial Modeling': 'Build structured financial models that connect assumptions with business outcomes.',
  'Three-Statement Modeling': 'Connect the income statement, balance sheet, and cash flow statement in one model.',
  'Practice-Aligned Learning': 'Apply an industry-informed curriculum through practical modules and real-world scenarios.',
  'Ethics & Professional Standards': 'Evaluate decisions through professional conduct and investor responsibility.',
  'Financial Statement Analysis': 'Interpret financial reporting to assess performance and business quality.',
  'Asset Valuation': 'Connect market evidence with the value and risk of securities.',
  'Entrepreneurial Storytelling': 'Make an idea clear, memorable, and compelling to others.',
  'Marketing & Branding': 'Shape how a venture communicates its value and identity.',
  'Venture Capital': 'Understand how investors evaluate startups, risk, and potential.',
  'Fundraising Strategy': 'Prepare a credible case for capital and long-term growth.',
  'Founder Engagement': 'Learn directly from builders across industries and stages.',
  'Economic Indicators': 'Read published economic data and understand what moves markets.',
  'Fixed Income Valuation': 'Connect bond prices with credit, inflation, and interest rates.',
  'Currency Markets': 'Understand the forces that influence exchange rates and currencies.',
  'Terminal Navigation': 'Find market-moving data through Bloomberg Terminal tools and commands.',
  'Portfolio Analysis': 'Assess investments together through risk, return, and diversification.',
  Entrepreneurship: 'Move from an unmet need toward a viable new venture.',
  'Venture Strategy': 'Choose where and how an early-stage company can win.',
  'Customer Discovery': 'Learn directly from users before committing to a solution.',
  'Startup Operations': 'Build lightweight systems that help a young company execute.',
  Networking: 'Create genuine relationships across people and communities.',
  'Financial Analysis': 'Evaluate performance, value, and risk through financial evidence.',
  Ethics: 'Apply professional judgment with integrity and accountability.',
  Economics: 'Interpret how incentives and markets shape decisions.',
  'Quantitative Methods': 'Use mathematical tools to evaluate financial questions.',
  'Portfolio Management': 'Balance risk, return, and objectives across investments.',
  'Market Concepts': 'Connect economic signals with the behavior of financial markets.',
  'Fixed Income': 'Understand debt instruments, rates, pricing, and risk.',
  Equities: 'Assess ownership securities, valuation, and market performance.',
  Currencies: 'Understand exchange rates and global currency markets.',
  'Bloomberg Terminal': 'Navigate professional market data, news, and analytics.',
  'China Business': 'Read China’s commercial environment through local context.',
  'Market Strategy': 'Turn market insight into positioning and action.',
  'Cross-cultural Management': 'Lead and collaborate across different cultural expectations.',
  'Economic Policy': 'Connect policy choices with business and market consequences.',
  'Global Business': 'Evaluate opportunities across borders, systems, and cultures.',
  'Diplomatic Facilitation': 'Guide complex debate while keeping the room focused and inclusive.',
  'Negotiation': 'Build agreement across different interests and priorities.',
  'Public Speaking': 'Communicate ideas with clarity, confidence, and presence.',
  'Conference Planning': 'Turn an idea into a clear and engaging conference experience.',
  'Team Building': 'Create trust and help people work toward a shared direction.',
  'Project Coordination': 'Keep people, priorities, and timelines moving together.',
  'Team Leadership': 'Set direction and support a team through delivery.',
  'Marketing Strategy': 'Connect audience insight with clear campaign decisions.',
  'Visual Design': 'Turn ideas into clear and engaging visual communication.',
  'Campus Outreach': 'Reach students with useful and accessible information.',
}

function capabilityDescription(skill) {
  return capabilityDescriptions[skill] || 'A core capability developed through this learning experience.'
}

const leadership = [
  {
    slug: 'berkeley-model-un', company: 'UC Berkeley Model United Nations', role: 'Chair', year: 'Mar. 2023 — Mar. 2025', listYear: 'Mar. 2025', location: 'San Francisco Bay Area', caseTitleLines: ['Competitive Delegate;', 'Vice Chair; Chair'], caseSubtitle: 'UC Berkeley Model United Nations',
    brandLogo: '/ucbmun-logo.png', brandAccent: '#f6a313', brandInk: '#073a61', brandSurface: '#edf6fb', brandAccentInk: '#073a61', brandLogoClass: 'brand-logo-mark',
    summary: 'Designed and chaired a committee for UC Berkeley’s annual Model UN conference.',
    about: 'UC Berkeley Model United Nations brings students from every major together to explore international diplomacy, policy, and leadership. Members compete on the travel team, organize conferences, and develop negotiation, public speaking, and collaborative leadership through global issues.',
    url: 'https://ucbmun.com', websiteLabel: 'Visit UCBMUN website',
    leadershipCapabilities: ['Diplomatic Facilitation', 'Negotiation', 'Public Speaking', 'Conference Planning', 'Team Building'],
    details: ['Designed and chaired a committee for 500+ delegates from 15+ institutions.', 'Guided debate, facilitated discussion, and shaped the delegate experience across the conference.'],
    tasks: [
      { title: 'Designing the committee', bullets: ['Designed and chaired a committee for 500+ delegates from 15+ institutions.'], facts: ['500+', '15+'] },
      { title: 'Leading the room', bullets: ['Guided debate, facilitated discussion, and shaped the delegate experience across the conference.'], facts: [] },
    ],
    timelineOverview: [
      { role: 'Competitive Delegate', description: 'Served as Competitive Delegate representing UC Berkeley on the North American circuit, with the team placing 3rd nationally.' },
      { role: 'Vice Chair; Chair', description: 'Staffed UC Berkeley’s annual San Francisco conference for 500+ delegates from 15+ institutions, twice as Vice Chair and once as Chair, designing committees, authoring 40+ page background guides, and leading four-day conferences.' },
    ],
    leadershipTimeline: [
      {
        date: 'Mar. 2 to 5, 2023',
        role: 'Vice Chair',
        conference: 'UCBMUN XXVII',
        images: [
          { src: '/ucbmun-2023-vice-chair.jpg', alt: 'Shang Zhu with the UCBMUN XXVII dais team', caption: 'With members of my dais team during UCBMUN XXVII, my first conference serving as Vice Chair.' },
        ],
      },
      {
        date: 'Mar. 23 to 26, 2023',
        role: 'Competitive Delegate',
        conference: 'VICS XXVII · United Kingdom',
        images: [
          { src: '/vics-2023-double-delegation.jpg', alt: 'Shang Zhu with her double-delegation partner at VICS XXVII', caption: 'Representing the United Kingdom with my double-delegation partner at VICS XXVII.', portrait: true },
        ],
      },
      {
        date: 'Nov. 16 to 19, 2023',
        role: 'Competitive Delegate',
        conference: 'SBIMUN XIV · India',
        images: [
          { src: '/sbimun-2023-dais.jpg', alt: 'Shang Zhu with members of the SBIMUN XIV committee', caption: 'After committee at SBIMUN XIV, representing India, with the dais.' },
          { src: '/sbimun-2023-bloc.jpg', alt: 'Shang Zhu having lunch with her committee bloc at SBIMUN XIV', caption: 'Lunch with my bloc and the relationships behind the resolutions.' },
        ],
      },
      {
        date: 'Feb. 29 to Mar. 3, 2024',
        role: 'Vice Chair',
        conference: 'UCBMUN XXVIII.',
        images: [
          { src: '/ucbmun-2024-chair.jpg', alt: 'Shang Zhu with her chair at UCBMUN XXVIII', caption: 'With my Chair at UCBMUN XXVIII.' },
          { src: '/ucbmun-2024-dais.jpg', alt: 'Shang Zhu with the UCBMUN XXVIII dais team', caption: 'With members of my dais team during UCBMUN XXVIII.' },
        ],
      },
      {
        date: 'Feb. 27 to Mar. 2, 2025',
        role: 'Chair',
        conference: 'UCBMUN XXIX',
        images: [
          { src: '/ucbmun-2025-chair-portrait.jpg', alt: 'Shang Zhu holding the gavel as Chair at UCBMUN XXIX', caption: 'Serving as Chair at UCBMUN XXIX.', portrait: true },
          { src: '/ucbmun-2025-dais.jpg', alt: 'Shang Zhu with members of her UCBMUN XXIX dais team', caption: 'With members of my dais team during UCBMUN XXIX.' },
        ],
      },
    ],
  },
  {
    slug: 'asuc-marketing', company: 'Associated Students of the University of California', role: 'Marketing & Design Executive', year: 'Sep. 2022 — May 2024', listYear: 'June 2023 — May 2024', location: 'Berkeley, CA', caseTitleLines: ['Project Coordinator;', 'Marketing & Design Executive'], caseSubtitle: 'Associated Students of the University of California',
    brandLogo: '/asuc-logo-cutout.png', brandAccent: '#2f6f9f', brandInk: '#003262', brandSurface: '#edf4fb', brandAccentInk: '#fff', brandLogoClass: 'brand-logo-asuc',
    summary: 'Led marketing and design initiatives for UC Berkeley’s largest student organization.',
    about: 'The UC Berkeley Student Union partners with student leaders to provide community services, programs, events, and opportunities for students to learn and grow. Across two senate offices, I supported projects for international students and later led design, marketing, and office operations.',
    url: 'https://studentunion.berkeley.edu/', websiteLabel: 'Visit Berkeley Student Union website',
    leadershipCapabilities: ['Project Coordination', 'Team Leadership', 'Marketing Strategy', 'Visual Design', 'Campus Outreach'],
    details: ['Led a five-person team across 12+ marketing initiatives.', 'Reached a 2,000+ audience through campaigns and campus communications.'],
    tasks: [
      { title: 'Leading creative delivery', bullets: ['Led a five-person team across 12+ marketing initiatives.'], facts: ['five-person team', '12+'] },
      { title: 'Growing campus reach', bullets: ['Reached a 2,000+ audience through campaigns and campus communications.'], facts: ['2,000+'] },
    ],
    timelineLabel: 'The journey',
    leadershipTimeline: [
      {
        date: 'Sep. 2022 — Jun. 2023',
        role: 'Project Coordinator',
        conference: 'Senator Kailen Grottel-Brown’s Office',
        description: 'Contributed to semester long projects and weekly meetings focused on improving campus life for international students.',
      },
      {
        date: 'Jun. 2023 — May 2024',
        role: 'Marketing & Design Executive',
        conference: 'Senator Andy Liu’s Office',
        description: 'Managed a five person team, oversaw office operations, and led marketing across 12+ initiatives reaching an audience of 2,000+.',
      },
    ],
  },
]

const lifePages = {
  writer: { title: 'Creative Writer', intro: 'Writing is where I slow down, notice more, and make sense of the world in words.' },
  tennis: { title: 'Tennis Player', intro: 'A practice in patience, focus, and enjoying the long game.' },
  fashion: {
    type: 'fashion',
    title: 'Fashion Model',
    intro: 'As a recurring runway model for the Bay Area’s largest fashion show, I also work across editorial shoots with photographers, makeup and beauty artists, stylists, and designers. What I enjoy most is building a visual world together and turning a shared idea into art.',
    runway: [
      {
        slug: 'reverie',
        title: 'Reverie',
        description: 'A dreamlike world shaped through luminous layers, raw edges, and romantic movement.',
        images: ['/fashion-reverie-01.jpg', '/fashion-reverie-02.jpg'],
      },
      {
        slug: 'crescendo',
        title: 'Crescendo',
        description: 'Half human and half machine, the look builds tension until technology and emotion become overwhelming.',
        images: ['/fashion-crescendo-01.jpg', '/fashion-crescendo-02.jpg'],
      },
      {
        slug: 'sonder',
        title: 'Sonder',
        description: 'A study in shadow and solitude, grounded in the idea that every stranger carries a life as vivid as our own.',
        images: ['/fashion-sonder-01.jpg', '/fashion-sonder-02.jpg'],
      },
      {
        slug: 'just-down-the-street',
        title: 'Just Down the Street',
        description: 'A Y2K inspired street story that turns denim, animal print, and neighborhood nostalgia into attitude.',
        images: ['/fashion-just-down-the-street-01.jpg', '/fashion-just-down-the-street-02.jpg'],
      },
      {
        slug: 'all-that-remains',
        title: 'All That Remains',
        description: 'Childhood color and retro playfulness reconstructed from the fragments of memory that stay with us.',
        images: ['/fashion-all-that-remains-01.jpg'],
      },
    ],
    editorial: Array.from({ length: 22 }, (_, index) => `/fashion-editorial-${String(index + 1).padStart(2, '0')}.jpg`),
  },
  travel: { title: 'Traveler', intro: 'New places have taught me to stay curious, adaptable, and open to different ways of living.' },
}

function Arrow() { return <span className="arrow">↗</span> }

function HandArrow({ direction = 'up' }) {
  if (direction === 'bubble') return <svg className="hand-arrow hand-arrow-bubble" viewBox="0 0 58 62" aria-hidden="true"><path d="M51 7c-15-2-18 9-11 18 8 11 1 20-22 25"/><path d="m22 39-5 12 13 1"/></svg>
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
  const date = item.listYear || item.year || item.date
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

function factToken(fact) {
  return fact.match(/~?\d[\d,.]*(?:\+)?/)?.[0] || ''
}

function MetricText({ text, facts = [] }) {
  const metrics = facts.map(fact => ({ fact, token: factToken(fact) })).filter(metric => metric.token && text.includes(metric.token))
  if (!metrics.length) return text
  const tokens = [...new Set(metrics.map(metric => metric.token))].sort((a, b) => b.length - a.length)
  const pattern = new RegExp(`(${tokens.map(token => token.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')).join('|')})`, 'g')
  return text.split(pattern).map((part, index) => {
    const metric = metrics.find(item => item.token === part)
    return metric
      ? <span className="inline-metric" data-label={metric.fact} tabIndex="0" aria-label={`Key result: ${metric.fact}`} key={`${part}-${index}`}>{part}</span>
      : <Fragment key={`${part}-${index}`}>{part}</Fragment>
  })
}

function StoryParagraph({ paragraph }) {
  if (typeof paragraph === 'string') return paragraph
  if (paragraph.quote) return <>{paragraph.text}<em className="reflection-question">{paragraph.quote}</em></>
  return <><strong>{paragraph.bold}</strong>{paragraph.text}</>
}

function ReflectionMedia({ media }) {
  return media.video
    ? <video src={media.src} aria-label={media.alt} controls playsInline preload="metadata"/>
    : <img src={media.src} alt={media.alt}/>
}

function LeadershipAbout({ item }) {
  return <section className="leadership-about" style={{ '--case-accent': item.brandAccent, '--case-accent-ink': item.brandAccentInk }}>
    <p className="hand-label"># About</p>
    <div className="education-about-panel leadership-about-panel">
      <div className="education-about-copy"><p className="case-lead">{item.about}</p><a href={item.url} target="_blank" rel="noreferrer">{item.websiteLabel} <Arrow /></a></div>
      <div className="education-skill-map">
        <p>Capabilities developed</p>
        <div className="skill-hover-note" aria-hidden="true"><HandArrow direction="bubble"/><span className="hover-copy">hover over me</span><span className="tap-copy">tap to explore</span></div>
        <div className="skill-orbit" role="list" aria-label={`Capabilities developed through ${item.company}`}>
          {item.leadershipCapabilities.map((skill, index) => <span className={skill.length >= 20 ? 'skill-label-long' : skill.length >= 15 ? 'skill-label-medium' : ''} role="listitem" tabIndex="0" data-description={capabilityDescription(skill)} aria-label={`${skill}: ${capabilityDescription(skill)}`} style={{ '--bubble-index': index }} key={skill}>{skill}</span>)}
        </div>
      </div>
    </div>
  </section>
}

function LeadershipTimeline({ events, label = 'The journey', overview }) {
  return <section className="leadership-timeline-section">
    <header className="leadership-timeline-header">
      <p className="hand-label"># {label}</p>
    </header>
    {overview?.length && <div className="leadership-role-summaries">{overview.map(item => <article key={item.role}><strong>{item.role}</strong><p>{item.description}</p></article>)}</div>}
    <div className="leadership-timeline" aria-label={`${label} timeline`}>
      {events.map((event, index) => {
        const expandable = Boolean(event.images?.length)
        const SummaryTag = expandable ? 'summary' : 'div'
        const content = <>
        <SummaryTag className={expandable ? undefined : 'timeline-static-summary'}>
          <span className="timeline-marker" aria-hidden="true"><i/></span>
          <span className="timeline-date">{event.date}</span>
          <span className={`timeline-title ${event.description ? 'has-description' : ''}`}><span className="timeline-role-group"><strong>{event.role}</strong><small>{event.conference}</small></span>{event.description && <p>{event.description}</p>}</span>
          {expandable && <span className="timeline-toggle" aria-hidden="true"><i/><i/></span>}
        </SummaryTag>
        {expandable && <div className="timeline-event-body">
          <div className={`timeline-gallery ${event.images.length === 1 ? 'single-image' : ''}`}>
            {event.images.map((image, imageIndex) => <figure className={`leadership-timeline-image reflection-image ${image.portrait ? 'portrait-timeline-image' : ''} reveal-on-scroll`} style={{ '--reveal-delay': `${180 + imageIndex * 150}ms` }} key={image.src}>
              <ReflectionMedia media={image}/>
              <figcaption>{image.caption}</figcaption>
            </figure>)}
          </div>
        </div>}
        </>
        return expandable
          ? <details className="leadership-timeline-event reveal-on-scroll" defaultOpen={index === events.length - 1} style={{ '--reveal-delay': `${index * 90}ms` }} key={`${event.conference}-${event.date}`}>{content}</details>
          : <article className="leadership-timeline-event timeline-event-static reveal-on-scroll" style={{ '--reveal-delay': `${index * 90}ms` }} key={`${event.conference}-${event.date}`}>{content}</article>
      })}
    </div>
  </section>
}

function AcademicPortfolio({ portfolio, accent }) {
  return <section className="berkeley-portfolio" style={{ '--case-accent': accent }}>
    <header className="berkeley-portfolio-intro">
      <p className="hand-label"># About</p>
      <div>
        <span>{portfolio.eyebrow}</span>
        <h2>{portfolio.title}</h2>
        <p>{portfolio.intro}</p>
      </div>
    </header>
    <div className="academic-chapters">
      {portfolio.chapters.map((chapter, index) => <details className="academic-chapter" key={chapter.title}>
        <summary>
          <span className="academic-chapter-number">0{index + 1}</span>
          <div className="academic-chapter-overview">
            <span className="academic-chapter-type">{chapter.type}</span>
            <h3>{chapter.title}</h3>
            <p className="academic-chapter-subtitle">{chapter.subtitle}</p>
            <p className="academic-chapter-summary">{chapter.summary}</p>
            <div className="academic-chapter-skills" aria-label={`${chapter.title} capabilities`}>{chapter.skills.map(skill => <span key={skill}>{skill}</span>)}</div>
          </div>
          <span className="academic-chapter-toggle" aria-hidden="true"><i/><i/></span>
        </summary>
        <div className="academic-chapter-body">
          <div className="academic-chapter-left">
            <div className="academic-chapter-about">
              <span>About the program</span>
              <p>{chapter.about}</p>
              <a href={chapter.url} target="_blank" rel="noreferrer">View Berkeley program <Arrow /></a>
            </div>
            <div className="academic-chapter-tool-skills">
              <section><h4>Tools</h4><div className="academic-tool-list">{chapter.tools.map(tool => <span key={tool}>{tool}</span>)}</div></section>
              <section><h4>Skills</h4><ul>{chapter.skills.map(skill => <li key={skill}>{skill}</li>)}</ul></section>
            </div>
          </div>
          <div className="academic-course-area">
            <span>Coursework by theme</span>
            <div className="academic-course-groups">{chapter.courseGroups.map(group => <section key={group.label}>
              <h4>{group.label}</h4><div className="academic-course-grid">{group.courses.map(course => <article key={course.code}>
                <small>{course.code}</small><h5>{course.title}</h5><p>{course.note}</p>
              </article>)}</div>
            </section>)}</div>
          </div>
        </div>
      </details>)}
    </div>
  </section>
}

function EducationCasePage({ item }) {
  const [navCompact, setNavCompact] = useState(false)
  useEffect(() => {
    const onScroll = () => setNavCompact(window.scrollY > 80)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])
  return <main className={`education-case-page education-case-${item.slug}`}>
    <header className={`case-nav ${navCompact ? 'nav-compact' : ''}`}><a href="#home" className="logo">Shang</a><a href="#education" className="case-home">Back to Education</a><a href="#contact" className="contact-pill">Contact Me</a></header>
    {item.academicProfile ? <section className={`academic-case-hero ${item.academicPortfolio ? 'berkeley-academic-hero' : ''}`} style={{ '--institution-accent': item.institutionAccent }}><div className="academic-hero-card"><div className="academic-logo-panel"><span>Academic chapter</span><img src={item.institutionLogo} alt={`${item.school} logo`}/></div><div className="academic-profile-copy"><div className="academic-title-lockup"><p className="hand-label"># Education</p><h1>{item.degreeLines ? item.degreeLines.map(line => <span className="degree-line" key={line}>{line}</span>) : item.degreeTitle || item.program}</h1><p className="academic-institution">{item.institutionTitle || item.school}</p></div></div><div className="academic-details" aria-label="Academic details">{item.academicDetails.map(detail => <div key={detail.label}><small>{detail.label}</small><strong>{detail.value}</strong></div>)}</div></div></section> : item.credentialImage ? <section className="credential-profile-hero" style={{ '--institution-accent': item.institutionAccent || '#159660', '--accent-ink': item.accentInk || '#fff' }}><div className={`credential-profile-card ${item.credentialLandscape ? 'is-landscape' : 'is-portrait'}`}><div className="credential-preview-panel"><span>Verified credential</span><a href={item.credentialImage} target="_blank" rel="noreferrer" aria-label={`Open full ${item.program} credential`}><img src={item.credentialImage} alt={`${item.program} credential`}/></a></div><div className="credential-profile-copy"><div className="credential-title-lockup"><p className="hand-label"># Education</p><h1>{item.heroTitle || item.program}</h1><p>{item.school}</p></div><small>{item.date}</small><a className="credential-open-link" href={item.credentialImage} target="_blank" rel="noreferrer">View full credential <Arrow /></a></div></div></section> : <section className="education-case-hero">
      <div className={`credential-stage ${item.credentialImage ? 'has-credential-image' : ''} ${item.credentialLandscape ? 'has-landscape-credential' : ''}`}>
        {item.credentialImage ? <a className={`credential-document credential-image ${item.credentialLandscape ? 'credential-landscape' : ''}`} href={item.credentialImage} target="_blank" rel="noreferrer"><img src={item.credentialImage} alt={`${item.program} credential`}/></a> : <div className="credential-document" aria-label={`Placeholder for ${item.program} credential`}>
          <span className="credential-type">{item.credential}</span><div className="credential-emblem">✦</div><p>Presented by</p><h2>{item.school}</h2><i/><strong>{item.program}</strong><small>{item.date}</small><span className="credential-ready">Credential image can be added here</span>
        </div>}
      </div>
    </section>}
    {item.academicPortfolio ? <AcademicPortfolio portfolio={item.academicPortfolio} accent={item.institutionAccent}/> : <section className="education-about" style={{ '--case-accent': item.institutionAccent || '#159660', '--case-accent-ink': item.accentInk || '#fff' }}><p className="hand-label"># About</p><div className="education-about-panel"><div className="education-about-copy"><p className="case-lead">{item.summary}</p><a href={item.url} target="_blank" rel="noreferrer">{item.websiteLabel} <Arrow /></a></div>{item.skillsPlaceholder ? <div className="education-skill-placeholder" aria-label="Capabilities placeholder"><span>Capabilities · In progress</span><div className="skill-placeholder-rings" aria-hidden="true"><i/><i/><i/></div><h3>Learning profile<br/>coming into focus.</h3><p>Specific capabilities will be added as the track and coursework are confirmed.</p></div> : <div className="education-skill-map"><p>Capabilities developed</p><div className="skill-hover-note" aria-hidden="true"><HandArrow direction="bubble"/><span className="hover-copy">hover over me</span><span className="tap-copy">tap to explore</span></div><div className="skill-orbit" role="list" aria-label="Skills developed through this program">{item.skills.map((skill, index) => <span className={skill.length >= 20 ? 'skill-label-long' : skill.length >= 15 ? 'skill-label-medium' : ''} role="listitem" tabIndex="0" data-description={capabilityDescription(skill)} aria-label={`${skill}: ${capabilityDescription(skill)}`} style={{ '--bubble-index': index }} key={skill}>{skill}</span>)}</div></div>}</div></section>}
    {item.hideReflection ? null : item.reflection ? <section className="case-reflection education-case-reflection" style={{ '--case-accent': item.institutionAccent || '#159660', '--case-accent-ink': item.accentInk || '#fff' }}><p className="hand-label"># Reflection</p><div className="reflection-stories">{item.reflection.stories.map((story, index) => <article className={`reflection-story story-${index + 1} ${story.compact ? 'compact' : ''} ${story.magazine ? 'magazine-layout' : ''} ${story.wide ? 'wide-layout' : ''} ${!story.images?.length ? 'no-photo-column' : ''} reveal-on-scroll`} style={{ '--reveal-delay': `${index * 90}ms` }} key={story.title || `story-${index}`}>{story.images?.length ? <div className="story-photo-column">{story.images.map((image, imageIndex) => <figure className={`story-image reflection-image ${image.portrait ? 'portrait-reflection-image' : ''} reveal-on-scroll`} style={{ '--reveal-delay': `${220 + imageIndex * 190}ms` }} key={image.src}><ReflectionMedia media={image}/><figcaption>{image.caption}</figcaption></figure>)}</div> : null}<div className="story-copy-block">{story.date && <p className="story-date">{story.date}</p>}{story.title && <h2>{story.title}</h2>}{story.intro && <p className="story-intro">{story.intro}</p>}{story.paragraphs.map((paragraph, paragraphIndex) => <Fragment key={typeof paragraph === 'string' ? paragraph : paragraph.bold || paragraph.quote}><p><StoryParagraph paragraph={paragraph}/></p>{story.midImages && paragraphIndex === story.midImageAfter && <div className="story-mid-images">{story.midImages.map((image, imageIndex) => <figure className={`story-image reflection-image ${image.portrait ? 'portrait-reflection-image' : ''} reveal-on-scroll`} style={{ '--reveal-delay': `${220 + imageIndex * 190}ms` }} key={image.src}><ReflectionMedia media={image}/><figcaption>{image.caption}</figcaption></figure>)}</div>}</Fragment>)}</div></article>)}</div></section> : <section className="case-reflection education-case-reflection" style={{ '--case-accent': item.institutionAccent || '#159660', '--case-accent-ink': item.accentInk || '#fff' }}><p className="hand-label"># Reflection</p><div className="reflection-stories"><article className="reflection-story no-photo-column"><div className="story-copy-block"><h2>Reflections<br/>coming soon.</h2><p className="story-intro">This section is ready for the same image-and-story format used across the experience case studies.</p><p>Photos and personal writing for this learning chapter will live here.</p></div></article></div></section>}
    <footer className="case-footer"><span>© 2026 SHANG ZHU</span></footer>
  </main>
}

function CasePage({ item, sectionHref = '#experience', sectionLabel = 'Experience', chapterLabel = 'Experience' }) {
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
  return <main className={`case-page branded-experience-page case-${item.slug}`} style={{ '--brand-accent': item.brandAccent || '#159660', '--brand-ink': item.brandInk || '#183228', '--brand-surface': item.brandSurface || '#edf6ef', '--brand-accent-ink': item.brandAccentInk || '#fff' }}>
    <header className={`case-nav ${navCompact ? 'nav-compact' : ''}`}><a href="#home" className="logo">Shang</a><a href={sectionHref} className="case-home">Back to {sectionLabel}</a><a href="#contact" className="contact-pill">Contact Me</a></header>
    <section className="experience-profile-hero"><div className="experience-profile-card"><div className={`experience-logo-panel ${item.brandLogoClass || ''}`}><span>{chapterLabel} chapter</span>{item.brandLogo ? <img src={item.brandLogo} alt={`${name} logo`}/> : <strong>{name}</strong>}</div><div className="experience-profile-copy"><p className="hand-label"># {chapterLabel}</p><h1>{item.caseTitleLines ? item.caseTitleLines.map(line => <span className="case-title-line" key={line}>{line}</span>) : item.caseTitle || name}</h1><p className="experience-role">{item.caseSubtitle || title}</p><div className="experience-meta"><span>{date}</span><span>{item.location || '—'}</span></div></div></div></section>
    {item.results && !item.hideResults && <section className="result-grid">{item.results.map(([number, label], index) => <div key={label}><span>Result 0{index + 1}</span><b>{number}</b><p>{label}</p></div>)}</section>}
    {item.leadershipCapabilities ? <LeadershipAbout item={item}/> : <section className={`case-about experience-about ${item.tasks ? 'case-about-simple' : ''}`}><div><p className="hand-label"># About</p><h2>{item.aboutTitle || <>The work,<br/><i>in context.</i></>}</h2></div><div><p className="case-lead">{item.aboutLines ? item.aboutLines.join(' ') : about}</p>{!item.tasks && <ul>{details.map(detail => <li key={detail}>{detail}</li>)}</ul>}{item.url && <a href={item.url} target="_blank" rel="noreferrer">Visit company website <Arrow /></a>}</div></section>}
    {item.leadershipTimeline && <LeadershipTimeline events={item.leadershipTimeline} label={item.timelineLabel} overview={item.timelineOverview}/>}
    {item.tasks && !item.leadershipTimeline && <section className="case-tasks experience-tasks"><div className="experience-work-header"><p className="hand-label"># The work</p>{item.tools && <div className="experience-tools-inline"><strong>Tools</strong><div>{item.tools.map(tool => <span className="experience-tool-chip" key={tool.name}><span className="tool-icon"><ToolIcon type={tool.type}/></span><span>{tool.name}</span></span>)}</div></div>}</div><div className="task-list">{item.tasks.map((task, index) => {
      const taskText = task.bullets ? task.bullets.join(' ') : task.text
      const unmatchedFacts = task.facts.filter(fact => !taskText.includes(factToken(fact)))
      return <article className="reveal-on-scroll" style={{ '--reveal-delay': `${index * 120}ms` }} key={task.title}>
        <div className="task-heading"><span className="task-number">0{index + 1}</span><h3>{task.title}</h3></div>
        <div className="task-body">{task.bullets ? <ul className="task-copy task-bullets">{task.bullets.map(point => <li key={point}><MetricText text={point} facts={task.facts}/></li>)}</ul> : <p className="task-copy"><MetricText text={task.text} facts={task.facts}/></p>}{unmatchedFacts.length > 0 && <div className="task-metric-fallbacks">{unmatchedFacts.map(fact => <span className="inline-metric inline-metric-standalone" data-label={fact} tabIndex="0" key={fact}>{fact}</span>)}</div>}</div>
      </article>
    })}</div></section>}
    {item.recommendation && <section className="case-recommendation experience-recommendation"><p className="hand-label"># Recommendation</p><article className="recommendation-card">{item.recommendation.pending ? <div className="recommendation-pending"><span className="quote-mark">“</span><p>{item.recommendation.message}</p></div> : <><span className="quote-mark">“</span><div className="recommendation-quote">{item.recommendation.quote.map(paragraph => <p key={paragraph}>{paragraph}</p>)}</div><div className="recommendation-author"><div><span>A note from</span><h3>{item.recommendation.name}</h3><p>{item.recommendation.role}</p></div><small>{item.recommendation.date}</small></div><a className="recommendation-link" href={item.recommendation.url} target="_blank" rel="noreferrer">Open LinkedIn to read more <Arrow /></a></>}</article></section>}
    {item.reflection ? item.reflection.pending ? <section className="case-reflection experience-reflection reflection-pending"><p className="hand-label"># Reflection</p><h2>Research notes<br/>and <i>reflections.</i></h2><p>A longer reflection on this work will live here.</p></section> : <section className="case-reflection experience-reflection"><p className="hand-label"># Reflection</p><div className="reflection-stories">{item.reflection.stories.map((story, index) => <article className={`reflection-story story-${index + 1} ${story.compact ? 'compact' : ''} ${story.wide ? 'wide-layout' : ''} ${!story.images?.length ? 'no-photo-column' : ''} reveal-on-scroll`} style={{ '--reveal-delay': `${index * 90}ms` }} key={story.title || `story-${index}`}>{story.images?.length ? <div className="story-photo-column">{story.images.map((image, imageIndex) => <figure className={`story-image reflection-image ${image.portrait ? 'portrait-reflection-image' : ''} reveal-on-scroll`} style={{ '--reveal-delay': `${220 + imageIndex * 190}ms` }} key={image.src}><ReflectionMedia media={image}/><figcaption>{image.caption}</figcaption></figure>)}</div> : null}<div className="story-copy-block">{story.date && <p className="story-date">{story.date}</p>}{story.title && <h2>{story.title}</h2>}{story.intro && <p className="story-intro">{story.intro}</p>}{story.paragraphs.map((paragraph, paragraphIndex) => <Fragment key={typeof paragraph === 'string' ? paragraph : paragraph.bold || paragraph.quote}><p><StoryParagraph paragraph={paragraph}/></p>{story.midImages && paragraphIndex === story.midImageAfter && <div className="story-mid-images">{story.midImages.map((image, imageIndex) => <figure className={`story-image reflection-image ${image.portrait ? 'portrait-reflection-image' : ''} reveal-on-scroll`} style={{ '--reveal-delay': `${220 + imageIndex * 190}ms` }} key={image.src}><ReflectionMedia media={image}/><figcaption>{image.caption}</figcaption></figure>)}</div>}</Fragment>)}</div></article>)}</div></section> : !item.tasks ? <section className="case-placeholder"><p className="hand-label"># More to come</p><h2>Artifacts, images,<br/>and <i>impact.</i></h2><p>This page is ready for project materials, process notes, and a deeper impact story.</p></section> : null}
    <footer className="case-footer"><span>© 2026 SHANG ZHU</span></footer>
  </main>
}

function LifePage({ page }) {
  if (page.type === 'fashion') return <FashionPage page={page}/>
  return <main className="life-page"><header className="case-nav"><a href="#home" className="logo">Shang</a><a href="#about" className="case-home">Back to About</a><a href="#contact" className="contact-pill">Contact Me</a></header><section className="life-hero"><p className="hand-label"># Beyond work</p><h1>{page.title}</h1><p>{page.intro}</p></section><section className="life-gallery"><div>Photos & Stories<br/>Coming Soon</div><div>Photos & Stories<br/>Coming Soon</div><div>Photos & Stories<br/>Coming Soon</div></section><footer className="case-footer"><span>© 2026 SHANG ZHU</span></footer></main>
}

function FashionPage({ page }) {
  const [navCompact, setNavCompact] = useState(false)
  const fashionCoverRef = useRef(null)
  const fashionPointerFrame = useRef(null)
  const coverEditorialIndices = [4, 10, 6, 13, 15, 9, 18, 20, 8]
  const coverEditorialImages = coverEditorialIndices.map(originalIndex => ({ src: page.editorial[originalIndex], originalIndex }))
  useEffect(() => {
    const onScroll = () => setNavCompact(window.scrollY > 80)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])
  useEffect(() => () => window.cancelAnimationFrame(fashionPointerFrame.current), [])
  const moveFashionCover = event => {
    const cover = fashionCoverRef.current
    if (!cover) return
    const bounds = cover.getBoundingClientRect()
    const x = (event.clientX - bounds.left) / bounds.width - .5
    const y = (event.clientY - bounds.top) / bounds.height - .5
    window.cancelAnimationFrame(fashionPointerFrame.current)
    fashionPointerFrame.current = window.requestAnimationFrame(() => {
      ;[1, 2, 3, 4].forEach(depth => {
        cover.style.setProperty(`--fashion-x-${depth}`, `${x * depth * 25}px`)
        cover.style.setProperty(`--fashion-y-${depth}`, `${y * depth * 20}px`)
      })
    })
  }
  const resetFashionCover = () => {
    const cover = fashionCoverRef.current
    if (!cover) return
    ;[1, 2, 3, 4].forEach(depth => {
      cover.style.setProperty(`--fashion-x-${depth}`, '0px')
      cover.style.setProperty(`--fashion-y-${depth}`, '0px')
    })
  }
  return <main className="fashion-page">
    <header className={`case-nav ${navCompact ? 'nav-compact' : ''}`}><a href="#home" className="logo">Shang</a><a href="#about" className="case-home">Back to About</a><a href="#contact" className="contact-pill">Contact Me</a></header>
    <section className="fashion-cover" id="fashion-editorial" ref={fashionCoverRef} onPointerMove={moveFashionCover} onPointerLeave={resetFashionCover}>
      <div className="fashion-cover-cloud" aria-hidden="true">{coverEditorialImages.map(({ src }, index) => <figure className={`fashion-cover-photo fashion-cover-photo-${index + 1} fashion-depth-${index % 4 + 1}`} key={src}><span className="fashion-cover-drift"><img src={src} alt="" decoding="async"/></span></figure>)}</div>
      <div className="fashion-cover-title"><p>Editorial practice · Runway presence</p><h1>FASHION MODEL</h1></div>
    </section>
    <section className="fashion-practice-intro reveal-on-scroll">
      <div className="fashion-practice-heading"><p className="hand-label"># In practice</p><h2>Fashion is<br/><i>made together.</i></h2></div>
      <div className="fashion-practice-notes">
        <article><span>01</span><div><h3>Editorial</h3><p>Editorial work lets me move between very different visual languages. Each shoot is a collaboration with photographers, makeup and beauty artists, stylists, and designers. I love building a visual world and making art together.</p></div></article>
        <article><span>02</span><div><h3>Runway</h3><p>{page.intro} Each show begins with a designer’s story. My role is to make that story visible through the walk, the pose, and the energy of the room.</p></div></article>
        <a href="#fashion-runway">See the runway archive <span aria-hidden="true">↓</span></a>
      </div>
    </section>
    <section className="fashion-runway-intro reveal-on-scroll" id="fashion-runway"><p className="hand-label"># Runway</p><div><h2>Five shows.<br/><i>Five stories.</i></h2></div></section>
    <section className="fashion-runway-archive">
      {page.runway.map((theme, index) => <article className={`fashion-story fashion-story-${index + 1} ${theme.images.length === 1 ? 'single-look' : ''} reveal-on-scroll`} style={{ '--reveal-delay': `${index * 70}ms` }} id={`fashion-${theme.slug}`} key={theme.title}>
        <header><span>0{index + 1} / Runway</span><h2>{theme.title}</h2><p>{theme.description}</p></header>
        <div className="fashion-story-gallery">{theme.images.map(src => <figure key={src}><img src={src} alt={`Shang modeling the ${theme.title} runway collection`} loading="lazy" decoding="async"/></figure>)}</div>
      </article>)}
    </section>
    <footer className="case-footer fashion-footer"><span>© 2026 SHANG ZHU</span></footer>
  </main>
}

function App() {
  const [showSummary, setShowSummary] = useState(false)
  const [route, setRoute] = useState(window.location.hash)
  const [copiedEmail, setCopiedEmail] = useState('')
  const [navCompact, setNavCompact] = useState(false)
  const [nameRevealKey, setNameRevealKey] = useState(0)
  useEffect(() => { const onHashChange = () => setRoute(window.location.hash); window.addEventListener('hashchange', onHashChange); return () => window.removeEventListener('hashchange', onHashChange) }, [])
  useEffect(() => { const onScroll = () => setNavCompact(window.scrollY > 80); onScroll(); window.addEventListener('scroll', onScroll, { passive: true }); return () => window.removeEventListener('scroll', onScroll) }, [])
  useEffect(() => {
    if (!['#home', '#about', '#experience', '#education', '#leadership', '#contact'].includes(route)) return
    const frame = window.requestAnimationFrame(() => document.querySelector(route)?.scrollIntoView())
    return () => window.cancelAnimationFrame(frame)
  }, [route])
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible')
        observer.unobserve(entry.target)
      }
    }), { threshold: .12 })
    document.querySelectorAll('.reveal-on-scroll, .case-page > section, .education-case-page > section, .life-page > section').forEach(element => {
      element.classList.add('reveal-on-scroll')
      observer.observe(element)
    })
    return () => observer.disconnect()
  }, [route])
  const copyEmail = async (email) => { await navigator.clipboard?.writeText(email); setCopiedEmail(email); window.setTimeout(() => setCopiedEmail(''), 1600) }
  const togglePortrait = () => { if (showSummary) setNameRevealKey(key => key + 1); setShowSummary(!showSummary) }
  const caseSlug = route.startsWith('#case/') ? route.replace('#case/', '') : null
  const caseItem = [...experiences, ...education, ...leadership].find(item => item.slug === caseSlug)
  const lifeSlug = route.startsWith('#life/') ? route.replace('#life/', '') : null
  if (caseItem) {
    if (caseItem.school) return <EducationCasePage item={caseItem} />
    const isLeadership = leadership.some(item => item.slug === caseItem.slug)
    return <CasePage item={caseItem} sectionHref={isLeadership ? '#leadership' : '#experience'} sectionLabel={isLeadership ? 'Extracurricular' : 'Experience'} chapterLabel={isLeadership ? 'Leadership' : 'Experience'} />
  }
  if (lifeSlug && lifePages[lifeSlug]) return <LifePage page={lifePages[lifeSlug]} />
  return <main>
    <nav className={`site-nav ${navCompact ? 'nav-compact' : ''}`}><a href="#home" className="logo">Shang</a><div className="landing-links"><a href="#about">About</a><a href="#experience">Experience</a><a href="#education">Education</a><a href="#leadership">Extracurricular</a></div><a href="#contact" className="contact-pill">Contact Me</a></nav>
    <section className="landing" id="home">
      <div className="name-backdrop" aria-hidden="true">Shang Zhu</div>
      <div className="hero-center"><div className="portrait-stage"><div className="quiet-summary"><span>Research & strategy</span><span>Market intelligence</span><span>Data analysis & storytelling</span><span>Python · R · SQL · Excel</span></div><p className="hand-note note-click">click me <HandArrow direction="down"/></p><div className={`portrait-card ${showSummary ? 'show-summary' : ''}`} onClick={togglePortrait} onKeyDown={(event) => { if (event.key === 'Enter') togglePortrait() }} role="button" tabIndex="0" aria-label="Show Shang's quick profile"><span className="portrait-face"><img src="/hero-headshot.jpg" alt="Shang Zhu"/></span><span key={nameRevealKey} className="portrait-name">{'Shang'.split('').map((letter, index) => <span key={letter} style={{ '--letter-delay': `${index * 120}ms` }}>{letter}</span>)}</span><span className="summary-card"><b>Who I Am</b><small className="who-lines">MS&E @ Stanford<br/>Applied Math, Political Economy & Data Science @ UC Berkeley</small><b className="bring-title">What I Bring</b><small>Research & Strategy<br/>Market Intelligence<br/>Data Analysis & Storytelling<br/>Python · R · SQL · Excel</small><a href="#contact" onClick={(event) => event.stopPropagation()}>Contact Me</a></span></div></div></div>
    </section>

    <section className="about reveal-on-scroll" id="about"><div><p className="hand-label"># A little about me</p><h1>I make<br/>complex things<br/><i>clear.</i></h1></div><div className="about-copy"><p>I’m an interdisciplinary researcher and strategist, originally from Shanghai and now based in the Bay Area. I translate between numbers and words, research and markets, and people across disciplines and places.</p><p>My work pairs rigorous analysis with human context to address complex social challenges and help create opportunities for people who have not had the ones I have.</p><div className="outside-work"><p>Outside My Work</p><div>{[['writer', 'Writer'], ['tennis', 'Tennis Player'], ['fashion', 'Fashion Model'], ['travel', 'Traveler']].map(([type, label]) => <a href={`#life/${type}`} key={type} aria-label={label}><LifeIcon type={type}/><span className="life-label"><HandArrow /><b>{label}</b></span></a>)}</div></div></div></section>

    <section className="list-section work" id="experience"><p className="hand-label"># Selected experience</p><div className="section-intro reveal-on-scroll"><div><h2>What I’ve <i>worked on.</i></h2><p>With a global perspective across the U.S., China, and Europe.</p></div></div><div className="expand-list">{experiences.map((item, index) => <PortfolioRow item={item} index={index} key={item.slug} />)}</div></section>

    <section className="list-section education" id="education"><p className="hand-label"># Education</p><div className="section-intro reveal-on-scroll"><div><h2>Where I’ve <i>learned.</i></h2><p>An interdisciplinary foundation spanning math, policy, business, and engineering.</p></div></div><div className="expand-list">{education.map((item, index) => <PortfolioRow item={item} index={index} key={item.slug} />)}</div></section>

    <section className="list-section leadership" id="leadership"><p className="hand-label"># Leadership</p><div className="section-intro reveal-on-scroll"><div><h2>How I’ve <i>led.</i></h2><p>Building communities, ideas, and momentum beyond the classroom.</p></div></div><div className="expand-list">{leadership.map((item, index) => <PortfolioRow item={item} index={index} key={item.slug} />)}</div></section>

    <section className="contact-section" id="contact"><div><p className="hand-label"># Hire me</p><h2>Let’s get in touch.</h2><p>Open to conversations, questions, and new ideas!</p></div><div className="contact-details"><div><small>Work Email</small><p>shangzhu@stanford.edu <button onClick={() => copyEmail('shangzhu@stanford.edu')}>{copiedEmail === 'shangzhu@stanford.edu' ? 'Copied!' : 'Copy'}</button></p></div><div><small>Personal Email</small><p>shang.zhu.77@gmail.com <button onClick={() => copyEmail('shang.zhu.77@gmail.com')}>{copiedEmail === 'shang.zhu.77@gmail.com' ? 'Copied!' : 'Copy'}</button></p></div><a href="https://www.linkedin.com/in/shangzhu77/" target="_blank" rel="noreferrer">LinkedIn <Arrow /></a></div></section>
    <footer className="case-footer"><span>© 2026 SHANG ZHU</span></footer>
  </main>
}

createRoot(document.getElementById('root')).render(<StrictMode><App /></StrictMode>)
