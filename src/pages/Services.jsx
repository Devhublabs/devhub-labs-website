import {
  AnimatedSection,
  CTASection,
  FeatureGrid,
  FeatureGridItem,
  PageContainer,
  PageHero,
  ServiceCard,
} from "@/components/pages";
import Seo from "@/components/seo/Seo.jsx";
import Container from "@/components/ui/Container.jsx";
import SectionHeading from "@/components/ui/SectionHeading.jsx";
import { services } from "@/data/services.js";
import { ROUTE_PATHS } from "@/routes/paths.js";

export default function Services() {
  return (
    <PageContainer>
      <Seo
        title="Services"
        description="From intelligent AI solutions to scalable SaaS platforms, web apps, and custom software—DevHub Labs engineers software that solves real problems."
        path={ROUTE_PATHS.services}
        breadcrumbs={[
          { name: "Home", path: "/" },
          { name: "Services", path: ROUTE_PATHS.services },
        ]}
      />
      <PageHero
        eyebrow="What We Do"
        title="Services"
        description="From intelligent AI solutions to scalable SaaS platforms—we engineer software that solves real problems and creates lasting value."
      />

      <AnimatedSection spacing="lg" stagger>
        <Container>
          <SectionHeading
            eyebrow="Capabilities"
            title="Engineering Solutions for Modern Businesses"
            description="Every service is delivered with the same commitment to clean architecture, refined design, and long-term maintainability."
            align="center"
            width="lg"
            className="mx-auto mb-12 text-center"
          />
          <FeatureGrid columns={3} gap="gap-6 lg:gap-8">
            {services.map((service) => (
              <FeatureGridItem key={service.id}>
                <ServiceCard
                  id={service.id}
                  title={service.title}
                  summary={service.summary}
                  capabilities={service.capabilities}
                  className="h-full"
                />
              </FeatureGridItem>
            ))}
          </FeatureGrid>
        </Container>
      </AnimatedSection>

      <AnimatedSection spacing="lg" surface="muted">
        <Container size="md">
          <SectionHeading
            eyebrow="Approach"
            title="Tailored to Your Needs"
            description="Rather than offering one-size-fits-all solutions, we work closely with every client to understand their objectives, identify real business challenges, and engineer software that fits their needs—not the other way around."
            align="center"
            width="md"
            className="mx-auto text-center"
          />
        </Container>
      </AnimatedSection>

      <CTASection
        title="Have a project in mind?"
        description="Tell us about your goals and we'll help you find the right approach."
        secondaryLabel="View Our Process"
        secondaryPath="/process"
      />
    </PageContainer>
  );
}
