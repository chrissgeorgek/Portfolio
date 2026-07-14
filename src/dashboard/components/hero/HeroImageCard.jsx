import { FaImage, FaFilePdf } from "react-icons/fa";

export default function HeroImageCard({
  hero,
  handleFileChange,
}) {

  return (

    <div className="rounded-3xl border border-slate-800 bg-slate-900 p-8">

      <h2 className="text-2xl font-bold mb-8">

        Hero Assets

      </h2>

      {/* Profile Image */}

      <div className="flex flex-col items-center">

        <img
          src={hero?.profile_image}
          alt={hero?.name}
          className="w-60 h-60 rounded-3xl object-cover border-4 border-blue-500 shadow-lg"
        />

        <label className="mt-8 cursor-pointer rounded-xl bg-blue-600 px-6 py-3 hover:bg-blue-700 transition">

          <div className="flex items-center gap-3">

            <FaImage />

            Change Profile Image

          </div>

          <input
            type="file"
            name="profile_image"
            onChange={handleFileChange}
            className="hidden"
          />

        </label>

      </div>

      {/* Resume */}

      <div className="mt-10">

        <h3 className="font-semibold mb-4">

          Resume

        </h3>

        <a
          href={hero?.resume}
          target="_blank"
          rel="noreferrer"
          className="flex items-center gap-3 rounded-xl bg-slate-800 p-4 hover:bg-slate-700 transition"
        >

          <FaFilePdf className="text-red-500 text-xl" />

          View Current Resume

        </a>

        <label className="mt-5 block cursor-pointer rounded-xl bg-cyan-600 px-6 py-3 text-center hover:bg-cyan-700 transition">

          Upload New Resume

          <input
            type="file"
            name="resume"
            onChange={handleFileChange}
            className="hidden"
          />

        </label>

      </div>

    </div>

  );

}