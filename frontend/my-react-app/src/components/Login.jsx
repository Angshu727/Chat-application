import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {toast} from "react-hot-toast";
import axios from "axios";
import {useDispatch} from "react-redux";
import { setAuthUser } from "../redux/userSlice";

const Login = () => {
  const [user, setUser] = useState({
    userName: "",
    password: "",
  });
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onSubmithandler = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(
        `http://localhost:8080/api/v1/user/login`,
        user,
        {
          headers: {
            "Content-Type": "application/json",
          },
          withCredentials: true,
        }
      );
        navigate("/");``
        dispatch(setAuthUser(res.data));   
    } catch (error) {
      toast.error(error.response.data.message);
      console.log(error);
    }
    setUser({
      userName: "",
      password: "",
    });
  };
  return (
    <div className="min-w-96 mx=auto">
      <div className="h-full w-full bg-gray-400 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm      bg-opacity-10 border border-gray-100 shadow-md p-6">
        <h1 className="text-3xl font-bold text-center">Login</h1>
        <form action="" onSubmit={onSubmithandler}>
          <div>
            <label className="label p-2">
              <span className="text-base label-text ">UserName</span>
            </label>
            <input
              value={user.userName}
              onChange={(e) =>
                setUser({
                  ...user,
                  userName: e.target.value,
                })
              }
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
              value={user.password}
              onChange={(e) =>
                setUser({
                  ...user,
                  password: e.target.value,
                })
              }
              className=" w-full input input-bordered h-10"
              type="password"
              placeholder="password"
            />
          </div>
          <Link to={"/Signup"} className="mx-2 my-3">
            Don't have an account?signup
          </Link>
          <div className="flex items-center justify-center my-4 mx-4">
            <button type="submit" className="btn btn-soft btn-success px-20">
              Login
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
