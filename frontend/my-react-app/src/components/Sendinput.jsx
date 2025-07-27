import React from "react";
import { IoSend } from "react-icons/io5";

const Sendinput = () => {
  return (
    <form className="my-4">
      <div className="w-full relative">
        <input
          type="text"
          placeholder="type you message.."
          className="border text-sm rounded-lg block w-full bg-gray-500 text-white p-2"
        />
        <button className="absolute flex items-center inset-y-0 end-0 px-2">
            <IoSend/>
        </button>
      </div>
    </form>
  );
};

export default Sendinput;
