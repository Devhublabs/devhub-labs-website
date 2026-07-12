import {
  AnimatedSection,
  CTASection,
  PageContainer,
  PageHero,
  Timeline,
} from "@/components/pages";
import Container from "@/components/ui/Container.jsx";
import SectionHeading from "@/components/ui/SectionHeading.jsx";
import { processSteps } from "@/data/process.js";

export default function Process() {
  return (
    <PageContainer>
      <PageHero
        eyebrow="How We Work"
        title="Our Process"
        description="A thoughtful engineering process from discovery through deployment and beyond—designed to deliver reliable, refined software."
      />

      <AnimatedSection spacing="lg">
        <Container>
          <SectionHeading
            eyebrow="Seven Stages"
            title="From Idea to Impact"
            description="Every project follows a structured path with clear milestones, transparent communication, and continuous improvement."
            align="center"
            width="md"
            className="mx-auto mb-14 text-center"
          />
        </Container>
        <Timeline steps={processSteps} />
      </AnimatedSection>

      <AnimatedSection spacing="lg" surface="muted">
        <Container size="md">
          <SectionHeading
            title="Built for Long-Term Success"
            description="Great software continues to evolve after launch. Our process doesn't end at deployment—we provide ongoing support, iterate based on feedback, and continuously improve every product we build."
            align="center"
            width="md"
            className="mx-auto text-center"
          />
        </Container>
      </AnimatedSection>

      <CTASection
        title="Ready to start your project?"
        description="Let's begin with discovery and build something exceptional together."
        secondaryLabel="Explore Services"
        secondaryPath="/services"
      />
    </PageContainer>
  );
}
