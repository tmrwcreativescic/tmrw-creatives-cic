import Link from "next/link"
import Image from "next/image"
import { ArrowRight } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

interface ProgrammeCardProps {
  title: string
  description: string
  tag: string
  tagColor: "purple" | "magenta" | "cyan" | "dark"
  image: string
  href: string
}

export function ProgrammeCard({
  title,
  description,
  tag,
  tagColor,
  image,
  href,
}: ProgrammeCardProps) {
  return (
    <Card className="group overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 bg-white">
      <div className="relative h-48 overflow-hidden">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover transition-all duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        <Badge
          variant={tagColor}
          className="absolute top-4 right-4 font-accent font-bold text-xs uppercase tracking-wider"
        >
          {tag}
        </Badge>
      </div>
      <CardContent className="p-6">
        <h3 className="font-heading text-2xl font-bold mb-3 uppercase text-tmrw-black group-hover:text-tmrw-purple transition-colors">
          {title}
        </h3>
        <p className="text-gray-600 mb-4 font-body leading-relaxed">
          {description}
        </p>
        <Link
          href={href}
          className="inline-flex items-center text-tmrw-purple font-accent font-bold hover:gap-3 gap-2 transition-all"
        >
          Learn More <ArrowRight className="h-4 w-4" />
        </Link>
      </CardContent>
    </Card>
  )
}
