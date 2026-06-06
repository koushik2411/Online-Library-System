function SearchBar({search, setSearch}) {

    return (
        <div className=" w-full max-w-300 my-5 p-3 flex items-center justify-center bg-zinc-100 rounded-lg">
            <input
                type="text"
                value={search}
                onChange={(e)=> setSearch(e.target.value)}
                placeholder="Search book by name"
                className=" bg-blue-100/50 w-9/12 py-2 px-4 rounded outline-0 focus:bg-emerald-100"
            />
        </div>
    )
}

export default SearchBar