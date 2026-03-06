export default function Checkbox({ onChange, checked, children }) {
  return (
    <label className="flex items-center gap-2">
      <input
        type="checkbox"
        checked={checked} // Control the checked state with the state variable
        onChange={onChange} // Update the state when the checkbox changes
        className="w-4 h-4 text-blue-600 border-gray-300 rounded"
      />
      {children}
    </label>
  );
}
