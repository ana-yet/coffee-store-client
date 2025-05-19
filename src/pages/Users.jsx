import { X } from "lucide-react";
import React, { useState } from "react";
import { useLoaderData } from "react-router";
import Swal from "sweetalert2";

const Users = () => {
  const initialUsers = useLoaderData();
  const [users, setUsers] = useState(initialUsers);

  const handleDelete = (id) => {
    // console.log(id);

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
        fetch(`https://coffee-store-server-beryl-eight.vercel.app/user/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data.deletedCount) {
              Swal.fire({
                title: "Deleted!",
                text: "Your file has been deleted.",
                icon: "success",
                timer: 1500,
              });
              const newUser = users.filter((user) => user._id !== id);
              setUsers(newUser);
            }
          });
      }
    });
  };
  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">User List</h2>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white shadow-md rounded-lg">
          <thead>
            <tr className="bg-gray-100 text-left text-sm font-semibold text-gray-700">
              <th className="py-3 px-4">Picture</th>
              <th className="py-3 px-4">Name</th>
              <th className="py-3 px-4">Email</th>
            </tr>
          </thead>
          <tbody>
            {users?.map((user) => (
              <tr
                key={user._id}
                className="border-t border-gray-200 hover:bg-gray-50"
              >
                <td className="py-3 px-4">
                  <img
                    src={user.photo}
                    alt={user.name}
                    className="w-10 h-10 rounded-full object-cover"
                  />
                </td>
                <td className="py-3 text-gray-500 px-4">{user.name}</td>
                <td className="py-3 text-gray-500 px-4">{user.email}</td>
                <td
                  onClick={() => handleDelete(user._id)}
                  className="text-red-500"
                >
                  <X />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Users;
