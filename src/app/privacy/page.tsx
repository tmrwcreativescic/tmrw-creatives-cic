import { Metadata } from "next"
import Link from "next/link"
import { PageHero } from "@/components/shared/PageHero"
import { Button } from "@/components/ui/button"

export const metadata: Metadata = {
  title: "Privacy Policy | TMRW Creatives CIC",
  description: "Privacy policy for TMRW Creatives CIC - how we collect, use, and protect your personal information.",
}

export default function PrivacyPage() {
  return (
    <>
      <PageHero
        badge="LEGAL"
        title="Privacy"
        highlight="Policy."
        description="How we collect, use, and protect your personal information."
      />

      <section className="py-20 lg:py-28 bg-tmrw-white">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="max-w-3xl mx-auto prose prose-lg">
            <p className="font-body text-gray-600 mb-8">
              Last updated: January 2026
            </p>

            <h2 className="font-heading text-2xl font-bold uppercase text-tmrw-black mt-8 mb-4">
              1. Introduction
            </h2>
            <p className="font-body text-gray-700 mb-4">
              TMRW Creatives CIC (&quot;we&quot;, &quot;our&quot;, or &quot;us&quot;) is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or participate in our programmes.
            </p>

            <h2 className="font-heading text-2xl font-bold uppercase text-tmrw-black mt-8 mb-4">
              2. Information We Collect
            </h2>
            <p className="font-body text-gray-700 mb-4">
              We may collect personal information that you voluntarily provide to us when you:
            </p>
            <ul className="list-disc list-inside font-body text-gray-700 mb-4 space-y-2">
              <li>Register for our programmes or events</li>
              <li>Subscribe to our newsletter</li>
              <li>Contact us through our website</li>
              <li>Apply for opportunities</li>
              <li>Participate in surveys or feedback forms</li>
            </ul>
            <p className="font-body text-gray-700 mb-4">
              This information may include your name, email address, phone number, age, and any other information you choose to provide.
            </p>

            <h2 className="font-heading text-2xl font-bold uppercase text-tmrw-black mt-8 mb-4">
              3. How We Use Your Information
            </h2>
            <p className="font-body text-gray-700 mb-4">
              We use the information we collect to:
            </p>
            <ul className="list-disc list-inside font-body text-gray-700 mb-4 space-y-2">
              <li>Process your programme and event registrations</li>
              <li>Send you relevant opportunities and updates</li>
              <li>Respond to your enquiries</li>
              <li>Improve our programmes and services</li>
              <li>Comply with legal obligations</li>
            </ul>

            <h2 className="font-heading text-2xl font-bold uppercase text-tmrw-black mt-8 mb-4">
              4. Data Sharing
            </h2>
            <p className="font-body text-gray-700 mb-4">
              We do not sell your personal information. We may share your information with:
            </p>
            <ul className="list-disc list-inside font-body text-gray-700 mb-4 space-y-2">
              <li>Industry partners for relevant opportunities (with your consent)</li>
              <li>Service providers who assist in our operations</li>
              <li>Legal authorities when required by law</li>
            </ul>

            <h2 className="font-heading text-2xl font-bold uppercase text-tmrw-black mt-8 mb-4">
              5. Data Security
            </h2>
            <p className="font-body text-gray-700 mb-4">
              We implement appropriate technical and organisational measures to protect your personal information. However, no method of transmission over the Internet is 100% secure, and we cannot guarantee absolute security.
            </p>

            <h2 className="font-heading text-2xl font-bold uppercase text-tmrw-black mt-8 mb-4">
              6. Your Rights
            </h2>
            <p className="font-body text-gray-700 mb-4">
              Under UK GDPR, you have the right to:
            </p>
            <ul className="list-disc list-inside font-body text-gray-700 mb-4 space-y-2">
              <li>Access your personal data</li>
              <li>Rectify inaccurate data</li>
              <li>Request deletion of your data</li>
              <li>Object to processing</li>
              <li>Data portability</li>
              <li>Withdraw consent at any time</li>
            </ul>

            <h2 className="font-heading text-2xl font-bold uppercase text-tmrw-black mt-8 mb-4">
              7. Contact Us
            </h2>
            <p className="font-body text-gray-700 mb-4">
              If you have any questions about this Privacy Policy or wish to exercise your rights, please contact us at:
            </p>
            <p className="font-body text-gray-700 mb-8">
              Email: <a href="mailto:hello@tmrwcreatives.co.uk" className="text-tmrw-purple hover:underline">hello@tmrwcreatives.co.uk</a>
            </p>

            <div className="mt-12 pt-8 border-t border-gray-200">
              <Button asChild variant="outline-dark" className="font-accent font-bold">
                <Link href="/contact">Contact Us</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
