import { useEffect, useState } from "react";
import {
    FaPlus,
    FaCertificate,
    FaEdit,
    FaTrash,
} from "react-icons/fa";
import { toast } from "react-toastify";

import PageHeader from "../../components/common/PageHeader";
import Card from "../../components/common/Card";
import Button from "../../components/common/Button";
import ConfirmDialog from "../../components/common/ConfirmDialog";

import CertificateModal from "../modals/CertificateModal";

import {
    getCertificates,
    createCertificate,
    updateCertificate,
    deleteCertificate,
} from "../../services/certificateService";

export default function CertificatePage() {

    const [certificates, setCertificates] = useState([]);

    const [loading, setLoading] = useState(true);

    const [search, setSearch] = useState("");

    const [modalOpen, setModalOpen] = useState(false);

    const [selectedCertificate, setSelectedCertificate] = useState(null);

    const [deleteOpen, setDeleteOpen] = useState(false);

    const [deleteItem, setDeleteItem] = useState(null);

    useEffect(() => {

        loadData();

    }, []);

    async function loadData() {

        try {

            const data = await getCertificates();

            setCertificates(data);

        }

        catch (err) {

            console.log(err);

            toast.error("Failed to load certificates.");

        }

        finally {

            setLoading(false);

        }

    }

    async function handleSave(formData) {

        try {

            if (selectedCertificate) {

                await updateCertificate(
                    selectedCertificate.id,
                    formData
                );

                toast.success("Certificate updated.");

            }

            else {

                await createCertificate(formData);

                toast.success("Certificate added.");

            }

            setModalOpen(false);

            setSelectedCertificate(null);

            loadData();

        }

        catch (err) {

            console.log(err);

            toast.error("Unable to save certificate.");

        }

    }

    function openDelete(item) {

        setDeleteItem(item);

        setDeleteOpen(true);

    }

    async function confirmDelete() {

        try {

            await deleteCertificate(deleteItem.id);

            toast.success("Certificate deleted.");

            setDeleteOpen(false);

            loadData();

        }

        catch {

            toast.error("Delete failed.");

        }

    }

    const filteredCertificates = certificates.filter(

        (item) =>

            item.title
                .toLowerCase()
                .includes(search.toLowerCase())

            ||

            item.issuer
                .toLowerCase()
                .includes(search.toLowerCase())

    );

    return (

        <div>

            <PageHeader

                title="Certificate Management"

                subtitle="Manage your certificates."

            />

            <div className="flex justify-between items-center mb-6">

                <input

                    type="text"

                    placeholder="Search certificate..."

                    value={search}

                    onChange={(e) =>
                        setSearch(e.target.value)
                    }

                    className="w-80 rounded-xl bg-slate-900 border border-slate-700 px-4 py-3"

                />

                <Button

                    className="w-auto px-6 flex items-center gap-3"

                    onClick={() => {

                        setSelectedCertificate(null);

                        setModalOpen(true);

                    }}

                >

                    <FaPlus />

                    Add Certificate

                </Button>

            </div>

            <Card className="overflow-hidden">

                <div className="overflow-x-auto">

                    <table className="w-full">

                        <thead className="bg-slate-800">

                            <tr>

                                <th className="px-6 py-4 text-left">

                                    Certificate

                                </th>

                                <th className="px-6 py-4 text-left">

                                    Issuer

                                </th>

                                <th className="px-6 py-4 text-left">

                                    Issue Date

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
                                        colSpan="5"
                                        className="text-center py-10"
                                    >

                                        Loading...

                                    </td>

                                </tr>

                            ) : filteredCertificates.length === 0 ? (

                                <tr>

                                    <td
                                        colSpan="5"
                                        className="text-center py-10 text-slate-500"
                                    >

                                        No certificates found.

                                    </td>

                                </tr>

                            ) : (

                                filteredCertificates.map(
                                    (certificate) => (

                                        <tr

                                            key={certificate.id}

                                            className="border-t border-slate-800 hover:bg-slate-800/40"

                                        >

                                            <td className="px-6 py-5">

                                                <div className="flex items-center gap-3">

                                                    {

                                                        certificate.certificate_image ?

                                                            (

                                                                <img

                                                                    src={certificate.certificate_image}

                                                                    className="w-12 h-12 rounded-lg object-cover"

                                                                    alt={certificate.title}

                                                                />

                                                            )

                                                            :

                                                            (

                                                                <FaCertificate className="text-blue-400 text-xl" />

                                                            )

                                                    }

                                                    <div>

                                                        <div className="font-semibold">

                                                            {certificate.title}

                                                        </div>

                                                    </div>

                                                </div>

                                            </td>

                                            <td className="px-6 py-5">

                                                {certificate.issuer}

                                            </td>
                                            <td className="px-6 py-5">

    {new Date(certificate.issue_date).toLocaleDateString(
        "en-IN",
        {
            month: "short",
            year: "numeric",
        }
    )}

</td>

<td className="px-6 py-5 text-center">

    {certificate.is_active ? (

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

                setSelectedCertificate(certificate);

                setModalOpen(true);

            }}

            className="rounded-lg bg-blue-600 p-3 hover:bg-blue-700 transition"

        >

            <FaEdit />

        </button>

        <button

            onClick={() => openDelete(certificate)}

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

<CertificateModal

    open={modalOpen}

    onClose={() => {

        setModalOpen(false);

        setSelectedCertificate(null);

    }}

    onSubmit={handleSave}

    initialData={selectedCertificate}

/>

<ConfirmDialog

    open={deleteOpen}

    title="Delete Certificate"

    message={`Are you sure you want to delete "${deleteItem?.title}"?`}

    onCancel={() => {

        setDeleteOpen(false);

        setDeleteItem(null);

    }}

    onConfirm={confirmDelete}

/>

</div>

);

}