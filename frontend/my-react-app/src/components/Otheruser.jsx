import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setSelectedUser } from "../redux/userSlice";

const Otheruser = (props) => {
  const user = props.user;
  const dispatch = useDispatch();
  const { selectedUser } = useSelector((store) => store.user);
  const selectedUserHandler = (user) => {
    dispatch(setSelectedUser(user));
  };
  return (
    <div>
      <div
        onClick={() => selectedUserHandler(user)}
        className={`${
          selectedUser?._id === user?._id ? "bg-gray-200 " : ""
        }flex items-center gap-2 hover:bg-gray-200 cursor-pointer p-3 rounded-md`}
      >
        <div className="relative inline-block">
          <div className="avatar">
            <div className="w-10 rounded-full">
              <img src={user?.profilePicture} alt="profile-img" />
            </div>
          </div>
          <span className="absolute bottom-0 right-0 h-3 w-3 bg-green-500 rounded-full ring-2 ring-white"></span>
        </div>
        <div className="ml-3 flex flex-col flex-1 ">
          <div className="flex items-center gap-2 ">
            <p className="font-semibold">{user?.fullName}</p>
          </div>
        </div>
      </div>
      <div className="border-t border-gray-500 my-1"></div>
    </div>
  );
};

export default Otheruser;
