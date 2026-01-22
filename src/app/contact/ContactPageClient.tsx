"use client"

import { useState } from "react"
import Link from "next/link"
import { Mail, MapPin, Phone, Instagram, Youtube, Linkedin, Send, CheckCircle } from "lucide-react"
import { PageHero } from "@/components/shared/PageHero"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"

const contactInfo = [
  {
    icon: Mail,
    title: "Email",
    content: "hello@tmrwcreatives.co.uk",
    href: "mailto:hello@tmrwcreatives.co.uk",
  },
  {
    icon: MapPin,
    title: "Location",
    content: "Medway, Kent, UK",
    href: null,
  },
  {
    icon: Phone,
    title: "Phone",
    content: "Coming soon",
    href: null,
  },
]

const socialLinks = [
  { icon: Instagram, href: "https://instagram.com/tmrwcreatives", label: "Instagram" },
  { icon: Youtube, href: "https://youtube.com/@tmrwcreatives", label: "YouTube" },
  { icon: Linkedin, href: "https://linkedin.com/company/tmrwcreatives", label: "LinkedIn" },
]

const enquiryTypes = [
  { value: "general", label: "General Enquiry" },
  { value: "programmes", label: "About Programmes" },
  { value: "mentor", label: "Becoming a Mentor" },
  { value: "partner", label: "Partnership Opportunities" },
  { value: "sponsor", label: "Sponsorship" },
  { value: "media", label: "Media & Press" },
  { value: "opportunity", label: "Submit an Opportunity" },
]

