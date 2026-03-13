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
    <label htmlFor={inputId} className="flex flex-col gap-1 w-full">
      {label && (
        <span className="text-xs sm:text-sm text-gray-600">
          {label}
        </span>
      )}

      <input
        id={inputId}
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className={`
          w-full
          border border-gray-300
          rounded-md
          px-3
          py-2
          text-sm
          bg-white
          outline-none
         
          transition
          ${className}
        `}
        {...props}
      />
    </label>
  );
}