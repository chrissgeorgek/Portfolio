import DashboardCard from "../components/DashboardCard";

import {
  FaProjectDiagram,
  FaCode,
  FaEnvelope,
  FaEye,
  FaPlus,
} from "react-icons/fa";

export default function Dashboard() {

  return (

    <div className="space-y-10">

      {/* Cards */}

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">

        <DashboardCard
          title="Projects"
          value="3"
          icon={<FaProjectDiagram />}
          color="from-blue-600 to-cyan-500"
        />

        <DashboardCard
          title="Skills"
          value="15"
          icon={<FaCode />}
          color="from-indigo-600 to-blue-500"
        />

        <DashboardCard
          title="Messages"
          value="0"
          icon={<FaEnvelope />}
          color="from-emerald-600 to-green-500"
        />

        <DashboardCard
          title="Visitors"
          value="0"
          icon={<FaEye />}
          color="from-purple-600 to-pink-500"
        />

      </div>

      {/* Bottom Section */}

      <div className="grid lg:grid-cols-2 gap-8">

        {/* Quick Actions */}

        <div className="rounded-3xl border border-slate-800 bg-slate-900 p-6">

          <h2 className="text-2xl font-bold mb-6">

            Quick Actions

          </h2>

          <div className="space-y-4">

            <button className="w-full flex items-center gap-4 rounded-xl bg-blue-600 px-5 py-4 hover:bg-blue-700 transition">

              <FaPlus />

              Add Hero Section

            </button>

            <button className="w-full flex items-center gap-4 rounded-xl bg-indigo-600 px-5 py-4 hover:bg-indigo-700 transition">

              <FaPlus />

              Add Skill

            </button>

            <button className="w-full flex items-center gap-4 rounded-xl bg-cyan-600 px-5 py-4 hover:bg-cyan-700 transition">

              <FaPlus />

              Add Project

            </button>

          </div>

        </div>

        {/* Recent Activity */}

        <div className="rounded-3xl border border-slate-800 bg-slate-900 p-6">

          <h2 className="text-2xl font-bold mb-6">

            Recent Activity

          </h2>

          <div className="space-y-5">

            <div className="rounded-xl bg-slate-800 p-4">

              Hero section updated

            </div>

            <div className="rounded-xl bg-slate-800 p-4">

              Skill added

            </div>

            <div className="rounded-xl bg-slate-800 p-4">

              Project updated

            </div>

          </div>

        </div>

      </div>

    </div>

  );

}