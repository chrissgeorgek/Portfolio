import { useEffect, useState } from "react";
import { FaPlus, FaEdit, FaTrash, FaGithub, FaGlobe } from "react-icons/fa";
import { toast } from "react-toastify";

import PageHeader from "../../components/common/PageHeader";
import Button from "../../components/common/Button";
import DataTable from "../../components/common/DataTable";
import ConfirmDialog from "../../components/common/ConfirmDialog";

import ProjectModal from "../modals/ProjectModal";

import {
    getProjects,
    createProject,
    updateProject,
    deleteProject,
} from "../../services/projectService";

import { getSkills } from "../../services/skillService";
import { iconMap } from "../../utils/iconMap";

export default function ProjectPage() {

    const [projects, setProjects] = useState([]);

    const [skills, setSkills] = useState([]);

    const [loading, setLoading] = useState(true);

    const [search, setSearch] = useState("");

    const [modalOpen, setModalOpen] = useState(false);

    const [selectedProject, setSelectedProject] = useState(null);

    const [deleteOpen, setDeleteOpen] = useState(false);

    const [deleteProjectItem, setDeleteProjectItem] = useState(null);

    useEffect(() => {

        loadData();

    }, []);

    async function loadData() {

        try {

            const [projectData, skillData] = await Promise.all([

                getProjects(),

                getSkills(),

            ]);

            setProjects(projectData);

            setSkills(skillData);

        }

        catch (err) {

            console.log(err);

            toast.error("Failed to load projects.");

        }

        finally {

            setLoading(false);

        }

    }

    async function handleSave(formData) {

        try {

            if (selectedProject) {

                await updateProject(

                    selectedProject.id,

                    formData

                );

                toast.success(

                    "Project updated successfully."

                );

            }

            else {

                await createProject(formData);

                toast.success(

                    "Project added successfully."

                );

            }

            setModalOpen(false);

            setSelectedProject(null);

            loadData();

        }

        catch (err) {

            console.log(err);

            toast.error("Unable to save project.");

        }

    }

    function openDelete(project) {

        setDeleteProjectItem(project);

        setDeleteOpen(true);

    }

    async function confirmDelete() {

        try {

            await deleteProject(

                deleteProjectItem.id

            );

            toast.success(

                "Project deleted."

            );

            setDeleteOpen(false);

            loadData();

        }

        catch (err) {

            toast.error(

                "Delete failed."

            );

        }

    }

    const filteredProjects = projects.filter((project) =>

        project.title
            .toLowerCase()
            .includes(search.toLowerCase())

    );

    return (

        <div>

            <PageHeader

                title="Projects"

                subtitle="Manage all portfolio projects."

            />

            <div className="flex justify-between items-center mb-6">

                <input

                    type="text"

                    placeholder="Search projects..."

                    value={search}

                    onChange={(e) =>

                        setSearch(e.target.value)

                    }

                    className="w-80 rounded-xl border border-slate-700 bg-slate-900 px-4 py-3"

                />

                <Button

                    className="flex items-center gap-3"

                    onClick={() => {

                        setSelectedProject(null);

                        setModalOpen(true);

                    }}

                >

                    <FaPlus />

                    Add Project

                </Button>

            </div>

            <DataTable

                columns={[

                    "Image",

                    "Project",

                    "Technologies",

                    "Featured",

                    "Status",

                    "GitHub",

                    "Live Demo",

                    "Actions",

                ]}

            >

                {loading ? (

                    <tr>

                        <td

                            colSpan="8"

                            className="text-center py-12"

                        >

                            Loading...

                        </td>

                    </tr>

                ) : filteredProjects.length === 0 ? (

                    <tr>

                        <td

                            colSpan="8"

                            className="text-center py-12"

                        >

                            No Projects Found

                        </td>

                    </tr>

                ) : (

                    filteredProjects.map((project) => (

                        <tr

                            key={project.id}

                            className="border-t border-slate-800 hover:bg-slate-800/40"

                        >

                            <td className="px-6 py-5">

                                {project.project_image ? (

                                    <img

                                        src={project.project_image}

                                        className="w-24 h-16 rounded-lg object-cover"

                                    />

                                ) : (

                                    <div className="w-24 h-16 rounded-lg bg-slate-800"></div>

                                )}

                            </td>

                            <td className="px-6 py-5">

                                <div>

                                    <h3 className="font-bold">

                                        {project.title}

                                    </h3>

                                    <p className="text-sm text-slate-400 mt-1">

                                        {project.short_description}

                                    </p>

                                </div>

                            </td>
                            <td className="px-6 py-5">

    <div className="flex flex-wrap gap-2">

        {project.technologies?.map((tech) => {

            const Icon = iconMap[tech.icon];

            return (

                <span
                    key={tech.id}
                    className="flex items-center gap-2 rounded-full bg-blue-500/10 px-3 py-1 text-sm text-blue-400"
                >

                    {Icon && <Icon />}

                    {tech.name}

                </span>

            );

        })}

    </div>

</td>

<td className="px-6 py-5 text-center">

    {project.featured ? (

        <span className="rounded-full bg-yellow-500/20 px-3 py-1 text-yellow-400">

            Featured

        </span>

    ) : (

        <span className="rounded-full bg-slate-700 px-3 py-1">

            No

        </span>

    )}

</td>

<td className="px-6 py-5 text-center">

    {project.is_active ? (

        <span className="rounded-full bg-green-500/20 px-3 py-1 text-green-400">

            Active

        </span>

    ) : (

        <span className="rounded-full bg-red-500/20 px-3 py-1 text-red-400">

            Inactive

        </span>

    )}

</td>

<td className="px-6 py-5 text-center">

    {project.github_url ? (

        <a

            href={project.github_url}

            target="_blank"

            rel="noreferrer"

            className="inline-flex items-center justify-center rounded-lg bg-slate-800 p-3 hover:bg-slate-700"

        >

            <FaGithub />

        </a>

    ) : (

        "-"

    )}

</td>

<td className="px-6 py-5 text-center">

    {project.live_demo_url ? (

        <a

            href={project.live_demo_url}

            target="_blank"

            rel="noreferrer"

            className="inline-flex items-center justify-center rounded-lg bg-slate-800 p-3 hover:bg-slate-700"

        >

            <FaGlobe />

        </a>

    ) : (

        "-"

    )}

</td>

<td className="px-6 py-5">

    <div className="flex justify-center gap-3">

        <button

            onClick={() => {

                setSelectedProject(project);

                setModalOpen(true);

            }}

            className="rounded-lg bg-blue-600 p-3 hover:bg-blue-700 transition"

        >

            <FaEdit />

        </button>

        <button

            onClick={() => openDelete(project)}

            className="rounded-lg bg-red-600 p-3 hover:bg-red-700 transition"

        >

            <FaTrash />

        </button>

    </div>

</td>

</tr>

))

)}

</DataTable>

<ProjectModal

    open={modalOpen}

    onClose={() => {

        setModalOpen(false);

        setSelectedProject(null);

    }}

    onSubmit={handleSave}

    initialData={selectedProject}

    skills={skills}

/>

<ConfirmDialog

    open={deleteOpen}

    title="Delete Project"

    message={`Are you sure you want to delete "${deleteProjectItem?.title}"?`}

    onCancel={() => {

        setDeleteOpen(false);

        setDeleteProjectItem(null);

    }}

    onConfirm={confirmDelete}

/>

</div>

);

}