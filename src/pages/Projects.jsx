import {
  AnimatedSection,
  CTASection,
  FeatureGrid,
  FeatureGridItem,
  PageContainer,
  PageHero,
  ProjectCard,
} from "@/components/pages";
import Container from "@/components/ui/Container.jsx";
import SectionHeading from "@/components/ui/SectionHeading.jsx";
import { projects } from "@/data/projects.js";

export default function Projects() {
  return (
    <PageContainer>
      <PageHero
        eyebrow="Our Work"
        title="Projects"
        description="A selection of digital products we've engineered—each built with attention to performance, design, and long-term value."
      />

      <AnimatedSection spacing="lg" stagger>
        <Container>
          <SectionHeading
            eyebrow="Portfolio"
            title="Selected Work"
            description="Every project reflects our commitment to clean architecture, refined interfaces, and software that performs exceptionally."
            align="center"
            width="lg"
            className="mx-auto mb-12 text-center"
          />
          <FeatureGrid columns={2} gap="gap-8 lg:gap-10">
            {projects.map((project) => (
              <FeatureGridItem key={project.id}>
                <ProjectCard
                  title={project.title}
                  category={project.category}
                  summary={project.summary}
                  image={project.image}
                  url={project.url}
                  highlights={project.highlights}
                  technologies={project.technologies}
                  featured={project.featured}
                />
              </FeatureGridItem>
            ))}
          </FeatureGrid>
        </Container>
      </AnimatedSection>

      <AnimatedSection spacing="lg" surface="muted">
        <Container size="md">
          <SectionHeading
            title="More Projects Coming Soon"
            description="We're continuously building and refining new digital products. Check back as our portfolio grows."
            align="center"
            width="md"
            className="mx-auto text-center"
          />
        </Container>
      </AnimatedSection>

      <CTASection
        title="Have a project in mind?"
        description="Let's discuss how we can bring your next idea to life."
        secondaryLabel="View Services"
        secondaryPath="/services"
      />
    </PageContainer>
  );
}
