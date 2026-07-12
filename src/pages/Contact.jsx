import { Mail, MessageSquare, Phone } from "lucide-react";
import {
  AnimatedSection,
  CTASection,
  GlassCard,
  PageContainer,
  PageHero,
} from "@/components/pages";
import Container from "@/components/ui/Container.jsx";
import SectionHeading from "@/components/ui/SectionHeading.jsx";
import { company } from "@/data/company.js";

export default function Contact() {
  return (
    <PageContainer>
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
                        href={`tel:${company.phone}`}
                        className="font-heading text-xl font-semibold text-[var(--color-text-primary)] transition-colors hover:text-[var(--color-primary)]"
                      >
                        {company.phone}
                      </a>
                    </div>
                  </div>
                </GlassCard>

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
              <form
                className="relative z-10 space-y-6"
                onSubmit={(event) => event.preventDefault()}
                aria-label="Contact form"
              >
                <div className="flex items-center gap-3">
                  <span className="flex size-11 items-center justify-center rounded-2xl bg-[var(--color-icon-surface)] text-[var(--color-primary)]">
                    <MessageSquare aria-hidden="true" className="size-5" />
                  </span>
                  <div>
                    <h2 className="text-card-heading">Send a Message</h2>
                    <p className="text-sm text-[var(--color-text-secondary)]">
                      We will get back to you as soon as possible.
                    </p>
                  </div>
                </div>

                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label htmlFor="contact-name" className="mb-2 block text-sm font-semibold text-[var(--color-text-primary)]">
                      Name
                    </label>
                    <input
                      id="contact-name"
                      name="name"
                      type="text"
                      required
                      autoComplete="name"
                      className="form-input w-full rounded-lg px-4 py-3 shadow-sm transition-colors"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label htmlFor="contact-email" className="mb-2 block text-sm font-semibold text-[var(--color-text-primary)]">
                      Email
                    </label>
                    <input
                      id="contact-email"
                      name="email"
                      type="email"
                      required
                      autoComplete="email"
                      className="form-input w-full rounded-lg px-4 py-3 shadow-sm transition-colors"
                      placeholder="you@company.com"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="contact-subject" className="mb-2 block text-sm font-semibold text-[var(--color-text-primary)]">
                    Subject
                  </label>
                  <input
                    id="contact-subject"
                    name="subject"
                    type="text"
                    className="form-input w-full rounded-lg px-4 py-3 shadow-sm transition-colors"
                    placeholder="Project inquiry"
                  />
                </div>

                <div>
                  <label htmlFor="contact-message" className="mb-2 block text-sm font-semibold text-[var(--color-text-primary)]">
                    Message
                  </label>
                  <textarea
                    id="contact-message"
                    name="message"
                    required
                    rows={5}
                    className="form-input w-full resize-y rounded-lg px-4 py-3 shadow-sm transition-colors"
                    placeholder="Tell us about your project or question..."
                  />
                </div>

                <button
                  type="submit"
                  className="btn-cta-primary inline-flex h-14 w-full items-center justify-center gap-3 rounded-lg px-7 text-sm font-bold transition-[transform,box-shadow] duration-[400ms] hover:-translate-y-0.5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--color-primary)] sm:w-auto"
                >
                  Send Message
                </button>
              </form>
            </GlassCard>
          </div>
        </Container>
      </AnimatedSection>

      <CTASection
        eyebrow="Ready to Build?"
        title="Let's create software that creates real value."
        description="Every great product starts with a conversation. Reach out and let's explore what's possible."
        primaryLabel="Call Us Now"
        primaryPath={`tel:${company.phone}`}
      />
    </PageContainer>
  );
}
