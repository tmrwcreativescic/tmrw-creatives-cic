import Image from "next/image"
import Link from "next/link"
import { Metadata } from "next"
import { Megaphone, Check, Instagram, Youtube, Palette, TrendingUp, ArrowRight } from "lucide-react"
import { PageHero } from "@/components/shared/PageHero"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

export const metadata: Metadata = {
  title: "Build Programme | TMRW Creatives CIC",
  description: "Marketing, branding, and digital skills programme. Learn to promote yourself, build an audience, and develop the business skills to sustain your creative career.",
}

const modules = [
  {
    icon: Palette,
    title: "Personal Branding",
    description: "Define your artistic identity. Create a cohesive visual brand, write your bio, and develop your unique selling point.",
    topics: ["Visual identity design", "Brand voice & messaging", "EPK creation", "Press kit development"],
  },
  {
    icon: Instagram,
    title: "Social Media Mastery",
    description: "Build and engage an authentic audience. Content strategy, platform-specific tactics, and community building.",
    topics: ["Content calendars", "Engagement strategies", "Algorithm insights", "Cross-platform growth"],
  },
  {
    icon: Youtube,
    title: "Content Creation",
    description: "Create compelling video content. From music videos to behind-the-scenes, learn to tell your story visually.",
    topics: ["Video production basics", "Editing for social", "Thumbnail design", "YouTube strategy"],
  },
  {
    icon: TrendingUp,
    title: "Release Strategy",
    description: "Plan and execute successful releases. From pre-save campaigns to playlist pitching and beyond.",
    topics: ["Release timelines", "Playlist pitching", "PR & press outreach", "Performance marketing"],
  },
]

const tools = [
  "Canva Pro",
  "CapCut",
  "Notion",
  "Linktree",
  "Mailchimp",
  "Spotify for Artists",
  "Meta Business Suite",
  "YouTube Studio",
]

