// import React, { useEffect, useState } from 'react'
// import './Cocktails.css'

// function Cocktails() {
//   const [cocktails, setCocktails] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const APIUrl = "https://www.thecocktaildb.com/api/json/v1/1/search.php?f=a"



//   useEffect(() => {
//      fetch(APIUrl)
//      .then((response) => response.json())
//      .then((data) => {
//       console.log(data)
//       setCocktails(data.drinks || []);
//       setLoading(false);
//      })
//      .catch((error) => {
//       console.error("Error to fetch Cocktails", error);
//       setLoading(false);
//      });
//   },[]);

//   return (
//     <>
//      <div className="cocktail-container">
//       <h1 className='cocktail-title'>Cocktails</h1>

//       {loading ? (
//         <div className="loading-spinner"></div>
//       ) : (
//         <div className="cocktail-grid">
//           {cocktails.map((cocktail) => (
//             <div className="cocktail-card" key={cocktail.iddrink} >
//             <img src={cocktail.strDrinkThumb} alt={cocktail.strDrink} 
//             className='cocktail-image'
//             />
//             <h2 className='cocktail-name'>{cocktail.strDrink}</h2>
//             <p className="cocktail-category">{cocktail.strCategory}</p>
//             <p className="cocktail-glass">Served in: {cocktail.strGlass}</p>
//             <button
//                 className="recipe-button"
//                 onClick={() => showRecipe(cocktail)}
//               >
//                 View Recipe
//               </button>
//           </div>
//           ))}
//         </div>
//       )}
//      </div>
//     </>
//   )
// }

// export default Cocktails














import React, { useEffect, useState } from 'react';
import './Cocktails.css';

function Cocktails() {
  const [cocktails, setCocktails] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedCocktail, setSelectedCocktail] = useState(null);
  const APIUrl = "https://www.thecocktaildb.com/api/json/v1/1/search.php?f=a";

  const GetIngredient = (cocktail) => {
     const IngredientList = [];


    for(let i = 0; i<=15; i++){
      const ingredient = cocktail[`strIngredients${i}`];
      const measure = cocktail[`strMeasure${i}`];

      if(ingredient){
      IngredientList.push( ingredient);
      }
    }
    return IngredientList
  }




  useEffect(() => {
    fetch(APIUrl + searchTerm)
      .then((response) => response.json())
      .then((data) => {
        setCocktails(data.drinks || []);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching Cocktails", error);
        setLoading(false);
      });
  }, [searchTerm]);

  const showRecipe = (cocktail) => {
    setSelectedCocktail(cocktail);
  };

  const hideRecipe = () => {
    setSelectedCocktail(null);
  };

  return (
    <div className="cocktail-container">
      <div className="imageb"></div>
      <h1 className="cocktail-title">Cocktails</h1>

      <div className="search-bar">
        <input type="text" 
         placeholder="Search for cocktails..."
         value={searchTerm}
         onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      {loading ? (
        <div className="loading-spinner"></div>
      ) : (
        <div className="cocktail-grid">
          {cocktails.map((cocktail) => (
            <div className="cocktail-card" key={cocktail.idDrink}>
              <img
                src={cocktail.strDrinkThumb}
                alt={cocktail.strDrink}
                className="cocktail-image"
              />
              <h2 className="cocktail-name">{cocktail.strDrink}</h2>
              <p className="cocktail-category">{cocktail.strCategory}</p>
              <p className="cocktail-glass">Served in: {cocktail.strGlass}</p>
              <button
                className="recipe-button"
                onClick={() => showRecipe(cocktail)}
              >
                View Recipe
              </button>
            </div>
          ))}
        </div>
      )}

      {selectedCocktail && (
        <div className="recipe-modal">
          <div className="recipe-content">

            <button className="close-button" onClick={hideRecipe}>X</button>

            <h2>{selectedCocktail.strDrink} Recipe</h2>
            <p><strong>Category:</strong> {selectedCocktail.strCategory}</p>
            <p><strong>Glass:</strong> {selectedCocktail.strGlass}</p>

            <h3>Ingredients:</h3>
            <ul>
              <p>{selectedCocktail.strMeasure1} {selectedCocktail.strIngredient1}</p>
              <p>{selectedCocktail.strMeasure2} {selectedCocktail.strIngredient2}</p>
              <p>{selectedCocktail.strMeasure3} {selectedCocktail.strIngredient3}</p>
               {GetIngredient(selectedCocktail).map((item, index) => (
          <li key={index}>{item}</li>
        ))}
             
            </ul>

            <h3>Instructions:</h3>
            <p>{selectedCocktail.strInstructions}</p>

          </div>
        </div>
      )}
    </div>
  );
}

export default Cocktails;
