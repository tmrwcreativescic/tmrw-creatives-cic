import Image from "next/image"
import { Check } from "lucide-react"

const features = [
  "Ages 12–30",
  "Medway Based",
  "Free or Low-Cost",
  "Industry-Connected",
]

export function AboutSection() {
  return (
    <section className="py-24 lg:py-32 bg-tmrw-white">
      <div className="container mx-auto px-4 lg:px-6">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Text Content */}
          <div className="order-2 lg:order-1">
            <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold uppercase text-tmrw-black mb-6 leading-tight">
              More Than
              <br />
              <span className="text-gradient">A Platform</span>
            </h2>

            <div className="space-y-6 font-body text-gray-600 text-lg leading-relaxed">
              <p>
                We exist because Medway needed it. A space where emerging
                creatives can access industry, not just information. Where the
                people teaching you are the same people working in the field.
                Where your next step is always in sight.
              </p>
              <p>
                Our programmes are designed and delivered by active industry
                professionals — songwriters, producers, A&Rs, managers,
                marketers, and digital specialists who are still in the game.
              </p>
            </div>

            {/* Features List */}
            <ul className="mt-8 grid grid-cols-2 gap-4">
              {features.map((feature) => (
                <li
                  key={feature}
                  className="flex items-center gap-3 font-accent font-medium text-tmrw-black"
                >
                  <span className="flex-shrink-0 w-6 h-6 rounded-full bg-tmrw-gradient flex items-center justify-center">
                    <Check className="w-4 h-4 text-white" />
                  </span>
                  {feature}
                </li>
              ))}
            </ul>
          </div>

          {/* Image */}
          <div className="order-1 lg:order-2 relative">
            <div className="relative">
              {/* Main image */}
              <div className="relative z-10 rounded-lg overflow-hidden shadow-2xl">
                <Image
                  src="https://images.unsplash.com/photo-1516280440614-37939bbacd81?w=800&q=80"
                  alt="Young creatives collaborating in a studio"
                  width={800}
                  height={500}
                  className="w-full h-[400px] lg:h-[500px] object-cover"
                />
              </div>
              {/* Decorative offset shapes */}
              <div className="absolute -bottom-4 -right-4 w-full h-full bg-tmrw-cyan rounded-lg -z-10" />
              <div className="absolute -bottom-8 -right-8 w-full h-full bg-tmrw-purple/30 rounded-lg -z-20" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
