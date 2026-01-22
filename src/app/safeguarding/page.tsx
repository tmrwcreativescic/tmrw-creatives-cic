import { Metadata } from "next"
import Link from "next/link"
import { Shield, Phone, Mail, AlertTriangle } from "lucide-react"
import { PageHero } from "@/components/shared/PageHero"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

export const metadata: Metadata = {
  title: "Safeguarding | TMRW Creatives CIC",
  description: "Our commitment to safeguarding young people at TMRW Creatives CIC.",
}

export default function SafeguardingPage() {
  return (
    <>
      <PageHero
        badge="SAFETY FIRST"
        title="Safeguarding"
        highlight="Policy."
        description="The safety and wellbeing of young people is our top priority."
      />

      <section className="py-20 lg:py-28 bg-tmrw-white">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="max-w-3xl mx-auto">
            {/* Introduction */}
            <div className="mb-12">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-lg bg-tmrw-gradient flex items-center justify-center">
                  <Shield className="w-6 h-6 text-white" />
                </div>
                <h2 className="font-heading text-2xl font-bold uppercase text-tmrw-black">
                  Our Commitment
                </h2>
              </div>
              <p className="font-body text-gray-700 mb-4">
                TMRW Creatives CIC is committed to safeguarding and promoting the welfare of all young people who engage with our programmes, events, and services. We work with young people aged 12-30, and we take our responsibility to protect them seriously.
              </p>
              <p className="font-body text-gray-700">
                We believe that all young people have the right to be safe from harm, and we are committed to creating an environment where they can thrive, develop their creativity, and reach their potential.
              </p>
            </div>

            {/* Key Principles */}
            <div className="mb-12">
              <h2 className="font-heading text-2xl font-bold uppercase text-tmrw-black mb-6">
                Key Principles
              </h2>
              <ul className="space-y-4">
                {[
                  "The welfare of young people is paramount in all our work",
                  "All young people have a right to protection from abuse regardless of their background",
                  "All concerns and allegations of abuse will be taken seriously and responded to appropriately",
                  "All staff and volunteers have a responsibility to report concerns",
                  "We work in partnership with young people, parents/carers, and other agencies",
                ].map((principle, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <span className="flex-shrink-0 w-6 h-6 rounded-full bg-tmrw-cyan flex items-center justify-center mt-0.5">
                      <span className="text-white text-sm font-bold">{index + 1}</span>
                    </span>
                    <span className="font-body text-gray-700">{principle}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* What We Do */}
            <div className="mb-12">
              <h2 className="font-heading text-2xl font-bold uppercase text-tmrw-black mb-6">
                What We Do
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                {[
                  {
                    title: "DBS Checks",
                    description: "All staff and volunteers working with young people undergo enhanced DBS checks.",
                  },
                  {
                    title: "Training",
                    description: "Regular safeguarding training for all team members and volunteers.",
                  },
                  {
                    title: "Clear Procedures",
                    description: "Documented procedures for reporting and responding to concerns.",
                  },
                  {
                    title: "Safe Recruitment",
                    description: "Robust recruitment processes including references and interviews.",
                  },
                ].map((item) => (
                  <Card key={item.title} className="border-0 shadow-md">
                    <CardContent className="p-6">
                      <h3 className="font-heading text-lg font-bold uppercase text-tmrw-black mb-2">
                        {item.title}
                      </h3>
                      <p className="font-body text-gray-600 text-sm">
                        {item.description}
                      </p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Reporting Concerns */}
            <div className="mb-12">
              <Card className="border-0 shadow-lg bg-amber-50 border-l-4 border-l-amber-500">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <AlertTriangle className="w-6 h-6 text-amber-600 flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-heading text-lg font-bold uppercase text-tmrw-black mb-2">
                        Reporting Concerns
                      </h3>
                      <p className="font-body text-gray-700 mb-4">
                        If you have any concerns about the safety or wellbeing of a young person involved with TMRW Creatives, please report it immediately. You can contact:
                      </p>
                      <ul className="space-y-2 font-body text-gray-700">
                        <li className="flex items-center gap-2">
                          <Mail className="w-4 h-4 text-tmrw-purple" />
                          <span>Designated Safeguarding Lead: <a href="mailto:safeguarding@tmrwcreatives.co.uk" className="text-tmrw-purple hover:underline">safeguarding@tmrwcreatives.co.uk</a></span>
                        </li>
                        <li className="flex items-center gap-2">
                          <Phone className="w-4 h-4 text-tmrw-purple" />
                          <span>In an emergency, call 999</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* External Resources */}
            <div className="mb-12">
              <h2 className="font-heading text-2xl font-bold uppercase text-tmrw-black mb-6">
                Useful Resources
              </h2>
              <ul className="space-y-3 font-body text-gray-700">
                <li>
                  <strong>NSPCC Helpline:</strong> 0808 800 5000 or <a href="https://www.nspcc.org.uk" target="_blank" rel="noopener noreferrer" className="text-tmrw-purple hover:underline">www.nspcc.org.uk</a>
                </li>
                <li>
                  <strong>Childline:</strong> 0800 1111 or <a href="https://www.childline.org.uk" target="_blank" rel="noopener noreferrer" className="text-tmrw-purple hover:underline">www.childline.org.uk</a>
                </li>
                <li>
                  <strong>Medway Safeguarding Children Partnership:</strong> <a href="https://www.medwayscp.org.uk" target="_blank" rel="noopener noreferrer" className="text-tmrw-purple hover:underline">www.medwayscp.org.uk</a>
                </li>
              </ul>
            </div>

            {/* Code of Conduct Summary */}
            <div className="mb-12">
              <h2 className="font-heading text-2xl font-bold uppercase text-tmrw-black mb-6">
                Code of Conduct
              </h2>
              <p className="font-body text-gray-700 mb-4">
                All participants in TMRW programmes are expected to:
              </p>
              <ul className="list-disc list-inside font-body text-gray-700 space-y-2">
                <li>Treat everyone with respect and dignity</li>
                <li>Follow instructions from staff and facilitators</li>
                <li>Report any concerns to a member of staff</li>
                <li>Look out for each other&apos;s wellbeing</li>
                <li>Not engage in bullying, harassment, or discrimination</li>
                <li>Not share personal information of others without consent</li>
              </ul>
            </div>

            <div className="mt-12 pt-8 border-t border-gray-200 flex flex-wrap gap-4">
              <Button asChild variant="outline-dark" className="font-accent font-bold">
                <Link href="/contact">Contact Us</Link>
              </Button>
              <Button asChild className="font-accent font-bold">
                <Link href="/get-involved">Get Involved</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
