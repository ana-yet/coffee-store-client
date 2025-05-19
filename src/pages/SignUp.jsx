import React, { useContext } from "react";
import { Link } from "react-router";
import { AuthContext } from "../contexts/AuthContext";
import Swal from "sweetalert2";

const SignUp = () => {
  const { createUser } = useContext(AuthContext);

  const handleSubmitSingUp = (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const { password, ...formObj } = Object.fromEntries(formData.entries());
    // console.log(password, formObj);

    createUser(formObj.email, password)
      .then((data) => {
        console.log("user created successfully", data);
        const userData = {
          ...formObj,
          creationTime: data.user.metadata?.creationTime,
          lastSignInTime: data.user.metadata?.lastSignInTime,
        };

        fetch("https://coffee-store-server-beryl-eight.vercel.app/user", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(userData),
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.insertedId) {
              Swal.fire({
                title: "User created successfully!",
                icon: "success",
                draggable: true,
                timer: 1500,
              });
            }
          });
      })
      .catch((error) => {
        console.log("error to adding new user", error);
      });
  };
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-2xl shadow-md w-full max-w-md">
        <h2 className="text-3xl font-bold mb-6 text-center text-gray-800">
          Sign In
        </h2>

        <form onSubmit={handleSubmitSingUp} className="space-y-4">
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-700"
            >
              Name
            </label>
            <input
              type="text"
              name="name"
              id="name"
              required
              className="mt-1 block w-full px-4 py-2 border rounded-lg shadow-sm focus:ring focus:ring-blue-200 focus:outline-none border-gray-300 text-gray-600 "
            />
          </div>
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              Email Address
            </label>
            <input
              type="email"
              name="email"
              id="email"
              required
              className="mt-1 block w-full px-4 py-2 border rounded-lg shadow-sm focus:ring focus:ring-blue-200 focus:outline-none border-gray-300 text-gray-600"
            />
          </div>
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-700"
            >
              Phone Number
            </label>
            <input
              type="text"
              name="phone"
              id="phone"
              required
              className="mt-1 block w-full px-4 py-2 border rounded-lg shadow-sm focus:ring focus:ring-blue-200 focus:outline-none border-gray-300 text-gray-600"
            />
          </div>
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-700"
            >
              Profile Pic
            </label>
            <input
              type="text"
              name="photo"
              id="photo"
              required
              className="mt-1 block w-full px-4 py-2 border rounded-lg shadow-sm focus:ring focus:ring-blue-200 focus:outline-none border-gray-300 text-gray-600"
            />
          </div>
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-700"
            >
              Date of Birth
            </label>
            <input
              type="text"
              name="dob"
              id="dob"
              required
              className="mt-1 block w-full px-4 py-2 border rounded-lg shadow-sm focus:ring focus:ring-blue-200 focus:outline-none border-gray-300 text-gray-600"
            />
          </div>
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-700"
            >
              Gender
            </label>
            <input
              type="text"
              name="gender"
              id="gender"
              required
              className="mt-1 block w-full px-4 py-2 border rounded-lg shadow-sm focus:ring focus:ring-blue-200 focus:outline-none border-gray-300 text-gray-600"
            />
          </div>
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-700"
            >
              Address
            </label>
            <input
              type="text"
              name="address"
              id="address"
              required
              className="mt-1 block w-full px-4 py-2 border rounded-lg shadow-sm focus:ring focus:ring-blue-200 focus:outline-none border-gray-300 text-gray-600"
            />
          </div>
          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700"
            >
              Password
            </label>
            <input
              type="password"
              name="password"
              id="password"
              required
              className="mt-1 block w-full px-4 py-2 border rounded-lg shadow-sm focus:ring focus:ring-blue-200 focus:outline-none border-gray-300 text-gray-600"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition"
          >
            Sign in
          </button>
        </form>
        <p className="mt-4 text-sm text-center text-gray-600">
          Already have an account?
          <Link to={"/signin"} className="text-blue-600 hover:underline">
            Sing Up
          </Link>
        </p>
      </div>
    </div>
  );
};

export default SignUp;
