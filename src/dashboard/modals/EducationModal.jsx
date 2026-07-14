import { useEffect, useState } from "react";
import Button from "../../components/common/Button";

export default function EducationModal({

    open,

    onClose,

    onSubmit,

    initialData,

}) {

    const initialForm = {

        institution: "",

        degree: "",

        field_of_study: "",

        location: "",

        start_date: "",

        end_date: "",

        grade: "",

        description: "",

        institution_logo: null,

        display_order: 1,

        is_active: true,

    };

    const [form, setForm] = useState(initialForm);

    const [preview, setPreview] = useState("");

    useEffect(() => {

        if (!open) return;

        if (initialData) {

            setForm(initialData);

            setPreview(initialData.institution_logo);

        }

        else {

            setForm(initialForm);

            setPreview("");

        }

    }, [open, initialData]);

    if (!open) return null;

    function handleChange(e) {

        const { name, value, type, checked } = e.target;

        setForm({

            ...form,

            [name]: type === "checkbox" ? checked : value,

        });

    }

    function handleLogo(e) {

        const file = e.target.files[0];

        if (!file) return;

        setForm({

            ...form,

            institution_logo: file,

        });

        setPreview(

            URL.createObjectURL(file)

        );

    }

    function handleSave() {

        const data = new FormData();

        Object.keys(form).forEach((key) => {

            if (

                key === "institution_logo"

            ) {

                if (form.institution_logo instanceof File) {

                    data.append(

                        "institution_logo",

                        form.institution_logo

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

        <div className="fixed inset-0 bg-black/70 z-50 flex justify-center items-center p-6">

            <div className="bg-slate-900 rounded-3xl w-full max-w-5xl p-8 overflow-y-auto max-h-[90vh]">

                <h2 className="text-3xl font-bold mb-8">

                    {

                        initialData ?

                            "Edit Education"

                            :

                            "Add Education"

                    }

                </h2>

                <div className="grid lg:grid-cols-2 gap-8">

                    <div>

                        <label>Institution</label>

                        <input

                            className="w-full mt-2 mb-5 rounded-xl bg-slate-800 p-4"

                            name="institution"

                            value={form.institution}

                            onChange={handleChange}

                        />

                        <label>Degree</label>

                        <input

                            className="w-full mt-2 mb-5 rounded-xl bg-slate-800 p-4"

                            name="degree"

                            value={form.degree}

                            onChange={handleChange}

                        />

                        <label>Field of Study</label>

                        <input

                            className="w-full mt-2 mb-5 rounded-xl bg-slate-800 p-4"

                            name="field_of_study"

                            value={form.field_of_study}

                            onChange={handleChange}

                        />

                        <label>Location</label>

                        <input

                            className="w-full mt-2 mb-5 rounded-xl bg-slate-800 p-4"

                            name="location"

                            value={form.location}

                            onChange={handleChange}

                        />

                        <label>Description</label>

                        <textarea

                            rows="5"

                            className="w-full mt-2 rounded-xl bg-slate-800 p-4"

                            name="description"

                            value={form.description}

                            onChange={handleChange}

                        />

                    </div>

                    <div>

                        <label>Start Date</label>

                        <input

                            type="date"

                            name="start_date"

                            value={form.start_date}

                            onChange={handleChange}

                            className="w-full mt-2 mb-5 rounded-xl bg-slate-800 p-4"

                        />

                        <label>End Date</label>

                        <input

                            type="date"

                            name="end_date"

                            value={form.end_date}

                            onChange={handleChange}

                            className="w-full mt-2 mb-5 rounded-xl bg-slate-800 p-4"

                        />

                        <label>Grade / CGPA</label>

                        <input

                            name="grade"

                            value={form.grade}

                            onChange={handleChange}

                            className="w-full mt-2 mb-5 rounded-xl bg-slate-800 p-4"

                        />

                        <label>Institution Logo</label>

                        <input

                            type="file"

                            onChange={handleLogo}

                            className="mt-2"

                        />

                        {

                            preview &&

                            <img

                                src={preview}

                                className="w-full h-40 object-contain rounded-xl mt-4 bg-slate-800"

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

                        Save Education

                    </Button>

                </div>

            </div>

        </div>

    );

}