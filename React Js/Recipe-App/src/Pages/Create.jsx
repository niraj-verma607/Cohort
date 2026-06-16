import { nanoid } from "nanoid";
import { useContext } from "react";
import { useForm } from "react-hook-form";
import { recipecontext } from "../Context/RecipeContext";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const Create = () => {
  const navigate = useNavigate();
  const { data, setData } = useContext(recipecontext);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const SubmitHandler = (recipe) => {
    recipe.id = nanoid();

    const copydata = [...data];
    copydata.push(recipe);
    setData(copydata);

    localStorage.setItem("recipes", JSON.stringify(copydata)); //set data in local storage

    toast.success("New Recipe Created!");
    reset();
    navigate("/recipes");
  };

  // Shared Tailwind classes for inputs to keep the JSX clean
  const inputStyles =
    "w-full bg-gray-800 border border-gray-600 rounded-lg px-4 py-3 text-gray-100 placeholder-gray-500 focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500 transition-colors";
  const labelStyles = "block text-sm font-medium text-gray-300 mb-1.5";

  return (
    <div className="min-h-[calc(100vh-64px)] bg-gray-800 py-10 px-4 sm:px-6 flex justify-center items-start">
      <div className="max-w-3xl w-full bg-gray-900 p-8 rounded-2xl shadow-2xl border border-gray-700">
        {/* Form Header */}
        <div className="mb-8 text-center border-b border-gray-700 pb-6">
          <h2 className="text-3xl font-extrabold text-white">
            Create a <span className="text-orange-500">New Recipe</span>
          </h2>
          <p className="text-gray-400 mt-2">
            Fill out the details below to add your culinary masterpiece.
          </p>
        </div>

        <form onSubmit={handleSubmit(SubmitHandler)} className="space-y-6">
          {/* Image URL Section */}
          <div>
            <label className={labelStyles}>Image URL</label>
            <input
              className={`${inputStyles} ${errors.image ? "border-red-500 focus:border-red-500 focus:ring-red-500" : ""}`}
              {...register("image", { required: "Image URL is required" })}
              type="url"
              placeholder="https://example.com/image.jpg"
            />
            {errors?.image && (
              <p className="mt-1.5 text-sm text-red-400 font-medium flex items-center gap-1">
                <svg
                  className="w-4 h-4"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z"
                    clipRule="evenodd"
                  />
                </svg>
                {errors.image.message}
              </p>
            )}
          </div>

          {/* Grid for Title, Chef, and Category */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className={labelStyles}>Recipe Title</label>
              <input
                className={inputStyles}
                {...register("title", { required: true })}
                type="text"
                placeholder="e.g., Spicy Garlic Pasta"
              />
            </div>

            <div>
              <label className={labelStyles}>Chef Name</label>
              <input
                className={inputStyles}
                {...register("chef", { required: true })}
                type="text"
                placeholder="e.g., Gordon Ramsay"
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

          {/* Textareas */}
          <div>
            <label className={labelStyles}>Description</label>
            <textarea
              className={inputStyles}
              rows="3"
              {...register("desc")}
              placeholder="A brief overview of what makes this recipe special..."
            ></textarea>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className={labelStyles}>Ingredients</label>
              <textarea
                className={inputStyles}
                rows="5"
                {...register("ingr")}
                placeholder="1 cup flour&#10;2 eggs&#10;1 tsp salt..."
              ></textarea>
            </div>

            <div>
              <label className={labelStyles}>Instructions</label>
              <textarea
                className={inputStyles}
                rows="5"
                {...register("inst")}
                placeholder="1. Preheat oven to 350°F.&#10;2. Mix ingredients...&#10;3. Bake for 20 mins..."
              ></textarea>
            </div>
          </div>

          {/* Submit Button */}
          <div className="pt-4">
            <button
              type="submit"
              className="w-full bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-4 rounded-lg shadow-lg transform transition-all duration-300 hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-900 focus:ring-orange-500 text-lg"
            >
              Save Recipe
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Create;
