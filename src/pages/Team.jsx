import {
  AnimatedSection,
  CTASection,
  FeatureGrid,
  FeatureGridItem,
  PageContainer,
  PageHero,
  TeamCard,
} from "@/components/pages";
import Container from "@/components/ui/Container.jsx";
import SectionHeading from "@/components/ui/SectionHeading.jsx";
import { teamIntro, teamMembers } from "@/data/team.js";

export default function Team() {
  return (
    <PageContainer>
      <PageHero
        eyebrow={teamIntro.eyebrow}
        title={teamIntro.title}
        description={teamIntro.description}
      />

      <AnimatedSection spacing="lg" stagger>
        <Container>
          <FeatureGrid columns={3} gap="gap-6 lg:gap-8">
            {teamMembers.map((member) => (
              <FeatureGridItem key={member.id}>
                <TeamCard
                  name={member.name}
                  role={member.role}
                  bio={member.bio}
                  image={member.image}
                  socials={member.socials}
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
            eyebrow="Collaboration"
            title="Built Through Teamwork"
            description="Each member brings a unique perspective—systems thinking, product strategy, full-stack development, frontend craft, and emerging technology exploration—allowing us to approach every project with balance and depth."
            align="center"
            width="md"
            className="mx-auto text-center"
          />
        </Container>
      </AnimatedSection>

      <CTASection
        title="Want to work with our team?"
        description="We're always open to meaningful projects and collaborative partnerships."
      />
    </PageContainer>
  );
}
