import React from "react";
import { BsCalendar } from "react-icons/bs";
import { LuNotebookPen } from "react-icons/lu";
import { Link } from "react-router-dom";

function BookCard({ book }) {
  return (
    <Link to="/book/:id">
      <div className=" border h-full w-full p-2 flex flex-col items-center justify-center gap-3 rounded hover:scale-[1.02] transition">
        <img />

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
          className=" border py-1 px-2 rounded"
        >
            Add to cart
        </button>
      </div>
    </Link>
  );
}

export default BookCard;
