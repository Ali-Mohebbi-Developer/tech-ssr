"use client";
import React, { createContext, useContext, useState } from "react";

const FilterContext = createContext();

export const FilterProvider = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [grid, setGrid] = useState("grid");
  const handleGrid = (state) => {
    setGrid(state);
  };

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <FilterContext.Provider value={{ isOpen, handleToggle, grid, handleGrid }}>
      {children}
    </FilterContext.Provider>
  );
};

export const useFilter = () => {
  return useContext(FilterContext);
};
