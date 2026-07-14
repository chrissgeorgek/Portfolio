import { useEffect, useState } from "react";
import {
    FaEnvelopeOpen,
    FaTrash,
} from "react-icons/fa";
import { toast } from "react-toastify";

import PageHeader from "../../components/common/PageHeader";
import Card from "../../components/common/Card";
import ConfirmDialog from "../../components/common/ConfirmDialog";

import {
    getMessages,
    updateMessage,
    deleteMessage,
} from "../../services/messageService";

export default function MessagesPage() {

    const [messages, setMessages] = useState([]);

    const [loading, setLoading] = useState(true);

    const [search, setSearch] = useState("");

    const [deleteOpen, setDeleteOpen] = useState(false);

    const [selected, setSelected] = useState(null);

    useEffect(() => {

        loadMessages();

    }, []);

    async function loadMessages() {

        try {

            const data = await getMessages();

            setMessages(data);

        }

        catch {

            toast.error("Unable to load messages.");

        }

        finally {

            setLoading(false);

        }

    }

    async function markRead(message) {

        try {

            await updateMessage(

                message.id,

                {

                    ...message,

                    is_read: true,

                }

            );

            loadMessages();

        }

        catch {

            toast.error("Unable to update.");

        }

    }

    async function confirmDelete() {

        try {

            await deleteMessage(selected.id);

            toast.success("Message deleted.");

            setDeleteOpen(false);

            loadMessages();

        }

        catch {

            toast.error("Delete failed.");

        }

    }

    const filtered = messages.filter(

        item =>

            item.name

                .toLowerCase()

                .includes(search.toLowerCase())

            ||

            item.email

                .toLowerCase()

                .includes(search.toLowerCase())

            ||

            item.subject

                .toLowerCase()

                .includes(search.toLowerCase())

    );

    return (

        <div>

            <PageHeader

                title="Messages"

                subtitle="Manage portfolio contact messages."

            />

            <input

                placeholder="Search..."

                value={search}

                onChange={(e)=>

                    setSearch(e.target.value)

                }

                className="mb-6 w-80 rounded-xl bg-slate-900 border border-slate-700 px-4 py-3"

            />

            <Card className="overflow-hidden">

                <div className="overflow-x-auto">

                    <table className="w-full">

                        <thead className="bg-slate-800">

                            <tr>

                                <th className="px-6 py-4 text-left">

                                    Name

                                </th>

                                <th className="px-6 py-4 text-left">

                                    Email

                                </th>

                                <th className="px-6 py-4 text-left">

                                    Subject

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

                            {

                                loading ?

                                (

                                    <tr>

                                        <td

                                            colSpan="5"

                                            className="text-center py-10"

                                        >

                                            Loading...

                                        </td>

                                    </tr>

                                )

                                :

                                filtered.length===0 ?

                                (

                                    <tr>

                                        <td

                                            colSpan="5"

                                            className="text-center py-10"

                                        >

                                            No messages.

                                        </td>

                                    </tr>

                                )

                                :

                                filtered.map(message=>(

                                    <tr

                                        key={message.id}

                                        className="border-t border-slate-800"

                                    >

                                        <td className="px-6 py-5">

                                            {message.name}

                                        </td>

                                        <td className="px-6 py-5">

                                            {message.email}

                                        </td>

                                        <td className="px-6 py-5">

                                            {message.subject}

                                        </td>

                                        <td className="text-center">

                                            {

                                                message.is_read ?

                                                "Read"

                                                :

                                                "Unread"

                                            }

                                        </td>

                                        <td>

                                            <div className="flex justify-center gap-3">

                                                <button

                                                    onClick={()=>markRead(message)}

                                                    className="bg-blue-600 p-3 rounded-lg"

                                                >

                                                    <FaEnvelopeOpen/>

                                                </button>

                                                <button

                                                    onClick={()=>{

                                                        setSelected(message);

                                                        setDeleteOpen(true);

                                                    }}

                                                    className="bg-red-600 p-3 rounded-lg"

                                                >

                                                    <FaTrash/>

                                                </button>

                                            </div>

                                        </td>

                                    </tr>

                                ))

                            }

                        </tbody>

                    </table>

                </div>

            </Card>

            <ConfirmDialog

                open={deleteOpen}

                title="Delete Message"

                message={`Delete message from ${selected?.name}?`}

                onCancel={()=>setDeleteOpen(false)}

                onConfirm={confirmDelete}

            />

        </div>

    );

}