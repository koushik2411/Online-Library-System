import React, { useState } from "react";
import booksData from "../data/booksData";
import BookCard from "../components/BookCard";
import Header from "../components/Header";
import SearchBar from "../components/SearchBar";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";

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

  return (
    <>
      <Header />
      <SearchBar search={search} setSearch={setSearch} />

      {filteredBooks.length === 0 ? (
        <p className=" h-full w-full pt-10 text-center font-semibold text-red-600">No Books Found</p>
      ) : (
        <main className=" w-full max-w-250 p-3 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-items-center gap-3">
          {filteredBooks.map((book) => (
            <BookCard key={book.id} book={book} />
          ))}
        </main>
      )}
    </>
  );
}

export default BrowseBooks;