export function ContactPageClient() {
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    enquiryType: "general",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitted(true)
  }

  return (
    <>
      <PageHero
        badge="CONTACT US"
        title="Let's"
        highlight="Connect."
        description="Have a question, idea, or opportunity? We'd love to hear from you. Get in touch and our team will respond as soon as possible."
      />

      <section className="py-20 lg:py-28 bg-tmrw-white">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Contact Info */}
            <div className="lg:col-span-1">
              <h2 className="font-heading text-2xl font-bold uppercase text-tmrw-black mb-6">
                Get in Touch
              </h2>

              <div className="space-y-6 mb-8">
                {contactInfo.map((item) => (
                  <div key={item.title} className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-tmrw-gradient flex items-center justify-center flex-shrink-0">
                      <item.icon className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <p className="font-accent font-bold text-tmrw-black">
                        {item.title}
                      </p>
                      {item.href ? (
                        <a
                          href={item.href}
                          className="font-body text-gray-600 hover:text-tmrw-purple transition-colors"
                        >
                          {item.content}
                        </a>
                      ) : (
                        <p className="font-body text-gray-600">{item.content}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              {/* Social Links */}
              <div>
                <h3 className="font-heading text-lg font-bold uppercase text-tmrw-black mb-4">
                  Follow Us
                </h3>
                <div className="flex gap-3">
                  {socialLinks.map((social) => (
                    <a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 rounded-lg bg-gray-100 flex items-center justify-center hover:bg-tmrw-gradient hover:text-white transition-all"
                      aria-label={social.label}
                    >
                      <social.icon className="w-5 h-5" />
                    </a>
                  ))}
                </div>
              </div>

              {/* Quick Links */}
              <div className="mt-8 p-6 bg-gray-50 rounded-lg">
                <h3 className="font-heading text-lg font-bold uppercase text-tmrw-black mb-4">
                  Quick Links
                </h3>
                <ul className="space-y-2">
                  <li>
                    <Link
                      href="/programmes"
                      className="font-body text-gray-600 hover:text-tmrw-purple transition-colors"
                    >
                      → View our programmes
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/events"
                      className="font-body text-gray-600 hover:text-tmrw-purple transition-colors"
                    >
                      → Upcoming events
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/get-involved"
                      className="font-body text-gray-600 hover:text-tmrw-purple transition-colors"
                    >
                      → How to get involved
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/opportunities"
                      className="font-body text-gray-600 hover:text-tmrw-purple transition-colors"
                    >
                      → Current opportunities
                    </Link>
                  </li>
                </ul>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <Card className="border-0 shadow-lg">
                <CardContent className="p-8">
                  {isSubmitted ? (
                    <div className="text-center py-12">
                      <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-6" />
                      <h3 className="font-heading text-2xl font-bold uppercase text-tmrw-black mb-4">
                        Message Sent!
                      </h3>
                      <p className="font-body text-gray-600 mb-6">
                        Thank you for getting in touch. We&apos;ll respond to your enquiry as soon as possible.
                      </p>
                      <Button
                        onClick={() => {
                          setIsSubmitted(false)
                          setFormData({
                            name: "",
                            email: "",
                            enquiryType: "general",
                            message: "",
                          })
                        }}
                        variant="outline"
                        className="font-accent font-bold"
                      >
                        Send Another Message
                      </Button>
                    </div>
                  ) : (
                    <>
                      <h2 className="font-heading text-2xl font-bold uppercase text-tmrw-black mb-6">
                        Send Us a Message
                      </h2>

                      <form onSubmit={handleSubmit} className="space-y-6">
                        <div className="grid md:grid-cols-2 gap-6">
                          <div>
                            <label
                              htmlFor="name"
                              className="block font-accent text-sm font-bold text-tmrw-black mb-2"
                            >
                              Your Name *
                            </label>
                            <Input
                              id="name"
                              type="text"
                              required
                              value={formData.name}
                              onChange={(e) =>
                                setFormData({ ...formData, name: e.target.value })
                              }
                              placeholder="Enter your name"
                              className="font-body"
                            />
                          </div>
                          <div>
                            <label
                              htmlFor="email"
                              className="block font-accent text-sm font-bold text-tmrw-black mb-2"
                            >
                              Email Address *
                            </label>
                            <Input
                              id="email"
                              type="email"
                              required
                              value={formData.email}
                              onChange={(e) =>
                                setFormData({ ...formData, email: e.target.value })
                              }
                              placeholder="Enter your email"
                              className="font-body"
                            />
                          </div>
                        </div>

                        <div>
                          <label
                            htmlFor="enquiryType"
                            className="block font-accent text-sm font-bold text-tmrw-black mb-2"
                          >
                            Enquiry Type *
                          </label>
                          <select
                            id="enquiryType"
                            required
                            value={formData.enquiryType}
                            onChange={(e) =>
                              setFormData({
                                ...formData,
                                enquiryType: e.target.value,
                              })
                            }
                            className="w-full h-10 px-3 py-2 rounded-md border border-input bg-background font-body text-sm focus:outline-none focus:ring-2 focus:ring-ring"
                          >
                            {enquiryTypes.map((type) => (
                              <option key={type.value} value={type.value}>
                                {type.label}
                              </option>
                            ))}
                          </select>
                        </div>

                        <div>
                          <label
                            htmlFor="message"
                            className="block font-accent text-sm font-bold text-tmrw-black mb-2"
                          >
                            Your Message *
                          </label>
                          <textarea
                            id="message"
                            required
                            rows={6}
                            value={formData.message}
                            onChange={(e) =>
                              setFormData({ ...formData, message: e.target.value })
                            }
                            placeholder="Tell us about your enquiry..."
                            className="w-full px-3 py-2 rounded-md border border-input bg-background font-body text-sm focus:outline-none focus:ring-2 focus:ring-ring resize-none"
                          />
                        </div>

                        <div className="flex items-center gap-4">
                          <Button
                            type="submit"
                            size="lg"
                            className="font-accent font-bold uppercase"
                          >
                            Send Message <Send className="ml-2 h-4 w-4" />
                          </Button>
                          <p className="font-body text-sm text-gray-500">
                            We typically respond within 48 hours.
                          </p>
                        </div>
                      </form>
                    </>
                  )}
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section (Placeholder) */}
      <section className="py-20 lg:py-28 bg-gray-50">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="text-center mb-12">
            <h2 className="font-heading text-3xl font-bold uppercase text-tmrw-black mb-4">
              Find Us
            </h2>
            <p className="font-body text-gray-600">
              Based in the heart of Medway, serving young creatives across Kent.
            </p>
          </div>

          <div className="aspect-video bg-gray-200 rounded-lg flex items-center justify-center">
            <div className="text-center">
              <MapPin className="w-12 h-12 text-gray-400 mx-auto mb-4" />
              <p className="font-accent text-gray-500">
                Map integration coming soon
              </p>
              <p className="font-body text-sm text-gray-400">
                Medway, Kent, UK
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
