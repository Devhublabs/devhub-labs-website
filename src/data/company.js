const whatsappNumber = "2347079839976";
const whatsappMessage = "Hello DevHub Labs, I'd like to discuss a project.";

export const company = {
  name: "DevHub Labs",
  tagline: "Software strategy, design, and engineering.",
  mission:
    "We design and build intelligent, scalable software that helps ambitious businesses operate more efficiently, grow with confidence, and create lasting value.",
  description:
    "DevHub Labs builds scalable digital products for modern businesses.",
  email: "devhub.labs@gmail.com",
  // Human-readable number for display.
  phone: "+234 707 983 9976",
  // Ready-to-use href for tel: links (no spaces).
  phoneHref: "tel:+2347079839976",
  whatsapp: whatsappNumber,
  whatsappMessage,
  whatsappUrl: `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
    whatsappMessage,
  )}`,
  location: "Nigeria",
  social: {
    github: "https://github.com/devhub-labs",
    // LinkedIn / X placeholders — fill in when the profiles go live.
    linkedin: "",
    x: "",
  },
};
