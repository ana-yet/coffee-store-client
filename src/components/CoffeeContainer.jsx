import React from "react";
import CoffeeCard from "./CoffeeCard";

const CoffeeContainer = ({ coffeeData, setCoffeeData }) => {
  const handleDeleteCoffee = (id) => {
    const newCoffees = coffeeData.filter((coffee) => coffee._id !== id);
    setCoffeeData(newCoffees);
  };
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:w-10/12 mx-auto">
      {coffeeData.map((coffees, index) => (
        <CoffeeCard
          key={index}
          handleDeleteCoffee={handleDeleteCoffee}
          coffees={coffees}
        />
      ))}
    </div>
  );
};

export default CoffeeContainer;
