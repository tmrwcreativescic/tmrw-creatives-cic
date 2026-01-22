import Image from "next/image"
import Link from "next/link"
import { Metadata } from "next"
import { Calendar, ArrowRight, User } from "lucide-react"
import { PageHero } from "@/components/shared/PageHero"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { newsArticles, getFeaturedArticles } from "@/data/news"

export const metadata: Metadata = {
  title: "News | TMRW Creatives CIC",
  description: "Latest news, stories, and updates from TMRW Creatives and our community of young creatives in Medway.",
}

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
  const featuredArticles = getFeaturedArticles()
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
              <Link
                key={article.id}
                href={`/news/${article.id}`}
                className={`group block ${index === 0 ? "lg:row-span-2" : ""}`}
              >
                <Card className="overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all h-full">
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
                      <h3 className={`font-heading font-bold uppercase mb-2 group-hover:text-tmrw-cyan transition-colors ${
                        index === 0 ? "text-2xl lg:text-3xl" : "text-xl"
                      }`}>
                        {article.title}
                      </h3>
                      <p className="font-body text-gray-300 text-sm line-clamp-2 mb-4">
                        {article.excerpt}
                      </p>
                      <span className="font-accent font-bold text-sm inline-flex items-center gap-2 group-hover:gap-3 transition-all">
                        Read More <ArrowRight className="w-4 h-4" />
                      </span>
                    </div>
                  </div>
                </Card>
              </Link>
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
              <Link
                key={article.id}
                href={`/news/${article.id}`}
                className="group block"
              >
                <Card className="overflow-hidden border-0 shadow-lg hover:shadow-xl transition-all hover:-translate-y-1 h-full">
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
                      <span className="font-accent font-bold text-sm text-tmrw-purple inline-flex items-center gap-1 group-hover:gap-2 transition-all">
                        Read More <ArrowRight className="w-4 h-4" />
                      </span>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>

          {/* Load More */}
          <div className="text-center mt-12">
            <Button variant="outline-dark" size="lg" className="font-accent font-bold">
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
