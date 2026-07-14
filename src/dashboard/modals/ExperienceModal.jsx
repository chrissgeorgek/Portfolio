import { useEffect, useState } from "react";
import Button from "../../components/common/Button";

export default function ExperienceModal({

    open,

    onClose,

    onSubmit,

    initialData,

    skills,

}) {

    const initialForm = {

        company: "",

        designation: "",

        employment_type: "",

        location: "",

        start_date: "",

        end_date: "",

        currently_working: false,

        description: "",

        technologies: [],

        company_logo: null,

        display_order: 1,

        is_active: true,

    };

    const [form, setForm] = useState(initialForm);

    const [preview, setPreview] = useState("");

    useEffect(() => {

        if (!open) return;

        if (initialData) {

            setForm({

                ...initialData,

                technologies:
                    initialData.technologies?.map(
                        tech => tech.id
                    ) || [],

            });

            setPreview(initialData.company_logo);

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

    function handleLogo(e) {

        const file = e.target.files[0];

        if (!file) return;

        setForm({

            ...form,

            company_logo: file,

        });

        setPreview(

            URL.createObjectURL(file)

        );

    }

    function toggleSkill(id) {

        if (form.technologies.includes(id)) {

            setForm({

                ...form,

                technologies:
                    form.technologies.filter(
                        item => item !== id
                    ),

            });

        }

        else {

            setForm({

                ...form,

                technologies: [

                    ...form.technologies,

                    id,

                ],

            });

        }

    }

    function handleSave() {

        const data = new FormData();

        data.append("company", form.company);

        data.append("designation", form.designation);

        data.append(
            "employment_type",
            form.employment_type
        );

        data.append("location", form.location);

        data.append("start_date", form.start_date);

        data.append("end_date", form.end_date);

        data.append(
            "currently_working",
            form.currently_working
        );

        data.append(
            "description",
            form.description
        );

        data.append(
            "display_order",
            form.display_order
        );

        data.append(
            "is_active",
            form.is_active
        );

        form.technologies.forEach(id =>

            data.append(
                "technologies",
                id
            )

        );

        if (form.company_logo instanceof File) {

            data.append(
                "company_logo",
                form.company_logo
            );

        }

        onSubmit(data);

    }

    return (

        <div className="fixed inset-0 bg-black/70 z-50 flex justify-center items-center p-6">

            <div className="bg-slate-900 rounded-3xl w-full max-w-5xl p-8 overflow-y-auto max-h-[90vh]">

                <h2 className="text-3xl font-bold mb-8">

                    {

                        initialData

                            ? "Edit Experience"

                            : "Add Experience"

                    }

                </h2>

                <div className="grid lg:grid-cols-2 gap-8">

                    <div>

                        <label>Company</label>

                        <input

                            className="w-full mt-2 mb-5 rounded-xl bg-slate-800 p-4"

                            name="company"

                            value={form.company}

                            onChange={handleChange}

                        />

                        <label>Designation</label>

                        <input

                            className="w-full mt-2 mb-5 rounded-xl bg-slate-800 p-4"

                            name="designation"

                            value={form.designation}

                            onChange={handleChange}

                        />

                        <label>Employment Type</label>

                        <input

                            className="w-full mt-2 mb-5 rounded-xl bg-slate-800 p-4"

                            name="employment_type"

                            value={form.employment_type}

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

                            value={form.end_date || ""}

                            onChange={handleChange}

                            className="w-full mt-2 mb-5 rounded-xl bg-slate-800 p-4"

                        />

                        <label className="flex items-center gap-3 mb-6">

                            <input

                                type="checkbox"

                                name="currently_working"

                                checked={form.currently_working}

                                onChange={handleChange}

                            />

                            Currently Working

                        </label>

                        <label>Company Logo</label>

                        <input

                            type="file"

                            onChange={handleLogo}

                            className="mt-2"

                        />

                        {

                            preview && (

                                <img

                                    src={preview}

                                    alt="Company logo preview"

                                    className="w-full h-40 object-contain rounded-xl mt-4 bg-slate-800"

                                />

                            )

                        }

                        <label className="block mt-6 mb-2">

                            Technologies

                        </label>

                        <div className="grid grid-cols-2 gap-2 max-h-48 overflow-y-auto">

                            {

                                skills.map(skill => (

                                    <label

                                        key={skill.id}

                                        className="flex items-center gap-2 bg-slate-800 rounded-lg p-3"

                                    >

                                        <input

                                            type="checkbox"

                                            checked={form.technologies.includes(skill.id)}

                                            onChange={() => toggleSkill(skill.id)}

                                        />

                                        {skill.name}

                                    </label>

                                ))

                            }

                        </div>

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

                        Save Experience

                    </Button>

                </div>

            </div>

        </div>

    );

}   