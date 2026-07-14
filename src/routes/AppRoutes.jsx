import { Routes, Route } from "react-router-dom";

import PublicLayout from "../dashboard/layouts/PublicLayout";
import DashboardLayout from "../dashboard/layouts/DashboardLayout";

import Home from "../dashboard/pages/Home";
import Login from "../dashboard/pages/Login";
import Dashboard from "../dashboard/pages/Dashboard";

import ProtectedRoute from "./ProtectedRoute";

export default function AppRoutes() {
  return (
    <Routes>

      {/* Public Portfolio */}

      <Route element={<PublicLayout />}>
        <Route
          path="/"
          element={<Home />}
        />
      </Route>

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
      </Route>

    </Routes>
  );
}