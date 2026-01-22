"use client"

import { useState } from "react"
import { CheckCircle, Loader2 } from "lucide-react"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import type { Event } from "@/data/events"

interface RegistrationModalProps {
  event: Event
  isOpen: boolean
  onClose: () => void
}

export function RegistrationModal({ event, isOpen, onClose }: RegistrationModalProps) {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    age: "",
    howHeard: "",
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
    // Reset state when closing
    if (isSuccess) {
      setIsSuccess(false)
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        age: "",
        howHeard: "",
      })
    }
    onClose()
  }

  return (
    <Dialog open={isOpen} onOpenChange={handleClose}>
      <DialogContent className="sm:max-w-[500px] max-h-[90vh] overflow-y-auto">
        {isSuccess ? (
          // Success State
          <div className="py-8 text-center">
            <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-green-100 flex items-center justify-center">
              <CheckCircle className="w-10 h-10 text-green-600" />
            </div>
            <DialogHeader className="mb-4">
              <DialogTitle className="font-heading text-2xl font-bold uppercase text-tmrw-black text-center">
                Registration Successful!
              </DialogTitle>
              <DialogDescription className="text-center text-base mt-2">
                You&apos;re all set for <span className="font-semibold">{event.title}</span>
              </DialogDescription>
            </DialogHeader>

            <div className="bg-gray-50 rounded-lg p-4 mb-6 text-left">
              <p className="font-accent text-sm font-bold text-tmrw-black mb-2">Event Details:</p>
              <p className="font-body text-sm text-gray-600">{event.date}</p>
              <p className="font-body text-sm text-gray-600">{event.time}</p>
              <p className="font-body text-sm text-gray-600">{event.location}</p>
            </div>

            <p className="font-body text-gray-600 mb-6">
              A confirmation email has been sent to <span className="font-semibold">{formData.email}</span> with all the details you need.
            </p>

            <Button onClick={handleClose} className="font-accent font-bold">
              Close
            </Button>
          </div>
        ) : (
          // Registration Form
          <>
            <DialogHeader>
              <DialogTitle className="font-heading text-xl font-bold uppercase text-tmrw-black">
                Register for Event
              </DialogTitle>
              <DialogDescription>
                {event.title} • {event.date}
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

              <div className="grid grid-cols-2 gap-4">
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
                    htmlFor="age"
                    className="block font-accent text-sm font-bold text-tmrw-black mb-1"
                  >
                    Age *
                  </label>
                  <Input
                    id="age"
                    type="number"
                    required
                    min="12"
                    max="99"
                    value={formData.age}
                    onChange={(e) =>
                      setFormData({ ...formData, age: e.target.value })
                    }
                    placeholder="Your age"
                    className="font-body"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="howHeard"
                  className="block font-accent text-sm font-bold text-tmrw-black mb-1"
                >
                  How did you hear about us?
                </label>
                <select
                  id="howHeard"
                  value={formData.howHeard}
                  onChange={(e) =>
                    setFormData({ ...formData, howHeard: e.target.value })
                  }
                  className="w-full h-10 px-3 py-2 rounded-md border border-input bg-background font-body text-sm focus:outline-none focus:ring-2 focus:ring-ring"
                >
                  <option value="">Select an option</option>
                  <option value="social">Social Media</option>
                  <option value="friend">Friend or Family</option>
                  <option value="school">School or College</option>
                  <option value="search">Google Search</option>
                  <option value="event">Previous Event</option>
                  <option value="other">Other</option>
                </select>
              </div>

              {event.requirements && event.requirements.length > 0 && (
                <div className="bg-amber-50 border border-amber-200 rounded-lg p-4">
                  <p className="font-accent text-sm font-bold text-amber-800 mb-2">
                    Requirements for this event:
                  </p>
                  <ul className="space-y-1">
                    {event.requirements.map((req) => (
                      <li key={req} className="font-body text-sm text-amber-700">
                        • {req}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              <div className="flex items-start gap-3 pt-2">
                <input
                  type="checkbox"
                  id="terms"
                  required
                  className="mt-1 h-4 w-4 rounded border-gray-300"
                />
                <label htmlFor="terms" className="font-body text-sm text-gray-600">
                  I agree to receive communications about this event and future TMRW opportunities. View our{" "}
                  <a href="/privacy" className="text-tmrw-purple hover:underline">
                    Privacy Policy
                  </a>
                  .
                </label>
              </div>

              <div className="flex gap-3 pt-4">
                <Button
                  type="button"
                  variant="outline"
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
                      Registering...
                    </>
                  ) : (
                    "Register Now"
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
