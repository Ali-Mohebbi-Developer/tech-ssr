"use client";
import React from "react";
import { useRouter } from "next/navigation";

const Pagination = ({ currentPage, totalPages }) => {
  const router = useRouter();

  const handlePageChange = (page) => {
    const query = new URLSearchParams(window.location.search);
    query.set("page", page);
    router.push(`${window.location.pathname}?${query.toString()}`);
  };

  const renderPages = () => {
    const pageNumbers = [];
    for (let i = 1; i <= totalPages; i++) {
      pageNumbers.push(
        <button
          key={i}
          onClick={() => handlePageChange(i)}
          disabled={i === currentPage}
          className={`px-4 py-2 mx-1 rounded-full   ${
            i === currentPage ? "bg-[#9AACB6] text-white" : "text-[#9AACB6]"
          }`}
        >
          {i}
        </button>
      );
    }
    return pageNumbers;
  };

  return <div className="p-10 flex justify-center">{renderPages()}</div>;
};

export default Pagination;
