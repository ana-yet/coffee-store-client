import React from "react";
import CoffeeDetailsCard from "../components/CoffeeDetailsCard";
import { useLoaderData } from "react-router";

const CoffeeDetails = () => {
  const CoffeeDetailsData = useLoaderData();
  return (
    <div>
      <div className="md:w-10/12 mx-auto w-11/12">
        <CoffeeDetailsCard CoffeeDetailsData={CoffeeDetailsData} />
      </div>
    </div>
  );
};

export default CoffeeDetails;
