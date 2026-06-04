import { Link } from "react-router-dom";

function CategoryList() {

    const categories = ["Children", "Mystery", "Sci-Fi", "Self-Help"];

    return (
        <div className=" w-full p-2 flex flex-col gap-1">
            <h2 className=" font-semibold text-lg border-b ">
                Categories
            </h2>

            {/* Category List */}
            <div className=" grid grid-cols-2 md:grid-cols-4 gap-4">
                {categories.map((category) => (
                    <Link
                      key={category}
                      to={`/books/${category}`}
                      className="bg-blue-100 px-4 py-8 rounded text-center"
                    >
                        {category}
                    </Link>
                ))}
            </div>
        </div>
    )
}

export default CategoryList