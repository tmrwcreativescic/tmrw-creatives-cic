export interface Event {
  id: number
  title: string
  date: string
  time: string
  location: string
  description: string
  fullDescription: string
  type: string
  image: string
  spots: number
  featured: boolean
  requirements?: string[]
  whatToBring?: string[]
  facilitator?: {
    name: string
    role: string
    image: string
  }
}

export const events: Event[] = [
  {
    id: 1,
    title: "Spring Cohort Open Day",
    date: "February 15, 2026",
    time: "2:00 PM - 5:00 PM",
    location: "TMRW HQ, Chatham",
    description: "Meet the team, tour our facilities, and learn about our Spring programmes. Perfect for anyone considering joining TMRW.",
    fullDescription: `Join us for an afternoon of discovery at TMRW HQ. This is your chance to see our facilities firsthand, meet the team, and learn about everything we offer.

Whether you're a young creative looking to develop your skills, a parent wanting to learn more about our programmes, or just curious about what we do, this open day is for you.

You'll get to:
- Tour our recording studio and production suites
- Meet current programme participants and hear their stories
- Chat with our team about which programme is right for you
- Enjoy refreshments and connect with other creatives

No registration required for the open day itself, but spaces for studio tours are limited.`,
    type: "Open Day",
    image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&q=80",
    spots: 50,
    featured: true,
    whatToBring: ["Yourself!", "Questions about our programmes", "A friend if you'd like"],
  },
  {
    id: 2,
    title: "A&R Listening Session",
    date: "February 22, 2026",
    time: "6:00 PM - 9:00 PM",
    location: "TMRW HQ, Chatham",
    description: "Submit your tracks for feedback from active A&Rs. Get honest industry feedback on your music.",
    fullDescription: `This is a rare opportunity to get your music heard by active A&R professionals from major and independent labels.

Each participant will have their track played to the panel, followed by constructive feedback on songwriting, production, market positioning, and next steps.

This isn't about getting signed on the spot — it's about getting real, actionable feedback from people who sign artists for a living.

The session will include:
- Individual track playback and feedback (3-4 minutes per track)
- Group Q&A with the A&R panel
- Networking time after the session
- Written feedback notes sent after the event`,
    type: "Industry Event",
    image: "https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?w=800&q=80",
    spots: 20,
    featured: false,
    requirements: ["Must have at least one finished track to submit", "Track must be original music", "Ages 16+"],
    whatToBring: ["Your track (WAV or high-quality MP3)", "Notebook for feedback", "Questions for the panel"],
    facilitator: {
      name: "Jordan Mitchell",
      role: "Former A&R, Sony Music",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&q=80",
    },
  },
  {
    id: 3,
    title: "Songwriting Workshop: Hooks That Hit",
    date: "March 1, 2026",
    time: "11:00 AM - 3:00 PM",
    location: "TMRW HQ, Chatham",
    description: "Intensive workshop on writing memorable hooks with Grammy-nominated songwriter Jamie Reynolds.",
    fullDescription: `Learn the art and science of writing hooks that stick in people's heads. This intensive workshop with Grammy-nominated songwriter Jamie Reynolds will transform how you approach the most important part of any song.

Jamie has written hooks for artists across pop, R&B, and hip-hop, with songs accumulating over 500 million streams. Now he's sharing his process with TMRW creatives.

Workshop contents:
- The anatomy of a great hook
- Melodic techniques that create memorability
- Lyrical hooks vs melodic hooks
- Workshop exercises and live co-writing
- Feedback on your hook ideas

Lunch will be provided. You'll leave with at least two new hook ideas and a framework for developing more.`,
    type: "Workshop",
    image: "https://images.unsplash.com/photo-1507838153414-b4b713384a76?w=800&q=80",
    spots: 15,
    featured: false,
    requirements: ["Some songwriting experience preferred but not required", "Ages 14+"],
    whatToBring: ["Notebook and pen", "Voice recorder or phone", "Any hook ideas you're working on"],
    facilitator: {
      name: "Jamie Reynolds",
      role: "Grammy-nominated Songwriter",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&q=80",
    },
  },
  {
    id: 4,
    title: "TMRW Showcase: Fresh Faces",
    date: "March 15, 2026",
    time: "7:00 PM - 11:00 PM",
    location: "The Tap & Tin, Chatham",
    description: "Live performances from TMRW creatives. Industry guests, networking, and great music.",
    fullDescription: `Our quarterly showcase returns with a lineup of the freshest talent from the TMRW community.

This is more than just a gig — it's a chance for our creatives to perform in front of industry professionals, build their live performance skills, and connect with a supportive audience.

The evening includes:
- 8 live performances from TMRW creatives
- Industry guest attendance (A&Rs, managers, promoters)
- Networking opportunities
- Professional photography and videography
- DJ sets between performances

Whether you're performing or attending, this is an evening not to be missed. Come support the next generation of Medway's creative talent.

Doors open at 7pm. Performances start at 8pm.`,
    type: "Showcase",
    image: "https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae?w=800&q=80",
    spots: 100,
    featured: true,
    requirements: ["Ages 16+ (under 18s must be accompanied)", "ID may be required"],
    whatToBring: ["Good vibes", "Business cards if you have them"],
  },
  {
    id: 5,
    title: "Social Media Masterclass",
    date: "March 20, 2026",
    time: "6:00 PM - 8:00 PM",
    location: "Online via Zoom",
    description: "Learn to grow your audience authentically with social media strategist Priya Patel.",
    fullDescription: `Stop posting into the void. Learn how to build a genuine audience for your music with social media strategist Priya Patel, who has helped artists grow from 0 to 100k+ followers.

This online masterclass covers:
- Platform-specific strategies (TikTok, Instagram, YouTube)
- Content planning and batching
- The algorithm: what actually works in 2026
- Building community, not just followers
- Monetising your audience
- Live Q&A

You'll receive a workbook with templates and a 30-day content plan framework.

The session will be recorded for those who can't attend live (TMRW members only).`,
    type: "Masterclass",
    image: "https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?w=800&q=80",
    spots: 30,
    featured: false,
    requirements: ["Stable internet connection", "Ages 14+"],
    whatToBring: ["Notebook", "Access to your social media accounts", "Questions about your specific challenges"],
    facilitator: {
      name: "Priya Patel",
      role: "Social Media Strategist",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&q=80",
    },
  },
  {
    id: 6,
    title: "Industry Mixer: Meet The Managers",
    date: "March 28, 2026",
    time: "6:00 PM - 9:00 PM",
    location: "TMRW HQ, Chatham",
    description: "Networking event with artist managers. Learn what they look for and make valuable connections.",
    fullDescription: `Ever wondered what artist managers actually do? What they look for in artists? How to know when you're ready for management?

This networking mixer brings together 5 artist managers from across the UK music industry to share insights and connect with TMRW creatives.

The evening format:
- 6:00 PM: Doors open, refreshments
- 6:30 PM: Panel discussion: "What Managers Really Want"
- 7:30 PM: Speed networking rounds
- 8:30 PM: Open networking

Our manager guests work with artists across genres from emerging to established. This is a chance to learn, ask questions, and make connections that could shape your career.

Smart casual dress code. Light refreshments provided.`,
    type: "Networking",
    image: "https://images.unsplash.com/photo-1529070538774-1843cb3265df?w=800&q=80",
    spots: 25,
    featured: false,
    requirements: ["Ages 18+", "Must have music available to share (Spotify, SoundCloud, etc.)"],
    whatToBring: ["Business cards if you have them", "Your phone with music ready to share", "Questions for the panel"],
  },
]

export function getEventById(id: number): Event | undefined {
  return events.find((event) => event.id === id)
}

export function getFeaturedEvents(): Event[] {
  return events.filter((event) => event.featured)
}

export function getEventsByType(type: string): Event[] {
  return events.filter((event) => event.type === type)
}
