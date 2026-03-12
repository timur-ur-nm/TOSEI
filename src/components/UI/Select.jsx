export default function MySelect({
  options,
  defaultValue,
  value,
  onChange,
  children,
}) {
  return (
    <label className="flex flex-col text-sm min-w-52">
      {children}
      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full border-1 p-2 border-gray-300 bg-[#F1F1F1] rounded font-medium"
      >
        <option value="">
          {defaultValue}
        </option>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.name}
          </option>
        ))}
      </select>
    </label>
  );
}
