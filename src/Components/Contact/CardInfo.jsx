import React, { useState } from 'react';
import { BsThreeDotsVertical } from 'react-icons/bs';
import { IoMan } from 'react-icons/io5';
import { MdCalendarMonth, MdOutlineCall, MdOutlineEmail } from 'react-icons/md';
import { Link } from 'react-router-dom';

import { useDispatch } from 'react-redux';
import { editCard } from '../../Redux/cardsSlice'; 
import ModalDelete from './ModalDelete';
import EditModal from './EditModal';

function CardsInfo({
  title,
  last,
  first,
  city,
  phone,
  imgSrc,
  email,
  country,
  postcode,
  age,
  gender,
  id,
  onDelete,
  onEdit,
}) {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [editModalOpen, setEditModalOpen] = useState(false);
  const [editData, setEditData] = useState({ title, first, last, gender, phone, email, country,city,age });
  
  const dispatch = useDispatch();

  const handleEditSubmit = (user) => {
    dispatch(editCard({ id, updatedData: user }));
    setEditModalOpen(false);
  };

  return (
    <div className="rounded-2xl shadow-custom bg-white relative p-5 py-4">
      <div className="absolute top-4 right-4">
        <button onClick={() => setDropdownOpen(!dropdownOpen)} className="relative">
          <BsThreeDotsVertical className="w-4 h-4" />
        </button>
        {dropdownOpen && (
          <div className="absolute right-0 mt-2 w-32 bg-white rounded-md shadow-custom z-10">
            <ul className="py-1">
              <li
                className="px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 cursor-pointer"
                onClick={() => setEditModalOpen(true)}
              >
                Edit
              </li>
              <li
                className="px-4 py-2 text-sm text-red-500 hover:bg-gray-100 cursor-pointer"
                onClick={() => setModalOpen(true)}
              >
                Delete
              </li>
            </ul>
          </div>
        )}
      </div>

      <ModalDelete
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        onConfirm={() => {
          onDelete(id);
          setModalOpen(false);
        }}
      />

      <EditModal
        isOpen={editModalOpen}
        onClose={() => setEditModalOpen(false)}
        onSubmit={handleEditSubmit}
        data={editData}
        setData={setEditData}
      />

      <img src={imgSrc} alt="Profile Pic" className="w-24 h-24 rounded mb-4" />
      <div className="my-1">
        <h3 className="text-xl font-bold flex gap-2">
          {title + " :" + first + " " + last}
        </h3>
        <h3 className=" text-dark font-semibold flex  p-2 ">
          <span className=" flex-grow flex  items-center gap-1">
            <MdCalendarMonth />
            {age} Years
          </span>{" "}
          <span>
            {" "}
            <IoMan /> {gender}
          </span>
        </h3>
        <p className="">City :{city}</p>
        <p>post code {postcode}</p>
      </div>

      <div className="flex  gap-1">
        <span className=" bg-red-200 text-red-600 rounded-lg py-1 px-3">
          From {country}
        </span>
      </div>

      <div className="grid grid-cols-4 items-center mt-2">
        <button className="bg-[#45DD4B12]  col-span-3 flex items-center gap-2 w-full  text-[#0f4429] px-3 py-1 rounded-2xl">
          <MdOutlineCall />
          {phone}
        </button>
        <div className="flex gap-3 w-full justify-end">
          <Link to={`mailto:${email}`}>
            <button className="rounded-full bg-[#9f270c] flex justify-center items-center w-[35px] h-[35px]">
              <MdOutlineEmail color="white" size={18} />
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default CardsInfo;
