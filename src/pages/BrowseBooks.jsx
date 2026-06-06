import React, { useState } from "react";
import booksData from "../data/booksData";
import BookCard from "../components/BookCard";
import Header from "../components/Header";
import SearchBar from "../components/SearchBar";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import FloatingBtn from "../components/FloatingBtn";
import AddBook from "./AddBook";

function BrowseBooks() {
  const { category } = useParams();

  const books = useSelector((state) => state.books.books);

  // Search Function
  const [search, setSearch] = useState("");

  let filteredBooks = books;

  filteredBooks = filteredBooks.filter((book) =>
    book.title.toLowerCase().includes(search.toLowerCase()),
  );

  // Category Filter
  if (category) {
    filteredBooks = filteredBooks.filter(
      (book) => book.category.toLowerCase() === category.toLowerCase(),
    );
  }

  // Add Book Modal
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <Header />

      <FloatingBtn onClick={() => setShowModal(true)} />
      <AddBook isOpen={showModal} onClose={() => setShowModal(false)} />

      <SearchBar search={search} setSearch={setSearch} />

      <div className=" w-full p-2 flex flex-col justify-center items-center">

        <div className=" w-full max-w-300 flex items-center justify-between border-b-2">

          <h2 className=" text-lg font-semibold">BOOKS</h2>

          <h3>
            Total books: <span className=" font-semibold">{filteredBooks.length}</span>
          </h3>
        </div>

        <div className=" w-full flex justify-center items-center">
          {filteredBooks.length === 0 ? (
            <p className=" h-full w-full pt-10 text-center font-semibold text-red-600">
              No Books Found
            </p>
          ) : (
            <main className=" w-full max-w-300 p-3 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-items-center gap-3">
              {filteredBooks.map((book) => (
                <BookCard key={book.id} book={book} />
              ))}
            </main>
          )}
        </div>
      </div>
    </>
  );
}

export default BrowseBooks;
