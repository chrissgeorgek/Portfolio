import { useEffect, useState } from "react";
import Button from "../../components/common/Button";
import { iconMap } from "../../utils/iconMap";

const iconOptions = Object.keys(iconMap).sort();

const categories = [
  "Frontend",
  "Backend",
  "Database",
  "Tools",
  "Cloud",
];

const initialForm = {
  name: "",
  category: "Frontend",
  icon: "FaReact",
  display_order: 1,
  is_active: true,
};

export default function SkillModal({
  open,
  onClose,
  onSubmit,
  initialData = null,
}) {
  const [form, setForm] = useState(initialForm);

  useEffect(() => {
    if (open) {
      if (initialData) {
        setForm(initialData);
      } else {
        setForm(initialForm);
      }
    }
  }, [open, initialData]);

  useEffect(() => {
    function handleEsc(e) {
      if (e.key === "Escape") {
        onClose();
      }
    }

    if (open) {
      window.addEventListener("keydown", handleEsc);
    }

    return () => {
      window.removeEventListener("keydown", handleEsc);
    };
  }, [open, onClose]);

  if (!open) return null;

  function handleChange(e) {
    const { name, value, type, checked } = e.target;

    setForm((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  }

  function handleSave() {
    if (!form.name.trim()) {
      alert("Skill name is required.");
      return;
    }

    onSubmit(form);
  }

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-5"
      onClick={onClose}
    >
      <div
        className="w-full max-w-xl rounded-3xl border border-slate-700 bg-slate-900 p-8"
        onClick={(e) => e.stopPropagation()}
      >
        <h2 className="mb-8 text-3xl font-bold">
          {initialData ? "Edit Skill" : "Add Skill"}
        </h2>

        <div className="space-y-5">

          <div>
            <label className="mb-2 block text-sm text-slate-400">
              Skill Name
            </label>

            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="React"
              className="w-full rounded-xl border border-slate-700 bg-slate-800 p-4 outline-none focus:border-blue-500"
            />
          </div>

          <div>
            <label className="mb-2 block text-sm text-slate-400">
              Category
            </label>

            <select
              name="category"
              value={form.category}
              onChange={handleChange}
              className="w-full rounded-xl border border-slate-700 bg-slate-800 p-4 outline-none focus:border-blue-500"
            >
              {categories.map((item) => (
                <option key={item} value={item}>
                  {item}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="mb-2 block text-sm text-slate-400">
              Icon
            </label>

            <select
              name="icon"
              value={form.icon}
              onChange={handleChange}
              className="w-full rounded-xl border border-slate-700 bg-slate-800 p-4 outline-none focus:border-blue-500"
            >
              {iconOptions.map((item) => (
                <option key={item} value={item}>
                  {item}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="mb-2 block text-sm text-slate-400">
              Display Order
            </label>

            <input
              type="number"
              name="display_order"
              value={form.display_order}
              onChange={handleChange}
              className="w-full rounded-xl border border-slate-700 bg-slate-800 p-4 outline-none focus:border-blue-500"
            />
          </div>

          <label className="flex items-center gap-3 rounded-xl bg-slate-800 p-4">

            <input
              type="checkbox"
              name="is_active"
              checked={form.is_active}
              onChange={handleChange}
            />

            <span>Active</span>

          </label>

        </div>

        <div className="mt-10 flex justify-end gap-4">

          <Button
            type="button"
            className="bg-slate-700 hover:bg-slate-600"
            onClick={onClose}
          >
            Cancel
          </Button>

          <Button
            type="button"
            onClick={handleSave}
          >
            {initialData ? "Update Skill" : "Save Skill"}
          </Button>

        </div>

      </div>
    </div>
  );
}