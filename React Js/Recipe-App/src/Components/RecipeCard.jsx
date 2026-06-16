import { Link } from "react-router-dom";

const RecipeCard = ({ recipe }) => {
  const { id, image, title, desc, chef } = recipe;

  return (
    <Link
      to={`/recipes/details/${id}`}
      className="group flex flex-col w-full bg-gray-900 rounded-2xl overflow-hidden shadow-lg border border-gray-700 hover:border-orange-500 hover:shadow-orange-500/20 transition-all duration-300 hover:-translate-y-1 h-full"
    >
      {/* Image Section */}
      <div className="w-full h-48 sm:h-56 overflow-hidden relative">
        <img
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out"
          src={image}
          alt={title}
        />
      </div>

      {/* Content Section */}
      <div className="p-5 flex flex-col flex-grow">
        <h2 className="text-xl font-bold text-white mb-1 group-hover:text-orange-400 transition-colors line-clamp-1">
          {title}
        </h2>

        <small className="text-sm text-orange-400 font-medium mb-3 block">
          👨‍🍳 By {chef}
        </small>

        {/* line-clamp-2 automatically adds "..." after 2 lines */}
        <p className="text-gray-400 text-sm leading-relaxed mb-4 line-clamp-2 flex-grow">
          {desc}
        </p>

        <span className="text-orange-500 text-sm font-semibold mt-auto flex items-center">
          Read more
          <svg
            className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M14 5l7 7m0 0l-7 7m7-7H3"
            />
          </svg>
        </span>
      </div>
    </Link>
  );
};

export default RecipeCard;
