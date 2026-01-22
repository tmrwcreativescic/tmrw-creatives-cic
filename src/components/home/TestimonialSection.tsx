import { Quote } from "lucide-react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

export function TestimonialSection() {
  return (
    <section className="relative py-24 lg:py-32 bg-tmrw-black text-white overflow-hidden">
      {/* Background effects */}
      <div className="absolute top-1/4 left-1/4 w-80 h-80 bg-tmrw-purple/30 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-tmrw-magenta/20 rounded-full blur-3xl" />
      <div className="absolute top-1/2 right-1/3 w-64 h-64 bg-tmrw-cyan/20 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 lg:px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Quote Icon */}
          <div className="w-16 h-16 mx-auto mb-8 rounded-full bg-tmrw-gradient flex items-center justify-center">
            <Quote className="w-8 h-8 text-white" />
          </div>

          {/* Quote */}
          <blockquote className="font-body text-xl md:text-2xl lg:text-3xl leading-relaxed mb-10 text-gray-200">
            &ldquo;Before TMRW, I had no idea how to even approach the industry.
            Now I&apos;ve got a manager, a release plan, and I know what I&apos;m doing.
            That came from the mentoring — having someone who&apos;s actually in it
            tell me what works.&rdquo;
          </blockquote>

          {/* Author */}
          <div className="flex items-center justify-center gap-4">
            <Avatar className="w-14 h-14 border-2 border-tmrw-purple">
              <AvatarImage
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&q=80"
                alt="Alex"
              />
              <AvatarFallback className="bg-tmrw-purple text-white font-heading font-bold">
                A
              </AvatarFallback>
            </Avatar>
            <div className="text-left">
              <p className="font-heading font-bold text-lg">Alex, 22</p>
              <p className="font-accent text-sm text-tmrw-cyan">
                Songwriter & Producer | CONNECT Programme Alumni
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Gradient stripe at bottom */}
      <div className="absolute bottom-0 left-0 right-0 gradient-stripe" />
    </section>
  )
}
