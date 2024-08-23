import React from "react";
import Card from "../Components/Contact/Card";
import HeaderCard from "../Components/Contact/HeaderCard";
function Contact() {
  return (
    <div className="bg-green-100  min-h-[90vh] p-6 ">
      {" "}
      <div className="rounded-lg h-100  bg-white  mt-12 py-6 px-8">
        <HeaderCard />

        <main className="py-2">
          <Card />
        </main>
      </div>
    </div>
  );
}

export default Contact;
