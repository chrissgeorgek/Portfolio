import { forwardRef } from "react";

const Input = forwardRef(
  (
    {
      label,
      type = "text",
      placeholder,
      value,
      onChange,
      name,
      required = false,
    },
    ref
  ) => {
    return (
      <div className="space-y-2">

        {label && (
          <label className="text-sm text-slate-300 font-medium">
            {label}
          </label>
        )}

        <input
          ref={ref}
          type={type}
          name={name}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          required={required}
          className="w-full rounded-xl border border-slate-700 bg-slate-900 pl-12 pr-4 py-3 text-white outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-500/30"
        />

      </div>
    );
  }
);

Input.displayName = "Input";

export default Input;