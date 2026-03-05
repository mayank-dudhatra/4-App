# React-4-App 🚀

A comprehensive multi-feature React application built with Vite, showcasing various API integrations and modern web development practices. This application serves as a one-stop platform for exploring food recipes, cocktail information, Harry Potter universe, and Indian banking services.

## 📋 Table of Contents

- [Features](#features)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Installation](#installation)
- [Usage](#usage)
- [API Integrations](#api-integrations)
- [Components Overview](#components-overview)
- [Scripts](#scripts)
- [Contributing](#contributing)

## ✨ Features

### 🏠 **Home Dashboard**
- Clean and intuitive landing page
- Navigation cards for each feature section
- Responsive design with attractive UI

### 🍽️ **Meals Explorer** 
- Browse delicious recipes from around the world
- View meal categories and detailed recipe information
- Direct links to original recipe sources
- Powered by TheMealDB API

### 🍹 **Cocktail Craze**
- Discover cocktail recipes and preparation methods
- View drink categories and serving suggestions
- Interactive recipe viewer with ingredients and instructions
- Integrated with TheCocktailDB API

### ⚡ **Potter Magic**
- Explore the wizarding world of Harry Potter
- Browse characters, spells, and houses
- Interactive buttons to explore different aspects
- Powered by Potter API

### 🏦 **Indian Banks Finder**
- IFSC code lookup for Indian banks
- Get detailed bank information including branch details
- Real-time search functionality
- Integrated with Indian Bank API

### 🌤️ **Weather App** (Extensible)
- Real-time weather information
- Temperature, humidity, and wind speed data
- Weather icons and descriptions
- OpenWeatherMap API integration

### 📈 **Stock Market Data** (Extensible)
- Stock price tracking for Indian markets
- Daily trading data with open, close, high, low values
- Volume information and historical data
- Alpha Vantage API integration

## 🛠️ Tech Stack

- **Frontend Framework:** React 18.3.1
- **Build Tool:** Vite 6.0.1
- **Routing:** React Router DOM 7.0.2
- **HTTP Client:** Axios 1.7.9
- **Styling:** CSS3 with component-specific stylesheets
- **Code Quality:** ESLint with React plugins
- **Type Support:** TypeScript types for React

## 📁 Project Structure

```
React-4-App/
├── public/                     # Static assets
├── src/
│   ├── assets/                # Images and static files
│   ├── Components/            # React components
│   │   ├── Cocktails/         # Cocktail feature
│   │   │   ├── Cocktails.jsx
│   │   │   └── Cocktails.css
│   │   ├── Home/              # Landing page
│   │   │   ├── Home.jsx
│   │   │   └── Home.css
│   │   ├── Indian Banks/      # Bank lookup feature
│   │   │   ├── IndianBank.jsx
│   │   │   └── IndianBanks.css
│   │   ├── Meals/             # Recipe explorer
│   │   │   ├── Meals.jsx
│   │   │   └── Meals.css
│   │   ├── Navbar/            # Navigation component
│   │   │   ├── Navbar.jsx
│   │   │   └── Navbar.css
│   │   ├── Potter/            # Harry Potter feature
│   │   │   ├── Potter.jsx
│   │   │   └── Potter.css
│   │   ├── Stocks.jsx         # Stock market component
│   │   └── Wheather.jsx       # Weather component
│   ├── App.jsx                # Main application component
│   ├── App.css                # Global styles
│   ├── index.css              # Base styles
│   └── main.jsx               # Application entry point
├── eslint.config.js           # ESLint configuration
├── index.html                 # HTML template
├── package.json               # Dependencies and scripts
├── vite.config.js             # Vite configuration
└── README.md                  # Project documentation
```

## 🚀 Installation

1. **Clone the repository:**
```bash
git clone <your-repo-url>
cd React-4-App
```

2. **Install dependencies:**
```bash
npm install
```

3. **Start the development server:**
```bash
npm run dev
```

4. **Open your browser and navigate to:**
```
http://localhost:5173
```

## 🎯 Usage

### Navigation
- Use the navigation bar to switch between different features
- Each section offers unique functionality and interactive elements

### Meals Section
- Browse through various meal categories
- Click "View Recipe" to access detailed cooking instructions
- Explore international cuisine options

### Cocktails Section  
- Discovery cocktail recipes with complete ingredient lists
- View preparation methods and serving suggestions
- Filter by drink categories

### Potter Magic
- Click different buttons to explore:
  - Characters from the Harry Potter universe
  - Magical spells and their descriptions
  - Hogwarts houses information

### Indian Banks
- Enter any valid IFSC code to get bank details
- View branch information, contact details, and addresses
- Real-time search with error handling

## 🔌 API Integrations

| Service | API | Purpose | Status |
|---------|-----|---------|--------|
| **TheMealDB** | `themealdb.com/api` | Recipe and meal information | ✅ Active |
| **TheCocktailDB** | `thecocktaildb.com/api` | Cocktail recipes and data | ✅ Active |
| **Potter API** | `potterapi-fedeperin.vercel.app` | Harry Potter universe data | ✅ Active |
| **Indian Banks API** | `bank-apis.justinclicks.com` | Bank IFSC code lookup | ✅ Active |
| **OpenWeatherMap** | `openweathermap.org/api` | Weather information | 🔧 Available |
| **Alpha Vantage** | `alphavantage.co/query` | Stock market data | 🔧 Available |

## 🧩 Components Overview

### Core Components

- **App.jsx**: Main application with routing setup
- **Navbar.jsx**: Navigation component with React Router links
- **Home.jsx**: Landing page with feature overview cards

### Feature Components

- **Meals.jsx**: Recipe browsing with TheMealDB integration
- **Cocktails.jsx**: Cocktail explorer with recipe viewing
- **Potter.jsx**: Harry Potter universe explorer
- **IndianBank.jsx**: IFSC code lookup functionality
- **Wheather.jsx**: Weather information display
- **Stocks.jsx**: Stock market data viewer

### State Management
- Uses React Hooks (`useState`, `useEffect`) for component state
- Loading states and error handling implemented
- Responsive data fetching with proper cleanup

## 📜 Scripts

```bash
# Development
npm run dev          # Start development server

# Production
npm run build        # Build for production
npm run preview      # Preview production build

# Code Quality
npm run lint         # Run ESLint checks
```

## 🎨 Styling

- **Modular CSS**: Each component has its own stylesheet
- **Responsive Design**: Mobile-first approach
- **Clean UI**: Modern and intuitive interface
- **Loading States**: Smooth user experience with loading indicators

## 🔧 Configuration Files

- **vite.config.js**: Vite build configuration
- **eslint.config.js**: Code quality and linting rules
- **package.json**: Dependencies and project metadata

## 🚧 Future Enhancements

- [ ] Enable Weather and Stock components in navigation
- [ ] Add user authentication and personalization
- [ ] Implement favorites/bookmarking functionality
- [ ] Add more API integrations (News, Sports, etc.)
- [ ] Enhanced error handling and offline support
- [ ] Progressive Web App (PWA) features
- [ ] Dark/Light theme toggle
- [ ] Search functionality across all sections

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

---

**Built with ❤️ using React + Vite**

*This application demonstrates modern React development practices, API integrations, and responsive web design principles.*
