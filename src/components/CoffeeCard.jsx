import React from "react";
import { Eye, Pencil, Trash } from "lucide-react";
import Swal from "sweetalert2";
import { Link } from "react-router";

const CoffeeCard = ({ coffees, handleDeleteCoffee }) => {
  const { _id, name, photo, details, quantity, price, taste, supplier } =
    coffees;

  const handleDelete = (id) => {
    console.log(id);

    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:3000/coffees/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            // console.log("after deleting data", data);
            if (data.deletedCount) {
              Swal.fire({
                title: "Deleted!",
                text: "Your Coffee has been deleted.",
                icon: "success",
              });
              handleDeleteCoffee(id);
            }
          });
      }
    });
  };
  return (
    <div className=" bg-white text-gray-700 rounded-lg shadow-md p-4 flex items-center gap-4">
      <img
        src={photo}
        alt="Americano Coffee"
        className="w-24 h-32 object-contain"
      />
      <div className="flex-1">
        <p>
          <span className="font-semibold">Name:</span> {name}
        </p>
        <p>
          <span className="font-semibold">Chef:</span> {supplier}
        </p>
        <p>
          <span className="font-semibold">Price:</span> {price} Taka
        </p>
      </div>
      <div className="flex flex-col gap-2">
        <Link to={`coffeeDetails/${_id}`}>
          <button className="bg-yellow-300 hover:bg-yellow-400 p-2 rounded text-white">
            <Eye size={16} />
          </button>
        </Link>
        <Link to={`updateCoffee/${_id}`}>
          <button className="bg-gray-800 hover:bg-gray-700 p-2 rounded text-white">
            <Pencil size={16} />
          </button>
        </Link>
        <button
          onClick={() => handleDelete(_id)}
          className="bg-red-500 hover:bg-red-600 p-2 rounded text-white"
        >
          <Trash size={16} />
        </button>
      </div>
    </div>
  );
};

export default CoffeeCard;
