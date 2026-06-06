import { useSelector } from "react-redux";
import CategoryList from "../components/CategoryList";
import Header from "../components/Header";
import BookCard from "../components/BookCard";

function Home() {
  const books = useSelector((state) => state.books.books);

  // Popular Books
  const popularBooks = books.slice(0, 3);

  return (
    <>
      <Header />

      <section className=" w-full flex flex-col items-center">
        <div className=" w-full max-w-300 flex flex-col items-center justify-center">
          <h1 className=" m-6 p-1 text-xl font-bold text-center">
            Hello, Welcome to Online Library.
          </h1>

          <CategoryList />

          <section className=" w-full max-w-300 p-2 pt-5 flex flex-col gap-3">
            <h2 className=" text-xl font-semibold border-b">Popular Books</h2>

            <div className=" p-3 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-items-center gap-3">
              {popularBooks.map((book) => (
                <BookCard key={book.id} book={book} />
              ))}
            </div>
          </section>
        </div>
      </section>
    </>
  );
}

export default Home;
