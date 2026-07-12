import { MotionConfig } from "framer-motion";
import { RouterProvider } from "react-router-dom";
import { router } from "@/routes/router.jsx";
import { ThemeProvider } from "@/theme/ThemeProvider.jsx";

export default function App() {
  return (
    <ThemeProvider>
      <MotionConfig reducedMotion="user">
        <RouterProvider router={router} />
      </MotionConfig>
    </ThemeProvider>
  );
}
