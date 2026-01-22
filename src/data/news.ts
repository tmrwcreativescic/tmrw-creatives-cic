export interface NewsArticle {
  id: number
  title: string
  excerpt: string
  content: string
  date: string
  author: string
  authorRole?: string
  authorImage?: string
  category: string
  image: string
  featured: boolean
  tags?: string[]
}

export const newsArticles: NewsArticle[] = [
  {
    id: 1,
    title: "Music Writing Camp Returns This Summer",
    excerpt: "Join us for an intensive week of songwriting, production, and collaboration with industry professionals. Applications open February 1st for our biggest writing camp yet.",
    content: `We're thrilled to announce that our annual Music Writing Camp is returning this summer, bigger and better than ever before. From August 10-16, 2026, twenty selected creatives will have the opportunity to immerse themselves in an intensive week of songwriting, production, and collaboration.

## What to Expect

This year's camp will take place at a residential venue in Kent, providing an immersive environment where participants can focus entirely on their craft. Over seven days, you'll work alongside industry professionals including songwriters, producers, and A&R representatives from major and independent labels.

The camp is structured around collaborative writing sessions, with participants grouped into teams of 3-4 to create original tracks. Each team will have access to professional recording equipment and dedicated studio time, with the goal of leaving camp with at least two completed songs.

## Industry Mentors

We're excited to announce that this year's mentors include:

- **Sarah Chen** - Grammy-nominated songwriter with credits for Dua Lipa, Little Mix, and more
- **Marcus Thompson** - Producer and founder of independent label Rhythm Collective
- **James Okonkwo** - A&R Manager at Sony Music UK
- **Zara Williams** - Sync specialist at Major Music Publishing

## Who Should Apply

The camp is open to TMRW community members aged 16-25 who are serious about pursuing a career in songwriting or music production. We're looking for participants who:

- Have completed at least one TMRW programme
- Can demonstrate a strong portfolio of original work
- Are collaborative and open to feedback
- Can commit to the full seven days

## How to Apply

Applications open on February 1st and close on March 31st, 2026. The application process includes:

1. Online application form
2. Portfolio submission (3-5 original tracks)
3. Short video introduction
4. Interview (for shortlisted candidates)

Spaces are limited to 20 participants to ensure a quality experience for everyone. The camp is fully funded for successful applicants, including accommodation, meals, and all materials.

Stay tuned for more details, and mark your calendars for February 1st!`,
    date: "January 15, 2026",
    author: "TMRW Team",
    authorRole: "Editorial",
    category: "Announcement",
    image: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=800&q=80",
    featured: true,
    tags: ["Writing Camp", "Summer Programme", "Songwriting"],
  },
  {
    id: 2,
    title: "TMRW Creative Lands Major Sync Placement",
    excerpt: "CREATE programme graduate Maya Chen has secured her first major sync placement with a national TV campaign. We caught up with her to discuss the journey.",
    content: `Maya Chen, a graduate of our CREATE programme, has achieved a significant milestone in her music career – her original track "Golden Hour" has been selected for a national television advertising campaign for a major high-street retailer.

## The Journey

Maya joined TMRW Creatives in 2024, enrolling in the CREATE programme with a passion for electronic music production but little knowledge of the industry. Over the course of the 12-week programme, she developed not only her production skills but also gained crucial understanding of sync licensing and music business fundamentals.

"Before TMRW, I was making music in my bedroom with no real direction," Maya told us. "The CREATE programme opened my eyes to all the different ways musicians can actually make a living from their art. Sync licensing wasn't even on my radar before."

## The Breakthrough

The opportunity came through TMRW's partnership with sync library partners. Maya had submitted several tracks to the library following advice from her programme mentors, and "Golden Hour" caught the attention of a music supervisor working on the retail campaign.

"I got the email on a Tuesday morning and honestly thought it was spam at first," Maya laughs. "When I realised it was real, I just sat there staring at my phone for about five minutes."

## The Track

"Golden Hour" is a dreamy, upbeat electronic track with warm synthesizers and a driving rhythm – perfect for the optimistic tone the brand was seeking. The track will feature in TV commercials, online content, and in-store playlists for the spring campaign.

## What's Next

The sync placement has opened new doors for Maya. She's now working with a sync agent and has several more tracks under consideration for various projects.

"My advice to other TMRW creatives would be to take the sync workshops seriously," she says. "It might not be as glamorous as getting millions of streams, but it's a real, sustainable way to earn from your music while you build your profile."

Maya's success is a testament to the pathways available to emerging artists who combine talent with industry knowledge. We couldn't be prouder of her achievement and can't wait to see what she does next.

*The campaign launches in March 2026. We'll share the advert once it's live!*`,
    date: "January 12, 2026",
    author: "Jordan Mitchell",
    authorRole: "Programme Director",
    category: "Success Story",
    image: "https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?w=800&q=80",
    featured: true,
    tags: ["Success Story", "Sync Licensing", "CREATE Programme"],
  },
  {
    id: 3,
    title: "New Partnership with Sony Music UK Announced",
    excerpt: "We're excited to announce a new industry partnership that will bring exclusive opportunities to our community, including mentorship programmes and A&R access.",
    content: `TMRW Creatives is proud to announce a landmark partnership with Sony Music UK, one of the world's leading music companies. This collaboration will bring unprecedented opportunities to our community of young creatives in Medway and beyond.

## Partnership Overview

The partnership, which begins in February 2026, encompasses several key initiatives designed to bridge the gap between emerging talent and industry opportunities:

### 1. A&R Showcase Days

Quarterly showcase events where selected TMRW creatives will perform for Sony Music A&R representatives. These intimate sessions provide direct access to decision-makers at a major label, with the potential for further conversations about development deals or signings.

### 2. Mentorship Programme

Six TMRW creatives will be selected annually to participate in a structured mentorship programme with Sony Music professionals. Over six months, participants will receive one-on-one guidance from executives across various departments including A&R, marketing, digital, and sync.

### 3. Work Experience Placements

Sony Music UK will offer four paid work experience placements per year exclusively to TMRW community members. These placements span different departments, providing hands-on experience of how a major label operates.

### 4. Masterclass Series

Sony Music artists, producers, and executives will deliver quarterly masterclasses covering topics from songwriting and production to marketing and touring. These sessions will be available to all TMRW community members.

## What This Means for Our Community

"This partnership represents exactly what TMRW Creatives is about – creating real pathways into the music industry for young people," says Jordan Mitchell, TMRW Programme Director. "Sony Music's commitment to nurturing emerging talent aligns perfectly with our mission."

The partnership is part of Sony Music UK's broader commitment to diversity and grassroots artist development. It recognises the importance of supporting talent outside of traditional music industry hubs like London.

## How to Get Involved

These opportunities will be made available to TMRW community members through our programmes and events. To be considered:

- Complete at least one TMRW programme
- Maintain an active profile in our community
- Apply when opportunities are announced

The first A&R showcase day is scheduled for April 2026, with applications opening in late February.

We'll share more details about specific opportunities as they're confirmed. This is an exciting new chapter for TMRW Creatives, and we can't wait to see our community members make the most of these incredible opportunities.`,
    date: "January 10, 2026",
    author: "TMRW Team",
    authorRole: "Editorial",
    category: "Partnership",
    image: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=800&q=80",
    featured: false,
    tags: ["Partnership", "Sony Music", "Industry Access"],
  },
  {
    id: 4,
    title: "Spring Programme Applications Now Open",
    excerpt: "Applications for our Spring cohort are now open across all four programmes. Spaces are limited, so early application is encouraged.",
    content: `Applications are now open for our Spring 2026 cohort across all four TMRW programmes: CREATE, BUILD, CONNECT, and WORK. Each programme offers a unique pathway into the music industry, and we're looking for passionate, committed young creatives to join us.

## Programme Start Dates

- **CREATE**: March 4, 2026 (12 weeks)
- **BUILD**: March 11, 2026 (8 weeks)
- **CONNECT**: March 18, 2026 (6 weeks)
- **WORK**: Rolling applications

## CREATE Programme

Our flagship production and artist development programme. Over 12 weeks, you'll develop your sound, learn industry-standard production techniques, and understand the business of being an independent artist.

**Ideal for:** Producers, singer-songwriters, and artists aged 16-25 who want to develop their craft and understand the industry.

**Spaces available:** 15

## BUILD Programme

Focused on the business side of music, BUILD covers everything from personal branding and social media strategy to rights, royalties, and revenue streams.

**Ideal for:** Artists and creatives aged 16-30 who want to understand how to build a sustainable career in music.

**Spaces available:** 20

## CONNECT Programme

All about building your network and accessing opportunities. CONNECT provides direct access to industry professionals, A&R representatives, and potential collaborators.

**Ideal for:** Creatives aged 18-30 who have developed their craft and are ready to make industry connections.

**Spaces available:** 25

## WORK Programme

Our pathway to employment programme, preparing you for roles across the music industry from artist management to marketing, A&R to live events.

**Ideal for:** Young people aged 18-30 interested in working in the music industry (not necessarily as artists).

**Spaces available:** Rolling admissions

## How to Apply

1. Visit our [programmes page](/programmes) to learn more about each programme
2. Complete the online application form
3. Submit any required supporting materials (varies by programme)
4. Attend an interview or audition if shortlisted

## Application Deadline

Applications close on **February 21, 2026** for all Spring programmes (except WORK, which has rolling admissions).

## Fees

All TMRW programmes are **free** for participants. We believe that financial barriers should never prevent talented young people from accessing opportunities.

Don't wait – applications are reviewed on a rolling basis, and spaces fill up quickly. If you have questions about which programme is right for you, drop us a message or attend one of our open days.

[Apply Now](/get-involved)`,
    date: "January 5, 2026",
    author: "TMRW Team",
    authorRole: "Editorial",
    category: "Announcement",
    image: "https://images.unsplash.com/photo-1559523161-0fc0d8b38a7a?w=800&q=80",
    featured: false,
    tags: ["Programmes", "Applications", "Spring 2026"],
  },
  {
    id: 5,
    title: "Year in Review: 2025 Impact Report",
    excerpt: "Reflecting on a year of growth, impact, and community building. From 500+ creatives supported to £50k in paid opportunities, here's what we achieved together.",
    content: `As we close out 2025, we wanted to share some reflections on what has been an incredible year for TMRW Creatives. From our founding in late 2024 to where we are now, the growth has been remarkable – and it's all thanks to our community.

## By the Numbers

### Creatives Supported
**523** young people participated in our programmes, events, and workshops throughout 2025.

### Programme Graduates
**156** creatives completed one of our four core programmes.

### Paid Opportunities
**£52,400** in paid opportunities were facilitated through TMRW, including commissions, placements, and gigs.

### Events Hosted
**34** events, workshops, and showcases were delivered across Medway.

### Industry Connections
**47** industry professionals contributed as mentors, speakers, or collaborators.

## Programme Highlights

### CREATE
Our flagship programme welcomed three cohorts in 2025, with 45 participants developing their production skills and artist identities. Highlights included:
- 4 programme graduates securing management deals
- 12 tracks released through our distribution partnership
- 3 sync placements achieved

### BUILD
62 creatives completed BUILD, gaining crucial business knowledge:
- 89% reported feeling "much more confident" about the business side of music
- 15 participants started registered businesses or sole trader setups
- Average social media growth of 340% during the programme

### CONNECT
Our networking programme facilitated hundreds of valuable connections:
- 8 industry showcases hosted
- 23 participants invited to further meetings with industry professionals
- 6 collaboration projects emerged from CONNECT sessions

### WORK
The newest addition to our programme suite:
- 26 participants completed work readiness training
- 9 secured employment or internships in the music industry
- 100% CV improvement rate

## Community Growth

Beyond the numbers, 2025 saw our community become a genuine support network for young creatives in Medway. From informal studio sessions to peer feedback groups, the connections made extend far beyond our formal programming.

## Looking Ahead to 2026

We have ambitious plans for the year ahead:
- **Expanded capacity** across all programmes
- **New partnerships** with major industry players
- **Residential writing camp** (summer 2026)
- **Alumni network** launch
- **Geographic expansion** to serve more of Kent

## Thank You

None of this would be possible without our community of creatives, our dedicated team, our industry partners, and our funders. Thank you for believing in what we're building.

Here's to an even bigger 2026.

*— The TMRW Team*`,
    date: "December 20, 2025",
    author: "Jordan Mitchell",
    authorRole: "Programme Director",
    category: "Report",
    image: "https://images.unsplash.com/photo-1529070538774-1843cb3265df?w=800&q=80",
    featured: false,
    tags: ["Impact Report", "2025", "Community"],
  },
  {
    id: 6,
    title: "How Tyler Went from Bedroom Producer to Label Signing",
    excerpt: "CONNECT programme alumni Tyler shares his journey from making beats in his bedroom to signing with an independent label in just 18 months.",
    content: `Tyler James, 24, joined TMRW Creatives in early 2024 as a self-taught producer making beats in his bedroom in Chatham. Eighteen months later, he's signed to Rhythm Collective, an independent label known for breaking new UK talent. We sat down with Tyler to hear his story.

## The Beginning

"I'd been making beats for about three years before I found TMRW," Tyler recalls. "I had thousands of beats on my hard drive, but I had no idea what to do with them. I'd put stuff on YouTube and SoundCloud, but nothing was happening."

Tyler discovered TMRW through a flyer at Medway Park. "I was skeptical at first – I'd seen so many 'music industry' things that turned out to be scams. But it was free, and it was local, so I thought I'd check it out."

## The TMRW Experience

Tyler enrolled in the CONNECT programme, focused on industry networking and access.

"CONNECT was eye-opening. I realised that making good music is only half the battle. You need to know people, you need to be in the right rooms, and you need to understand how the industry actually works."

A key moment came during a CONNECT showcase event, where Tyler played some of his productions for a small audience that included several industry professionals.

"I played three beats, expecting nothing. Afterwards, this guy came up to me and asked for my contact details. Turned out he was an A&R scout for Rhythm Collective. I nearly dropped my phone."

## The Journey to Signing

That initial conversation led to a series of meetings over the following months. Tyler was invited to the label's studios in London to meet the team and play more of his work.

"They didn't sign me straight away – it took about six months of back and forth. During that time, I was sending them new beats every couple of weeks, showing that I was consistent and improving."

The deal was signed in September 2025 – a production and artist development agreement that gives Tyler access to the label's resources while he develops his sound.

## Advice for Other Creatives

We asked Tyler what advice he'd give to other TMRW community members:

**1. Be ready when opportunity comes**
"I had hundreds of beats ready to show. When that A&R asked what else I had, I could send him a folder immediately. Be prepared."

**2. Stay consistent**
"The label didn't sign me based on one beat. They signed me because I kept showing up, kept improving, kept sending new work."

**3. Use every resource available**
"TMRW gave me access to things I couldn't have accessed on my own. Studio time, industry connections, knowledge. Take advantage of everything."

**4. Be patient but persistent**
"Six months from first conversation to signing felt like forever. But it's actually fast for this industry. Don't get discouraged if things take time."

## What's Next

Tyler is currently working on his debut project, expected to release in mid-2026. He's also producing for other artists on the Rhythm Collective roster.

"It still feels surreal," he admits. "A year and a half ago, I was just a guy making beats in my room. Now I'm working with a team who believes in me. TMRW was the bridge that made that possible."

*Follow Tyler's journey on Instagram: @tylerjamesbeats*`,
    date: "December 15, 2025",
    author: "Priya Sharma",
    authorRole: "Community Manager",
    category: "Success Story",
    image: "https://images.unsplash.com/photo-1598653222000-6b7b7a552625?w=800&q=80",
    featured: false,
    tags: ["Success Story", "CONNECT Programme", "Production"],
  },
  {
    id: 7,
    title: "Building Your Brand: Lessons from the BUILD Programme",
    excerpt: "Top takeaways from our latest BUILD cohort on personal branding, social media strategy, and standing out in a crowded market.",
    content: `Our Autumn BUILD cohort recently wrapped up, and we've compiled the top lessons learned about personal branding and standing out in today's music landscape. Whether you're an artist, producer, or industry professional, these insights apply.

## 1. Your Brand Is More Than Your Logo

One of the biggest revelations for many participants was understanding that branding goes far beyond visual elements.

"I thought branding meant having a cool logo and matching Instagram aesthetic," says participant Keisha M. "But it's really about the feeling people get when they encounter your work. It's your values, your story, your vibe."

**Key takeaway:** Your brand is the promise you make to your audience. Every touchpoint – from your music to your social media to your live performances – should deliver on that promise consistently.

## 2. Know Your Audience (Really Know Them)

Week three of BUILD focuses on audience development, and it's often the most challenging for participants.

"We had to create detailed audience personas," explains participant Marcus T. "Age, interests, where they hang out online, what other artists they like. It felt weird at first, but it completely changed how I approach content."

**Key takeaway:** The more specifically you can define your ideal fan, the more effectively you can reach them. Trying to appeal to everyone usually means connecting with no one.

## 3. Consistency Beats Virality

In an age of TikTok hits and overnight success stories, BUILD emphasises the power of showing up consistently.

"The data is clear: consistent posting beats viral moments for long-term growth," says BUILD facilitator Aisha Williams. "One viral video might get you followers, but consistent value keeps them engaged."

**Key takeaway:** Develop a sustainable content rhythm you can maintain. Three quality posts per week beats seven rushed ones.

## 4. Collaboration Multiplies Reach

One of the most effective growth strategies discussed in BUILD is strategic collaboration.

"When you collaborate, you're introducing your work to someone else's established audience," Aisha explains. "It's not about having the most followers yourself – it's about connecting with the right people."

**Key takeaway:** Look for collaboration opportunities with creators who share your values and reach your target audience, regardless of their follower count.

## 5. Your Story Is Your Superpower

Perhaps the most powerful branding tool is often overlooked: authenticity.

"There are millions of artists making great music," says participant Jordan K. "What makes you different isn't just your sound – it's your story, your perspective, your journey. That's what people connect with."

**Key takeaway:** Don't be afraid to share your authentic self. Vulnerability and honesty create connection in ways that perfection cannot.

## Putting It Into Practice

BUILD participants leave with a completed brand strategy document and a 90-day action plan. The programme provides the framework, but success comes from consistent implementation.

"The best brand strategy is worthless if it stays in a document," Aisha notes. "What matters is what you do on day one, day thirty, day ninety."

---

*Interested in developing your personal brand? Applications for the Spring BUILD cohort open January 5th.*`,
    date: "December 10, 2025",
    author: "Aisha Williams",
    authorRole: "BUILD Programme Lead",
    category: "Insights",
    image: "https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?w=800&q=80",
    featured: false,
    tags: ["BUILD Programme", "Branding", "Social Media"],
  },
  {
    id: 8,
    title: "December Showcase Highlights",
    excerpt: "Photos and highlights from our December showcase at The Tap & Tin. Featuring performances from 8 TMRW creatives and special industry guests.",
    content: `Last Friday saw our final showcase of 2025 at The Tap & Tin in Chatham, and what a night it was. Eight TMRW creatives took to the stage in front of a packed venue that included community members, family, friends, and special industry guests.

## The Performers

### Zara M.
Opening the night, CREATE graduate Zara delivered a stunning four-song set of atmospheric R&B. Her track "Midnight" had the crowd mesmerised, showcasing the production skills she's developed over the past year.

### Tyler James
Fresh from his label signing, Tyler played a DJ set of his original productions, giving the audience a taste of what's to come from his debut project.

### The Collective (Band Set)
CONNECT participants Kai, Sofia, and Marcus performed as a band for the first time, delivering energetic indie-pop that got the whole room moving.

### Maya Chen
Our sync success story Maya performed a stripped-back set, including "Golden Hour" – the track that landed her major TV placement.

### KJ Verse
Rapper and BUILD graduate KJ Verse brought the energy with a high-impact performance that showcased his growth as a performer over the past six months.

### Nadia
Singer-songwriter Nadia's emotional set was a standout moment, with her song "Letters I'll Never Send" receiving the longest applause of the night.

### DJ Phantom
Closing the performances, DJ Phantom kept the energy high with a genre-spanning set that had everyone on their feet.

### Freestyle Cypher
The night concluded with an open freestyle cypher that saw both familiar faces and newcomers stepping up to the mic.

## Industry Attendance

We were honoured to have several industry guests in attendance:
- Representatives from Sony Music UK (as part of our new partnership)
- A&R scouts from two independent labels
- Music supervisors from a sync licensing company
- Local venue bookers from across Kent

Several performers have already been invited for follow-up conversations – a testament to the quality of talent in our community.

## Community Vibes

Beyond the performances, what made the night special was the community atmosphere. Seeing creatives supporting each other, making connections, and celebrating together embodied everything TMRW Creatives is about.

"Nights like this remind me why we do what we do," says Programme Director Jordan Mitchell. "It's not just about the music – it's about the community we're building."

## Photo Gallery

[Photo gallery would be displayed here]

## What's Next

Our next showcase is scheduled for February 2026. Details will be announced in January, but if you're interested in performing, make sure your TMRW profile is up to date and you've registered interest via your member dashboard.

Thanks to everyone who came out, performed, and made it a night to remember. See you in 2026!

*Photos by Marcus Williams. Follow us on Instagram for more shots from the night.*`,
    date: "December 5, 2025",
    author: "TMRW Team",
    authorRole: "Editorial",
    category: "Event Recap",
    image: "https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae?w=800&q=80",
    featured: false,
    tags: ["Showcase", "Events", "Community"],
  },
]

export function getArticleById(id: number): NewsArticle | undefined {
  return newsArticles.find((article) => article.id === id)
}

export function getFeaturedArticles(): NewsArticle[] {
  return newsArticles.filter((article) => article.featured)
}

export function getArticlesByCategory(category: string): NewsArticle[] {
  return newsArticles.filter((article) => article.category === category)
}

export function getRelatedArticles(currentId: number, limit: number = 3): NewsArticle[] {
  const currentArticle = getArticleById(currentId)
  if (!currentArticle) return []

  return newsArticles
    .filter((article) => article.id !== currentId)
    .filter((article) =>
      article.category === currentArticle.category ||
      article.tags?.some(tag => currentArticle.tags?.includes(tag))
    )
    .slice(0, limit)
}
