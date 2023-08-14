import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import MainLayout from "./layouts/main-layout/MainLayout";
import Home from "./pages/home/Home";
import Contact from "./pages/contact/Contact";
import Solutions from "./pages/solutions/Solutions";
import Pricing from "./pages/pricing/Pricing";
import Careers from "./pages/careers/Careers";
import Company from "./pages/company/Company";
function App() {
  return (
    <Router>
      {" "}
      <Routes>
        <Route
          path="/"
          element={
            <MainLayout>
              <Home />
            </MainLayout>
          }
        />
        <Route
          path="/company"
          element={
            <MainLayout>
              <Company />
            </MainLayout>
          }
        />
        <Route
          path="/solutions"
          element={
            <MainLayout>
              <Solutions />
            </MainLayout>
          }
        />
        <Route
          path="/pricing"
          element={
            <MainLayout>
              <Pricing />
            </MainLayout>
          }
        />
        <Route
          path="/careers"
          element={
            <MainLayout>
              <Careers />
            </MainLayout>
          }
        />
        <Route
          path="/contact"
          element={
            <MainLayout>
              <Contact />
            </MainLayout>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
