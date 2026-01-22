import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { NewsCard } from "@/components/shared/NewsCard"
import { Button } from "@/components/ui/button"
import { newsArticles } from "@/data/news"

export function NewsGrid() {
  // Get the first 3 articles for the homepage
  const latestNews = newsArticles.slice(0, 3).map((article) => ({
    title: article.title,
    excerpt: article.excerpt,
    date: article.date,
    image: article.image,
    href: `/news/${article.id}`,
    featured: article.featured,
    tag: article.featured ? "Featured" : undefined,
  }))

  return (
    <section className="py-24 lg:py-32 bg-tmrw-white">
      <div className="container mx-auto px-4 lg:px-6">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-12">
          <div>
            <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold uppercase text-tmrw-black mb-4">
              Latest News
            </h2>
            <div className="w-24 h-1 bg-tmrw-gradient rounded-full" />
          </div>
          <Button
            asChild
            variant="ghost"
            className="mt-6 md:mt-0 font-accent font-bold text-tmrw-purple hover:text-tmrw-purple/80 hover:bg-transparent p-0 h-auto"
          >
            <Link href="/news" className="inline-flex items-center gap-2">
              View All News <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
        </div>

        {/* News Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {latestNews.map((item) => (
            <NewsCard key={item.title} {...item} />
          ))}

          {/* CTA Card */}
          <div className="bg-tmrw-gradient rounded-lg p-8 flex flex-col justify-center text-white">
            <h3 className="font-heading text-2xl font-bold uppercase mb-4">
              Got an Idea?
            </h3>
            <p className="font-body mb-6">
              We want to hear from you. Whether it&apos;s an event, a workshop, or a
              campaign.
            </p>
            <Button
              asChild
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-tmrw-purple font-accent font-bold"
            >
              <Link href="/contact">Contact Us</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
