import Navbar from "./Navbar";

function Header() {
    return (
        <header className=" p-3 md:px-6 flex flex-col md:flex-row items-center gap-2 md:border-b-2">
            <div className=" w-full">
                <h1 className=" font-semibold text-xl text-center border-b-2 md:border-none md:text-start">
                    ONLINE LIBRARY SYSTEM
                </h1>
            </div>

            <Navbar/>
        </header>
    )
}

export default Header;