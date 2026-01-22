import Link from "next/link"
import Image from "next/image"
import { ArrowRight, Calendar } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

interface NewsCardProps {
  title: string
  excerpt: string
  date: string
  image: string
  href: string
  featured?: boolean
  tag?: string
}

export function NewsCard({
  title,
  excerpt,
  date,
  image,
  href,
  featured = false,
  tag,
}: NewsCardProps) {
  if (featured) {
    return (
      <Card className="group overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-300 bg-white col-span-full lg:col-span-2 row-span-2">
        <div className="grid md:grid-cols-2 h-full">
          <div className="relative h-64 md:h-full overflow-hidden">
            <Image
              src={image}
              alt={title}
              fill
              className="object-cover transition-all duration-500 group-hover:scale-105"
            />
            {tag && (
              <Badge
                variant="purple"
                className="absolute top-4 left-4 font-accent font-bold text-xs uppercase"
              >
                {tag}
              </Badge>
            )}
          </div>
          <CardContent className="p-8 flex flex-col justify-center">
            <div className="flex items-center gap-2 text-gray-500 text-sm mb-4 font-body">
              <Calendar className="w-4 h-4" />
              {date}
            </div>
            <h3 className="font-heading text-2xl md:text-3xl font-bold mb-4 uppercase text-tmrw-black group-hover:text-tmrw-purple transition-colors">
              {title}
            </h3>
            <p className="text-gray-600 mb-6 font-body leading-relaxed line-clamp-3">
              {excerpt}
            </p>
            <Link
              href={href}
              className="inline-flex items-center text-tmrw-purple font-accent font-bold hover:gap-3 gap-2 transition-all"
            >
              Read More <ArrowRight className="h-4 w-4" />
            </Link>
          </CardContent>
        </div>
      </Card>
    )
  }

  return (
    <Card className="group overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 bg-white">
      <div className="relative h-48 overflow-hidden">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover transition-all duration-500 group-hover:scale-105"
        />
        {tag && (
          <Badge
            variant="purple"
            className="absolute top-4 left-4 font-accent font-bold text-xs uppercase"
          >
            {tag}
          </Badge>
        )}
      </div>
      <CardContent className="p-6">
        <div className="flex items-center gap-2 text-gray-500 text-sm mb-3 font-body">
          <Calendar className="w-4 h-4" />
          {date}
        </div>
        <h3 className="font-heading text-xl font-bold mb-3 uppercase text-tmrw-black group-hover:text-tmrw-purple transition-colors line-clamp-2">
          {title}
        </h3>
        <p className="text-gray-600 font-body leading-relaxed line-clamp-2 mb-4">
          {excerpt}
        </p>
        <Link
          href={href}
          className="inline-flex items-center text-tmrw-purple font-accent font-bold text-sm hover:gap-3 gap-2 transition-all"
        >
          Read More <ArrowRight className="h-4 w-4" />
        </Link>
      </CardContent>
    </Card>
  )
}
