import React from "react";

const CoffeeDetailsCard = ({ CoffeeDetailsData }) => {
  const { _id, name, photo, details, quantity, price, taste, supplier } =
    CoffeeDetailsData;
  return (
    <div className="flex flex-col md:flex-row items-center   gap-8 p-6 bg-[#F4F3F0] rounded-lg shadow-md max-w-4xl mx-auto">
      <img
        src={photo}
        alt={name}
        className="w-[351px] h-[455px] object-contain"
      />

      <div className="space-y-2 text-[#444]">
        <h2 className="text-2xl font-semibold text-[#3e2723] font-[cursive] mb-4">
          Niceties
        </h2>

        <p>
          <span className="font-semibold">Name:</span> {name}
        </p>
        <p>
          <span className="font-semibold">Supplier:</span> {supplier}
        </p>
        <p>
          <span className="font-semibold">Quantity:</span> {quantity}
        </p>
        <p>
          <span className="font-semibold">Taste:</span> {taste}
        </p>
        <p>
          <span className="font-semibold">Price:</span> {price}
        </p>
        <p>
          <span className="font-semibold">Details:</span> {details}
        </p>
      </div>
    </div>
  );
};

export default CoffeeDetailsCard;
