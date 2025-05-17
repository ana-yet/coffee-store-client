import React from "react";
import Swal from "sweetalert2";

const AddCoffee = () => {
  const handleAddCoffee = (e) => {
    e.preventDefault();
    const form = e.target;
    const fromData = new FormData(form);
    const newCoffee = Object.fromEntries(fromData.entries());
    console.log(newCoffee);

    // server side work here
    fetch("http://localhost:3000/coffees", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newCoffee),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log("after adding coffee data", data);
        if (data.insertedId) {
          Swal.fire({
            title: "Added Successfully!",
            icon: "success",
            draggable: true,
            timer: 1500,
          });
        }
      });
  };

  return (
    <div className="bg-[#F4F3F0] min-h-screen flex items-center justify-center p-6">
      <div className=" w-full max-w-4xl p-8 rounded shadow">
        <h1 className="text-3xl md:text-4xl font-bold text-center text-[#374151] mb-4">
          <span className="drop-shadow-md">Add New Coffee</span>
        </h1>
        <p className="text-center text-[#5e5e5e] mb-10 max-w-2xl mx-auto">
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout. The point of
          using Lorem Ipsum is that it has a more-or-less normal distribution of
          letters, as opposed to using Content here.
        </p>

        <form
          onSubmit={handleAddCoffee}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          {/* Name */}
          <div>
            <label className="block mb-2 font-medium text-[#374151]">
              Name
            </label>
            <input
              type="text"
              name="name"
              placeholder="Enter coffee name"
              className="w-full p-3 rounded-md border bg-white text-gray-800 border-gray-300"
            />
          </div>

          {/* Chef */}
          <div>
            <label className="block mb-2 font-medium text-[#374151]">
              Quantity
            </label>
            <input
              type="text"
              name="quantity"
              placeholder="Enter the quantity"
              className="w-full p-3 rounded-md border bg-white text-gray-800 border-gray-300"
            />
          </div>

          {/* Supplier */}
          <div>
            <label className="block mb-2 font-medium  text-[#374151]">
              Supplier
            </label>
            <input
              type="text"
              name="supplier"
              placeholder="Enter coffee supplier"
              className="w-full p-3 rounded-md border bg-white text-gray-800 border-gray-300"
            />
          </div>

          {/* Taste */}
          <div>
            <label className="block mb-2 font-medium text-[#374151]">
              Taste
            </label>
            <input
              type="text"
              name="taste"
              placeholder="Enter coffee taste"
              className="w-full p-3 rounded-md border bg-white text-gray-800 border-gray-300"
            />
          </div>

          {/* Category */}
          <div>
            <label className="block mb-2 font-medium text-[#374151]">
              Price
            </label>
            <input
              type="text"
              name="price"
              placeholder="Enter the price of coffee"
              className="w-full p-3 rounded-md border bg-white text-gray-800 border-gray-300"
            />
          </div>

          {/* Details */}
          <div>
            <label className="block mb-2 font-medium text-[#374151]">
              Details
            </label>
            <input
              type="text"
              name="details"
              placeholder="Enter coffee details"
              className="w-full p-3 rounded-md border bg-white text-gray-800 border-gray-300"
            />
          </div>

          {/* Photo URL (Full Width) */}
          <div className="md:col-span-2">
            <label className="block mb-2 font-medium text-[#374151]">
              Photo
            </label>
            <input
              type="text"
              name="photo"
              placeholder="Enter photo URL"
              className="w-full p-3 rounded-md border bg-white text-gray-800 border-gray-300"
            />
          </div>

          {/* Submit Button */}
          <div className="md:col-span-2 text-center">
            <button
              type="submit"
              className="bg-[#d2b48c] w-full border border-gray-800 text-[#331a15] font-semibold px-6 py-3 rounded shadow hover:bg-[#c8a97e] transition"
            >
              Add Coffee
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddCoffee;
