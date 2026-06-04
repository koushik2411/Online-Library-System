import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/About";
import BrowseBooks from "../pages/BrowseBooks";
import BookDetails from "../pages/BookDetails";
import AddBook from "../pages/AddBook";
import NotFound from "../pages/NotFound";

function AppRoutes() {
    return (
        <Routes>

            <Route path="/" element={<Home/>}/>

            <Route path="/about" element={<About/>}/>

            <Route path="/books" element={<BrowseBooks/>}/>

            <Route path="/books/:category" element={<BrowseBooks/>}/>

            <Route path="/book/:id" element={<BookDetails/>}/>

            <Route path="/add-book" element={<AddBook/>}/>

            <Route path="/*" element={<NotFound/>}/>

        </Routes>
    )
}

export default AppRoutes