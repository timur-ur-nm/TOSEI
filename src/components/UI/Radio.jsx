import React from "react";

export default function Radio({checked, onChange, value, name, children}) {
  return (
    <label className="flex gap-2">
      <input
        type="radio"
        name={name}
        value={value}
        checked={checked}
        onChange={onChange}
      />
      {children}
    </label>
  );
}
