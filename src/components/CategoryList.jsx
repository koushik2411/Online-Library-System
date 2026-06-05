import { Link } from "react-router-dom";

function CategoryList() {

    const categories = ["Children", "Mystery", "Sci-Fi", "Self-Help"];

    return (
        <div className=" w-full p-2 flex flex-col gap-3">
            <h2 className=" font-semibold text-lg border-b ">
                Categories
            </h2>

            {/* Category List */}
            <div className=" p-3 grid grid-cols-2 md:grid-cols-4 gap-4">
                {categories.map((category) => (
                    <Link
                      key={category}
                      to={`/books/${category}`}
                      className="bg-linear-to-b from-blue-50 to-blue-100 px-4 py-8 h-40 flex items-center justify-center rounded hover:scale-[1.04] hover:shadow-lg hover:bg-linear-to-b hover:from-blue-100 hover:to-blue-200 transition-all"
                    >
                        {category}
                    </Link>
                ))}
            </div>
        </div>
    )
}

export default CategoryList