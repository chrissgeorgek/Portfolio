import { FaBell, FaMoon, FaSearch } from "react-icons/fa";
import { useEffect, useState } from "react";
import { getHero } from "../../services/heroService";

export default function Topbar() {

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

  return (

    <header className="flex items-center justify-between rounded-2xl border border-slate-800 bg-slate-900 p-5 mb-8">

      {/* Left */}

      <div>

        <h1 className="text-3xl font-bold">

          Dashboard

        </h1>

        <p className="text-slate-400 mt-1">

          Welcome back, {hero?.name || "Loading..."} 👋

        </p>

      </div>

      {/* Right */}

      <div className="flex items-center gap-5">

        <button className="w-11 h-11 rounded-full bg-slate-800 flex items-center justify-center hover:bg-blue-600 transition">

          <FaSearch />

        </button>

        <button className="w-11 h-11 rounded-full bg-slate-800 flex items-center justify-center hover:bg-blue-600 transition">

          <FaBell />

        </button>

        <button className="w-11 h-11 rounded-full bg-slate-800 flex items-center justify-center hover:bg-blue-600 transition">

          <FaMoon />

        </button>

        {/* User */}

        <div className="flex items-center gap-3">

          <img
            src={hero?.profile_image}
            alt={hero?.name}
            className="w-11 h-11 rounded-full border-2 border-blue-500 object-cover"
          />

          <div className="hidden md:block">

            <h4 className="font-semibold">

              {hero?.name || "Loading..."}

            </h4>

            <p className="text-xs text-slate-400">

              {hero?.designation || "Administrator"}

            </p>

          </div>

        </div>

      </div>

    </header>

  );

}