import { useEffect, useState } from "react";
import Button from "../../components/common/Button";

export default function CertificateModal({

    open,

    onClose,

    onSubmit,

    initialData,

}) {

    const initialForm = {

        title: "",

        issuer: "",

        issue_date: "",

        credential_id: "",

        certificate_url: "",

        certificate_image: null,

        display_order: 1,

        is_active: true,

    };

    const [form, setForm] = useState(initialForm);

    const [preview, setPreview] = useState("");

    useEffect(() => {

        if (!open) return;

        if (initialData) {

            setForm(initialData);

            setPreview(initialData.certificate_image);

        }

        else {

            setForm(initialForm);

            setPreview("");

        }

    }, [open, initialData]);

    if (!open) return null;

    function handleChange(e) {

        const {

            name,

            value,

            type,

            checked,

        } = e.target;

        setForm({

            ...form,

            [name]:

                type === "checkbox"

                    ? checked

                    : value,

        });

    }

    function handleImage(e) {

        const file = e.target.files[0];

        if (!file) return;

        setForm({

            ...form,

            certificate_image: file,

        });

        setPreview(

            URL.createObjectURL(file)

        );

    }

    function handleSave() {

        const data = new FormData();

        Object.keys(form).forEach((key) => {

            if (

                key === "certificate_image"

            ) {

                if (

                    form.certificate_image instanceof File

                ) {

                    data.append(

                        "certificate_image",

                        form.certificate_image

                    );

                }

            }

            else {

                data.append(

                    key,

                    form[key]

                );

            }

        });

        onSubmit(data);

    }

    return (

        <div className="fixed inset-0 bg-black/70 flex justify-center items-center z-50 p-6">

            <div className="bg-slate-900 rounded-3xl p-8 w-full max-w-4xl overflow-y-auto max-h-[90vh]">

                <h2 className="text-3xl font-bold mb-8">

                    {

                        initialData

                            ? "Edit Certificate"

                            : "Add Certificate"

                    }

                </h2>

                <div className="grid lg:grid-cols-2 gap-8">

                    <div>

                        <label>Title</label>

                        <input

                            name="title"

                            value={form.title}

                            onChange={handleChange}

                            className="w-full mt-2 mb-5 rounded-xl bg-slate-800 p-4"

                        />

                        <label>Issuer</label>

                        <input

                            name="issuer"

                            value={form.issuer}

                            onChange={handleChange}

                            className="w-full mt-2 mb-5 rounded-xl bg-slate-800 p-4"

                        />

                        <label>Issue Date</label>

                        <input

                            type="date"

                            name="issue_date"

                            value={form.issue_date}

                            onChange={handleChange}

                            className="w-full mt-2 mb-5 rounded-xl bg-slate-800 p-4"

                        />

                        <label>Credential ID</label>

                        <input

                            name="credential_id"

                            value={form.credential_id}

                            onChange={handleChange}

                            className="w-full mt-2 mb-5 rounded-xl bg-slate-800 p-4"

                        />

                        <label>Certificate URL</label>

                        <input

                            name="certificate_url"

                            value={form.certificate_url}

                            onChange={handleChange}

                            className="w-full mt-2 rounded-xl bg-slate-800 p-4"

                        />

                    </div>

                    <div>

                        <label>Certificate Image</label>

                        <input

                            type="file"

                            onChange={handleImage}

                            className="mt-2"

                        />

                        {

                            preview &&

                            <img

                                src={preview}

                                className="mt-5 rounded-xl w-full h-56 object-contain bg-slate-800"

                            />

                        }

                    </div>

                </div>

                <div className="grid grid-cols-3 gap-6 mt-8">

                    <div>

                        <label>Display Order</label>

                        <input

                            type="number"

                            name="display_order"

                            value={form.display_order}

                            onChange={handleChange}

                            className="w-full mt-2 rounded-xl bg-slate-800 p-4"

                        />

                    </div>

                    <label className="flex items-center gap-3">

                        <input

                            type="checkbox"

                            name="is_active"

                            checked={form.is_active}

                            onChange={handleChange}

                        />

                        Active

                    </label>

                </div>

                <div className="flex justify-end gap-4 mt-10">

                    <Button

                        type="button"

                        className="bg-slate-700"

                        onClick={onClose}

                    >

                        Cancel

                    </Button>

                    <Button

                        type="button"

                        onClick={handleSave}

                    >

                        Save Certificate

                    </Button>

                </div>

            </div>

        </div>

    );

}