"use client";
import React from "react";
import Image from "next/image";
import Pagination from "@/components/Pagination/page";
import { useFilter } from "@/context";

const Products = ({ products, totalPages, currentPage }) => {
  const { isOpen, grid } = useFilter();

  return (
    <div>
      <ul
        className={`${isOpen && "lg:mr-[300px]"} ${
          grid === "flex"
            ? "flex flex-col space-y-4"
            : `grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 ${
                isOpen ? "lg:grid-cols-4 gap-x-4 " : "lg:grid-cols-5 gap-x-8"
              } gap-y-4`
        }`}
      >
        {products.length ? (
          products.map((val) => (
            <li
              key={val.id}
              className={`border shadow-md bg-white rounded-xl p-4 text-right relative  ${
                grid === "flex"
                  ? "flex flex-col md:flex-row-reverse items-center "
                  : ""
              }`}
            >
              <Image
                src={val.image}
                width={200}
                height={200}
                alt={val.name}
                className={`mb-2 ${
                  grid === "flex" ? "md:mb-0 md:mx-4" : "mx-auto"
                }`}
              />
              <div>
                <h2 className="text-lg font-semibold mb-1">{val.name}</h2>
                <p className="text-gray-600 mb-1">{val.desc}</p>
                <span className="text-xs bg-gray-300 text-black px-2 py-1 rounded-full mb-1">
                  {val.category}
                </span>
                <div
                  className={`text-left flex items-center ${
                    grid === "flex" && "absolute left-5"
                  }`}
                >
                  <p>تومان</p>
                  <p className="mx-1">{val.price}</p>
                </div>
              </div>
            </li>
          ))
        ) : (
          <p className="col-span-full text-center">Not Found...</p>
        )}
      </ul>

      {totalPages > 1 && (
        <Pagination currentPage={currentPage} totalPages={totalPages} />
      )}
    </div>
  );
};

export default Products;
