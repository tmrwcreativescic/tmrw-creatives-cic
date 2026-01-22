import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { NewsCard } from "@/components/shared/NewsCard"
import { Button } from "@/components/ui/button"

const newsItems = [
  {
    title: "Music Writing Camp Returns This Summer",
    excerpt:
      "Join us for an intensive week of songwriting, production, and collaboration with industry professionals. Limited spots available for ages 16-25.",
    date: "January 15, 2026",
    image:
      "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=800&q=80",
    href: "/news/music-writing-camp-2026",
    featured: true,
    tag: "Featured",
  },
  {
    title: "New Partnership with Sony Music UK",
    excerpt:
      "Exciting news as we announce our new industry partnership bringing more opportunities to Medway creatives.",
    date: "January 10, 2026",
    image:
      "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=600&q=80",
    href: "/news/sony-partnership",
  },
  {
    title: "Spring Programme Applications Open",
    excerpt:
      "Applications for our Spring cohort are now open. Spaces are limited across all four programmes.",
    date: "January 5, 2026",
    image:
      "https://images.unsplash.com/photo-1559523161-0fc0d8b38a7a?w=600&q=80",
    href: "/news/spring-applications",
  },
]

export function NewsGrid() {
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
          {newsItems.map((item) => (
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
