export default function MySelect({
  options,
  defaultValue,
  value,
  onChange,
  children,
}) {
  return (
    <label className="flex flex-col gap-1 text-sm w-full md:w-fit md:min-w-52">
      <span className="text-gray-600 text-xs sm:text-sm">{children}</span>

      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="
          w-full
          border border-gray-300
          bg-[#F1F1F1]
          rounded
          p-2
          text-sm
          font-medium
          transition
        "
      >
        <option value="">{defaultValue}</option>

        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.name}
          </option>
        ))}
      </select>
    </label>
  );
}
