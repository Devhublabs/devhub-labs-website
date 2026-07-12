import { lazy, Suspense } from "react";
import { createBrowserRouter } from "react-router-dom";
import PageLoader from "@/components/common/PageLoader.jsx";
import MainLayout from "@/layouts/MainLayout.jsx";
import { ROUTE_PATHS } from "@/routes/paths.js";

const Home = lazy(() => import("@/pages/Home.jsx"));
const About = lazy(() => import("@/pages/About.jsx"));
const Services = lazy(() => import("@/pages/Services.jsx"));
const Technology = lazy(() => import("@/pages/Technology.jsx"));
const Process = lazy(() => import("@/pages/Process.jsx"));
const Projects = lazy(() => import("@/pages/Projects.jsx"));
const Team = lazy(() => import("@/pages/Team.jsx"));
const Contact = lazy(() => import("@/pages/Contact.jsx"));
const NotFound = lazy(() => import("@/pages/NotFound.jsx"));

function withPageSuspense(Page) {
  return (
    <Suspense fallback={<PageLoader />}>
      <Page />
    </Suspense>
  );
}

export const router = createBrowserRouter(
  [
    {
      path: ROUTE_PATHS.home,
      element: <MainLayout />,
      children: [
        {
          index: true,
          element: withPageSuspense(Home),
        },
        {
          path: ROUTE_PATHS.about,
          element: withPageSuspense(About),
        },
        {
          path: ROUTE_PATHS.services,
          element: withPageSuspense(Services),
        },
        {
          path: ROUTE_PATHS.technology,
          element: withPageSuspense(Technology),
        },
        {
          path: ROUTE_PATHS.process,
          element: withPageSuspense(Process),
        },
        {
          path: ROUTE_PATHS.projects,
          element: withPageSuspense(Projects),
        },
        {
          path: ROUTE_PATHS.team,
          element: withPageSuspense(Team),
        },
        {
          path: ROUTE_PATHS.contact,
          element: withPageSuspense(Contact),
        },
        {
          path: "*",
          element: withPageSuspense(NotFound),
        },
      ],
    },
  ],
  {
    basename: import.meta.env.BASE_URL,
  },
);
