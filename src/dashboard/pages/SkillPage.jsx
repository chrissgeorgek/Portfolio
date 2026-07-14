import { useEffect, useState } from "react";
import { FaPlus, FaEdit, FaTrash } from "react-icons/fa";
import { toast } from "react-toastify";

import PageHeader from "../../components/common/PageHeader";
import Card from "../../components/common/Card";
import Button from "../../components/common/Button";

import SkillModal from "../modals/SkillModal";

import {
  getSkills,
  createSkill,
  updateSkill,
  deleteSkill,
} from "../../services/skillService";

import { iconMap } from "../../utils/iconMap";

export default function SkillPage() {

  const [skills, setSkills] = useState([]);

  const [loading, setLoading] = useState(true);

  const [search, setSearch] = useState("");

  const [modalOpen, setModalOpen] = useState(false);

  const [selectedSkill, setSelectedSkill] = useState(null);

  useEffect(() => {

    loadSkills();

  }, []);

  async function loadSkills() {

    try {

      const data = await getSkills();

      setSkills(data);

    }

    catch (err) {

      console.log(err);

      toast.error("Failed to load skills.");

    }

    finally {

      setLoading(false);

    }

  }

  async function handleSaveSkill(form) {

    try {

      if (selectedSkill) {

        await updateSkill(selectedSkill.id, form);

        toast.success("Skill updated successfully.");

      }

      else {

        await createSkill(form);

        toast.success("Skill added successfully.");

      }

      setModalOpen(false);

      setSelectedSkill(null);

      loadSkills();

    }

    catch (err) {

      console.log(err);

      toast.error("Something went wrong.");

    }

  }

  async function handleDelete(skill) {

    const confirmed = window.confirm(

      `Delete "${skill.name}" ?`

    );

    if (!confirmed) return;

    try {

      await deleteSkill(skill.id);

      toast.success("Skill deleted.");

      loadSkills();

    }

    catch (err) {

      console.log(err);

      toast.error("Failed to delete.");

    }

  }

  const filteredSkills = skills.filter((skill) =>

    skill.name.toLowerCase().includes(search.toLowerCase()) ||

    skill.category.toLowerCase().includes(search.toLowerCase())

  );

  return (

    <div>

      <PageHeader

        title="Skills Management"

        subtitle="Manage technologies displayed on your portfolio."

      />

      <div className="flex justify-between items-center mb-6">

        <input

          type="text"

          placeholder="Search skills..."

          value={search}

          onChange={(e) => setSearch(e.target.value)}

          className="w-80 rounded-xl border border-slate-700 bg-slate-900 px-4 py-3 text-white outline-none focus:border-blue-500"

        />

        <Button

          onClick={() => {

            setSelectedSkill(null);

            setModalOpen(true);

          }}

          className="flex items-center gap-3"

        >

          <FaPlus />

          Add Skill

        </Button>

      </div>

      <Card className="overflow-hidden">

        {loading ? (

          <div className="p-10 text-center">

            Loading...

          </div>

        ) : (

          <table className="w-full">

            <thead className="bg-slate-800">

              <tr>

                <th className="p-4 text-left">

                  Icon

                </th>

                <th className="p-4 text-left">

                  Skill

                </th>

                <th className="p-4 text-left">

                  Category

                </th>

                <th className="p-4 text-center">

                  Order

                </th>

                <th className="p-4 text-center">

                  Status

                </th>

                <th className="p-4 text-center">

                  Actions

                </th>

              </tr>

            </thead>

            <tbody>

              {filteredSkills.length === 0 && (

                <tr>

                  <td

                    colSpan="6"

                    className="text-center py-10 text-slate-400"

                  >

                    No skills found.

                  </td>

                </tr>

              )}

              {filteredSkills.map((skill) => {

                const Icon = iconMap[skill.icon];

                return (

                  <tr

                    key={skill.id}

                    className="border-t border-slate-800 hover:bg-slate-800/40 transition"

                  >

                    <td className="p-4">

                      <div className="text-2xl text-blue-400">

                        {Icon ? (

                          <Icon />

                        ) : (

                          "-"

                        )}

                      </div>

                    </td>

                    <td className="p-4 font-medium">

                      {skill.name}

                    </td>

                    <td className="p-4">

                      {skill.category}

                    </td>

                    <td className="p-4 text-center">

                      {skill.display_order}

                    </td>

                    <td className="p-4 text-center">

                      {skill.is_active ? (

                        <span className="rounded-full bg-green-500/20 px-3 py-1 text-green-400">

                          Active

                        </span>

                      ) : (

                        <span className="rounded-full bg-red-500/20 px-3 py-1 text-red-400">

                          Inactive

                        </span>

                      )}

                    </td>

                    <td className="p-4">

                      <div className="flex justify-center gap-3">

                        <button

                          onClick={() => {

                            setSelectedSkill(skill);

                            setModalOpen(true);

                          }}

                          className="rounded-lg bg-blue-600 p-3 hover:bg-blue-700 transition"

                        >

                          <FaEdit />

                        </button>

                        <button

                          onClick={() => handleDelete(skill)}

                          className="rounded-lg bg-red-600 p-3 hover:bg-red-700 transition"

                        >

                          <FaTrash />

                        </button>

                      </div>

                    </td>

                  </tr>

                );

              })}

            </tbody>

          </table>

        )}

      </Card>

      <SkillModal

        open={modalOpen}

        onClose={() => {

          setModalOpen(false);

          setSelectedSkill(null);

        }}

        onSubmit={handleSaveSkill}

        initialData={selectedSkill}

      />

    </div>

  );

}