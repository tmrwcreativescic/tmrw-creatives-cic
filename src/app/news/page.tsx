import Image from "next/image"
import Link from "next/link"
import { Metadata } from "next"
import { Calendar, ArrowRight, User } from "lucide-react"
import { PageHero } from "@/components/shared/PageHero"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export const metadata: Metadata = {
  title: "News | TMRW Creatives CIC",
  description: "Latest news, stories, and updates from TMRW Creatives and our community of young creatives in Medway.",
}

const newsArticles = [
  {
    id: 1,
    title: "Music Writing Camp Returns This Summer",
    excerpt: "Join us for an intensive week of songwriting, production, and collaboration with industry professionals. Applications open February 1st for our biggest writing camp yet.",
    date: "January 15, 2026",
    author: "TMRW Team",
    category: "Announcement",
    image: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=800&q=80",
    featured: true,
  },
  {
    id: 2,
    title: "TMRW Creative Lands Major Sync Placement",
    excerpt: "CREATE programme graduate Maya Chen has secured her first major sync placement with a national TV campaign. We caught up with her to discuss the journey.",
    date: "January 12, 2026",
    author: "Jordan Mitchell",
    category: "Success Story",
    image: "https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?w=800&q=80",
    featured: true,
  },
  {
    id: 3,
    title: "New Partnership with Sony Music UK Announced",
    excerpt: "We're excited to announce a new industry partnership that will bring exclusive opportunities to our community, including mentorship programmes and A&R access.",
    date: "January 10, 2026",
    author: "TMRW Team",
    category: "Partnership",
    image: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=800&q=80",
    featured: false,
  },
  {
    id: 4,
    title: "Spring Programme Applications Now Open",
    excerpt: "Applications for our Spring cohort are now open across all four programmes. Spaces are limited, so early application is encouraged.",
    date: "January 5, 2026",
    author: "TMRW Team",
    category: "Announcement",
    image: "https://images.unsplash.com/photo-1559523161-0fc0d8b38a7a?w=800&q=80",
    featured: false,
  },
  {
    id: 5,
    title: "Year in Review: 2025 Impact Report",
    excerpt: "Reflecting on a year of growth, impact, and community building. From 500+ creatives supported to £50k in paid opportunities, here's what we achieved together.",
    date: "December 20, 2025",
    author: "Jordan Mitchell",
    category: "Report",
    image: "https://images.unsplash.com/photo-1529070538774-1843cb3265df?w=800&q=80",
    featured: false,
  },
  {
    id: 6,
    title: "How Tyler Went from Bedroom Producer to Label Signing",
    excerpt: "CONNECT programme alumni Tyler shares his journey from making beats in his bedroom to signing with an independent label in just 18 months.",
    date: "December 15, 2025",
    author: "Priya Sharma",
    category: "Success Story",
    image: "https://images.unsplash.com/photo-1598653222000-6b7b7a552625?w=800&q=80",
    featured: false,
  },
  {
    id: 7,
    title: "Building Your Brand: Lessons from the BUILD Programme",
    excerpt: "Top takeaways from our latest BUILD cohort on personal branding, social media strategy, and standing out in a crowded market.",
    date: "December 10, 2025",
    author: "Aisha Williams",
    category: "Insights",
    image: "https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?w=800&q=80",
    featured: false,
  },
  {
    id: 8,
    title: "December Showcase Highlights",
    excerpt: "Photos and highlights from our December showcase at The Tap & Tin. Featuring performances from 8 TMRW creatives and special industry guests.",
    date: "December 5, 2025",
    author: "TMRW Team",
    category: "Event Recap",
    image: "https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae?w=800&q=80",
    featured: false,
  },
]

const categories = [
  "All",
  "Announcement",
  "Success Story",
  "Partnership",
  "Insights",
  "Event Recap",
  "Report",
]

function getCategoryColor(category: string): "purple" | "magenta" | "cyan" | "dark" {
  switch (category) {
    case "Announcement":
      return "purple"
    case "Success Story":
      return "magenta"
    case "Partnership":
    case "Insights":
      return "cyan"
    default:
      return "dark"
  }
}

