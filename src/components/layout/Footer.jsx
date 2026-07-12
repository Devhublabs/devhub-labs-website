import { Mail, MapPin, Phone } from "lucide-react";
import { FaGithub, FaLinkedinIn, FaWhatsapp, FaXTwitter } from "react-icons/fa6";
import { Link } from "react-router-dom";
import logo from "@/assets/logos/logo.png";
import { company } from "@/data/company.js";
import { navigationItems } from "@/data/navigation.js";
import { services } from "@/data/services.js";
import { ROUTE_PATHS } from "@/routes/paths.js";
import { cn } from "@/utils/cn.js";

const footerServices = services.slice(0, 6);

const socialLinks = [
  { id: "github", label: "GitHub", icon: FaGithub, url: company.social.github },
  {
    id: "linkedin",
    label: "LinkedIn",
    icon: FaLinkedinIn,
    url: company.social.linkedin,
  },
  { id: "x", label: "X (Twitter)", icon: FaXTwitter, url: company.social.x },
  { id: "whatsapp", label: "WhatsApp", icon: FaWhatsapp, url: company.whatsappUrl },
];

function FooterHeading({ children }) {
  return (
    <h3 className="mb-4 text-small-label text-[var(--color-text-muted)]">
      {children}
    </h3>
  );
}

function FooterLink({ to, children }) {
  return (
    <Link
      to={to}
      className="footer-link inline-flex text-sm text-[var(--color-text-secondary)] transition-colors hover:text-[var(--color-primary)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-primary)]"
    >
      {children}
    </Link>
  );
}

function SocialButton({ label, icon: Icon, url }) {
  const isAvailable = Boolean(url);
  const className =
    "flex size-10 items-center justify-center rounded-full border border-[var(--color-glass-border)] bg-[var(--color-glass-bg)] text-[var(--color-text-secondary)] shadow-[var(--shadow-soft)] transition-[transform,color,box-shadow] duration-300";

  if (!isAvailable) {
    return (
      <span
        className={cn(className, "cursor-not-allowed opacity-50")}
        role="img"
        aria-label={`${label} (coming soon)`}
        title={`${label} — coming soon`}
      >
        <Icon aria-hidden="true" className="size-4" />
      </span>
    );
  }

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className={cn(
        className,
        "hover:-translate-y-0.5 hover:text-[var(--color-primary)] hover:shadow-[var(--shadow-hover-glow)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-primary)]",
      )}
    >
      <Icon aria-hidden="true" className="size-4" />
    </a>
  );
}

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer-shell relative mt-auto overflow-hidden border-t border-[var(--color-border)]">
      <div className="footer-top-glow pointer-events-none absolute inset-x-0 top-0 h-px" />
      <div className="cta-panel-gradient pointer-events-none absolute inset-0 opacity-60" aria-hidden="true" />

      <div className="relative mx-auto w-full max-w-[86rem] px-5 py-14 sm:px-6 lg:px-8 lg:py-16">
        <div className="grid gap-10 lg:grid-cols-[1.5fr_1fr_1fr_1.2fr]">
          {/* Company */}
          <div className="max-w-sm">
            <Link
              to="/"
              className="inline-flex items-center gap-2.5 rounded-md focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--color-primary)]"
              aria-label="DevHub Labs home"
            >
              <span className="relative flex size-10 items-center justify-center">
                <span className="absolute inset-0 rounded-full bg-[var(--color-primary)]/18 blur-md" />
                <span className="absolute inset-1 rounded-full border border-[var(--color-glass-border)] bg-[var(--color-glass-bg)]" />
                <img
                  src={logo}
                  alt=""
                  width="32"
                  height="32"
                  className="relative size-8 rounded-full object-contain"
                />
              </span>
              <span className="font-heading text-lg font-bold leading-none text-[var(--color-text-primary)]">
                DevHub<span className="purple-text-gradient">Labs</span>
              </span>
            </Link>

            <p className="mt-5 text-sm leading-relaxed text-[var(--color-text-secondary)]">
              {company.mission}
            </p>

            <div className="mt-6 flex items-center gap-3">
              {socialLinks.map((social) => (
                <SocialButton
                  key={social.id}
                  label={social.label}
                  icon={social.icon}
                  url={social.url}
                />
              ))}
            </div>
          </div>

          {/* Navigation */}
          <nav aria-label="Footer navigation">
            <FooterHeading>Navigation</FooterHeading>
            <ul className="space-y-3">
              {navigationItems.map((item) => (
                <li key={item.id}>
                  <FooterLink to={item.path}>{item.label}</FooterLink>
                </li>
              ))}
            </ul>
          </nav>

          {/* Services */}
          <nav aria-label="Services">
            <FooterHeading>Services</FooterHeading>
            <ul className="space-y-3">
              {footerServices.map((service) => (
                <li key={service.id}>
                  <FooterLink to={ROUTE_PATHS.services}>{service.title}</FooterLink>
                </li>
              ))}
            </ul>
          </nav>

          {/* Contact */}
          <div>
            <FooterHeading>Contact</FooterHeading>
            <ul className="space-y-4">
              <li>
                <a
                  href={company.phoneHref}
                  className="group flex items-start gap-3 text-sm text-[var(--color-text-secondary)] transition-colors hover:text-[var(--color-primary)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-primary)]"
                >
                  <Phone aria-hidden="true" className="mt-0.5 size-4 text-[var(--color-primary)]" />
                  <span>{company.phone}</span>
                </a>
              </li>
              <li>
                <a
                  href={company.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-start gap-3 text-sm text-[var(--color-text-secondary)] transition-colors hover:text-[var(--color-primary)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-primary)]"
                >
                  <FaWhatsapp aria-hidden="true" className="mt-0.5 size-4 text-[var(--color-primary)]" />
                  <span>WhatsApp Chat</span>
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${company.email}`}
                  className="group flex items-start gap-3 text-sm text-[var(--color-text-secondary)] transition-colors hover:text-[var(--color-primary)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-primary)]"
                >
                  <Mail aria-hidden="true" className="mt-0.5 size-4 text-[var(--color-primary)]" />
                  <span className="break-all">{company.email}</span>
                </a>
              </li>
              <li className="flex items-start gap-3 text-sm text-[var(--color-text-secondary)]">
                <MapPin aria-hidden="true" className="mt-0.5 size-4 text-[var(--color-primary)]" />
                <span>{company.location}</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-3 border-t border-[var(--color-border)] pt-6 text-sm text-[var(--color-text-muted)] sm:flex-row sm:items-center sm:justify-between">
          <p>
            &copy; {year} {company.name}. All rights reserved.
          </p>
          <p className="flex items-center gap-1.5">
            Built with
            <span className="font-semibold text-[var(--color-text-secondary)]">
              React
            </span>
            +
            <span className="font-semibold text-[var(--color-text-secondary)]">
              Vite
            </span>
          </p>
        </div>
      </div>
    </footer>
  );
}
