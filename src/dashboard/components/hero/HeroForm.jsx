import Input from "../../../components/common/Input";

export default function HeroForm({
  formData,
  handleChange,
}) {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">

      <Input
        label="Name"
        name="name"
        value={formData.name}
        onChange={handleChange}
      />

      <Input
        label="Designation"
        name="designation"
        value={formData.designation}
        onChange={handleChange}
      />

      <div className="lg:col-span-2">

        <Input
          label="Headline"
          name="headline"
          value={formData.headline}
          onChange={handleChange}
        />

      </div>

      <div className="lg:col-span-2">

        <label className="block mb-2 text-sm font-medium text-slate-300">
          Description
        </label>

        <textarea
  rows="6"
  name="description"
  value={formData.description || ""}
  onChange={handleChange}
  className="w-full rounded-xl border border-slate-700 bg-slate-900 p-4 text-white outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-500/30 resize-none"
/>

      </div>

      <Input
        label="GitHub"
        name="github"
        value={formData.github}
        onChange={handleChange}
      />

      <Input
        label="LinkedIn"
        name="linkedin"
        value={formData.linkedin}
        onChange={handleChange}
      />

      <Input
        label="Email"
        name="email"
        value={formData.email}
        onChange={handleChange}
      />

      <Input
        label="Phone"
        name="phone"
        value={formData.phone}
        onChange={handleChange}
      />

      <div className="lg:col-span-2">

        <Input
          label="Location"
          name="location"
          value={formData.location}
          onChange={handleChange}
        />

      </div>

    </div>
  );
}