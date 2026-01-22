import { Metadata } from "next"
import { notFound } from "next/navigation"
import { newsArticles, getArticleById } from "@/data/news"
import { ArticleDetailClient } from "./ArticleDetailClient"

interface ArticlePageProps {
  params: Promise<{ id: string }>
}

export async function generateStaticParams() {
  return newsArticles.map((article) => ({
    id: article.id.toString(),
  }))
}

export async function generateMetadata({ params }: ArticlePageProps): Promise<Metadata> {
  const { id } = await params
  const article = getArticleById(parseInt(id))

  if (!article) {
    return {
      title: "Article Not Found | TMRW Creatives CIC",
    }
  }

  return {
    title: `${article.title} | TMRW Creatives CIC`,
    description: article.excerpt,
  }
}

export default async function ArticlePage({ params }: ArticlePageProps) {
  const { id } = await params
  const article = getArticleById(parseInt(id))

  if (!article) {
    notFound()
  }

  return <ArticleDetailClient article={article} />
}
