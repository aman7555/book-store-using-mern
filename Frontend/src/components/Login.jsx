/* eslint-disable no-unused-vars */
import React from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";

function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);

  //X controller
  const navigate = useNavigate();

  const closeModal = () => {
    document.getElementById("my_modal_3").close();
    navigate("/");
  };

  return (
    <dialog id="my_modal_3" className="modal">
      <div className="modal-box">
        <form onSubmit={handleSubmit(onSubmit)} method="dialog">
          <button
            type="button"
            onClick={closeModal}
            className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
          >
            ✕
          </button>

          <h3 className="font-bold text-lg">Login</h3>
          {/* Email */}
          <div className="mt-4 space-y-2">
            <span>Email:</span>
            <br />
            <input
              type="email"
              placeholder="Enter your Email"
              className="w-80 px-3 border rounded-md outline-none"
              {...register("email", { required: true })}
            />
            <br />
            {errors.email && (
              <span className="text-red-500 text-sm">
                This field is required
              </span>
            )}
          </div>
          {/* Password */}
          <div className="mt-4 space-y-2">
            <span>Password:</span>
            <br />
            <input
              type="password"
              placeholder="Enter your Password"
              className="w-80 px-3 border rounded-md outline-none"
              {...register("password", { required: true })}
            />
            <br />
            {errors.password && (
              <span className="text-red-500 text-sm">
                This field is required
              </span>
            )}
          </div>
          {/* Button */}
          <div className="flex justify-around mt-4">
            <button className="bg-pink-500 text-white rounded-md px-3 py-1 hover:bg-pink-700">
              Login
            </button>
            <p>
              Not registered?
              <Link
                to="/signup"
                className="text-blue-500 cursor-pointer underline"
              >
                Signup
              </Link>
            </p>
          </div>
        </form>
      </div>
    </dialog>
  );
}

export default Login;
