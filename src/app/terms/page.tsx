import { Metadata } from "next"
import Link from "next/link"
import { PageHero } from "@/components/shared/PageHero"
import { Button } from "@/components/ui/button"

export const metadata: Metadata = {
  title: "Terms of Use | TMRW Creatives CIC",
  description: "Terms of use for the TMRW Creatives CIC website and services.",
}

export default function TermsPage() {
  return (
    <>
      <PageHero
        badge="LEGAL"
        title="Terms of"
        highlight="Use."
        description="Please read these terms carefully before using our website and services."
      />

      <section className="py-20 lg:py-28 bg-tmrw-white">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="max-w-3xl mx-auto prose prose-lg">
            <p className="font-body text-gray-600 mb-8">
              Last updated: January 2026
            </p>

            <h2 className="font-heading text-2xl font-bold uppercase text-tmrw-black mt-8 mb-4">
              1. Acceptance of Terms
            </h2>
            <p className="font-body text-gray-700 mb-4">
              By accessing and using the TMRW Creatives CIC website and services, you accept and agree to be bound by these Terms of Use. If you do not agree to these terms, please do not use our services.
            </p>

            <h2 className="font-heading text-2xl font-bold uppercase text-tmrw-black mt-8 mb-4">
              2. About TMRW Creatives CIC
            </h2>
            <p className="font-body text-gray-700 mb-4">
              TMRW Creatives CIC is a Community Interest Company registered in England and Wales. We provide programmes, events, and opportunities for young creatives aged 12-30 in the Medway area and beyond.
            </p>

            <h2 className="font-heading text-2xl font-bold uppercase text-tmrw-black mt-8 mb-4">
              3. Use of Our Services
            </h2>
            <p className="font-body text-gray-700 mb-4">
              You agree to use our website and services only for lawful purposes and in a way that does not infringe the rights of, restrict, or inhibit anyone else&apos;s use and enjoyment.
            </p>
            <p className="font-body text-gray-700 mb-4">
              You must not:
            </p>
            <ul className="list-disc list-inside font-body text-gray-700 mb-4 space-y-2">
              <li>Use our services for any illegal or unauthorised purpose</li>
              <li>Submit false or misleading information</li>
              <li>Attempt to gain unauthorised access to our systems</li>
              <li>Interfere with other users&apos; enjoyment of our services</li>
              <li>Copy, reproduce, or distribute our content without permission</li>
            </ul>

            <h2 className="font-heading text-2xl font-bold uppercase text-tmrw-black mt-8 mb-4">
              4. Programme Participation
            </h2>
            <p className="font-body text-gray-700 mb-4">
              Participation in TMRW programmes is subject to:
            </p>
            <ul className="list-disc list-inside font-body text-gray-700 mb-4 space-y-2">
              <li>Meeting eligibility criteria (age requirements, location, etc.)</li>
              <li>Successful application and selection</li>
              <li>Agreement to programme-specific terms and codes of conduct</li>
              <li>Compliance with our safeguarding policies</li>
            </ul>

            <h2 className="font-heading text-2xl font-bold uppercase text-tmrw-black mt-8 mb-4">
              5. Intellectual Property
            </h2>
            <p className="font-body text-gray-700 mb-4">
              All content on this website, including text, graphics, logos, and images, is the property of TMRW Creatives CIC or its content suppliers and is protected by copyright laws.
            </p>
            <p className="font-body text-gray-700 mb-4">
              Participants in our programmes retain ownership of their original creative works unless otherwise agreed in writing.
            </p>

            <h2 className="font-heading text-2xl font-bold uppercase text-tmrw-black mt-8 mb-4">
              6. Opportunities
            </h2>
            <p className="font-body text-gray-700 mb-4">
              Opportunities listed on our website are provided by third parties. While we vet opportunities before sharing, we cannot guarantee the accuracy of all information or the outcomes of any applications.
            </p>

            <h2 className="font-heading text-2xl font-bold uppercase text-tmrw-black mt-8 mb-4">
              7. Limitation of Liability
            </h2>
            <p className="font-body text-gray-700 mb-4">
              TMRW Creatives CIC shall not be liable for any indirect, incidental, special, or consequential damages arising from your use of our services.
            </p>

            <h2 className="font-heading text-2xl font-bold uppercase text-tmrw-black mt-8 mb-4">
              8. Changes to Terms
            </h2>
            <p className="font-body text-gray-700 mb-4">
              We reserve the right to modify these terms at any time. Changes will be effective immediately upon posting to our website. Your continued use of our services constitutes acceptance of any changes.
            </p>

            <h2 className="font-heading text-2xl font-bold uppercase text-tmrw-black mt-8 mb-4">
              9. Governing Law
            </h2>
            <p className="font-body text-gray-700 mb-4">
              These terms shall be governed by and construed in accordance with the laws of England and Wales.
            </p>

            <h2 className="font-heading text-2xl font-bold uppercase text-tmrw-black mt-8 mb-4">
              10. Contact Us
            </h2>
            <p className="font-body text-gray-700 mb-8">
              If you have any questions about these Terms of Use, please contact us at:
              <br />
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
