import React from "react";
import { RiContactsBook3Fill } from "react-icons/ri";
import { MdCheck } from "react-icons/md";
function HeaderCard() {
  return (
    <div>
      {" "}
      <div className="flex items-center gap-2 mb-4">
        <div className=" flex flex-grow items-center gap-2">
          <span className=" bg-[#E5E5FF] p-2 w-[40px] flex justify-center rounded-lg ">
            {" "}
            <RiContactsBook3Fill color="#16A34A" />
          </span>
          <h3 className="font-bold text-3xl ">Contact Team</h3>
        </div>
       
      </div>
    </div>
  );
}

export default HeaderCard;
