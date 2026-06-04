import React from 'react'
import booksData from '../data/booksData'
import BookCard from '../components/BookCard'
import Header from '../components/Header'
import SearchBar from '../components/SearchBar'

function BrowseBooks({book}) {

  // Search Function

  return (
    <>
      <Header/>
      <SearchBar/>

      <main className=' w-full max-w-250 p-3 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-items-center gap-3'>
      {booksData.map((book) => (
        <BookCard key={book.id} book={book}/>
      ))}
      </main>
    </>
  )
}

export default BrowseBooks