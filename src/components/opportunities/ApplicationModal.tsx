"use client"

import { useState } from "react"
import { CheckCircle, Loader2, Upload } from "lucide-react"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import type { Opportunity } from "@/data/opportunities"

interface ApplicationModalProps {
  opportunity: Opportunity
  isOpen: boolean
  onClose: () => void
}

export function ApplicationModal({ opportunity, isOpen, onClose }: ApplicationModalProps) {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    portfolio: "",
    experience: "",
    message: "",
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500))

    setIsSubmitting(false)
    setIsSuccess(true)
  }

  const handleClose = () => {
    if (isSuccess) {
      setIsSuccess(false)
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        portfolio: "",
        experience: "",
        message: "",
      })
    }
    onClose()
  }

  return (
    <Dialog open={isOpen} onOpenChange={handleClose}>
      <DialogContent className="sm:max-w-[550px] max-h-[90vh] overflow-y-auto">
        {isSuccess ? (
          <div className="py-8 text-center">
            <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-green-100 flex items-center justify-center">
              <CheckCircle className="w-10 h-10 text-green-600" />
            </div>
            <DialogHeader className="mb-4">
              <DialogTitle className="font-heading text-2xl font-bold uppercase text-tmrw-black text-center">
                Application Submitted!
              </DialogTitle>
              <DialogDescription className="text-center text-base mt-2">
                Your application for <span className="font-semibold">{opportunity.title}</span> has been received.
              </DialogDescription>
            </DialogHeader>

            <div className="bg-gray-50 rounded-lg p-4 mb-6 text-left">
              <p className="font-accent text-sm font-bold text-tmrw-black mb-2">What happens next:</p>
              <ul className="font-body text-sm text-gray-600 space-y-1">
                <li>1. We&apos;ll review your application</li>
                <li>2. Shortlisted candidates will be contacted within 5-7 days</li>
                <li>3. You may be asked for additional materials or an interview</li>
              </ul>
            </div>

            <p className="font-body text-gray-600 mb-6">
              A confirmation email has been sent to <span className="font-semibold">{formData.email}</span>.
            </p>

            <Button onClick={handleClose} className="font-accent font-bold">
              Close
            </Button>
          </div>
        ) : (
          <>
            <DialogHeader>
              <DialogTitle className="font-heading text-xl font-bold uppercase text-tmrw-black">
                Apply for Opportunity
              </DialogTitle>
              <DialogDescription>
                {opportunity.title} • {opportunity.company}
              </DialogDescription>
            </DialogHeader>

            <form onSubmit={handleSubmit} className="space-y-4 mt-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label
                    htmlFor="firstName"
                    className="block font-accent text-sm font-bold text-tmrw-black mb-1"
                  >
                    First Name *
                  </label>
                  <Input
                    id="firstName"
                    type="text"
                    required
                    value={formData.firstName}
                    onChange={(e) =>
                      setFormData({ ...formData, firstName: e.target.value })
                    }
                    placeholder="Your first name"
                    className="font-body"
                  />
                </div>
                <div>
                  <label
                    htmlFor="lastName"
                    className="block font-accent text-sm font-bold text-tmrw-black mb-1"
                  >
                    Last Name *
                  </label>
                  <Input
                    id="lastName"
                    type="text"
                    required
                    value={formData.lastName}
                    onChange={(e) =>
                      setFormData({ ...formData, lastName: e.target.value })
                    }
                    placeholder="Your last name"
                    className="font-body"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block font-accent text-sm font-bold text-tmrw-black mb-1"
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
                  placeholder="your@email.com"
                  className="font-body"
                />
              </div>

              <div>
                <label
                  htmlFor="phone"
                  className="block font-accent text-sm font-bold text-tmrw-black mb-1"
                >
                  Phone Number
                </label>
                <Input
                  id="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={(e) =>
                    setFormData({ ...formData, phone: e.target.value })
                  }
                  placeholder="07xxx xxxxxx"
                  className="font-body"
                />
              </div>

              <div>
                <label
                  htmlFor="portfolio"
                  className="block font-accent text-sm font-bold text-tmrw-black mb-1"
                >
                  Portfolio / Demo Link *
                </label>
                <Input
                  id="portfolio"
                  type="url"
                  required
                  value={formData.portfolio}
                  onChange={(e) =>
                    setFormData({ ...formData, portfolio: e.target.value })
                  }
                  placeholder="https://soundcloud.com/yourname"
                  className="font-body"
                />
                <p className="font-body text-xs text-gray-500 mt-1">
                  SoundCloud, Spotify, YouTube, portfolio website, etc.
                </p>
              </div>

              <div>
                <label
                  htmlFor="experience"
                  className="block font-accent text-sm font-bold text-tmrw-black mb-1"
                >
                  Relevant Experience *
                </label>
                <textarea
                  id="experience"
                  required
                  value={formData.experience}
                  onChange={(e) =>
                    setFormData({ ...formData, experience: e.target.value })
                  }
                  placeholder="Briefly describe your relevant experience..."
                  rows={3}
                  className="w-full px-3 py-2 rounded-md border border-input bg-background font-body text-sm focus:outline-none focus:ring-2 focus:ring-ring resize-none"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block font-accent text-sm font-bold text-tmrw-black mb-1"
                >
                  Why are you interested? *
                </label>
                <textarea
                  id="message"
                  required
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  placeholder="Tell us why you're a great fit for this opportunity..."
                  rows={3}
                  className="w-full px-3 py-2 rounded-md border border-input bg-background font-body text-sm focus:outline-none focus:ring-2 focus:ring-ring resize-none"
                />
              </div>

              <div className="bg-gray-50 rounded-lg p-4">
                <div className="flex items-center gap-3 text-gray-600">
                  <Upload className="w-5 h-5" />
                  <div>
                    <p className="font-accent text-sm font-bold text-tmrw-black">
                      Additional Files
                    </p>
                    <p className="font-body text-xs text-gray-500">
                      CV, demo reel, or other materials can be sent to{" "}
                      <span className="text-tmrw-purple">
                        {opportunity.contactEmail || "opportunities@tmrwcreatives.org"}
                      </span>
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-3 pt-2">
                <input
                  type="checkbox"
                  id="terms"
                  required
                  className="mt-1 h-4 w-4 rounded border-gray-300"
                />
                <label htmlFor="terms" className="font-body text-sm text-gray-600">
                  I confirm that the information provided is accurate and I consent to being contacted about this opportunity. View our{" "}
                  <a href="/privacy" className="text-tmrw-purple hover:underline">
                    Privacy Policy
                  </a>
                  .
                </label>
              </div>

              <div className="flex gap-3 pt-4">
                <Button
                  type="button"
                  variant="outline-dark"
                  onClick={handleClose}
                  className="flex-1 font-accent font-bold"
                >
                  Cancel
                </Button>
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="flex-1 font-accent font-bold"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      Submitting...
                    </>
                  ) : (
                    "Submit Application"
                  )}
                </Button>
              </div>
            </form>
          </>
        )}
      </DialogContent>
    </Dialog>
  )
}
