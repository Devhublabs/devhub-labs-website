import echoSchoolImage from "@/assets/projects/echo-school-website.png";
import emmanuelsFoodImage from "@/assets/projects/emmanuels-food-website.png";

export const projects = [
  {
    id: "echo-school-website",
    title: "Echo School Website",
    slug: "echo-school-website",
    category: "Education",
    summary:
      "A modern school website with structured information architecture, responsive design, and optimized performance for easy content accessibility.",
    image: echoSchoolImage,
    highlights: [
      "Responsive UI",
      "Structured Information Architecture",
      "Modern Design",
      "Optimized Performance",
      "Easy Content Accessibility",
    ],
    technologies: [
      "Python",
      "Flask",
      "SQLAlchemy",
      "PostgreSQL",
      "JavaScript",
      "HTML/CSS",
      "Node.js",
    ],
    featured: true,
  },
  {
    id: "emmanuels-food-website",
    title: "Emmanuel's Online Food Website",
    slug: "emmanuels-food-website",
    category: "E-Commerce",
    summary:
      "An online food ordering platform with intuitive product browsing, fast performance, and user-friendly navigation.",
    url: "https://crave-restaurant-website.vercel.app",
    image: emmanuelsFoodImage,
    highlights: [
      "Responsive Layout",
      "Product Browsing",
      "Modern Interface",
      "Fast Performance",
      "User-Friendly Navigation",
    ],
    technologies: ["React", "JavaScript", "Tailwind CSS", "REST APIs"],
    featured: true,
  },
];
