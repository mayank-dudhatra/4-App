// import React, { useEffect, useState } from "react";
// import "./Meals.css";

// function Meals() {
//   const [meals, setMeals] = useState([]);
//   const [loading, setLoading] = useState(true); 
//   const apiURL = "https://www.themealdb.com/api/json/v1/1/search.php?s=";

//   useEffect(() => {
//     fetch(apiURL)
//       .then((response) => response.json())
//       .then((data) => { setMeals(data.meals || []);
//          setLoading(false)
//   })
//       .catch((error) => {console.error("Error fetching meals:", error)
//         setLoading(false);
//   });
//   }, []);

//   return (
//     <div className="meal-container">
//       <h1 className="meal-title">Delicious Meals</h1>
//       {loading ? (
//         <div className="loading-spinner"></div> 
//       ) : (
      
//       <div className="meal-grid">
//         {meals.map((meal) => (
//           <div className="meal-card" key={meal.idMeal}>
//             <img
//               src={meal.strMealThumb}
//               alt={meal.strMeal}
//               className="meal-image"
//             />
//             <h2 className="meal-name">{meal.strMeal}</h2>
//             <p className="meal-category">Category: {meal.strCategory}</p>
//             <a
//               href={meal.strSource || "#"}
//               target="_blank"
//               rel="noopener noreferrer"
//               className="meal-button"
//             >
//               View Recipe
//             </a>
//           </div>
//         ))}
//       </div>
//       )}
//     </div>
//   );
// }

// export default Meals;







import React, { useEffect, useState } from "react";
import "./Meals.css";

function Meals() {
  const [meals, setMeals] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState(""); 
  const apiURL = "https://www.themealdb.com/api/json/v1/1/search.php?s=";

  useEffect(() => {
    fetch(apiURL + searchTerm)
      .then((response) => response.json())
      .then((data) => {
        setMeals(data.meals || []);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching meals:", error);
        setLoading(false);
      });
  }, [searchTerm]);

  return (
    <div className="meal-container">
      <h1 className="meal-title">Delicious Meals</h1>

    
      <div className="search-bar">
        <input
          type="text"
          placeholder="Search for meals..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      
      {loading ? (
        <div className="loading-spinner"></div>
      ) : (
        <div className="meal-grid">
          {meals.map((meal) => (
            <div className="meal-card" key={meal.idMeal}>
              <img
                src={meal.strMealThumb}
                alt={meal.strMeal}
                className="meal-image"
              />
              <h2 className="meal-name">{meal.strMeal}</h2>
              <p className="meal-category">Category: {meal.strCategory}</p>
              <a
                href={meal.strSource || "#"}
                target="_blank"
                rel="noopener noreferrer"
                className="meal-button"
              >
                View Recipe
              </a>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Meals;






















// import React, { useEffect, useState } from "react";
// import "./Meals.css";

// function Meals() {
//   const [meals, setMeals] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [searchTerm, setSearchTerm] = useState(""); // For searching meals by name
//   const [category, setCategory] = useState(""); // For filtering by category
//   const [ingredient, setIngredient] = useState(""); // For filtering by ingredient
//   const [area, setArea] = useState(""); // For filtering by area

//   const apiURL = "https://www.themealdb.com/api/json/v1/1/search.php?s=";

//   useEffect(() => {
//     fetch(apiURL)
//       .then((response) => response.json())
//       .then((data) => {
//         setMeals(data.meals || []);
//         setLoading(false);
//       })
//       .catch((error) => {
//         console.error("Error fetching meals:", error);
//         setLoading(false);
//       });
//   }, []);

//   const handleSearchChange = (e) => setSearchTerm(e.target.value);
//   const handleCategoryChange = (e) => setCategory(e.target.value);
//   const handleIngredientChange = (e) => setIngredient(e.target.value);
//   const handleAreaChange = (e) => setArea(e.target.value);

//   // Filter meals based on search term, category, ingredient, and area
//   const filteredMeals = meals.filter((meal) => {
//     const matchesSearch = meal.strMeal.toLowerCase().includes(searchTerm.toLowerCase());
//     const matchesCategory = category ? meal.strCategory === category : true;
//     const matchesIngredient = ingredient ? meal.strIngredient1 === ingredient : true;
//     const matchesArea = area ? meal.strArea === area : true;

//     return matchesSearch && matchesCategory && matchesIngredient && matchesArea;
//   });

//   return (
//     <div className="meal-container">
//       <h1 className="meal-title">Delicious Meals</h1>

//       {/* Search Bar */}
//       <div className="search-bar">
//         <input
//           type="text"
//           placeholder="Search recipes..."
//           value={searchTerm}
//           onChange={handleSearchChange}
//         />
//       </div>

//       {/* Category Filter */}
//       <div className="filter">
//         <label>Category: </label>
//         <select value={category} onChange={handleCategoryChange}>
//           <option value="">All Categories</option>
//           <option value="Beef">Beef</option>
//           <option value="Chicken">Chicken</option>
//           <option value="Vegetarian">Vegetarian</option>
//           <option value="Seafood">Seafood</option>
//         </select>
//       </div>

//       {/* Ingredients Filter */}
//       <div className="filter">
//         <label>Ingredient: </label>
//         <select value={ingredient} onChange={handleIngredientChange}>
//           <option value="">All Ingredients</option>
//           <option value="Chicken">Chicken</option>
//           <option value="Beef">Beef</option>
//           <option value="Egg">Egg</option>
//           <option value="Lemon">Lemon</option>
//         </select>
//       </div>

//       {/* Area Filter */}
//       <div className="filter">
//         <label>Area: </label>
//         <select value={area} onChange={handleAreaChange}>
//           <option value="">All Areas</option>
//           <option value="American">American</option>
//           <option value="Italian">Italian</option>
//           <option value="Indian">Indian</option>
//           <option value="Chinese">Chinese</option>
//         </select>
//       </div>

//       {loading ? (
//         <div className="loading-spinner"></div>
//       ) : (
//         <div className="meal-grid">
//           {filteredMeals.length > 0 ? (
//             filteredMeals.map((meal) => (
//               <div className="meal-card" key={meal.idMeal}>
//                 <img
//                   src={meal.strMealThumb}
//                   alt={meal.strMeal}
//                   className="meal-image"
//                 />
//                 <h2 className="meal-name">{meal.strMeal}</h2>
//                 <p className="meal-category">Category: {meal.strCategory}</p>
//                 <a
//                   href={meal.strSource || "#"}
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="meal-button"
//                 >
//                   View Recipe
//                 </a>
//               </div>
//             ))
//           ) : (
//             <p>No meals found based on your filters.</p>
//           )}
//         </div>
//       )}
//     </div>
//   );
// }

// export default Meals;
