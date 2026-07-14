import { useEffect, useState } from "react";
import {
    FaPlus,
    FaGraduationCap,
    FaEdit,
    FaTrash,
} from "react-icons/fa";
import { toast } from "react-toastify";

import PageHeader from "../../components/common/PageHeader";
import Card from "../../components/common/Card";
import Button from "../../components/common/Button";
import ConfirmDialog from "../../components/common/ConfirmDialog";

import EducationModal from "../modals/EducationModal";

import {
    getEducations,
    createEducation,
    updateEducation,
    deleteEducation,
} from "../../services/educationService";

export default function EducationPage() {

    const [educations, setEducations] = useState([]);

    const [loading, setLoading] = useState(true);

    const [search, setSearch] = useState("");

    const [modalOpen, setModalOpen] = useState(false);

    const [selectedEducation, setSelectedEducation] = useState(null);

    const [deleteOpen, setDeleteOpen] = useState(false);

    const [deleteItem, setDeleteItem] = useState(null);

    useEffect(() => {

        loadData();

    }, []);

    async function loadData() {

        try {

            const data = await getEducations();

            setEducations(data);

        }

        catch (err) {

            console.log(err);

            toast.error("Failed to load education.");

        }

        finally {

            setLoading(false);

        }

    }

    async function handleSave(formData) {

        try {

            if (selectedEducation) {

                await updateEducation(

                    selectedEducation.id,

                    formData

                );

                toast.success("Education updated.");

            }

            else {

                await createEducation(formData);

                toast.success("Education added.");

            }

            setModalOpen(false);

            setSelectedEducation(null);

            loadData();

        }

        catch (err) {

            console.log(err);

            toast.error("Unable to save education.");

        }

    }

    function openDelete(item) {

        setDeleteItem(item);

        setDeleteOpen(true);

    }

    async function confirmDelete() {

        try {

            await deleteEducation(deleteItem.id);

            toast.success("Education deleted.");

            setDeleteOpen(false);

            loadData();

        }

        catch {

            toast.error("Delete failed.");

        }

    }

    const filteredEducation = educations.filter(

        (item) =>

            item.institution

                .toLowerCase()

                .includes(search.toLowerCase())

            ||

            item.degree

                .toLowerCase()

                .includes(search.toLowerCase())

    );

    return (

        <div>

            <PageHeader

                title="Education Management"

                subtitle="Manage your education."

            />

            <div className="flex justify-between items-center mb-6">

                <input

                    type="text"

                    placeholder="Search education..."

                    value={search}

                    onChange={(e) =>

                        setSearch(e.target.value)

                    }

                    className="w-80 rounded-xl bg-slate-900 border border-slate-700 px-4 py-3"

                />

                <Button

                    className="w-auto px-6 flex items-center gap-3"

                    onClick={() => {

                        setSelectedEducation(null);

                        setModalOpen(true);

                    }}

                >

                    <FaPlus />

                    Add Education

                </Button>

            </div>

            <Card className="overflow-hidden">

                <div className="overflow-x-auto">

                    <table className="w-full">

                        <thead className="bg-slate-800">

                            <tr>

                                <th className="px-6 py-4 text-left">

                                    Institution

                                </th>

                                <th className="px-6 py-4 text-left">

                                    Degree

                                </th>

                                <th className="px-6 py-4 text-left">

                                    Duration

                                </th>

                                <th className="px-6 py-4 text-left">

                                    Grade

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

                            ) : filteredEducation.length === 0 ? (

                                <tr>

                                    <td

                                        colSpan="6"

                                        className="text-center py-10 text-slate-500"

                                    >

                                        No education found.

                                    </td>

                                </tr>

                            ) : (

                                filteredEducation.map(

                                    (education) => (

                                        <tr

                                            key={education.id}

                                            className="border-t border-slate-800 hover:bg-slate-800/40"

                                        >

                                            <td className="px-6 py-5">

                                                <div className="flex items-center gap-3">

                                                    {

                                                        education.institution_logo ?

                                                            (

                                                                <img

                                                                    src={education.institution_logo}

                                                                    className="w-12 h-12 rounded-lg object-cover"

                                                                />

                                                            )

                                                            :

                                                            (

                                                                <FaGraduationCap className="text-blue-400 text-xl" />

                                                            )

                                                    }

                                                    <div>

                                                        <div className="font-semibold">

                                                            {education.institution}

                                                        </div>

                                                    </div>

                                                </div>

                                            </td>

                                            <td className="px-6 py-5">

                                                {education.degree}

                                            </td>
                                            <td className="px-6 py-5">

    {new Date(education.start_date).toLocaleDateString(
        "en-IN",
        {
            month: "short",
            year: "numeric",
        }
    )}

    {" - "}

    {new Date(education.end_date).toLocaleDateString(
        "en-IN",
        {
            month: "short",
            year: "numeric",
        }
    )}

</td>

<td className="px-6 py-5">

    {education.grade || "-"}

</td>

<td className="px-6 py-5 text-center">

    {education.is_active ? (

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

                setSelectedEducation(education);

                setModalOpen(true);

            }}

            className="rounded-lg bg-blue-600 p-3 hover:bg-blue-700 transition"

        >

            <FaEdit />

        </button>

        <button

            onClick={() => openDelete(education)}

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

<EducationModal

    open={modalOpen}

    onClose={() => {

        setModalOpen(false);

        setSelectedEducation(null);

    }}

    onSubmit={handleSave}

    initialData={selectedEducation}

/>

<ConfirmDialog

    open={deleteOpen}

    title="Delete Education"

    message={`Are you sure you want to delete "${deleteItem?.institution}"?`}

    onCancel={() => {

        setDeleteOpen(false);

        setDeleteItem(null);

    }}

    onConfirm={confirmDelete}

/>

</div>

);

}