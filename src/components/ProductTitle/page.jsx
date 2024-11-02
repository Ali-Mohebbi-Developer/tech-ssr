"use client";
import { GoArrowRight } from "react-icons/go";
import React, { useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import { IoIosArrowDown } from "react-icons/io";
import { IoFilter } from "react-icons/io5";
import Pagination from "../Pagination/page";
import { useFilter } from "@/context";
import { LuLayoutGrid } from "react-icons/lu";
import { TiThMenuOutline } from "react-icons/ti";

const filters = [
  "فناوری زیستی",
  "مواد پیشرفته",
  "هوافضا",
  "صنایع دریایی",
  "ماشین آلات و تجهیزات",
  "مواد پیشرفته",
  "سخت افزار رایانه ای",
  "آب و خاک و هوا",
  "فناوری نانو",
  "دارو های پیشرفته",
];

const ProductTitle = () => {
  const router = useRouter();
  const pathname = usePathname();
  const [selected, setSelected] = useState();
  const { isOpen, handleToggle, handleGrid, grid } = useFilter();
  const [layOrder, setLayOrder] = useState("new");

  const handleSort = (order) => {
    setLayOrder(order);
    const params = new URLSearchParams(window.location.search);
    params.set("sortOrder", order);
    router.push(`${pathname}?${params.toString()}`);
  };

  const handleCheck = (id) => {
    const params = new URLSearchParams(window.location.search);
    if (selected === id) {
      params.delete("filterSearch");
      setSelected(null);
    } else {
      params.set("filterSearch", id);
      setSelected(id);
    }
    params.set("page", 1);
    router.push(`${pathname}?${params.toString()}`);
  };

  return (
    <div className="text-right mt-5 relative">
      <div className="flex justify-end items-center ">
        <p className="-translate-y-1 mx-2 text-bold">محصول ها</p>
        <GoArrowRight />
      </div>
      <div className="flex justify-between flex-col lg:flex-row">
        <div className="translate-y-4 p-3 bg-white w-full shadow-md rounded-lg flex justify-between items-center">
          <div className="flex ">
            <span
              onClick={() => handleGrid("grid")}
              className={`p-2 cursor-pointer rounded-lg border border-[#28374C] ${
                grid === "grid"
                  ? "bg-[#28374C] text-white"
                  : "text-[#28374C] bg-white"
              }`}
            >
              <LuLayoutGrid />
            </span>
            <span
              onClick={() => handleGrid("flex")}
              className={`p-2 cursor-pointer rounded-lg border border-[#28374C] mx-2 ${
                grid === "flex"
                  ? "bg-[#28374C] text-white"
                  : "text-[#28374C] bg-white"
              }`}
            >
              <TiThMenuOutline />
            </span>
          </div>
          <div className="flex items-center  text-sm">
            <button
              className={`px-4 py-1 rounded-full border border-[#28374C] font-bold ${
                layOrder === "old"
                  ? "bg-[#28374C] text-white"
                  : "text-[#28374C] bg-white"
              }`}
              onClick={() => handleSort("old")}
            >
              قدیمی ترین
            </button>
            <button
              className={`mx-2 px-4 py-1 rounded-full border border-[#28374C] font-bold ${
                layOrder === "new"
                  ? "bg-[#28374C] text-white"
                  : "text-[#28374C] bg-white"
              }`}
              onClick={() => handleSort("new")}
            >
              جدید ترین
            </button>
            <p className="mr-2 ml-5 text-black">: مرتب سازی بر اساس</p>
            <span className="mr-2">
              <IoFilter />
            </span>
          </div>
        </div>

        <div className="flex w-full lg:w-[400px]">
          <div className="relative lg:absolute top-0 right-0 mt-10 bg-white shadow-lg p-2 w-full lg:w-[250px] rounded-xl">
            <div className="border rounded-xl">
              <div
                className={`flex items-center cursor-pointer text-right w-full p-2 ${
                  isOpen && "border-b"
                }`}
                onClick={handleToggle}
              >
                <h2 className="w-full mr-1">دسته بندی</h2>
                <span
                  className={`transform transition-transform ${
                    isOpen ? "rotate-180" : "rotate-0"
                  }`}
                >
                  <IoIosArrowDown />
                </span>
              </div>

              {isOpen && (
                <div className="flex flex-col bg-white p-3 rounded-xl">
                  {filters.map((val, i) => (
                    <div key={i} className="my-1 ">
                      <label htmlFor={`filter-${i}`} className="mr-2 ">
                        {val}
                      </label>
                      <input
                        type="checkbox"
                        id={`filter-${i}`}
                        checked={selected === val}
                        onChange={() => handleCheck(val)}
                        className="h-5 w-5 accent-[#FF8A00] border-gray-300 rounded focus:ring-orange-500 translate-y-1"
                      />
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      <Pagination />
    </div>
  );
};

export default ProductTitle;
