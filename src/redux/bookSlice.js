import { createSlice } from "@reduxjs/toolkit";
import booksData from "../data/booksData";

const bookSlice = createSlice({
    name: "books",

    initialState: {
        books: booksData
    },

    reducers: {
        addBook: (state, action) => {
            state.books.unshift(action.payload);
        },
    }
})

export const {addBook} = bookSlice.actions;

export default bookSlice.reducer;