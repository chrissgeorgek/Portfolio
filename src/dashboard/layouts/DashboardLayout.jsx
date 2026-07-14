import { Outlet } from "react-router-dom";

import Sidebar from "../components/Sidebar";
import Topbar from "../components/Topbar";

export default function DashboardLayout() {

    return (

        <div className="flex min-h-screen bg-slate-950 text-white">

            <Sidebar />

            <main className="flex-1 p-8 overflow-y-auto">

                <Topbar />

                <Outlet />

            </main>

        </div>

    );

}