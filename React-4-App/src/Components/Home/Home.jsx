import React from "react";
import "./Home.css";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="home-container">
      
      <section className="meal-section">
        <div className="meal-content">
          <div className="text">
            <h2>Food Taste</h2>
            <p>The tasty food of your choice</p>
            <Link to="/meals">
              <button>View Menu</button>
            </Link>
          </div>
          <div className="image">
            <img src="https://th.bing.com/th/id/R.522343a634b19609e1a7aa4c07c1f06f?rik=%2frWHbvZNYH3sEw&riu=http%3a%2f%2fwww.pngmart.com%2ffiles%2f7%2fFresh-Healthy-Food-Background-PNG.png&ehk=RMFfsyzz4JN01DHevfe6EI9g0n8ghU7z3Eh5XHbJeUc%3d&risl=&pid=ImgRaw&r=0" alt="Meal" />
          </div>
        </div>
      </section>

      
      <section className="cocktail-section">
        <div className="cocktail-content">
          <div className="image" id="cock-img">
            <img  src="https://pngimg.com/uploads/cocktail/cocktail_PNG33.png" alt="Cocktail" />
          </div>
          <div className="text">
            <h2>Cocktail Craze</h2>
            <p>Refreshing drinks to enjoy</p>
            <Link to="/cocktails">
              <button>View Cocktails</button>
            </Link>
          </div>
        </div>
      </section>

      
      <section className="potter-section">
        <div className="potter-content">
          <div className="text">
            <h2>Potter Magic</h2>
            <p>Explore the world of magic and wonder</p>
            <Link to="/potter">
              <button>Learn More</button>
            </Link>
          </div>
          <div className="image">
            <img src="https://png.pngtree.com/png-vector/20240724/ourmid/pngtree-harry-potter-a-stack-of-books-png-image_12786716.png" alt="Potter" />
          </div>
        </div>
      </section>

      
      <section className="indian-bank-section">
        <div className="bank-content">
          <div className="image">
            <img src="https://png.pngtree.com/png-vector/20241211/ourmid/pngtree-iconic-bank-building-with-coins-and-card-png-image_14675276.png" alt="Indian Banks" />
          </div>
          <div className="text">
            <h2>Indian Banks</h2>
            <p>Find the best Indian banks and services</p>
            <Link to="/indianbanks">
              <button>Explore Banks</button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
