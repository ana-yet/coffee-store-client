import React, { useState } from "react";
import { useLoaderData } from "react-router";
import CoffeeContainer from "./CoffeeContainer";

const Home = () => {
  const initialData = useLoaderData();
  const [coffeeData, setCoffeeData] = useState(initialData);
  // console.log(coffeeData);
  return (
    <div>
      <CoffeeContainer setCoffeeData={setCoffeeData} coffeeData={coffeeData} />
    </div>
  );
};

export default Home;
