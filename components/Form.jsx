"use client";
import axios from "axios";
import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";

const Form = ({ fetchTodos }) => {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    date: "",
  });

  const onchangeHandler = (e) => {
    const name = e.target.name;
    const val = e.target.value;
    setFormData((form) => ({ ...form, [name]: val }));
    console.log(formData);
  };

  const onsubmitHandler = async (e) => {
    e.preventDefault();

    try {
      const apiUrl = process.env.NEXT_PUBLIC_API_URL;  // Access the API URL from env variable

      // API code
      const response = await axios.post(`${apiUrl}/api`, formData);

      toast.success(response.data.msg);
      setFormData({
        title: "",
        description: "",
        date: "",
      });
      fetchTodos();
    } catch (err) {
      toast.error("Something Went Wrong");
    }
  };
  return (
    <>
      <ToastContainer theme="dark" />
      <form
        onSubmit={onsubmitHandler}
        className="max-w-lg mx-auto p-8 rounded-xl shadow-lg  bg-transparent dark:border-gray-600 transition-all duration-300 ease-in-out"
      >
        <div className="mb-6">
          <label
            htmlFor="title"
            className="block mb-2 text-lg font-medium text-gray-900 dark:text-gray-100"
          >
            Enter Title
          </label>
          <input
            name="title"
            onChange={onchangeHandler}
            value={formData.title}
            type="text"
            id="title"
            className="w-full p-4 text-lg border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-transparent dark:text-white dark:border-gray-600 dark:focus:ring-blue-400 dark:focus:border-blue-400 transition-all duration-300 ease-in-out"
            placeholder="Task Title"
            required
          />
        </div>

        <div className="mb-6">
          <label
            htmlFor="description"
            className="block mb-2 text-lg font-medium text-gray-900 dark:text-gray-100"
          >
            Task
          </label>
          <textarea
            onChange={onchangeHandler}
            value={formData.description}
            name="description"
            id="description"
            rows="6"
            className="w-full p-4 text-lg border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-transparent dark:text-white dark:border-gray-600 dark:focus:ring-blue-400 dark:focus:border-blue-400 transition-all duration-300 ease-in-out"
            placeholder="Write Your Task Here"
            required
          ></textarea>
        </div>

        <div className="mb-6">
          <label
            htmlFor="date"
            className="block mb-2 text-lg font-medium text-gray-900 dark:text-gray-100"
          >
            Select Date
          </label>
          <input
            name="date"
            onChange={onchangeHandler}
            value={formData.date}
            type="date"
            id="date"
            className="w-full p-4 text-lg border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-transparent dark:text-white dark:border-gray-600 dark:focus:ring-blue-400 dark:focus:border-blue-400 transition-all duration-300 ease-in-out"
            required
          />
        </div>

        <button
          type="submit"
          className="w-full px-6 py-3 text-lg border bg-zinc-600 text-white font-semibold rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300 ease-in-out hover:bg-zinc-700 dark:bg-blue-600 dark:hover:bg-blue-700 dark:border-blue-500 dark:text-white dark:focus:ring-blue-400 dark:focus:border-blue-400"
        >
          Submit
        </button>
      </form>
    </>
  );
};

export default Form;
