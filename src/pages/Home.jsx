import Header from "../components/Header"
import SearchBar from "../components/SearchBar"

function Home() {
    return (
        <section className=" w-full flex flex-col">
            <Header/>

            <h1 className=" m-6 p-1 text-xl font-bold text-center border-b-2 border-gray-400">
                Hello, Welcome to Online Library.
            </h1>

            <SearchBar/>

        </section>
    )
}

export default Home