"use client";
import { usePathname, useRouter } from "next/navigation";
import React, { useState } from "react";

const Header = () => {
  const router = useRouter();
  const pathname = usePathname();
  const [search, setSearch] = useState("");

  const onClick = () => {
    const params = new URLSearchParams();
    if (search) params.set("search", search);
    router.push(`${pathname}?${params.toString()}`);
  };

  const handleSearch = (e) => setSearch(e.target.value);
  return (
    <div className="w-full bg-white h-[100px] flex justify-center items-center shadow-xl">
      <button
        onClick={onClick}
        className="w-[24px] h-[24px] bg-[#9AACB6] rounded-full translate-x-9"
      ></button>

      <input
        onChange={handleSearch}
        placeholder="جستجو"
        className="bg-transparent px-4 py-2 rounded-2xl border-[1.5px] border-[#9AACB6] outline-none w-[700px] text-right text-[#9AACB6]"
      />
    </div>
  );
};

export default Header;
