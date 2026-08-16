import {
  Award,
  Eye,
  Lightbulb,
  Target,
} from "lucide-react";
import {
  AnimatedSection,
  CTASection,
  FeatureGrid,
  FeatureGridItem,
  GlassCard,
  PageContainer,
  PageHero,
  SectionTitle,
  ValueCard,
} from "@/components/pages";
import Seo from "@/components/seo/Seo.jsx";
import Chip from "@/components/ui/Chip.jsx";
import Container from "@/components/ui/Container.jsx";
import SectionHeading from "@/components/ui/SectionHeading.jsx";
import {
  aboutIntro,
  howWeBuild,
  mission,
  values,
  vision,
  whyDevHub,
} from "@/data/about.js";
import { ROUTE_PATHS } from "@/routes/paths.js";

const valueIcons = {
  quality: Award,
  innovation: Lightbulb,
  transparency: Eye,
  "long-term": Target,
};

export default function About() {
  return (
    <PageContainer>
      <Seo
        title="About"
        description="DevHub Labs builds software that creates real value—guided by clean architecture, thoughtful design, and long-term thinking. Learn about our mission and values."
        path={ROUTE_PATHS.about}
        breadcrumbs={[
          { name: "Home", path: "/" },
          { name: "About", path: ROUTE_PATHS.about },
        ]}
      />
      <PageHero
        eyebrow={aboutIntro.eyebrow}
        title={aboutIntro.title}
        description={aboutIntro.paragraphs[0]}
      />

      <AnimatedSection spacing="lg">
        <Container size="md">
          <div className="space-y-6">
            {aboutIntro.paragraphs.slice(1).map((paragraph) => (
              <p key={paragraph.slice(0, 40)} className="text-paragraph text-lg">
                {paragraph}
              </p>
            ))}
          </div>
        </Container>
      </AnimatedSection>

      <AnimatedSection spacing="lg" surface="muted">
        <Container>
          <FeatureGrid columns={2} gap="gap-6 lg:gap-8">
            <FeatureGridItem>
              <GlassCard interactive className="h-full">
                <p className="text-small-label mb-3">{mission.title}</p>
                <SectionTitle as="h2" className="mb-4">
                  {mission.title}
                </SectionTitle>
                <p className="text-paragraph text-lg">{mission.description}</p>
              </GlassCard>
            </FeatureGridItem>
            <FeatureGridItem>
              <GlassCard interactive className="h-full">
                <p className="text-small-label mb-3">{vision.title}</p>
                <SectionTitle as="h2" className="mb-4">
                  {vision.title}
                </SectionTitle>
                <p className="text-paragraph text-lg">{vision.description}</p>
              </GlassCard>
            </FeatureGridItem>
          </FeatureGrid>
        </Container>
      </AnimatedSection>

      <AnimatedSection spacing="lg" stagger>
        <Container>
          <SectionHeading
            eyebrow="What Guides Us"
            title="Our Values"
            description="The principles that shape how we build, collaborate, and deliver software."
            align="center"
            width="md"
            className="mx-auto mb-12 text-center"
          />
          <FeatureGrid columns={2} gap="gap-6 lg:gap-8">
            {values.map((value) => {
              const Icon = valueIcons[value.id];
              return (
                <FeatureGridItem key={value.id}>
                  <ValueCard
                    title={value.title}
                    description={value.description}
                    icon={Icon ? <Icon aria-hidden="true" className="size-5" /> : null}
                  />
                </FeatureGridItem>
              );
            })}
          </FeatureGrid>
        </Container>
      </AnimatedSection>

      <AnimatedSection spacing="lg" surface="gradient">
        <Container>
          <SectionHeading
            eyebrow="Engineering"
            title={howWeBuild.title}
            description={howWeBuild.intro}
            align="left"
            width="lg"
            className="mb-10"
          />
          <div className="space-y-8">
            <div>
              <h3 className="text-card-heading mb-4">Our team actively works with:</h3>
              <div className="flex flex-wrap gap-2">
                {howWeBuild.activeStack.map((tech) => (
                  <Chip key={tech}>{tech}</Chip>
                ))}
              </div>
            </div>
            <div>
              <h3 className="text-card-heading mb-4">while continuously expanding our expertise in:</h3>
              <div className="flex flex-wrap gap-2">
                {howWeBuild.expanding.map((tech) => (
                  <Chip key={tech}>{tech}</Chip>
                ))}
              </div>
            </div>
            <p className="text-paragraph text-lg">{howWeBuild.closing}</p>
            <p className="text-paragraph text-lg">{howWeBuild.commitment}</p>
          </div>
        </Container>
      </AnimatedSection>

      <AnimatedSection spacing="lg">
        <Container size="md">
          <SectionHeading
            title={whyDevHub.title}
            align="center"
            width="md"
            className="mx-auto mb-8 text-center"
          />
          <div className="space-y-6">
            {whyDevHub.paragraphs.map((paragraph) => (
              <p key={paragraph.slice(0, 40)} className="text-paragraph text-center text-lg">
                {paragraph}
              </p>
            ))}
          </div>
        </Container>
      </AnimatedSection>

      <CTASection
        secondaryLabel="View Our Work"
        secondaryPath="/projects"
      />
    </PageContainer>
  );
}
