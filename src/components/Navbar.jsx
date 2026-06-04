import { NavLink } from "react-router-dom";

function Navbar() {
    return (
        <nav className=" flex gap-5 items-center">
            <NavLink to="/">Home</NavLink>
            <NavLink to="/about">About</NavLink>
            <NavLink to="/cart">Cart</NavLink>
        </nav>
    )
}

export default Navbar;