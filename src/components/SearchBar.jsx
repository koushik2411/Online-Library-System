import { useState } from "react"

function SearchBar() {

    const [search, setSearch] = useState("");

    return (
        <div className=" p-3">
            <input
                type="text"
                value={search}
                onChange={(e)=> setSearch(e.target.value)}
                placeholder="Search book by name"
                className=" border py-1 px-2 rounded"
            />
        </div>
    )
}

export default SearchBar