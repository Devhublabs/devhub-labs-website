import { Link } from "react-router-dom";
import PagePlaceholder from "@/components/ui/PagePlaceholder.jsx";

export default function NotFound() {
  return (
    <>
      <PagePlaceholder title="Page not found" />
      <div className="mx-auto -mt-16 w-full max-w-7xl px-6 pb-16">
        <Link
          to="/"
          className="btn-cta-primary inline-flex rounded-lg px-4 py-2 text-sm font-semibold transition-[transform,box-shadow] duration-[400ms] hover:-translate-y-0.5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-primary)]"
        >
          Return home
        </Link>
      </div>
    </>
  );
}
