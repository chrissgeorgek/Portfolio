import { useEffect, useState } from "react";
import {
  FaPlus,
  FaBriefcase,
  FaEdit,
  FaTrash,
} from "react-icons/fa";
import { toast } from "react-toastify";

import PageHeader from "../../components/common/PageHeader";
import Card from "../../components/common/Card";
import Button from "../../components/common/Button";
import ConfirmDialog from "../../components/common/ConfirmDialog";

import ExperienceModal from "../modals/ExperienceModal";

import {
  getExperiences,
  createExperience,
  updateExperience,
  deleteExperience,
} from "../../services/experienceService";

import { getSkills } from "../../services/skillService";

export default function ExperiencePage() {

  const [experiences, setExperiences] = useState([]);

  const [skills, setSkills] = useState([]);

  const [loading, setLoading] = useState(true);

  const [search, setSearch] = useState("");

  const [modalOpen, setModalOpen] = useState(false);

  const [selectedExperience, setSelectedExperience] = useState(null);

  const [deleteOpen, setDeleteOpen] = useState(false);

  const [deleteItem, setDeleteItem] = useState(null);

  useEffect(() => {

    loadData();

  }, []);

  async function loadData() {

    try {

      const [experienceData, skillData] = await Promise.all([

        getExperiences(),

        getSkills(),

      ]);

      setExperiences(experienceData);

      setSkills(skillData);

    }

    catch (err) {

      console.log(err);

      toast.error("Failed to load experience.");

    }

    finally {

      setLoading(false);

    }

  }

  async function handleSave(formData) {

    try {

      if (selectedExperience) {

        await updateExperience(

          selectedExperience.id,

          formData

        );

        toast.success("Experience updated.");

      }

      else {

        await createExperience(formData);

        toast.success("Experience added.");

      }

      setModalOpen(false);

      setSelectedExperience(null);

      loadData();

    }

    catch (err) {

      console.log(err);

      toast.error("Unable to save experience.");

    }

  }

  function openDelete(item) {

    setDeleteItem(item);

    setDeleteOpen(true);

  }

  async function confirmDelete() {

    try {

      await deleteExperience(deleteItem.id);

      toast.success("Experience deleted.");

      setDeleteOpen(false);

      loadData();

    }

    catch (err) {

      toast.error("Delete failed.");

    }

  }

  const filteredExperiences = experiences.filter((item) =>

    item.company
      .toLowerCase()
      .includes(search.toLowerCase()) ||

    item.designation
      .toLowerCase()
      .includes(search.toLowerCase())

  );

  return (

    <div>

      <PageHeader

        title="Experience Management"

        subtitle="Manage your work experience."

      />

      <div className="flex justify-between items-center mb-6">

        <input

          type="text"

          placeholder="Search experience..."

          value={search}

          onChange={(e) =>

            setSearch(e.target.value)

          }

          className="w-80 rounded-xl bg-slate-900 border border-slate-700 px-4 py-3"

        />

        <Button

          className="w-auto px-6 flex items-center gap-3"

          onClick={() => {

            setSelectedExperience(null);

            setModalOpen(true);

          }}

        >

          <FaPlus />

          Add Experience

        </Button>

      </div>

      <Card className="overflow-hidden">

        <div className="overflow-x-auto">

          <table className="w-full">

            <thead className="bg-slate-800">

              <tr>

                <th className="px-6 py-4 text-left">

                  Company

                </th>

                <th className="px-6 py-4 text-left">

                  Position

                </th>

                <th className="px-6 py-4 text-left">

                  Duration

                </th>

                <th className="px-6 py-4 text-left">

                  Location

                </th>

                <th className="px-6 py-4 text-center">

                  Status

                </th>

                <th className="px-6 py-4 text-center">

                  Actions

                </th>

              </tr>

            </thead>

            <tbody>

              {loading ? (

                <tr>

                  <td

                    colSpan="6"

                    className="text-center py-10"

                  >

                    Loading...

                  </td>

                </tr>

              ) : filteredExperiences.length === 0 ? (

                <tr>

                  <td

                    colSpan="6"

                    className="text-center py-10 text-slate-500"

                  >

                    No experience found.

                  </td>

                </tr>

              ) : (

                filteredExperiences.map((experience) => (

                  <tr

                    key={experience.id}

                    className="border-t border-slate-800 hover:bg-slate-800/40 transition"

                  >

                    <td className="px-6 py-5">

                      <div className="flex items-center gap-3">

                        {experience.company_logo ? (

                          <img

                            src={experience.company_logo}

                            className="w-12 h-12 rounded-lg object-cover"

                            alt={experience.company}

                          />

                        ) : (

                          <FaBriefcase className="text-blue-400 text-xl" />

                        )}

                        <div>

                          <div className="font-semibold">

                            {experience.company}

                          </div>

                        </div>

                      </div>

                    </td>

                    <td className="px-6 py-5">

                      {experience.designation}

                    </td>
                    <td className="px-6 py-5">

{new Date(experience.start_date).toLocaleDateString("en-IN", {
    month: "short",
    year: "numeric",
})}

{" - "}

{experience.currently_working
    ? "Present"
    : experience.end_date
    ? new Date(experience.end_date).toLocaleDateString("en-IN", {
          month: "short",
          year: "numeric",
      })
    : "-"}

</td>

<td className="px-6 py-5">

{experience.location || "-"}

</td>

<td className="px-6 py-5 text-center">

{experience.is_active ? (

    <span className="rounded-full bg-green-500/20 text-green-400 px-3 py-1 text-sm">

        Active

    </span>

) : (

    <span className="rounded-full bg-red-500/20 text-red-400 px-3 py-1 text-sm">

        Inactive

    </span>

)}

</td>

<td className="px-6 py-5">

<div className="flex justify-center gap-3">

    <button

        onClick={() => {

            setSelectedExperience(experience);

            setModalOpen(true);

        }}

        className="rounded-lg bg-blue-600 p-3 hover:bg-blue-700 transition"

    >

        <FaEdit />

    </button>

    <button

        onClick={() => openDelete(experience)}

        className="rounded-lg bg-red-600 p-3 hover:bg-red-700 transition"

    >

        <FaTrash />

    </button>

</div>

</td>

</tr>

))

)}

</tbody>

</table>

</div>

</Card>

<ExperienceModal

open={modalOpen}

onClose={() => {

    setModalOpen(false);

    setSelectedExperience(null);

}}

onSubmit={handleSave}

initialData={selectedExperience}

skills={skills}

/>

<ConfirmDialog

open={deleteOpen}

title="Delete Experience"

message={`Are you sure you want to delete "${deleteItem?.company}"?`}

onCancel={() => {

    setDeleteOpen(false);

    setDeleteItem(null);

}}

onConfirm={confirmDelete}

/>

</div>

);

}