import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center bg-tmrw-black text-white overflow-hidden">
      {/* Background image with overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-30"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?w=1920&q=80')",
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-tmrw-black via-tmrw-black/90 to-tmrw-black/70" />

      {/* Dot pattern overlay */}
      <div className="absolute inset-0 dot-pattern opacity-30" />

      {/* Gradient orbs for visual interest */}
      <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-tmrw-purple/20 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-1/3 w-64 h-64 bg-tmrw-magenta/20 rounded-full blur-3xl" />
      <div className="absolute top-1/2 right-1/6 w-48 h-48 bg-tmrw-cyan/20 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 lg:px-6 relative z-10 py-32 lg:py-40">
        <div className="max-w-3xl animate-fade-up">
          <Badge className="mb-6 bg-tmrw-purple text-white font-accent text-sm px-4 py-1.5">
            MEDWAY&apos;S CREATIVE LAUNCHPAD
          </Badge>

          <h1 className="font-heading text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold uppercase leading-[0.95] mb-6 tracking-tight">
            The Industry
            <br />
            <span className="text-gradient">Starts Here.</span>
          </h1>

          <p className="text-lg md:text-xl text-gray-300 mb-10 max-w-xl font-body leading-relaxed">
            Real skills. Real connections. Real pathways into music. TMRW
            Creatives connects young people aged 12–30 with the industry access
            they need to build sustainable creative careers.
          </p>

          <div className="flex flex-wrap gap-4">
            <Button
              asChild
              size="xl"
              className="font-accent font-bold uppercase"
            >
              <Link href="/get-involved">Get Involved</Link>
            </Button>
            <Button
              asChild
              size="xl"
              variant="outline"
              className="font-accent font-bold uppercase"
            >
              <Link href="/events">See What&apos;s On</Link>
            </Button>
          </div>
        </div>
      </div>

      {/* Diagonal clip at bottom */}
      <div
        className="absolute bottom-0 left-0 right-0 h-32 bg-tmrw-white"
        style={{ clipPath: "polygon(0 100%, 100% 30%, 100% 100%)" }}
      />
    </section>
  )
}
