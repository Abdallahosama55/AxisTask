import React from "react";
import { useFormik } from "formik";

function EditModal({ isOpen, onClose, onSubmit, data }) {
  if (!isOpen) return null;

  const formik = useFormik({
    initialValues: {
      title: data.title || "",
      first: data.first || "",
      last: data.last || "",
      gender: data.gender || "",
      email: data.email || "",
      phone: data.phone || "",
      country: data.country || "",
      city: data.city || "",
      age: data.age || "",
    },
    onSubmit: (values) => {
      onSubmit({
        name: {
          title: values.title,
          first: values.first,
          last: values.last,
        },
        location: {
          country: values.country,
          city: values.city,
        },
        dob: {
          age: values.age,
        },
        gender: values.gender,
        email: values.email,
        phone: values.phone,
      });
      console.log(values);
      onClose(); // Close the modal after submitting
    },
  });

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 ">
      <div className="bg-white p-6 rounded-lg shadow-lg lg:max-h-[90vh] max-h-[95vh] overflow-y-auto lg:w-[55%] w-[98%]">
        <h2 className="text-xl font-bold mb-1">Edit User</h2>
        <form onSubmit={formik.handleSubmit} className=" grid lg:grid-cols-2 grid-col-1 gap-2">
          <div className="mb-1">
            <label className="block text-sm font-medium mb-2">Title</label>
            <input
              type="text"
              name="title"
              value={formik.values.title}
              onChange={formik.handleChange}
              className="border rounded-md p-2 w-full"
            />
          </div>
          <div className="mb-1">
            <label className="block text-sm font-medium mb-2">First Name</label>
            <input
              type="text"
              name="first"
              value={formik.values.first}
              onChange={formik.handleChange}
              className="border rounded-md p-2 w-full"
            />
          </div>
          <div className="mb-1">
            <label className="block text-sm font-medium mb-2">Last Name</label>
            <input
              type="text"
              name="last"
              value={formik.values.last}
              onChange={formik.handleChange}
              className="border rounded-md p-2 w-full"
            />
          </div>
          <div className="mb-1">
            <label className="block text-sm font-medium mb-2">Gender</label>
            <input
              type="text"
              name="gender"
              value={formik.values.gender}
              onChange={formik.handleChange}
              className="border rounded-md p-2 w-full"
            />
          </div>
          <div className="mb-1">
            <label className="block text-sm font-medium mb-2">Email</label>
            <input
              type="email"
              name="email"
              value={formik.values.email}
              onChange={formik.handleChange}
              className="border rounded-md p-2 w-full"
            />
          </div>
          <div className="mb-1">
            <label className="block text-sm font-medium mb-2">Phone</label>
            <input
              type="text"
              name="phone"
              value={formik.values.phone}
              onChange={formik.handleChange}
              className="border rounded-md p-2 w-full"
            />
          </div>
          <div className="mb-1">
            <label className="block text-sm font-medium mb-2">age</label>
            <input
              type="number"
              name="age"
              value={formik.values.age}
              onChange={formik.handleChange}
              className="border rounded-md p-2 w-full"
            />
          </div>
          <div className="mb-1">
            <label className="block text-sm font-medium mb-2">city</label>
            <input
              type="text"
              name="city"
              value={formik.values.city}
              onChange={formik.handleChange}
              className="border rounded-md p-2 w-full"
            />
          </div>
          <div className="mb-1">
            <label className="block text-sm font-medium mb-2">Country</label>
            <input
              type="text"
              name="country"
              value={formik.values.country}
              onChange={formik.handleChange}
              className="border rounded-md p-2 w-full"
            />
          </div>
   <div className=" flex items-end justify-end">

   <div className="flex justify-end">
            <button
              type="submit"
              className="bg-green-500 text-white px-4 py-2 rounded-md mr-2"
            >
              Save
            </button>
            <button
              type="button"
              onClick={onClose}
              className="bg-gray-300 px-4 py-2 rounded-md"
            >
              Cancel
            </button>
          </div>

   </div>
        </form>
      </div>
    </div>
  );
}

export default EditModal;
