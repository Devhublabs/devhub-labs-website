import {
  AnimatedSection,
  CTASection,
  FeatureGrid,
  FeatureGridItem,
  GlassCard,
  PageContainer,
  PageHero,
  TechnologyBadge,
} from "@/components/pages";
import Chip from "@/components/ui/Chip.jsx";
import Container from "@/components/ui/Container.jsx";
import SectionHeading from "@/components/ui/SectionHeading.jsx";
import { engineeringPractices, technologyGroups } from "@/data/technologies.js";

export default function Technology() {
  return (
    <PageContainer>
      <PageHero
        eyebrow="Our Stack"
        title="Technology"
        description="Modern tools, proven practices, and emerging technologies—chosen for each project's requirements, not popularity."
      />

      <AnimatedSection spacing="lg" stagger>
        <Container>
          <FeatureGrid columns={2} gap="gap-6 lg:gap-8">
            {technologyGroups.map((group) => (
              <FeatureGridItem key={group.id}>
                <GlassCard interactive className="h-full">
                  <h3 className="text-card-heading mb-5">{group.title}</h3>
                  <div className="flex flex-wrap gap-2">
                    {group.technologies.map((tech) => (
                      <Chip key={tech}>{tech}</Chip>
                    ))}
                  </div>
                </GlassCard>
              </FeatureGridItem>
            ))}
          </FeatureGrid>
        </Container>
      </AnimatedSection>

      <AnimatedSection spacing="lg" surface="gradient">
        <Container>
          <SectionHeading
            eyebrow="How We Work"
            title="Engineering Practices"
            description="Beyond tools and frameworks, these principles guide every line of code we write."
            align="center"
            width="md"
            className="mx-auto mb-10 text-center"
          />
          <div className="flex flex-wrap justify-center gap-3">
            {engineeringPractices.map((practice) => (
              <TechnologyBadge key={practice} label={practice} variant="practice" />
            ))}
          </div>
        </Container>
      </AnimatedSection>

      <AnimatedSection spacing="lg" surface="muted">
        <Container size="md">
          <SectionHeading
            title="Right Tool, Right Project"
            description="Rather than selecting technologies because they're popular, we choose tools that best fit each project's requirements, ensuring performance, maintainability, and room for future growth."
            align="center"
            width="md"
            className="mx-auto text-center"
          />
        </Container>
      </AnimatedSection>

      <CTASection
        title="Need a technical partner?"
        description="Let's discuss the right technology approach for your next project."
        secondaryLabel="Meet the Team"
        secondaryPath="/team"
      />
    </PageContainer>
  );
}
