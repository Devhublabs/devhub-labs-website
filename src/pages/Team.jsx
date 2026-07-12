import {
  AnimatedSection,
  CTASection,
  FeatureGrid,
  FeatureGridItem,
  PageContainer,
  PageHero,
  TeamCard,
} from "@/components/pages";
import Seo from "@/components/seo/Seo.jsx";
import Container from "@/components/ui/Container.jsx";
import SectionHeading from "@/components/ui/SectionHeading.jsx";
import { teamIntro, teamMembers } from "@/data/team.js";
import { ROUTE_PATHS } from "@/routes/paths.js";

export default function Team() {
  return (
    <PageContainer>
      <Seo
        title="Team"
        description="Meet the DevHub Labs team—developers, designers, and problem-solvers who turn ambitious ideas into reliable, polished software."
        path={ROUTE_PATHS.team}
        breadcrumbs={[
          { name: "Home", path: "/" },
          { name: "Team", path: ROUTE_PATHS.team },
        ]}
      />
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
