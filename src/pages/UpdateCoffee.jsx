import React from "react";
import { useLoaderData } from "react-router";
import Swal from "sweetalert2";

const UpdateCoffee = () => {
  const { _id, name, photo, details, quantity, price, taste, supplier } =
    useLoaderData();

  const handleUpdateCoffee = (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const newCoffee = Object.fromEntries(formData.entries());
    console.log(newCoffee);

    fetch(`http://localhost:3000/coffees/${_id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newCoffee),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount) {
          Swal.fire({
            title: "Updated Successfully!",
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
          <span className="drop-shadow-md">Update Coffee</span>
        </h1>

        <form
          onSubmit={handleUpdateCoffee}
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
              defaultValue={name}
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
              defaultValue={quantity}
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
              defaultValue={supplier}
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
              defaultValue={taste}
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
              defaultValue={price}
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
              defaultValue={details}
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
              defaultValue={photo}
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

export default UpdateCoffee;
