import React from "react";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div className="min-h-[calc(100vh-64px)] bg-gray-800 text-gray-100 font-sans py-12 px-4 sm:px-6 lg:px-8 flex flex-col items-center">
      <div className="max-w-4xl w-full bg-gray-900 rounded-3xl shadow-2xl overflow-hidden border border-gray-700">
        {/* Header Section */}
        <div className="bg-gray-700 px-8 py-10 text-center border-b border-gray-600">
          <h1 className="text-3xl md:text-5xl font-extrabold text-white tracking-tight mb-4">
            About <span className="text-orange-500">RecipeApp</span>
          </h1>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Your ultimate digital kitchen companion, designed to make cooking,
            organizing, and sharing meals an effortless experience.
          </p>
        </div>

        {/* Content Section */}
        <div className="px-8 py-10 md:px-12 md:py-12 space-y-12">
          {/* Mission */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4 border-l-4 border-orange-500 pl-4">
              Our Mission
            </h2>
            <p className="text-gray-300 leading-relaxed text-lg">
              We believe that cooking shouldn't be a chore, but a creative
              outlet. Whether you're a seasoned chef or a beginner trying to
              boil water without burning it, this platform is built to help you
              discover new cuisines, safely store your secret family formulas,
              and easily access your favorite dishes anytime, anywhere.
            </p>
          </section>

          {/* Technology / Developer Section */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4 border-l-4 border-orange-500 pl-4">
              The Technology
            </h2>
            <p className="text-gray-300 leading-relaxed text-lg mb-4">
              This application was designed and developed by Niraj Kumar Verma.
              It is built as a modern, responsive single-page application
              focused on high performance and a seamless user interface.
            </p>
            <p className="text-gray-300 leading-relaxed text-lg">
              Under the hood, it leverages the power of the React.js paired with Tailwind CSS to
              deliver a dynamic, beautifully styled frontend experience.
            </p>
          </section>

          {/* Call to Action */}
          <div className="text-center pt-8 border-t border-gray-700">
            <h3 className="text-xl font-medium text-white mb-6">
              Ready to get cooking?
            </h3>
            <Link
              to="/recipes"
              className="inline-block bg-orange-500 text-white px-8 py-3 rounded-lg font-semibold shadow-lg hover:bg-orange-600 hover:-translate-y-1 transition-all duration-300"
            >
              Start Exploring Recipes
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
