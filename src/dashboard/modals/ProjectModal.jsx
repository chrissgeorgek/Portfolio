import { useEffect, useState } from "react";
import Button from "../../components/common/Button";

export default function ProjectModal({

    open,

    onClose,

    onSubmit,

    initialData,

    skills,

}) {

    const initialForm = {

        title: "",

        short_description: "",

        description: "",

        github_url: "",

        live_demo_url: "",

        featured: false,

        is_active: true,

        display_order: 1,

        technologies: [],

        project_image: null,

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

            setPreview(initialData.project_image);

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

            checked,

            type,

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

            project_image: file,

        });

        setPreview(

            URL.createObjectURL(file)

        );

    }

    function toggleSkill(id) {

        if (

            form.technologies.includes(id)

        ) {

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

        data.append(

            "title",

            form.title

        );

        data.append(

            "short_description",

            form.short_description

        );

        data.append(

            "description",

            form.description

        );

        data.append(

            "github_url",

            form.github_url

        );

        data.append(

            "live_demo_url",

            form.live_demo_url

        );

        data.append(

            "featured",

            form.featured

        );

        data.append(

            "is_active",

            form.is_active

        );

        data.append(

            "display_order",

            form.display_order

        );

        form.technologies.forEach(id =>

            data.append(

                "technologies",

                id

            )

        );

        if (

            form.project_image instanceof File

        ) {

            data.append(

                "project_image",

                form.project_image

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

                            ? "Edit Project"

                            : "Add Project"

                    }

                </h2>

                <div className="grid lg:grid-cols-2 gap-8">

                    <div>

                        <label>

                            Title

                        </label>

                        <input

                            className="w-full mt-2 mb-5 rounded-xl bg-slate-800 p-4"

                            name="title"

                            value={form.title}

                            onChange={handleChange}

                        />

                        <label>

                            Short Description

                        </label>

                        <input

                            className="w-full mt-2 mb-5 rounded-xl bg-slate-800 p-4"

                            name="short_description"

                            value={form.short_description}

                            onChange={handleChange}

                        />

                        <label>

                            Description

                        </label>

                        <textarea

                            rows="6"

                            className="w-full mt-2 rounded-xl bg-slate-800 p-4"

                            name="description"

                            value={form.description}

                            onChange={handleChange}

                        />

                    </div>

                    <div>

                        <label>

                            Technologies

                        </label>

                        <div className="grid grid-cols-2 gap-3 mt-3 mb-6">

                            {

                                skills.map(skill => (

                                    <label

                                        key={skill.id}

                                        className="flex items-center gap-2 bg-slate-800 rounded-xl p-3"

                                    >

                                        <input

                                            type="checkbox"

                                            checked={

                                                form.technologies.includes(

                                                    skill.id

                                                )

                                            }

                                            onChange={() =>

                                                toggleSkill(skill.id)

                                            }

                                        />

                                        {skill.name}

                                    </label>

                                ))

                            }

                        </div>

                        <label>

                            Project Image

                        </label>

                        <input

                            type="file"

                            onChange={handleImage}

                            className="mt-3"

                        />

                        {

                            preview && (

                                <img

                                    src={preview}

                                    className="mt-5 rounded-2xl w-full h-56 object-cover"

                                />

                            )

                        }

                        <label className="mt-6 block">

                            GitHub URL

                        </label>

                        <input

                            className="w-full mt-2 mb-5 rounded-xl bg-slate-800 p-4"

                            name="github_url"

                            value={form.github_url}

                            onChange={handleChange}

                        />

                        <label>

                            Live Demo URL

                        </label>

                        <input

                            className="w-full mt-2 rounded-xl bg-slate-800 p-4"

                            name="live_demo_url"

                            value={form.live_demo_url}

                            onChange={handleChange}

                        />

                    </div>

                </div>

                <div className="grid grid-cols-3 gap-6 mt-8">

                    <label>

                        Display Order

                        <input

                            type="number"

                            name="display_order"

                            value={form.display_order}

                            onChange={handleChange}

                            className="w-full mt-2 rounded-xl bg-slate-800 p-4"

                        />

                    </label>

                    <label className="flex items-center gap-3">

                        <input

                            type="checkbox"

                            name="featured"

                            checked={form.featured}

                            onChange={handleChange}

                        />

                        Featured

                    </label>

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
                        Save Project
                    </Button>

                </div>

            </div>

        </div>

    );

}