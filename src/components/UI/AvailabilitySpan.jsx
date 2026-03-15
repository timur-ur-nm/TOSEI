import React from "react";

export default function AvailabilitySpan({ availability }) {
  return (
    <span
      className={`
            px-3 py-1
            text-xs
            rounded-full
            w-fit
            h-fit
            ${
              availability
                ? "bg-[#73DB43] text-white"
                : "bg-[#EBB428] text-white"
            }
          `}
    >
      {availability ? "В наличии" : "Под заказ"}
    </span>
  );
}
