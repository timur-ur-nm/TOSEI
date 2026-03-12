export default function Input({
  label,
  value,
  onChange,
  placeholder,
  type = "text",
  id,
  className = "",
  ...props
}) {
  const inputId = id || label;

  return (
    <label
      htmlFor={inputId}
      className="flex flex-col"
    >
      {label && <span className="text-gray-600">{label}</span>}

      <input
        id={inputId}
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className={`border rounded px-2 py-1 text-sm outline-none
        focus:border-blue-500 focus:ring-1 focus:ring-blue-400
        transition ${className}`}
        {...props}
      />
    </label>
  );
}
