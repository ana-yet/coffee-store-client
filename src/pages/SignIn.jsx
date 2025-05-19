import React, { useContext } from "react";
import { AuthContext } from "../contexts/AuthContext";
import { Link } from "react-router";
import Swal from "sweetalert2";

const SignIn = () => {
  const { userLogin } = useContext(AuthContext);
  // console.log(userLogin);

  const handleSubmitSingIn = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    console.log(email, password);

    userLogin(email, password)
      .then((res) => {
        console.log("user after login: ", res);
        const userInfo = {
          email,
          lastSignInTime: res.user?.metadata?.lastSignInTime,
        };
        fetch("https://coffee-store-server-beryl-eight.vercel.app/user", {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(userInfo),
        })
          .then((res) => res.json())
          .then((data) => {
            // console.log("after login", data);
            if (data.modifiedCount) {
              Swal.fire({
                title: "User login successfully!",
                icon: "success",
                draggable: true,
                timer: 1500,
              });
            }
          });
      })
      .catch((error) => console.log("error", error));
  };
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-2xl shadow-md w-full max-w-md">
        <h2 className="text-3xl font-bold mb-6 text-center text-gray-800">
          Sign In
        </h2>
        <form onSubmit={handleSubmitSingIn} className="space-y-4">
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
              className="mt-1 text-gray-500 block w-full px-4 py-2 border rounded-lg shadow-sm focus:ring focus:ring-blue-200 focus:outline-none border-gray-300"
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
              className="mt-1 block text-gray-500 w-full px-4 py-2 border rounded-lg shadow-sm focus:ring focus:ring-blue-200 focus:outline-none border-gray-300"
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
          Already have an account?{" "}
          <Link to={"/signup"} className="text-blue-600 hover:underline">
            Sing Up
          </Link>
        </p>
      </div>
    </div>
  );
};

export default SignIn;
