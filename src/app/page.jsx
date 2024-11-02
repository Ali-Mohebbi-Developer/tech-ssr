import Api from "@/Api/page";
import Header from "@/components/Header/page";
import ProductTitle from "@/components/ProductTitle/page";
import React from "react";

const page = ({ searchParams }) => {
  return (
    <>
      <div className="bg-gray-100 min-h-[100vh] pb-10">
        <Header />
        <div className="mx-[160px]">
          <ProductTitle />
          <div>
            <Api searchParams={searchParams} />
          </div>
        </div>
      </div>
    </>
  );
};

export default page;
