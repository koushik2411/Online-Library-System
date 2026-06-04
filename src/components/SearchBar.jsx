function SearchBar({search, setSearch}) {

    return (
        <div className=" w-full p-3 flex items-center justify-center">
            <input
                type="text"
                value={search}
                onChange={(e)=> setSearch(e.target.value)}
                placeholder="Search book by name"
                className=" border w-10/12 py-1 px-2 rounded"
            />
        </div>
    )
}

export default SearchBar