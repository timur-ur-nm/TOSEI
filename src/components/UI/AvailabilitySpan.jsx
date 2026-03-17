export default function AvailabilitySpan({ availability }) {
  return (
    <span
      className={`inline-flex items-center px-3 py-1 text-xs rounded-full font-medium
        ${
          availability
            ? "bg-green-500 text-white"
            : "bg-yellow-500 text-white"
        }
      `}
    >
      {availability ? "В наличии" : "Под заказ"}
    </span>
  );
}