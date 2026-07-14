import { Routes, Route } from "react-router-dom";

import PublicLayout from "./dashboard/layouts/PublicLayout";
import DashboardLayout from "./dashboard/layouts/DashboardLayout";

import Home from "./dashboard/pages/Home";
import Login from "./dashboard/pages/Login";
import Dashboard from "./dashboard/pages/Dashboard";

import HeroPage from "./dashboard/pages/HeroPage";
import SkillPage from "./dashboard/pages/SkillPage";
import ProjectPage from "./dashboard/pages/ProjectPage";
import ExperiencePage from "./dashboard/pages/ExperiencePage";
import EducationPage from "./dashboard/pages/EducationPage";
import MessagePage from "./dashboard/pages/MessagePage";
import CertificatePage from "./dashboard/pages/CertificatePage";
import ProtectedRoute from "./routes/ProtectedRoute";

import StudentZone from "./pages/StudentZone";


function App() {
  return (
    <Routes>

      {/* Public Portfolio */}

      <Route element={<PublicLayout />}>
        <Route path="/" element={<Home />} />
      </Route>
      <Route path="/student-zone" element={<StudentZone />} />

      {/* Login */}

      <Route
        path="/dashboard/login"
        element={<Login />}
      />

      {/* Dashboard */}

      <Route
        path="/dashboard"
        element={
          <ProtectedRoute>
            <DashboardLayout />
          </ProtectedRoute>
        }
      >
        <Route
          index
          element={<Dashboard />}
        />

        <Route
          path="hero"
          element={<HeroPage />}
        />

        <Route
          path="skills"
          element={<SkillPage />}
        />

        <Route
          path="projects"
          element={<ProjectPage />}
        />

        <Route
          path="experience"
          element={<ExperiencePage />}
        />

        <Route
          path="education"
          element={<EducationPage />}
        />

        <Route
          path="messages"
          element={<MessagePage />}
        />

<Route
    path="certificates"
    element={<CertificatePage />}
/>



      </Route>

    </Routes>
  );
}

export default App;