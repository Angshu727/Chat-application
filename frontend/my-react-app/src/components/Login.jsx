import React from "react";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="min-w-96 mx=auto">
      <div className="h-full w-full bg-gray-400 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm      bg-opacity-10 border border-gray-100 shadow-md p-6">
        <h1 className="text-3xl font-bold text-center">Signup</h1>
        <form action="">
          <div>
            <label className="label p-2">
              <span className="text-base label-text ">UserName</span>
            </label>
            <input
              className=" w-full input input-bordered h-10"
              type="text"
              placeholder="Username"
            />
          </div>
          <div>
            <label className="label p-2">
              <span className="text-base label-text ">Password</span>
            </label>
            <input
              className=" w-full input input-bordered h-10"
              type="password"
              placeholder="password"
            />
          </div>
          <Link to={"/Signup"} className="mx-2 my-3">
            Don't have an account?signup
          </Link>
          <div className="flex items-center justify-center my-4 mx-4">
            <button className="btn btn-soft btn-success px-20">Login</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
