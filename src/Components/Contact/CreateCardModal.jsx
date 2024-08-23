import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { addCard } from "../../Redux/cardsSlice";
import { toast } from "react-toastify";
import { v4 as uuidv4 } from 'uuid';


const InputField = ({ name, type = "text", placeholder }) => (
  <div className="mb-4">
    <Field
      type={type}
      name={name}
      placeholder={placeholder}
      className="border p-2 w-full"
    />
    <ErrorMessage name={name} component="div" className="text-red-500" />
  </div>
);

const CreateCardModal = ({ isOpen, onClose }) => {
  const dispatch = useDispatch();
  const [imageBase64, setImageBase64] = useState(null);

  if (!isOpen) return null;

  const validationSchema = Yup.object({
    title: Yup.string().required("Title is required"),
    first: Yup.string().required("First name is required"),
    last: Yup.string().required("Last name is required"),
    city: Yup.string().required("City is required"),
    phone: Yup.string().required("Phone number is required"),
    email: Yup.string()
      .email("Invalid email format")
      .required("Email is required"),
    age: Yup.number()
      .required("Age is required")
      .positive("Age must be positive"),
    gender: Yup.string().required("Gender is required"),
    postcode: Yup.string().required("Postcode is required"),
    country: Yup.string().required("Country is required"),
  });

  const handleFileChange = (e, setFieldValue) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImageBase64(reader.result);
        setFieldValue("imgSrc", reader.result); // Store Base64 string in formik field
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="fixed inset-0 bg-gray-500 bg-opacity-75 flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded-lg shadow-lg">
        <h2 className="text-xl font-bold mb-4">Create New Card</h2>
        <Formik
          initialValues={{
            title: "",
            first: "",
            last: "",
            city: "",
            phone: "",
            email: "",
            imgSrc: "",
            age: "",
            gender: "",
            postcode: "",
            country: "",
          }}
          validationSchema={validationSchema}
          onSubmit={(values) => {
            dispatch(
              addCard({
                id: { value: uuidv4() }, // Ensure you are setting a unique id
                name: {
                  title: values.title,
                  first: values.first,
                  last: values.last,
                },
                location: {
                  country: values.country,
                  city: values.city,
                  postcode: values.postcode,
                },
                dob: {
                  age: values.age,
                },
                picture: {
                  large: imageBase64, // Store image as Base64 string
                },
                gender: values.gender,
                email: values.email,
                phone: values.phone,
              })
            );
            
            toast.success("Card created successfully");
            onClose();
          }}
        >
          {({ setFieldValue, errors, touched }) => (
            <Form className=" grid lg:grid-cols-2 grid-cols-1 gap-2 ">
              <InputField name="title" placeholder="Title" />
              <InputField name="first" placeholder="First Name" />
              <InputField name="last" placeholder="Last Name" />
              <InputField name="city" placeholder="City" />
              <InputField name="phone" placeholder="Phone Number" />
              <InputField name="email" type="email" placeholder="Email" />
              <div className="mb-4">
                <input
                  type="file"
                  accept="image/png, image/jpeg"
                  onChange={(e) => handleFileChange(e, setFieldValue)}
                  className="border p-2 w-full"
                />
                {errors.imgSrc && touched.imgSrc ? (
                  <div className="text-red-500">{errors.imgSrc}</div>
                ) : null}
              </div>
              <InputField name="age" type="number" placeholder="Age" />
              <InputField name="gender" placeholder="Gender" />
              <InputField name="postcode" placeholder="Postcode" />
              <InputField name="country" placeholder="Country" />
              <div className=" flex justify-end items-center">
                <button
                  type="submit"
                  className="bg-green-500 text-white p-2 rounded mr-2"
                >
                  Create Card
                </button>
                <button
                  type="button"
                  onClick={onClose}
                  className="bg-gray-500 text-white p-2 rounded"
                >
                  Cancel
                </button>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default CreateCardModal;
