import { useEffect, useState } from "react";
import { getHero } from "../../services/heroService";
import {
  FaHome,
  FaUser,
  FaCode,
  FaProjectDiagram,
  FaBriefcase,
  FaGraduationCap,
  FaCertificate,
  FaEnvelope,
  FaCog,
  FaSignOutAlt,
} from "react-icons/fa";

import { NavLink, useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";

const menu = [
  {
    title: "Dashboard",
    path: "/dashboard",
    icon: <FaHome />,
  },
  {
    title: "Hero",
    path: "/dashboard/hero",
    icon: <FaUser />,
  },
  {
    title: "Skills",
    path: "/dashboard/skills",
    icon: <FaCode />,
  },
  {
    title: "Projects",
    path: "/dashboard/projects",
    icon: <FaProjectDiagram />,
  },
  {
    title: "Experience",
    path: "/dashboard/experience",
    icon: <FaBriefcase />,
  },
  {
    title: "Education",
    path: "/dashboard/education",
    icon: <FaGraduationCap />,
  },
  {
    title: "Certificates",
    path: "/dashboard/certificates",
    icon: <FaCertificate />,
  },
  {
    title: "Messages",
    path: "/dashboard/messages",
    icon: <FaEnvelope />,
  },
  {
    title: "Settings",
    path: "/dashboard/settings",
    icon: <FaCog />,
  },
];

export default function Sidebar() {
  const navigate = useNavigate();

  const { logout } = useAuth();

  const [hero, setHero] = useState(null);

  useEffect(() => {
    loadHero();
  }, []);

  async function loadHero() {
    try {
      const data = await getHero();
      setHero(data);
    } catch (err) {
      console.log(err);
    }
  }

  function handleLogout() {
    logout();

    navigate("/dashboard/login");
  }

  return (
    <aside className="w-72 min-h-screen bg-slate-900 border-r border-slate-800 flex flex-col">
      {/* Logo */}

      <div className="p-8 border-b border-slate-800">
        <h1 className="text-3xl font-bold text-blue-500">Portfolio CMS</h1>
      </div>

      {/* User */}

      <div className="flex flex-col items-center py-8 border-b border-slate-800">
        <img
          src={hero?.profile_image}
          alt={hero?.name}
          className="w-24 h-24 rounded-full border-4 border-blue-500 object-cover"
        />

        <h3 className="mt-4 font-bold text-lg">{hero?.name || "Loading..."}</h3>

        <span className="text-slate-400 text-sm">

{hero?.designation || "Administrator"}

</span>
      </div>

      {/* Navigation */}

      <nav className="flex-1 px-5 py-6 space-y-2">
        {menu.map((item) => (
          <NavLink
            key={item.title}
            to={item.path}
            className={({ isActive }) =>
              `flex items-center gap-4 rounded-xl px-5 py-4 transition ${
                isActive
                  ? "bg-blue-600 text-white"
                  : "text-slate-300 hover:bg-slate-800"
              }`
            }
          >
            <span className="text-lg">{item.icon}</span>

            {item.title}
          </NavLink>
        ))}
      </nav>

      {/* Logout */}

      <div className="p-5 border-t border-slate-800">
        <button
          onClick={handleLogout}
          className="w-full rounded-xl bg-red-600 py-4 flex items-center justify-center gap-3 hover:bg-red-700 transition"
        >
          <FaSignOutAlt />
          Logout
        </button>
      </div>
    </aside>
  );
}
