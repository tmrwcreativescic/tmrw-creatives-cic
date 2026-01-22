import { ProgrammeCard } from "@/components/shared/ProgrammeCard"

const programmes = [
  {
    title: "Create",
    description:
      "Music Creation & Skills Development. Hands-on sessions in songwriting, production, recording, and collaboration.",
    tag: "CREATE",
    tagColor: "purple" as const,
    image:
      "https://images.unsplash.com/photo-1598653222000-6b7b7a552625?w=600&q=80",
    href: "/programmes/create",
  },
  {
    title: "Connect",
    description:
      "Industry Access & Mentorship. Direct access to A&Rs, managers, and working professionals.",
    tag: "CONNECT",
    tagColor: "magenta" as const,
    image:
      "https://images.unsplash.com/photo-1529070538774-1843cb3265df?w=600&q=80",
    href: "/programmes/connect",
  },
  {
    title: "Build",
    description:
      "Marketing, Branding & Digital Skills. Learn to promote yourself and build an audience.",
    tag: "BUILD",
    tagColor: "cyan" as const,
    image:
      "https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?w=600&q=80",
    href: "/programmes/build",
  },
  {
    title: "Work",
    description:
      "Pathways & Opportunities. Showcases, placements, commissions, and paid gigs.",
    tag: "WORK",
    tagColor: "dark" as const,
    image:
      "https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae?w=600&q=80",
    href: "/programmes/work",
  },
]

export function ProgrammesSection() {
  return (
    <section className="relative py-24 lg:py-32 bg-gray-50">
      {/* Diagonal clip at top */}
      <div
        className="absolute top-0 left-0 right-0 h-24 bg-tmrw-white"
        style={{ clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 0)" }}
      />

      <div className="container mx-auto px-4 lg:px-6 pt-12">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold uppercase text-tmrw-black mb-4">
            What We Do
          </h2>
          <div className="w-24 h-1 bg-tmrw-gradient mx-auto rounded-full" />
        </div>

        {/* Programme Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {programmes.map((programme) => (
            <ProgrammeCard key={programme.title} {...programme} />
          ))}
        </div>
      </div>
    </section>
  )
}