export default function BuildProgrammePage() {
  return (
    <>
      <PageHero
        badge="BUILD PROGRAMME"
        title="Build Your"
        highlight="Brand."
        description="Learn to promote yourself and build an audience. Master social media, content creation, branding, and the business side of being a creative professional in 2024."
      />

      {/* Overview Section */}
      <section className="py-20 lg:py-28 bg-tmrw-white">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="w-14 h-14 rounded-lg bg-tmrw-cyan flex items-center justify-center mb-6">
                <Megaphone className="w-7 h-7 text-white" />
              </div>
              <h2 className="font-heading text-3xl md:text-4xl font-bold uppercase text-tmrw-black mb-6">
                Great Music Isn&apos;t Enough
              </h2>
              <p className="font-body text-lg text-gray-600 leading-relaxed mb-6">
                In today&apos;s industry, your music is just the beginning. You need to be your own marketing team, content creator, and brand manager. The BUILD programme gives you those skills.
              </p>
              <p className="font-body text-lg text-gray-600 leading-relaxed mb-8">
                From crafting your visual identity to running release campaigns, you&apos;ll learn how to cut through the noise and build a genuine connection with your audience.
              </p>

              <div className="flex flex-wrap gap-3">
                {["No experience required", "All tools provided", "Portfolio projects"].map((item) => (
                  <span
                    key={item}
                    className="font-accent text-sm font-medium bg-tmrw-cyan/10 text-tmrw-cyan px-4 py-2 rounded-full"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="relative z-10 rounded-lg overflow-hidden shadow-2xl">
                <Image
                  src="https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?w=800&q=80"
                  alt="Content creation and marketing"
                  width={800}
                  height={600}
                  className="w-full h-[450px] object-cover"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 w-full h-full bg-tmrw-cyan rounded-lg -z-10" />
            </div>
          </div>
        </div>
      </section>

      {/* Modules Section */}
      <section className="py-20 lg:py-28 bg-gray-50">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="text-center mb-16">
            <h2 className="font-heading text-3xl md:text-4xl font-bold uppercase text-tmrw-black mb-4">
              Programme Modules
            </h2>
            <div className="w-24 h-1 bg-tmrw-gradient mx-auto rounded-full" />
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {modules.map((module) => (
              <Card key={module.title} className="border-0 shadow-lg">
                <CardContent className="p-8">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-12 h-12 rounded-lg bg-tmrw-cyan flex items-center justify-center flex-shrink-0">
                      <module.icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-heading text-xl font-bold uppercase text-tmrw-black">
                        {module.title}
                      </h3>
                      <p className="font-body text-gray-600 mt-2">
                        {module.description}
                      </p>
                    </div>
                  </div>
                  <div className="ml-16">
                    <p className="font-accent text-sm text-gray-500 mb-2">You&apos;ll learn:</p>
                    <ul className="grid grid-cols-2 gap-2">
                      {module.topics.map((topic) => (
                        <li key={topic} className="flex items-center gap-2">
                          <Check className="w-4 h-4 text-tmrw-cyan" />
                          <span className="font-body text-sm text-gray-700">{topic}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Tools Section */}
      <section className="py-20 lg:py-28 bg-tmrw-white">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-heading text-3xl md:text-4xl font-bold uppercase text-tmrw-black mb-4">
              Tools You&apos;ll Master
            </h2>
            <p className="font-body text-lg text-gray-600 mb-12">
              We provide access to industry-standard tools and teach you how to use them effectively.
            </p>

            <div className="flex flex-wrap justify-center gap-4">
              {tools.map((tool) => (
                <span
                  key={tool}
                  className="font-accent font-medium text-tmrw-black bg-gray-100 px-6 py-3 rounded-lg hover:bg-tmrw-cyan hover:text-white transition-colors cursor-default"
                >
                  {tool}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Outcomes Section */}
      <section className="py-20 lg:py-28 bg-tmrw-cyan text-white">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="font-heading text-3xl md:text-4xl font-bold uppercase mb-6">
                What You&apos;ll Walk Away With
              </h2>
              <ul className="space-y-4">
                {[
                  "A complete brand identity kit (logo concepts, colour palette, typography)",
                  "Content calendar and strategy document",
                  "Portfolio of created content",
                  "Release campaign plan for your next project",
                  "EPK and press kit ready to send",
                  "Skills to continue growing independently",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-4">
                    <span className="flex-shrink-0 w-6 h-6 rounded-full bg-white/20 flex items-center justify-center mt-0.5">
                      <Check className="w-4 h-4" />
                    </span>
                    <span className="font-body text-lg">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-white/10 rounded-lg p-8">
              <h3 className="font-heading text-2xl font-bold uppercase mb-4">
                Programme Details
              </h3>
              <div className="space-y-4 font-body">
                <div className="flex justify-between border-b border-white/20 pb-3">
                  <span className="text-white/80">Duration</span>
                  <span className="font-bold">10 weeks</span>
                </div>
                <div className="flex justify-between border-b border-white/20 pb-3">
                  <span className="text-white/80">Sessions</span>
                  <span className="font-bold">Weekly (2 hours)</span>
                </div>
                <div className="flex justify-between border-b border-white/20 pb-3">
                  <span className="text-white/80">Format</span>
                  <span className="font-bold">In-person & Online</span>
                </div>
                <div className="flex justify-between border-b border-white/20 pb-3">
                  <span className="text-white/80">Age Range</span>
                  <span className="font-bold">16-30</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-white/80">Cost</span>
                  <span className="font-bold">Free</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 lg:py-28 bg-tmrw-black text-white">
        <div className="container mx-auto px-4 lg:px-6 text-center">
          <h2 className="font-heading text-3xl md:text-4xl font-bold uppercase mb-6">
            Ready to Build Your Brand?
          </h2>
          <p className="font-body text-lg text-gray-300 max-w-2xl mx-auto mb-8">
            Join the next BUILD cohort and learn to market yourself like a professional.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button
              asChild
              size="lg"
              className="font-accent font-bold uppercase"
            >
              <Link href="/get-involved">Apply Now</Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="font-accent font-bold uppercase"
            >
              <Link href="/programmes">
                View All Programmes <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  )
}
