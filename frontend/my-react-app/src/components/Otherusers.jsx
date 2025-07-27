import React from "react";
import Otheruser from "./Otheruser";
import useGetotherusers from "../hooks/useGetotherusers";
import { useSelector } from "react-redux";

const Otherusers = () => {

useGetotherusers();
const{otherUsers} = useSelector(store=>store.user);
if(!otherUsers) return;

  return (
    <div className="overflow-y-auto flex-1">
      {
        otherUsers?.map((user)=>{
          return(
            <Otheruser key={user.id} user={user}/>
          )
        })
      }
    
      
    </div>
  );
};

export default Otherusers;


