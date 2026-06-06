import React from "react";
import { BsCalendar } from "react-icons/bs";
import { LuNotebookPen } from "react-icons/lu";
import { Link } from "react-router-dom";

function BookCard({ book }) {
  return (
    <Link to={`/book/${book.id}`}>
      <div className=" h-full w-full p-3 pb-5 flex flex-col items-center justify-between gap-3 rounded-lg hover:scale-[1.02] hover:shadow-lg transition bg-linear-to-b from-white to-blue-100 hover:bg-linear-to-b hover:from-blue-50 hover:to-blue-200">
        <img 
          src={book.image}
          alt={book.title}
          className=" h-100 rounded"
        />

        <h2 className=" text-lg font-semibold text-center">{book.title}</h2>

        <div className=" w-full flex justify-between text-sm font-semibold">
          <h3 className=" flex items-center gap-2">
            <LuNotebookPen/>
            {book.author}
          </h3>

          <h3 className=" flex items-center gap-2">
            <BsCalendar/>
            {book.publishYear}
          </h3>
        </div>

        <p className=" text-justify">{book.description}</p>

        <button
          className=" py-1 px-2 rounded bg-linear-to-b from-blue-400 to-blue-500 text-white"
        >
            View details
        </button>
      </div>
    </Link>
  );
}

export default BookCard;
