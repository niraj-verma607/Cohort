import { useContext, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { recipecontext } from "../Context/RecipeContext";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";

const SingleRecipe = () => {
  const navigate = useNavigate();
  const params = useParams();
  const { data, setData, apiData } = useContext(recipecontext);

  // Look in local data first. If not found, look in the API data!
  const recipe =
    data.find((r) => r.id == params.id) ||
    apiData.find((r) => r.id == params.id);

  // Moved useState to the top level (React Hook rules require hooks before early returns)
  const [favorite, setfavorite] = useState(
    JSON.parse(localStorage.getItem("fav")) || [],
  );

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      title: recipe?.title,
      chef: recipe?.chef,
      image: recipe?.image,
      inst: recipe?.inst,
      desc: recipe?.desc,
      ingr: recipe?.ingr,
      category: recipe?.category,
    },
  });

  const UpdateHandler = (updatedRecipe) => {
    const index = data.findIndex((r) => params.id == r.id);
    const copydata = [...data];
    // Merge the updated fields while keeping the original ID
    copydata[index] = { ...copydata[index], ...updatedRecipe };

    setData(copydata);
    localStorage.setItem("recipes", JSON.stringify(copydata));
    toast.success("Recipe Updated Successfully!");
  };

  const deleteHandler = () => {
    // 1. Delete from main recipes
    const filterdata = data.filter((r) => r.id != params.id);
    setData(filterdata);
    localStorage.setItem("recipes", JSON.stringify(filterdata));

    // 2. Remove from favorites if it exists there
    const filterfav = favorite.filter((f) => f.id != recipe?.id);
    setfavorite(filterfav);
    localStorage.setItem("fav", JSON.stringify(filterfav));

    toast.success("Recipe Deleted");
    navigate("/recipes");
  };

  const favHandler = () => {
    const copyfav = [...favorite];
    copyfav.push(recipe);
    setfavorite(copyfav);
    localStorage.setItem("fav", JSON.stringify(copyfav));
    toast.success("Added to Favorites! ❤️");
  };

  const UnfavHandler = () => {
    const filterfav = favorite.filter((f) => f.id != recipe?.id);
    setfavorite(filterfav);
    localStorage.setItem("fav", JSON.stringify(filterfav));
    toast.info("Removed from Favorites");
  };

  // Reusable Tailwind classes for the edit form inputs
  const inputStyles =
    "w-full bg-gray-800 border border-gray-600 rounded-lg px-4 py-3 text-gray-100 placeholder-gray-500 focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500 transition-colors";
  const labelStyles = "block text-sm font-medium text-gray-300 mb-1.5 mt-4";

  // Check if current recipe is favorited
  const isFav = favorite.find((f) => f.id == recipe?.id);

  return recipe ? (
    <div className="min-h-[calc(100vh-64px)] bg-gray-800 py-10 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* ==========================================
            LEFT SIDE: RECIPE DETAILS (VIEW MODE)
        ========================================== */}
        <div className="bg-gray-900 rounded-3xl p-6 sm:p-10 shadow-2xl border border-gray-700 h-fit relative">
          {/* Favorite Button (Heart Icon) */}
          <button
            onClick={isFav ? UnfavHandler : favHandler}
            className="absolute top-8 right-8 p-3 bg-gray-800/80 backdrop-blur-sm rounded-full hover:scale-110 transition-transform shadow-lg z-10"
            title={isFav ? "Remove from favorites" : "Add to favorites"}
          >
            <svg
              className={`w-8 h-8 transition-colors ${isFav ? "text-red-500 fill-current" : "text-gray-400"}`}
              fill={isFav ? "currentColor" : "none"}
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
              />
            </svg>
          </button>

          {/* Recipe Image */}
          <div className="w-full h-64 sm:h-80 md:h-96 rounded-2xl overflow-hidden mb-8 shadow-inner">
            <img
              className="w-full h-full object-cover"
              src={recipe.image}
              alt={recipe.title}
            />
          </div>

          <h1 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight mb-2 pr-16">
            {recipe.title}
          </h1>
          <p className="text-xl text-orange-400 font-medium mb-6 flex items-center gap-2">
            👨‍🍳 By {recipe.chef}
            <span className="bg-gray-700 text-gray-300 text-sm px-3 py-1 rounded-full ml-auto uppercase tracking-wider">
              {recipe.category || "Uncategorized"}
            </span>
          </p>

          <p className="text-gray-300 text-lg leading-relaxed mb-8 border-l-4 border-orange-500 pl-4 italic">
            {recipe.desc}
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8 border-t border-gray-700 pt-8">
            <div>
              <h3 className="text-2xl font-bold text-white mb-4">
                Ingredients
              </h3>
              {/* whitespace-pre-wrap ensures new lines from the textarea display properly */}
              <p className="text-gray-400 whitespace-pre-wrap leading-loose">
                {recipe.ingr}
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-white mb-4">
                Instructions
              </h3>
              <p className="text-gray-400 whitespace-pre-wrap leading-loose">
                {recipe.inst}
              </p>
            </div>
          </div>
        </div>

        {/* ==========================================
            RIGHT SIDE: EDIT RECIPE FORM
        ========================================== */}
        <div className="bg-gray-900 rounded-3xl p-6 sm:p-10 shadow-xl border border-gray-700 h-fit">
          <h2 className="text-2xl font-bold text-white mb-6 border-b border-gray-700 pb-4">
            Edit <span className="text-orange-500">Recipe</span>
          </h2>

          <form onSubmit={handleSubmit(UpdateHandler)} className="space-y-4">
            <div>
              <label className={labelStyles}>Image URL</label>
              <input
                className={`${inputStyles} ${errors.image ? "border-red-500" : ""}`}
                {...register("image", { required: "Image URL is required" })}
                type="url"
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className={labelStyles}>Title</label>
                <input
                  className={inputStyles}
                  {...register("title")}
                  type="text"
                />
              </div>
              <div>
                <label className={labelStyles}>Chef</label>
                <input
                  className={inputStyles}
                  {...register("chef")}
                  type="text"
                />
              </div>
            </div>

            <div>
              <label className={labelStyles}>Category</label>
              <select className={inputStyles} {...register("category")}>
                <option value="breakfast">Breakfast</option>
                <option value="lunch">Lunch</option>
                <option value="super">Supper</option>
                <option value="dinner">Dinner</option>
                <option value="dessert">Dessert</option>
              </select>
            </div>

            <div>
              <label className={labelStyles}>Description</label>
              <textarea
                className={inputStyles}
                rows="2"
                {...register("desc")}
              ></textarea>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className={labelStyles}>Ingredients</label>
                <textarea
                  className={inputStyles}
                  rows="4"
                  {...register("ingr")}
                ></textarea>
              </div>
              <div>
                <label className={labelStyles}>Instructions</label>
                <textarea
                  className={inputStyles}
                  rows="4"
                  {...register("inst")}
                ></textarea>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-6">
              <button
                type="submit"
                className="flex-1 bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-4 rounded-lg shadow-lg transition-all duration-300"
              >
                Save Changes
              </button>

              {/* Added type="button" here so it doesn't submit the form! */}
              <button
                type="button"
                onClick={deleteHandler}
                className="flex-1 bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-4 rounded-lg shadow-lg transition-all duration-300"
              >
                Delete Recipe
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  ) : (
    /* Clean Loading State */
    <div className="min-h-[calc(100vh-64px)] bg-gray-800 flex items-center justify-center">
      <div className="text-center">
        <div className="text-6xl animate-bounce mb-4">🍳</div>
        <h2 className="text-2xl font-bold text-white">
          Cooking up your recipe...
        </h2>
      </div>
    </div>
  );
};

export default SingleRecipe;
