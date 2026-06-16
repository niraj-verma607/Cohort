import { Route, Routes } from "react-router-dom";
import Home from "../Pages/Home";
import Recipes from "../Pages/Recipes"; // This holds your user-created recipes
import ApiGallery from "../Pages/ApiGallery"; // This holds the API recipes
import About from "../Pages/About";
import Create from "../Pages/Create";
import SingleRecipe from "../Pages/SingleRecipe";
import PageNotFound from "../Pages/PageNotFound";
import Fav from "../Pages/Fav";

const Mainroutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />

      {/* Route for the API Recipes (Global) */}
      <Route path="/recipes" element={<ApiGallery />} />

      {/* Route for the User-Created Recipes (Local) */}
      <Route path="/your-recipes" element={<Recipes />} />

      {/* Detail view handles BOTH API and User recipes seamlessly! */}
      <Route path="/recipes/details/:id" element={<SingleRecipe />} />

      <Route path="/create-recipe" element={<Create />} />
      <Route path="/about" element={<About />} />
      <Route path="/fav" element={<Fav />} />
      <Route path="*" element={<PageNotFound />} />
    </Routes>
  );
};

export default Mainroutes;
