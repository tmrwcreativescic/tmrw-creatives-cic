export interface Opportunity {
  id: number
  title: string
  company: string
  location: string
  type: string
  deadline: string
  description: string
  fullDescription: string
  requirements: string[]
  responsibilities?: string[]
  benefits?: string[]
  compensation: string
  featured: boolean
  contactEmail?: string
  applicationUrl?: string
  postedDate: string
}

export const opportunities: Opportunity[] = [
  {
    id: 1,
    title: "Studio Session Vocalist",
    company: "Independent Producer",
    location: "London",
    type: "Paid Gig",
    deadline: "February 28, 2026",
    description: "Session vocalist needed for upcoming R&B project. Must be comfortable with vocal stacking and harmonies. £150/session.",
    fullDescription: `We're looking for a talented session vocalist to contribute to an upcoming R&B project. This is a fantastic opportunity to work with an established independent producer who has worked with several notable UK artists.

The project involves recording vocals for a 5-track EP, with sessions scheduled across February and March. You'll be working in a professional studio environment in Central London.

We're seeking someone with a strong ear for harmony, experience with vocal stacking, and the ability to take direction while bringing their own creative flair to the project.

This is a paid opportunity with potential for ongoing collaboration on future projects.`,
    requirements: ["Ages 18+", "Demo reel required", "Available weekends", "Experience with R&B/Soul genres", "Professional attitude"],
    responsibilities: [
      "Record lead and backing vocals as directed",
      "Contribute to vocal arrangements",
      "Be available for up to 4-hour sessions",
      "Provide input on harmonies and ad-libs",
    ],
    benefits: [
      "Professional studio experience",
      "Credit on released tracks",
      "Networking with industry professionals",
      "Potential for ongoing collaboration",
    ],
    compensation: "£150/session",
    featured: true,
    postedDate: "January 15, 2026",
    contactEmail: "sessions@tmrwcreatives.org",
  },
  {
    id: 2,
    title: "Marketing Intern",
    company: "Warner Music UK",
    location: "London (Hybrid)",
    type: "Placement",
    deadline: "March 15, 2026",
    description: "6-month paid internship in the digital marketing team. Work on campaigns for major artists.",
    fullDescription: `Warner Music UK is offering an exciting 6-month paid internship within their Digital Marketing team. This is a rare opportunity to gain hands-on experience at one of the world's leading music companies.

As a Marketing Intern, you'll work alongside experienced professionals on digital campaigns for some of the biggest names in music. You'll gain practical experience in social media strategy, content creation, data analysis, and campaign management.

This hybrid role offers flexibility with 3 days in our London office and 2 days working from home. We're looking for someone passionate about music and digital marketing, with strong communication skills and a creative mindset.

TMRW BUILD programme alumni are particularly encouraged to apply, though this is not a requirement.`,
    requirements: ["Ages 18-25", "BUILD programme completion preferred", "Social media savvy", "Strong written communication", "Interest in music industry"],
    responsibilities: [
      "Assist with social media content planning and creation",
      "Monitor and report on campaign performance",
      "Support artist digital marketing strategies",
      "Coordinate with internal teams and external agencies",
      "Contribute creative ideas to campaigns",
    ],
    benefits: [
      "London Living Wage salary",
      "Hybrid working arrangement",
      "Industry mentorship",
      "Access to exclusive events",
      "Potential for permanent role",
    ],
    compensation: "London Living Wage",
    featured: true,
    postedDate: "January 20, 2026",
    applicationUrl: "https://wmg.com/careers",
  },
  {
    id: 3,
    title: "Original Music for Brand Campaign",
    company: "Creative Agency (NDA)",
    location: "Remote",
    type: "Commission",
    deadline: "March 1, 2026",
    description: "60-second original track needed for major sportswear brand TikTok campaign. Urban/electronic style.",
    fullDescription: `A leading creative agency is seeking original music for a major sportswear brand's upcoming TikTok campaign. This is a significant commercial opportunity with excellent compensation.

We need a 60-second original track that captures energy, youth culture, and urban aesthetics. The style should blend electronic and urban influences, suitable for a high-energy sports/lifestyle campaign.

The selected artist will receive full compensation upfront plus sync fees for usage. This is a great opportunity to get your music heard by millions and build your commercial portfolio.

Due to NDA requirements, the brand name will only be disclosed to shortlisted candidates. Portfolio review is required.`,
    requirements: ["18+", "Portfolio required", "Quick turnaround", "Original music only", "Able to provide stems"],
    responsibilities: [
      "Create a 60-second original track",
      "Provide multiple versions (full, instrumental, stems)",
      "Make revisions based on client feedback",
      "Deliver within agreed timeline",
    ],
    benefits: [
      "Major brand exposure",
      "Excellent compensation",
      "Portfolio piece",
      "Potential for future work",
    ],
    compensation: "£2,000 + sync fee",
    featured: true,
    postedDate: "January 18, 2026",
    contactEmail: "commissions@tmrwcreatives.org",
  },
  {
    id: 4,
    title: "Support Act - Spring Tour",
    company: "UK Artist (10k+ monthly listeners)",
    location: "UK Tour (5 dates)",
    type: "Performance",
    deadline: "February 20, 2026",
    description: "Opening act needed for 5-date UK tour. 20-minute set. Travel and accommodation covered.",
    fullDescription: `An established UK artist with over 10,000 monthly Spotify listeners is looking for a support act for their upcoming Spring tour. This is an excellent opportunity for emerging artists to perform at established venues across the UK.

The tour covers 5 cities: Manchester, Birmingham, Bristol, Leeds, and London, with dates spanning March 10-20. You'll have a 20-minute set slot each night, performing to audiences of 200-500 people.

All travel and accommodation expenses are covered, plus a performance fee per show. The headline artist is looking for someone with a complementary sound and professional stage presence.

This is ideal for artists looking to build their live performance experience and expand their fanbase outside their local area.`,
    requirements: ["Live performance experience", "Own PA not required", "Available March 10-20", "Professional attitude", "20 minutes of original material"],
    responsibilities: [
      "Perform 20-minute set at each venue",
      "Participate in soundcheck",
      "Engage with audience and promote the tour",
      "Be professional and punctual",
    ],
    benefits: [
      "Travel and accommodation covered",
      "Exposure to new audiences",
      "Networking with headline artist and team",
      "Professional venue experience",
    ],
    compensation: "£200/show + expenses",
    featured: false,
    postedDate: "January 22, 2026",
    contactEmail: "bookings@tmrwcreatives.org",
  },
  {
    id: 5,
    title: "Podcast Jingle Creator",
    company: "Independent Podcast Network",
    location: "Remote",
    type: "Commission",
    deadline: "Open",
    description: "Create intro/outro jingles for podcast network. Ongoing opportunity for the right creative.",
    fullDescription: `An independent podcast network is seeking a creative music producer to create intro and outro jingles for their growing roster of podcasts. This is an ongoing opportunity with regular work available.

The network currently hosts 12 podcasts across various genres including true crime, comedy, music industry, and lifestyle. Each podcast needs unique sonic branding that captures its personality and engages listeners.

We're looking for someone versatile who can create different styles of short-form music. Typical deliverables include 15-30 second intros, 10-15 second outros, and transition stings.

This is perfect for producers who enjoy variety and want to build a steady income stream from their music.`,
    requirements: ["Production skills", "Quick turnaround", "Flexible style", "Professional DAW proficiency", "Good communication"],
    responsibilities: [
      "Create custom jingles for podcasts",
      "Provide multiple concepts for client review",
      "Make revisions as needed",
      "Deliver high-quality audio files",
    ],
    benefits: [
      "Ongoing work relationship",
      "Creative variety",
      "Portfolio building",
      "Flexible deadlines",
    ],
    compensation: "£75-150 per jingle",
    featured: false,
    postedDate: "January 10, 2026",
    contactEmail: "audio@tmrwcreatives.org",
  },
  {
    id: 6,
    title: "A&R Scout - Kent Region",
    company: "Independent Label",
    location: "Kent/Medway",
    type: "Part-time Role",
    deadline: "March 30, 2026",
    description: "Help identify and develop emerging talent in the Kent region. Flexible hours, commission-based.",
    fullDescription: `An independent record label is expanding their A&R network and looking for a scout to cover the Kent/Medway region. This is a flexible, part-time opportunity perfect for someone with deep connections to the local music scene.

As an A&R Scout, you'll attend local gigs, monitor online platforms, and identify promising unsigned artists. When you find talent that fits the label's roster, you'll make introductions and potentially earn commission on signed artists.

The ideal candidate has extensive knowledge of the Kent music scene, strong networking skills, and an ear for commercially viable talent. Experience with the TMRW CONNECT programme is a plus but not required.

This role offers flexibility to work around other commitments while building valuable industry experience.`,
    requirements: ["Strong local music scene knowledge", "Networking skills", "CONNECT programme completion preferred", "Self-motivated", "Good written communication"],
    responsibilities: [
      "Attend local gigs and showcases",
      "Monitor online platforms for emerging talent",
      "Submit artist recommendations to A&R team",
      "Build relationships with local artists and venues",
    ],
    benefits: [
      "Flexible working hours",
      "Industry mentorship",
      "Commission on signed artists",
      "Build A&R experience",
    ],
    compensation: "Commission-based",
    featured: false,
    postedDate: "January 25, 2026",
    contactEmail: "ar@tmrwcreatives.org",
  },
  {
    id: 7,
    title: "Music Video Director Assistant",
    company: "Production Company",
    location: "London",
    type: "Placement",
    deadline: "February 25, 2026",
    description: "Assist on music video shoots for major label artists. Great learning opportunity.",
    fullDescription: `A London-based production company is offering a placement opportunity for an aspiring music video director assistant. You'll work on shoots for major label artists, gaining invaluable hands-on experience in professional video production.

This role involves supporting the director and production team across all aspects of music video creation. From pre-production planning to on-set assistance and post-production coordination, you'll get a comprehensive view of the production process.

Shoots typically take place across London and occasionally require early morning starts. The role is freelance-based, with work available on a shoot-by-shoot basis.

This is an excellent stepping stone for anyone looking to break into music video direction or production.`,
    requirements: ["Interest in visual content", "Available for early calls", "Own transport preferred", "Reliable and professional", "Physical stamina for long shoot days"],
    responsibilities: [
      "Assist director with shot setup",
      "Coordinate with talent and crew",
      "Help manage equipment",
      "Support with on-set logistics",
    ],
    benefits: [
      "Major artist video credits",
      "Industry connections",
      "Hands-on production experience",
      "Mentorship from experienced directors",
    ],
    compensation: "£100/day",
    featured: false,
    postedDate: "January 12, 2026",
    contactEmail: "production@tmrwcreatives.org",
  },
  {
    id: 8,
    title: "Sync Library Submissions",
    company: "TMRW Sync Partners",
    location: "Remote",
    type: "Submission",
    deadline: "Ongoing",
    description: "Submit your tracks to our sync library partners. Opportunities for TV, film, and advertising placements.",
    fullDescription: `TMRW Creatives has partnered with several sync licensing libraries to provide our community members with opportunities to place their music in TV shows, films, advertisements, and other media.

This is an ongoing submission opportunity. If your music is selected for one of our partner libraries, you'll retain ownership while earning royalties from any placements.

We're looking for high-quality, original productions across all genres. Instrumental versions are particularly valuable for sync purposes. All submissions must be properly mixed and mastered.

This is a non-exclusive opportunity, meaning you can still release your music elsewhere while being part of sync libraries.`,
    requirements: ["Original music only", "Full rights ownership", "High-quality masters", "Instrumentals preferred", "Metadata provided"],
    responsibilities: [
      "Submit high-quality original tracks",
      "Provide all required metadata",
      "Respond to feedback and requests",
      "Maintain rights to submitted works",
    ],
    benefits: [
      "Passive income potential",
      "Major media exposure",
      "Non-exclusive agreement",
      "Ongoing opportunities",
    ],
    compensation: "Varies per placement",
    featured: false,
    postedDate: "January 5, 2026",
    contactEmail: "sync@tmrwcreatives.org",
  },
]

export function getOpportunityById(id: number): Opportunity | undefined {
  return opportunities.find((opp) => opp.id === id)
}

export function getFeaturedOpportunities(): Opportunity[] {
  return opportunities.filter((opp) => opp.featured)
}

export function getOpportunitiesByType(type: string): Opportunity[] {
  return opportunities.filter((opp) => opp.type === type)
}
