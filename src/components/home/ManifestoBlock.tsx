export function ManifestoBlock() {
  return (
    <section className="relative py-24 lg:py-32 bg-tmrw-black text-white overflow-hidden">
      {/* Gradient orbs */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-tmrw-purple/20 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-tmrw-magenta/20 rounded-full blur-3xl" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-tmrw-cyan/10 rounded-full blur-3xl" />

      {/* Dot pattern */}
      <div className="absolute inset-0 dot-pattern opacity-20" />

      <div className="container mx-auto px-4 lg:px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Main statement */}
          <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold uppercase leading-tight mb-8">
            <span className="text-gradient">Talent is Everywhere.</span>
            <br />
            Opportunity is Not.
          </h2>

          {/* Supporting text */}
          <p className="font-body text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed">
            We believe creativity should be accessible to everyone — not just
            those who already know someone, can afford to work for free, or live
            in the right postcode.
          </p>

          {/* Values */}
          <div className="flex flex-wrap justify-center gap-4 md:gap-8">
            <div className="px-6 py-3 border border-white/20 rounded-full font-accent font-bold text-sm md:text-base uppercase tracking-wider hover:border-tmrw-purple hover:text-tmrw-cyan transition-colors">
              Access over hype
            </div>
            <div className="px-6 py-3 border border-white/20 rounded-full font-accent font-bold text-sm md:text-base uppercase tracking-wider hover:border-tmrw-magenta hover:text-tmrw-magenta transition-colors">
              Progression over attendance
            </div>
            <div className="px-6 py-3 border border-white/20 rounded-full font-accent font-bold text-sm md:text-base uppercase tracking-wider hover:border-tmrw-cyan hover:text-tmrw-cyan transition-colors">
              Real-world experience over theory
            </div>
          </div>
        </div>
      </div>

      {/* Gradient stripe at bottom */}
      <div className="absolute bottom-0 left-0 right-0 gradient-stripe" />
    </section>
  )
}
