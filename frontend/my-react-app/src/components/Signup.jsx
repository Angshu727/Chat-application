import React, { useState } from "react";
import { Link } from "react-router-dom";

const Signup = () => {

  const [user ,setUser] = useState({
    fullName:"",
    userName:"",
    password:"",
    confirmPassword:"",
    gender:""
  })
  const onSubmithandler =(e) => {
    e.preventDefault();
    console.log(user);
  }
  return (
    <div className="min-w-96 mx=auto">
      <div className="h-full w-full bg-gray-400 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm      bg-opacity-10 border border-gray-100 shadow-md p-6">
        <h1 className="text-3xl font-bold text-center">Signup</h1>
        <form onSubmit={onSubmithandler} action="">
          <div>
            <label className="label p-2">
              <span className="text-base label-text ">FullName</span>
            </label>
            <input
              value={user.fullName}
              onChange ={(e) => setUser({...user, fullName: e.target.value})}
              className=" w-full input input-bordered h-10"
              type="text"
              placeholder="Enter your name"
            />
          </div>
          <div>
            <label className="label p-2">
              <span className="text-base label-text ">UserName</span>
            </label>
            <input
              value={user.userName}
              onChange={(e) => setUser({...user, userName: e.target.value})}
              className=" w-full input input-bordered h-10"
              type="text"
              placeholder="Username"
            />
          </div>
          <div>
            <label className="label p-2">
              <span className="text-base label-text " type='password'>Password</span>
            </label>
            <input
              value={user.password}
              onChange={(e) => setUser({...user, password: e.target.value})}
              className=" w-full input input-bordered h-10"
              type="password"
              placeholder="password"
            />
          </div>
          <div>
            <label className="label p-2">
              <span className="text-base label-text " type='password'>Confirm Password</span>
            </label>
            <input
              value={user.confirmPassword}
              onChange={(e) => setUser({...user, confirmPassword: e.target.value})}
              className=" w-full input input-bordered h-10"
              type="password"
              placeholder="password"
            />
          </div>
          <div className="flex items-center my-4 gap-3 mx-2">
            <div className="flex items-center">
              <p>Male:</p>
              <input type="checkbox" defaultChecked className="checkbox" />
            </div>
            <div className="flex items-center">
              <p>Female:</p>
              <input type="checkbox" defaultChecked className="checkbox" />
            </div>
          </div>
          <Link to={"/login"} className="mx-2">
            Already have an account?signup
          </Link>
          <div className="flex items-center justify-center my-4 mx-4">
            <button type='submit' className="btn btn-soft btn-success px-20">Signup</button>
            
          </div>
        </form>
      </div>
    </div>
  );
};

export default Signup;
