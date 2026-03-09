import { useState, useMemo, useEffect } from "react";

export default function usePagination (data, limit = 10) {
  const [page, setPage] = useState(1);

  const totalPages = useMemo(() => {
    return Math.ceil(data.length / limit);
  }, [data.length, limit]);

  const paginatedData = useMemo(() => {
    const start = (page - 1) * limit;
    return data.slice(start, start + limit);
  }, [data, page, limit]);

  const nextPage = () => {
    setPage((prev) => Math.min(prev + 1, totalPages));
  };

  const prevPage = () => {
    setPage((prev) => Math.max(prev - 1, 1));
  };

  const goToPage = (num) => {
    const safePage = Math.max(1, Math.min(num, totalPages));
    setPage(safePage);
  };

  useEffect(() => {
    setPage(1);
  }, [data.length]);

  useEffect(() => {
    if (page > totalPages) {
      setPage(totalPages || 1);
    }
  }, [totalPages]);

  return {
    page,
    totalPages,
    paginatedData,
    nextPage,
    prevPage,
    goToPage,
  };
};