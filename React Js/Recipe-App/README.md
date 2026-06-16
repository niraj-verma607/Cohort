# 🍳 Recipe App

A modern, responsive web application built with React and Vite that allows users to browse recipes, create new ones, and manage their favorite recipes. This project demonstrates full-stack React development with routing, state management, and form handling.

## 📋 Table of Contents

- [Project Overview](#project-overview)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Folder Structure](#folder-structure)
- [Prerequisites](#prerequisites)
- [Installation & Setup](#installation--setup)
- [How to Use](#how-to-use)
- [Available Commands](#available-commands)
- [Project Structure Details](#project-structure-details)

## 🎯 Project Overview

Recipe App is a web-based platform for discovering, creating, and managing recipes. Users can:

- Browse recipes from an API
- Search and filter recipes
- Create and store personal recipes
- Mark recipes as favorites
- View detailed recipe information

The application is built using modern React practices with component-based architecture, React Router for navigation, and Tailwind CSS for styling.

## ✨ Features

- **Recipe Gallery**: Browse recipes fetched from an external API
- **Create Recipes**: Add your own custom recipes with a user-friendly form
- **Favorites**: Save and manage your favorite recipes
- **Single Recipe View**: View detailed information about specific recipes
- **Responsive Design**: Mobile-friendly interface with Tailwind CSS
- **Navigation**: Easy navigation with responsive navbar
- **Form Validation**: React Hook Form for reliable form handling
- **Toast Notifications**: User feedback with React Toastify
- **About Page**: Learn more about the application

## 🛠 Tech Stack

- **Frontend Framework**: [React 19.1.1](https://react.dev/)
- **Build Tool**: [Vite 7.1.2](https://vitejs.dev/)
- **Routing**: [React Router DOM 7.8.2](https://reactrouter.com/)
- **Styling**: [Tailwind CSS 4.1.13](https://tailwindcss.com/)
- **Form Management**: [React Hook Form 7.62.0](https://react-hook-form.com/)
- **Notifications**: [React Toastify 11.0.5](https://fkhadra.github.io/react-toastify/introduction)
- **Unique IDs**: [nanoid 5.1.5](https://github.com/ai/nanoid)
- **Code Quality**: ESLint 9.33.0
- **Development Server**: Node.js with HMR support

## 📁 Folder Structure

```
Recipe-App/
├── public/                    # Static assets
├── src/
│   ├── Components/           # Reusable React components
│   │   ├── Navbar.jsx       # Navigation component
│   │   └── RecipeCard.jsx   # Recipe card display component
│   ├── Context/             # React Context for state management
│   │   └── RecipeContext.jsx
│   ├── Pages/               # Page components (routes)
│   │   ├── Home.jsx         # Home page
│   │   ├── About.jsx        # About page
│   │   ├── Recipes.jsx      # All recipes page
│   │   ├── ApiGallery.jsx   # API-based recipe gallery
│   │   ├── Create.jsx       # Create recipe page
│   │   ├── Fav.jsx          # Favorites page
│   │   ├── SingleRecipe.jsx # Individual recipe detail page
│   │   └── PageNotFound.jsx # 404 page
│   ├── Routes/
│   │   └── Mainroutes.jsx   # Main routing configuration
│   ├── App.jsx              # Main App component
│   ├── main.jsx             # Entry point
│   └── index.css            # Global styles
├── index.html               # HTML template
├── package.json             # Project dependencies
├── vite.config.js           # Vite configuration
├── eslint.config.js         # ESLint configuration
└── README.md                # Project documentation
```

## 🔧 Prerequisites

Before you get started, make sure you have the following installed on your system:

- **Node.js** (v16 or higher) - [Download here](https://nodejs.org/)
- **npm** (comes with Node.js) or **yarn**
- **Git** - [Download here](https://git-scm.com/)
- A text editor like [VS Code](https://code.visualstudio.com/)

**Verify installation:**

```bash
node --version    # Should show v16.0.0 or higher
npm --version     # Should show 7.0.0 or higher
git --version     # Should show git version info
```

## 📥 Installation & Setup

### Step 1: Clone the Repository

```bash
git clone https://github.com/yourusername/Recipe-App.git
cd Recipe-App
```

Replace `yourusername` with your actual GitHub username or the correct repository URL.

### Step 2: Install Dependencies

```bash
npm install
```

This command installs all required packages listed in `package.json`.

### Step 3: Start the Development Server

```bash
npm run dev
```

The application will open in your browser at `http://localhost:5173` (or the next available port). The page will hot-reload as you make changes.

### Step 4: Access the Application

Open your web browser and navigate to:

```
http://localhost:5173
```

## 🚀 How to Use

### Browsing Recipes

1. Navigate to the **Recipes** or **Gallery** page from the navbar
2. View recipes fetched from the API or stored locally
3. Click on any recipe card to view full details

### Creating a New Recipe

1. Click on the **Create** button in the navbar
2. Fill in the recipe form with:
   - Recipe name
   - Ingredients
   - Instructions
   - Cooking time
   - Difficulty level (or other relevant fields)
3. Click **Submit** to save your recipe
4. Success notification will appear

### Managing Favorites

1. Browse recipes and click the favorite/heart icon on recipe cards
2. Go to the **Favorites** page to view all saved recipes
3. Remove recipes from favorites by clicking the icon again

### About the App

- Visit the **About** page to learn more about the Recipe App and its features

### Navigation

- Use the **Navbar** at the top to navigate between different pages
- The navbar is responsive and includes a mobile menu on smaller screens

## 🎮 Available Commands

All commands are run using `npm run`:

```bash
# Development server with hot reload
npm run dev

# Production build (optimized)
npm run build

# Preview production build
npm run preview

# Lint code for errors and warnings
npm lint
```

### Command Details

| Command           | Purpose                                                                           |
| ----------------- | --------------------------------------------------------------------------------- |
| `npm run dev`     | Start local development server on http://localhost:5173 with hot module reloading |
| `npm run build`   | Create a production-ready build in the `dist/` folder                             |
| `npm run preview` | Preview the production build locally before deployment                            |
| `npm run lint`    | Check code for ESLint violations and potential issues                             |

## 📂 Project Structure Details

### Components Directory

- **Navbar.jsx**: Displays navigation menu and branding
- **RecipeCard.jsx**: Reusable component for displaying recipe information in grid/list format

### Pages Directory

Each file represents a full page/route:

- **Home.jsx**: Landing page with welcome information
- **About.jsx**: Information about the Recipe App
- **Recipes.jsx**: Displays all available recipes
- **ApiGallery.jsx**: Recipes fetched from external API
- **Create.jsx**: Form to create new recipes
- **Fav.jsx**: User's favorite recipes collection
- **SingleRecipe.jsx**: Detailed view of a single recipe
- **PageNotFound.jsx**: 404 error page for invalid routes

### Context Directory

- **RecipeContext.jsx**: React Context for managing global recipe state (favorites, all recipes, etc.)

### Routes Directory

- **Mainroutes.jsx**: Centralized routing configuration using React Router DOM

## 📖 Additional Notes

- **State Management**: Uses React Context API for global state management
- **Styling**: Tailwind CSS utility-first approach for responsive design
- **Form Handling**: React Hook Form for efficient form validation and submission
- **Notifications**: React Toastify for user feedback messages
- **Development**: Vite provides fast refresh and optimized build process

## 🤝 Contributing

Feel free to fork this project and create pull requests with improvements.

## 📄 License

This project is open source and available under the MIT License.

## 💬 Support

If you encounter any issues:

1. Check the [Issues](https://github.com/yourusername/Recipe-App/issues) page
2. Create a new issue with detailed information about the problem
3. Include steps to reproduce and your environment details

---

**Happy Cooking! 🍽️**
