import { Card } from '@/components/Card'
import { Section } from '@/components/Section'
import { SimpleLayout } from '@/components/SimpleLayout'

function SpeakingSection({ children, ...props }) {
  return (
    <Section {...props}>
      <div className="space-y-16">{children}</div>
    </Section>
  )
}

function Appearance({ title, description, event, cta, href }) {
  return (
    <Card as="article">
      <Card.Title as="h3" href={href}>
        {title}
      </Card.Title>
      <Card.Eyebrow decorate>{event}</Card.Eyebrow>
      <Card.Description>{description}</Card.Description>
      <Card.Cta>{cta}</Card.Cta>
    </Card>
  )
}

export const metadata = {
  title: 'Speaking',
  description:
    'Aside my technical articles , i am also applying to participate in Tech and IT conferences.',
}

export default function Speaking() {
  return (
    <SimpleLayout
      title="Tech & IT conferences."
      intro="Writing has been my main way of sharing knowledge, but I believe there’s a different kind of energy and connection when speaking live. That’s why I’m thrilled to make my first appearance as a speaker at Devoxx Morocco, where I’ll have the chance to interact directly with the community and spark real-time conversations."
    >
      <div className="space-y-20">
        <SpeakingSection title="Conferences">
          <Appearance
            href="https://devoxx.ma/speaker/?id=4772"
            title="Automating low value tickets with CI Pipelines : Sonarqube reports + AI agents"
            description="Automate trivial SonarQube issues by delegating low-severity tickets to an AI agent, running automated tests, and creating pull requests for human review"
            event="Devoxx Morocco 2025"
            cta="Visit Devoxx Morocco"
          />
        </SpeakingSection>
      </div>
    </SimpleLayout>
  )
}
