import React from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { FaCity, FaPhone, FaEnvelope, FaUserAlt, FaGlobe, FaCalendar } from "react-icons/fa";
import { FaDatabase } from "react-icons/fa6";

function CardDetails() {
  const { id } = useParams(); // Get the card ID from the URL
  const card = useSelector((state) => state.cards.cards.find(card => card.id.value === id));

  if (!card) {
    return <p className="text-red-500 text-center font-semibold mt-10">Card not found</p>;
  }

  return (
    <div className=" mx-auto p-6 bg-white shadow-lg border lg:mx-12 rounded-lg lg:mt-24 mt-12">
      <div className="flex items-center justify-center w-full">
        <img 
          src={card.picture.large} 
          alt={`${card.name.first} ${card.name.last}`} 
          className="w-32 h-32 rounded-full border-4 border-blue-500" 
        />
      </div>
      <h1 className="text-4xl font-bold text-center mt-4 text-gray-800">
        {card.name.title} {card.name.first} {card.name.last}
      </h1>
      <div className="mt-6 space-y-4 text-gray-600">
        <div className="flex items-center">
          <FaCity className="text-blue-500 mr-3" />
          <span>City: {card.location.city}</span>
        </div>
        <div className="flex items-center">
          <FaPhone className="text-green-500 mr-3" />
          <span>Phone: {card.phone}</span>
        </div>
        <div className="flex items-center">
          <FaEnvelope className="text-red-500 mr-3" />
          <span>Email: {card.email}</span>
        </div>
        <div className="flex items-center">
          <FaUserAlt className="text-purple-500 mr-3" />
          <span>Age: {card.dob.age}</span>
        </div>
        <div className="flex items-center">
          <FaUserAlt className="text-yellow-500 mr-3" />
          <span>Gender: {card.gender}</span>
        </div>
        <div className="flex items-center">
          <FaGlobe className="text-blue-500 mr-3" />
          <span>Postcode: {card.location.postcode}</span>
        </div>
        <div className="flex items-center">
          <FaGlobe className="text-blue-500 mr-3" />
          <span>Country: {card.location.country}</span>
        </div>
        <div className="flex items-center">
          <FaGlobe className="text-blue-500 mr-3" />
          <span>Country: {card.location.state}</span>
        </div>
        <div className="flex items-center">
          <FaCalendar className="text-blue-500 mr-3" />
          <span>date: {card.dob.date}</span>
        </div>
        <div className="flex items-center">
          <FaDatabase className="text-blue-500 mr-3" />
          <span>registered date: {card.registered.date}</span>
        </div>
      </div>
    </div>
  );
}

export default CardDetails;
