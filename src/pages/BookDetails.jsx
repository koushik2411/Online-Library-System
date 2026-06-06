import React from "react";
import { useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import Header from "../components/Header";
import { BsCalendarDateFill } from "react-icons/bs";
import { BiSolidCategory } from "react-icons/bi";
import { LuNotebookPen } from "react-icons/lu";
import { FaStar } from "react-icons/fa6";

function BookDetails() {
  const { id } = useParams();

  const books = useSelector((state) => state.books.books);

  // Find book by id
  const book = books.find((book) => book.id === Number(id));

  // In case of no match found
  if (!book) {
    return (
      <>
        <Header />

        {/* In case of no matching book id */}
        <div className=" h-160 flex flex-col justify-center items-center gap-3">
          <h2 className=" font-semibold text-2xl text-red-600">
            Book Not Found
          </h2>

          <Link to="/books">
            <button className=" py-1 px-3 border rounded bg-slate-700 text-white cursor-pointer">
              Back to Browse Books
            </button>
          </Link>
        </div>
      </>
    );
  }

  return (
    <div className=" w-full min-h-screen flex flex-col items-center justify-center bg-zinc-300">

      <div className=" max-w-300 p-3 md:rounded-lg md:shadow-xl flex flex-col md:flex-row items-center gap-3 lg:gap-5 bg-linear-to-b from-blue-50 to-blue-100">

        <img 
          src={book.image}
          alt={book.title}
          className=" w-[35%] rounded"
        />

        <div className=" w-full p-3 flex flex-col gap-5 items-center">
          <h2 className=" text-2xl font-bold">{book.title}</h2>

          <h3 className=" flex items-center gap-2">
            <LuNotebookPen/>
            <b>Author:</b> {book.author}
          </h3>

          <div className=" pb-3 grid grid-cols-2 md:grid-cols-3 justify-items-center gap-8 text-sm border-b-2 border-gray-300">
            <h3 className=" flex items-center gap-2">
              <BiSolidCategory/>
              <b>Category:</b> {book.category}
            </h3>

            <h3 className=" flex items-center gap-2">
              <BsCalendarDateFill/>
              <b>Publish year:</b> {book.publishYear}
            </h3>

            <h3 className=" col-span-2 md:col-span-1 flex items-center gap-2">
              <FaStar/>
              <b>Rating:</b> {book.rating}
            </h3>
          </div>

          <p className=" text-justify">{book.detailedDesc}</p>

          <Link to="/books">
            <button className=" mt-3 py-1 px-3 rounded bg-linear-to-b from-blue-400 to-blue-500 text-white">
              Back to Browse Books
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default BookDetails;