export default function NewsPage() {
  const featuredArticles = newsArticles.filter((a) => a.featured)
  const regularArticles = newsArticles.filter((a) => !a.featured)

  return (
    <>
      <PageHero
        badge="NEWS & STORIES"
        title="What's"
        highlight="Happening."
        description="News, stories, and updates from TMRW Creatives and our community of young creatives in Medway."
      />

      {/* Featured Articles */}
      <section className="py-20 lg:py-28 bg-tmrw-white">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="grid lg:grid-cols-2 gap-8">
            {featuredArticles.map((article, index) => (
              <Card
                key={article.id}
                className={`group overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all ${
                  index === 0 ? "lg:row-span-2" : ""
                }`}
              >
                <div className={`relative ${index === 0 ? "h-80 lg:h-full" : "h-64"} overflow-hidden`}>
                  <Image
                    src={article.image}
                    alt={article.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                  <div className="absolute top-4 left-4">
                    <Badge variant={getCategoryColor(article.category)} className="font-accent">
                      {article.category}
                    </Badge>
                  </div>
                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <div className="flex items-center gap-4 text-sm mb-3 text-gray-300">
                      <span className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        {article.date}
                      </span>
                      <span className="flex items-center gap-1">
                        <User className="w-4 h-4" />
                        {article.author}
                      </span>
                    </div>
                    <h3 className={`font-heading font-bold uppercase mb-2 ${
                      index === 0 ? "text-2xl lg:text-3xl" : "text-xl"
                    }`}>
                      {article.title}
                    </h3>
                    <p className="font-body text-gray-300 text-sm line-clamp-2 mb-4">
                      {article.excerpt}
                    </p>
                    <Link
                      href={`/news/${article.id}`}
                      className="font-accent font-bold text-sm inline-flex items-center gap-2 hover:gap-3 transition-all"
                    >
                      Read More <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* All Articles */}
      <section className="py-20 lg:py-28 bg-gray-50">
        <div className="container mx-auto px-4 lg:px-6">
          {/* Category Filter */}
          <div className="flex flex-wrap gap-3 mb-12">
            {categories.map((category) => (
              <button
                key={category}
                className="px-4 py-2 rounded-full font-accent text-sm font-medium bg-white border border-gray-200 hover:border-tmrw-purple hover:text-tmrw-purple transition-colors"
              >
                {category}
              </button>
            ))}
          </div>

          {/* Articles Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {regularArticles.map((article) => (
              <Card
                key={article.id}
                className="group overflow-hidden border-0 shadow-lg hover:shadow-xl transition-all hover:-translate-y-1"
              >
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={article.image}
                    alt={article.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <Badge
                    variant={getCategoryColor(article.category)}
                    className="absolute top-4 left-4 font-accent"
                  >
                    {article.category}
                  </Badge>
                </div>
                <CardContent className="p-6">
                  <div className="flex items-center gap-4 text-sm text-gray-500 mb-3">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      {article.date}
                    </span>
                  </div>
                  <h3 className="font-heading text-lg font-bold uppercase text-tmrw-black mb-2 group-hover:text-tmrw-purple transition-colors line-clamp-2">
                    {article.title}
                  </h3>
                  <p className="font-body text-gray-600 text-sm line-clamp-3 mb-4">
                    {article.excerpt}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="flex items-center gap-2 text-sm text-gray-500">
                      <User className="w-4 h-4" />
                      {article.author}
                    </span>
                    <Link
                      href={`/news/${article.id}`}
                      className="font-accent font-bold text-sm text-tmrw-purple hover:underline inline-flex items-center gap-1"
                    >
                      Read <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Load More */}
          <div className="text-center mt-12">
            <Button variant="outline" size="lg" className="font-accent font-bold">
              Load More Articles
            </Button>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-20 lg:py-28 bg-tmrw-black text-white">
        <div className="container mx-auto px-4 lg:px-6 text-center">
          <h2 className="font-heading text-3xl md:text-4xl font-bold uppercase mb-4">
            Stay in the Loop
          </h2>
          <p className="font-body text-lg text-gray-300 max-w-2xl mx-auto mb-8">
            Get the latest news, opportunities, and stories delivered to your inbox.
          </p>
          <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder:text-gray-400 focus:outline-none focus:border-tmrw-purple"
            />
            <Button type="submit" className="font-accent font-bold">
              Subscribe
            </Button>
          </form>
        </div>
      </section>
    </>
  )
}
