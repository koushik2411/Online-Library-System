import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

function About() {
  return (
    <>
      <Header />

      <div className=" min-h-screen w-full flex flex-col items-center bg-zinc-300">
        <div className=" max-w-200 m-5 p-3 bg-zinc-100 rounded-lg flex flex-col gap-8">
          <h2 className=" text-lg font-semibold border-b-2 ">About</h2>

          <p>
            A React-based Online Library System that allows users to browse
            books, view book details, search and filter books by category, and
            add new books dynamically using Redux Toolkit.
          </p>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default About;
