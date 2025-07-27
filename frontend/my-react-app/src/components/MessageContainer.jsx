import React, { use } from "react";
import Sendinput from "./Sendinput";
import Conversation from "./Conversation";
import { useSelector } from "react-redux";

const MessageContainer = () => {
  const {selectedUser} = useSelector((store) => store.user);
  return (
    <div className="md:min-w-[450px] md:max-w-[550px] flex flex-col gap-3 p-4 ">
      <div className="flex items-center gap-3">
        <div className="relative inline-block">
          <div className="avatar">
            <div className="w-10 rounded-full">
              <img
                src="https://wallpapers.com/images/high/cool-profile-picture-paper-bag-head-4co57dtwk64fb7lv.webp"
                alt="profile-img"
              />
            </div>
          </div>
          <span className="absolute bottom-0 right-0 h-3 w-3 bg-green-500 rounded-full ring-2 ring-white"></span>
        </div>
        <div className="ml-3 flex flex-col flex-1 ">
          <div className="flex items-center gap-2 ">
            <p className="font-semibold bg-yellow-300">{selectedUser?.fullName}</p>
            {console.log(selectedUser?.fullName)}
          </div>
        </div>
      </div>
      <div className="border-t border-gray-500 my-1"></div>
      <Conversation />
      <Sendinput/>
    </div>
  );
};

export default MessageContainer;
