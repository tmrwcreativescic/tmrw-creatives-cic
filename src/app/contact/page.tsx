import { Metadata } from "next"
import { ContactPageClient } from "./ContactPageClient"

export const metadata: Metadata = {
  title: "Contact | TMRW Creatives CIC",
  description: "Get in touch with TMRW Creatives. Questions, partnership enquiries, or just want to say hello - we'd love to hear from you.",
}

export default function ContactPage() {
  return <ContactPageClient />
}
