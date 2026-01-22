import { Badge } from "@/components/ui/badge"

interface PageHeroProps {
  badge?: string
  title: string
  highlight?: string
  description: string
}

export function PageHero({ badge, title, highlight, description }: PageHeroProps) {
  return (
    <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 bg-tmrw-black text-white overflow-hidden">
      {/* Dot pattern overlay */}
      <div className="absolute inset-0 dot-pattern opacity-20" />

      {/* Gradient orbs */}
      <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-tmrw-purple/20 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-1/4 w-64 h-64 bg-tmrw-magenta/20 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 lg:px-6 relative z-10">
        <div className="max-w-3xl">
          {badge && (
            <Badge className="mb-6 bg-tmrw-purple text-white font-accent text-sm px-4 py-1.5">
              {badge}
            </Badge>
          )}

          <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold uppercase leading-tight mb-6">
            {title}
            {highlight && (
              <>
                <br />
                <span className="text-gradient">{highlight}</span>
              </>
            )}
          </h1>

          <p className="text-lg md:text-xl text-gray-300 font-body leading-relaxed">
            {description}
          </p>
        </div>
      </div>

      {/* Diagonal clip at bottom */}
      <div
        className="absolute bottom-0 left-0 right-0 h-16 bg-tmrw-white"
        style={{ clipPath: "polygon(0 100%, 100% 30%, 100% 100%)" }}
      />
    </section>
  )
}
