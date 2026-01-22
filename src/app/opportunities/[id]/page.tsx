import { Metadata } from "next"
import { notFound } from "next/navigation"
import { opportunities, getOpportunityById } from "@/data/opportunities"
import { OpportunityDetailClient } from "./OpportunityDetailClient"

interface OpportunityPageProps {
  params: Promise<{ id: string }>
}

export async function generateStaticParams() {
  return opportunities.map((opp) => ({
    id: opp.id.toString(),
  }))
}

export async function generateMetadata({ params }: OpportunityPageProps): Promise<Metadata> {
  const { id } = await params
  const opportunity = getOpportunityById(parseInt(id))

  if (!opportunity) {
    return {
      title: "Opportunity Not Found | TMRW Creatives CIC",
    }
  }

  return {
    title: `${opportunity.title} | TMRW Creatives CIC`,
    description: opportunity.description,
  }
}

export default async function OpportunityPage({ params }: OpportunityPageProps) {
  const { id } = await params
  const opportunity = getOpportunityById(parseInt(id))

  if (!opportunity) {
    notFound()
  }

  return <OpportunityDetailClient opportunity={opportunity} />
}
