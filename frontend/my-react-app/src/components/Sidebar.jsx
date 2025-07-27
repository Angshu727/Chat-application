import React from "react";
import { FaSearch } from "react-icons/fa";
import Otherusers from "./Otherusers.jsx";
import axios from "axios";
import toast from "react-hot-toast";
import {useNavigate} from "react-router-dom";
const Sidebar = () => {
  const navigate = useNavigate();
  const logoutHandler = async ()=>{
    try {
        const res = await axios.get(`http://localhost:8080/api/v1/user/logout`);
        navigate("/login");
        toast.success(res.data.message);
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <div className="border-r border-slate-500 p-4 flex flex-col">
      <form action="" className="flex items-center gap-2">
        <input
          className="input input-bordered rounded-md "
          type="text"
          placeholder="search..."
        />
        <button type="submit" className="btn bg-zinc-500">
          <FaSearch />
        </button>
      </form>
      <div className="divider px-3"></div>
      <Otherusers/>
      <button onClick={logoutHandler} className="btn btn-sm mt-3">Logout</button>
    </div>
  );
};

export default Sidebar;
