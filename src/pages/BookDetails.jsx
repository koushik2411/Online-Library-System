import React from 'react'
import { useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom'
import Header from '../components/Header';

function BookDetails() {

  const {id} = useParams();

  const books = useSelector(
    (state) => state.books.books
  );

  // Find book by id
  const book = books.find(
    (book) => book.id === Number(id)
  );

  // In case of no match found
  if(!book) {
    return (
      <>
        <Header/>
        <div className=' h-160 flex flex-col justify-center items-center gap-3'>
          <h2 className=' font-semibold text-2xl text-red-600'>
            Book Not Found
          </h2>

          <Link to="/books">
            <button className=' py-1 px-3 border rounded'>
              Back to Browse Books
            </button>
          </Link>
        </div>
      </>
    );
  }

  return (
    <div className=' p-3'>
      <img/>

      <div className=' w-full flex flex-col gap-3 items-center'>
        <h2 className=' text-2xl font-bold'>
          {book.title}
        </h2>

        <h3>
          <b>Author:</b> {book.author}
        </h3>
        
        <div className=' pb-3 grid grid-cols-2 justify-items-center gap-4 border-b-2 border-gray-400'>
          <h3>
            <b>Category:</b> {book.category}
          </h3>
          
          <h3>
            <b>Publish year:</b> {book.publishYear}
          </h3>
          
          <h3 className=' col-span-2 md:col-span-1'>
            <b>Rating:</b> {book.rating}
          </h3>
        </div>

        <p className=' text-justify'>
          {book.detailedDesc}
        </p>

        <Link to="/books">
          <button className=' py-1 px-3 border rounded'>
            Back to Browse Books
          </button>
        </Link>
      </div>
    </div>
  )
}

export default BookDetails