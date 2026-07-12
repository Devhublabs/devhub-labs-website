import Seo from "@/components/seo/Seo.jsx";
import HomeHero from "@/sections/HomeHero.jsx";

export default function Home() {
  return (
    <>
      <Seo
        path="/"
        description="DevHub Labs builds scalable, intelligent software—AI solutions, SaaS platforms, web applications, and custom software for ambitious businesses."
      />
      <HomeHero />
    </>
  );
}
