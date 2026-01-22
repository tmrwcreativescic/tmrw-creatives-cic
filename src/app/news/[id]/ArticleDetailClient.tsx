"use client"

import Image from "next/image"
import Link from "next/link"
import { Calendar, User, ArrowLeft, Share2, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { getRelatedArticles } from "@/data/news"
import type { NewsArticle } from "@/data/news"

interface ArticleDetailClientProps {
  article: NewsArticle
}

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

export function ArticleDetailClient({ article }: ArticleDetailClientProps) {
  const relatedArticles = getRelatedArticles(article.id, 3)

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: article.title,
          text: article.excerpt,
          url: window.location.href,
        })
      } catch {
        // User cancelled or error
      }
    } else {
      navigator.clipboard.writeText(window.location.href)
      alert("Link copied to clipboard!")
    }
  }

  // Simple markdown-like rendering for the content
  const renderContent = (content: string) => {
    const lines = content.split("\n")
    const elements: React.ReactNode[] = []
    let currentList: string[] = []
    let listType: "ul" | "ol" | null = null

    const flushList = () => {
      if (currentList.length > 0 && listType) {
        const ListTag = listType
        elements.push(
          <ListTag key={elements.length} className={listType === "ol" ? "list-decimal list-inside space-y-1 mb-4" : "list-disc list-inside space-y-1 mb-4"}>
            {currentList.map((item, i) => (
              <li key={i} className="text-gray-700">{item}</li>
            ))}
          </ListTag>
        )
        currentList = []
        listType = null
      }
    }

    lines.forEach((line, index) => {
      // Headers
      if (line.startsWith("## ")) {
        flushList()
        elements.push(
          <h2 key={index} className="font-heading text-2xl font-bold uppercase text-tmrw-black mt-8 mb-4">
            {line.replace("## ", "")}
          </h2>
        )
      } else if (line.startsWith("### ")) {
        flushList()
        elements.push(
          <h3 key={index} className="font-heading text-xl font-bold uppercase text-tmrw-black mt-6 mb-3">
            {line.replace("### ", "")}
          </h3>
        )
      }
      // Bold text in lists
      else if (line.startsWith("- **") || line.startsWith("* **")) {
        const match = line.match(/^[-*]\s+\*\*(.+?)\*\*\s*[-–]?\s*(.*)$/)
        if (match) {
          if (listType !== "ul") {
            flushList()
            listType = "ul"
          }
          currentList.push(`${match[1]}: ${match[2]}`)
        }
      }
      // Numbered lists
      else if (/^\d+\.\s/.test(line)) {
        if (listType !== "ol") {
          flushList()
          listType = "ol"
        }
        currentList.push(line.replace(/^\d+\.\s/, ""))
      }
      // Unordered lists
      else if (line.startsWith("- ") || line.startsWith("* ")) {
        if (listType !== "ul") {
          flushList()
          listType = "ul"
        }
        currentList.push(line.replace(/^[-*]\s/, ""))
      }
      // Italic text (single line)
      else if (line.startsWith("*") && line.endsWith("*") && !line.startsWith("**")) {
        flushList()
        elements.push(
          <p key={index} className="text-gray-500 italic mb-4">
            {line.slice(1, -1)}
          </p>
        )
      }
      // Regular paragraphs
      else if (line.trim() !== "") {
        flushList()
        // Handle inline bold
        const parts = line.split(/\*\*(.+?)\*\*/g)
        const formattedLine = parts.map((part, i) =>
          i % 2 === 1 ? <strong key={i}>{part}</strong> : part
        )
        elements.push(
          <p key={index} className="text-gray-700 mb-4 leading-relaxed">
            {formattedLine}
          </p>
        )
      }
      // Empty lines
      else if (line.trim() === "" && currentList.length > 0) {
        flushList()
      }
    })

    flushList()
    return elements
  }

  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-24 pb-0 bg-tmrw-black">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src={article.image}
            alt={article.title}
            fill
            className="object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-tmrw-black via-tmrw-black/80 to-tmrw-black/60" />
        </div>

        <div className="container mx-auto px-4 lg:px-6 relative z-10 py-16 lg:py-24">
          {/* Back Button */}
          <Link
            href="/news"
            className="inline-flex items-center gap-2 text-white/80 hover:text-white mb-8 font-accent text-sm transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to News
          </Link>

          <div className="max-w-3xl">
            <Badge variant={getCategoryColor(article.category)} className="mb-4 font-accent">
              {article.category}
            </Badge>

            <h1 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold uppercase text-white leading-tight mb-6">
              {article.title}
            </h1>

            <p className="font-body text-xl text-gray-300 mb-8">
              {article.excerpt}
            </p>

            {/* Article Meta */}
            <div className="flex flex-wrap items-center gap-6 text-white">
              <div className="flex items-center gap-2">
                <Calendar className="w-5 h-5 text-tmrw-cyan" />
                <span className="font-body">{article.date}</span>
              </div>
              <div className="flex items-center gap-2">
                <User className="w-5 h-5 text-tmrw-cyan" />
                <span className="font-body">
                  {article.author}
                  {article.authorRole && (
                    <span className="text-gray-400"> • {article.authorRole}</span>
                  )}
                </span>
              </div>
              <Button
                variant="outline"
                size="sm"
                onClick={handleShare}
                className="font-accent"
              >
                <Share2 className="mr-2 h-4 w-4" />
                Share
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16 lg:py-24 bg-tmrw-white">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2">
              <article className="prose prose-lg max-w-none font-body">
                {renderContent(article.content)}
              </article>

              {/* Tags */}
              {article.tags && article.tags.length > 0 && (
                <div className="mt-12 pt-8 border-t border-gray-200">
                  <h3 className="font-accent text-sm font-bold text-gray-500 mb-3">Tags</h3>
                  <div className="flex flex-wrap gap-2">
                    {article.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm font-body"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {/* Share Section */}
              <div className="mt-8 pt-8 border-t border-gray-200">
                <div className="flex items-center justify-between">
                  <p className="font-body text-gray-600">Found this article helpful?</p>
                  <Button
                    variant="outline-dark"
                    onClick={handleShare}
                    className="font-accent font-bold"
                  >
                    <Share2 className="mr-2 h-4 w-4" />
                    Share Article
                  </Button>
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="sticky top-24 space-y-8">
                {/* Author Card */}
                <Card className="border-0 shadow-lg">
                  <CardContent className="p-6">
                    <h3 className="font-heading text-lg font-bold uppercase text-tmrw-black mb-4">
                      About the Author
                    </h3>
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-full bg-tmrw-gradient flex items-center justify-center text-white font-bold">
                        {article.author.charAt(0)}
                      </div>
                      <div>
                        <p className="font-heading font-bold text-tmrw-black">
                          {article.author}
                        </p>
                        {article.authorRole && (
                          <p className="font-accent text-sm text-tmrw-purple">
                            {article.authorRole}
                          </p>
                        )}
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Related Articles */}
                {relatedArticles.length > 0 && (
                  <Card className="border-0 shadow-lg">
                    <CardContent className="p-6">
                      <h3 className="font-heading text-lg font-bold uppercase text-tmrw-black mb-4">
                        Related Articles
                      </h3>
                      <div className="space-y-4">
                        {relatedArticles.map((related) => (
                          <Link
                            key={related.id}
                            href={`/news/${related.id}`}
                            className="group block"
                          >
                            <p className="font-heading text-sm font-bold text-tmrw-black group-hover:text-tmrw-purple transition-colors line-clamp-2">
                              {related.title}
                            </p>
                            <p className="font-body text-xs text-gray-500 mt-1">
                              {related.date}
                            </p>
                          </Link>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                )}

                {/* Newsletter Card */}
                <Card className="border-0 shadow-lg bg-tmrw-black text-white">
                  <CardContent className="p-6">
                    <h3 className="font-heading text-lg font-bold uppercase mb-2">
                      Stay Updated
                    </h3>
                    <p className="font-body text-sm text-gray-300 mb-4">
                      Get the latest news and stories in your inbox.
                    </p>
                    <Button asChild className="w-full font-accent font-bold">
                      <Link href="/get-involved">Subscribe</Link>
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* More Articles CTA */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 lg:px-6 text-center">
          <h2 className="font-heading text-2xl font-bold uppercase text-tmrw-black mb-4">
            Want More Stories?
          </h2>
          <p className="font-body text-gray-600 mb-6">
            Explore more news, success stories, and insights from the TMRW community.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button asChild variant="outline-dark" className="font-accent font-bold">
              <Link href="/news">
                View All Articles <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button asChild className="font-accent font-bold">
              <Link href="/get-involved">Join TMRW</Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  )
}
