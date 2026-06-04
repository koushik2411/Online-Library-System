import { createSlice } from "@reduxjs/toolkit";
import booksData from "../data/booksData";

const bookSlice = createSlice({
    name: "books",

    initialState: {
        books: booksData
    },

    reducers: {
        addBook: (state, action) => {
            state.books.push(action.payload);
        },

        deleteBook: (state, action) => {
            state.books.pop();
        },

        clearCart: (state,action) => {
            state.books.length = 0;
        }
    }
})

export const {addBook, deleteBook, clearCart} = bookSlice.actions;

export default bookSlice.reducer;