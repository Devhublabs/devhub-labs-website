import { Mail, Phone } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa6";
import {
  AnimatedSection,
  ContactForm,
  CTASection,
  GlassCard,
  PageContainer,
  PageHero,
} from "@/components/pages";
import Seo from "@/components/seo/Seo.jsx";
import Container from "@/components/ui/Container.jsx";
import SectionHeading from "@/components/ui/SectionHeading.jsx";
import { company } from "@/data/company.js";
import { ROUTE_PATHS } from "@/routes/paths.js";

export default function Contact() {
  return (
    <PageContainer>
      <Seo
        title="Contact"
        description="Get in touch with DevHub Labs. Whether you have a project in mind, a question about our services, or just want to say hello—we'd love to hear from you."
        path={ROUTE_PATHS.contact}
      />
      <PageHero
        eyebrow="Get in Touch"
        title="Contact"
        description="Whether you have a project in mind, a question about our services, or just want to say hello—we'd love to hear from you."
      />

      <AnimatedSection spacing="lg">
        <Container>
          <div className="grid gap-8 lg:grid-cols-[1fr_1.1fr] lg:gap-12">
            <div>
              <SectionHeading
                eyebrow="Let's Talk"
                title="Start a Conversation"
                description="Tell us about your project, goals, or challenges. We'll respond thoughtfully and help you explore the best path forward."
                align="left"
                width="full"
                className="mb-8"
              />

              <div className="space-y-4">
                <GlassCard interactive>
                  <div className="flex items-start gap-4">
                    <span className="flex size-11 shrink-0 items-center justify-center rounded-2xl bg-[var(--color-primary)] text-white shadow-[var(--shadow-glow)]">
                      <Phone aria-hidden="true" className="size-5" />
                    </span>
                    <div>
                      <p className="text-small-label mb-1">Phone</p>
                      <a
                        href={company.phoneHref}
                        className="font-heading text-xl font-semibold text-[var(--color-text-primary)] transition-colors hover:text-[var(--color-primary)]"
                      >
                        {company.phone}
                      </a>
                    </div>
                  </div>
                </GlassCard>

                <a
                  href={company.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block rounded-[var(--radius-xl)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--color-primary)]"
                  aria-label="Chat with DevHub Labs on WhatsApp"
                >
                  <div className="whatsapp-card group flex items-center justify-between gap-4 rounded-[var(--radius-xl)] border border-[var(--color-glass-border)] p-5 shadow-[var(--shadow-soft)] transition-[transform,box-shadow] duration-300 hover:-translate-y-0.5 hover:shadow-[var(--shadow-hover-glow)]">
                    <div className="flex items-center gap-4">
                      <span className="flex size-11 shrink-0 items-center justify-center rounded-2xl bg-[#25D366] text-white shadow-[var(--shadow-glow)]">
                        <FaWhatsapp aria-hidden="true" className="size-5" />
                      </span>
                      <div>
                        <p className="text-small-label mb-1">WhatsApp</p>
                        <span className="font-heading text-xl font-semibold text-[var(--color-text-primary)]">
                          Chat with us
                        </span>
                      </div>
                    </div>
                    <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-[var(--color-primary)] transition-transform duration-300 group-hover:translate-x-0.5">
                      Open chat
                    </span>
                  </div>
                </a>

                <GlassCard interactive>
                  <div className="flex items-start gap-4">
                    <span className="flex size-11 shrink-0 items-center justify-center rounded-2xl bg-[var(--color-primary)] text-white shadow-[var(--shadow-glow)]">
                      <Mail aria-hidden="true" className="size-5" />
                    </span>
                    <div>
                      <p className="text-small-label mb-1">Email</p>
                      <a
                        href={`mailto:${company.email}`}
                        className="font-heading text-xl font-semibold text-[var(--color-text-primary)] transition-colors hover:text-[var(--color-primary)]"
                      >
                        {company.email}
                      </a>
                    </div>
                  </div>
                </GlassCard>
              </div>
            </div>

            <GlassCard padding="lg" className="relative overflow-hidden">
              <div
                className="cta-panel-gradient pointer-events-none absolute inset-0"
                aria-hidden="true"
              />
              <ContactForm />
            </GlassCard>
          </div>
        </Container>
      </AnimatedSection>

      <CTASection
        eyebrow="Ready to Build?"
        title="Let's create software that creates real value."
        description="Every great product starts with a conversation. Reach out and let's explore what's possible."
        primaryLabel="Call Us Now"
        primaryPath={company.phoneHref}
        secondaryLabel="WhatsApp Us"
        secondaryPath={company.whatsappUrl}
      />
    </PageContainer>
  );
}
