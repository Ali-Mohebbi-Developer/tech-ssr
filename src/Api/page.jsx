import React from "react";
import axios from "axios";
import Products from "@/components/Products/page";

const Api = async ({ searchParams }) => {
  const search = searchParams.search || "";
  const sortOrder = searchParams.sortOrder || "new";
  const filterSearch = searchParams.filterSearch || "";
  const itemsPerPage = 20;
  const page = parseInt(searchParams.page) || 1;

  try {
    const response = await axios.get(
      "https://66a099667053166bcabbf309.mockapi.io/tech",
      { params: { name: search } }
    );

    let products = response.data;

    if (filterSearch) {
      products = products.filter((p) => p.category.includes(filterSearch));
    }

    products.sort((a, b) =>
      sortOrder === "new"
        ? new Date(b.time) - new Date(a.time)
        : new Date(a.time) - new Date(b.time)
    );

    const totalProducts = products.length;
    const totalPages = Math.ceil(totalProducts / itemsPerPage);
    const indexOfLastProduct = page * itemsPerPage;
    const indexOfFirstProduct = indexOfLastProduct - itemsPerPage;
    const currentProducts = products.slice(
      indexOfFirstProduct,
      indexOfLastProduct
    );

    return (
      <div>
        <Products
          products={currentProducts}
          totalPages={totalPages}
          currentPage={page}
        />
      </div>
    );
  } catch (error) {
    console.error("Error fetching data:", error);
    return <p>Error loading data</p>;
  }
};

export default Api;
