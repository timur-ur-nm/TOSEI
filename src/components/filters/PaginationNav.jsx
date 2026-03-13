export default function Pagination({
  page,
  totalPages,
  goToPage,
  nextPage,
  prevPage,
}) {
  const getPages = () => {
    const pages = [];
    const delta = 2;

    const start = Math.max(2, page - delta);
    const end = Math.min(totalPages - 1, page + delta);

    pages.push(1);

    if (start > 2) {
      pages.push("start-dots");
    }

    for (let i = start; i <= end; i++) {
      pages.push(i);
    }

    if (end < totalPages - 1) {
      pages.push("end-dots");
    }

    if (totalPages > 1) {
      pages.push(totalPages);
    }

    return pages;
  };

  const pages = getPages();

  return (
    <div className="flex items-center justify-center gap-1 sm:gap-2 mt-6 flex-wrap">
      <button
        onClick={prevPage}
        disabled={page === 1}
        className="
        px-3 sm:px-4 py-2
        text-sm
        border border-gray-300
        rounded-lg
        bg-white
        hover:bg-gray-100
        transition
        disabled:opacity-40
        disabled:cursor-not-allowed
      "
      >
        Prev
      </button>

      {pages.map((p, index) =>
        p === "start-dots" || p === "end-dots" ? (
          <span
            key={p + index}
            className="px-2 text-gray-500 text-sm sm:text-base"
          >
            ...
          </span>
        ) : (
          <button
            key={p}
            onClick={() => goToPage(p)}
            className={`
            min-w-[36px]
            px-3 sm:px-4
            py-2
            text-sm
            border
            rounded-lg
            transition
            ${
              page === p
                ? "bg-[#CD0000] text-white  shadow"
                : "bg-white border-gray-300 hover:bg-gray-100"
            }
          `}
          >
            {p}
          </button>
        ),
      )}

      <button
        onClick={nextPage}
        disabled={page === totalPages}
        className="
        px-3 sm:px-4 py-2
        text-sm
        border border-gray-300
        rounded-lg
        bg-white
        hover:bg-gray-100
        transition
        disabled:opacity-40
        disabled:cursor-not-allowed
      "
      >
        Next
      </button>
    </div>
  );
}
