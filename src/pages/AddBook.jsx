import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addBook } from "../redux/bookSlice";

function AddBook({ isOpen, onClose }) {
  const dispatch = useDispatch();

  const [formData, setFormData] = useState({
    title: "",
    image: "",
    category: "",
    author: "",
    publishYear: "",
    description: "",
    detailedDesc: "",
    rating: "",
  });

  const [errors, setErrors] = useState({});

  if (!isOpen) return null;

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // Form Validation
  const validateForm = () => {
    const newErrors = {};

    if (!formData.title.trim()) {
      newErrors.title = "Title is required";
    }

    if (!formData.author.trim()) {
      newErrors.author = "Author is required";
    }

    if (!formData.category.trim()) {
      newErrors.category = "Category is required";
    }

    if (!formData.image.trim()) {
      newErrors.image = "Image is required";
    }

    if (!formData.publishYear.trim()) {
      newErrors.publishYear = "Publish year is required";
    }

    if (Number(formData.rating) < 1 || Number(formData.rating) > 5) {
      newErrors.rating = "Rating must be between 1 to 5";
    }

    if (!formData.description.trim()) {
      newErrors.description = "description is required";
    }

    if (!formData.detailedDesc.trim()) {
      newErrors.detailedDesc = "Detailed description is required";
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validateForm()) return;

    dispatch(
      addBook({
        id: Date.now(),
        ...formData,
      }),
    );
    alert("Book added successfully!");

    setFormData({
      title: "",
      image: "",
      category: "",
      author: "",
      publishYear: "",
      description: "",
      detailedDesc: "",
      rating: "",
    });

    onClose();
  };

  return (
    <div className=" h-screen w-full fixed top-0 left-0 inset-0 bg-black/50 flex justify-center items-center z-20">

      <div className="bg-white h-[94%] w-[90%] max-w-2xl p-5 rounded-lg shadow-lg flex flex-col gap-3 overflow-auto scrollbar-thin scrollbar-thumb-blue-100">
        <div className=" pb-2 flex justify-between items-center border-b-2">
          <h2 className=" pl-2 text-2xl font-semibold">Add Book</h2>

          <button
            onClick={onClose}
            className=" text-white text-lg font-semibold bg-red-600 px-3 py-0.5 rounded-lg"
          >
            X
          </button>
        </div>

        <form onSubmit={handleSubmit} className=" flex flex-col gap-2">
          <input
            type="text"
            name="title"
            placeholder="Book Title"
            value={formData.title}
            onChange={handleChange}
            className=" border w-full px-2 py-1 rounded"
          />

          {errors.title && (
            <p className="text-red-500 text-sm">{errors.title}</p>
          )}

          <input
            type="text"
            name="author"
            placeholder="Author Name"
            value={formData.author}
            onChange={handleChange}
            className=" border w-full px-2 py-1 rounded"
          />

          <input
            type="text"
            name="category"
            placeholder="Category"
            value={formData.category}
            onChange={handleChange}
            className=" border w-full px-2 py-1 rounded"
          />

          <input
            type="number"
            name="publishYear"
            placeholder="Publish Year"
            value={formData.publishYear}
            onChange={handleChange}
            className=" border w-full px-2 py-1 rounded"
          />

          <input
            type="text"
            name="image"
            placeholder="Image URL"
            value={formData.image}
            onChange={handleChange}
            className=" border w-full px-2 py-1 rounded"
          />

          <input
            type="number"
            name="rating"
            placeholder="Book rating"
            value={formData.rating}
            onChange={handleChange}
            className=" border w-full px-2 py-1 rounded"
          />

          <textarea
            rows="4"
            name="description"
            placeholder="Short description of the book"
            value={formData.description}
            onChange={handleChange}
            className=" border w-full px-2 py-1 rounded resize-none"
          />

          <textarea
            rows="10"
            name="detailedDesc"
            placeholder="Detailed description of the book"
            value={formData.detailedDesc}
            onChange={handleChange}
            className=" border w-full px-2 py-1 rounded resize-none"
          />

          <button type="submit" className=" border px-2 py-1 rounded bg-linear-to-b from-blue-400 to-blue-600 text-white">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default AddBook;
