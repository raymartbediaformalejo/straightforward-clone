import { lazy } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

const Home = lazy(() => import("@/pages/Home"));
const Layout = lazy(() => import("@/layout"));

const AppRouter = () => {
  const location = useLocation();

  return (
    <AnimatePresence>
      <Routes location={location} key={location.pathname}>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} index />
        </Route>
      </Routes>
    </AnimatePresence>
  );
};

export default AppRouter;
