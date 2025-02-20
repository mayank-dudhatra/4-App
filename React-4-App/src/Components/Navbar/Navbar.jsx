// import React from 'react'
// import { NavLink } from 'react-router-dom';
// import  './Navbar.css'


// function Navbar() {
//   return (
//     <>
//     <nav className='navbar'>
//         <NavLink  to="/">Home</NavLink>
//         <NavLink  to="/meals" style={{ margin: '0 10px' }}>Meals</NavLink>
//         <NavLink  to="/cocktails" style={{ margin: '0 10px' }}>Cocktails</NavLink>
//         <NavLink  to="/potter" style={{ margin: '0 10px' }}>Potter</NavLink>
//         <NavLink to="/indianbanks" style={{ margin: '0 10px' }}>Indian Banks</NavLink>
//       </nav>
//       </>
//   )
// }

// export default Navbar




import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  return (
  
    <nav className="navbar">

    {/* <img height={35} src="https://www.google.com/imgres?q=give%20logo%20for%20food%20webpage%20design&imgurl=https%3A%2F%2Fwww.shutterstock.com%2Fimage-vector%2Ftext-illustration-food-flat-simple-260nw-2451845875.jpg&imgrefurl=https%3A%2F%2Fwww.shutterstock.com%2Fsearch%2Ffood-logo&docid=0airtaywTBabuM&tbnid=0flzC4zbRqRpjM&vet=12ahUKEwj3wanP7aSKAxUSSmwGHUjXL5kQM3oECEwQAA..i&w=347&h=280&hcb=2&ved=2ahUKEwj3wanP7aSKAxUSSmwGHUjXL5kQM3oECEwQAA" alt="Logo" /> */}

     <div className='main'>
      <NavLink to="/" className="nav-link" activeClassName="active">Home</NavLink>
      <NavLink to="/meals" className="nav-link" activeClassName="active">Meals</NavLink>
      <NavLink to="/cocktails" className="nav-link" activeClassName="active">Cocktails</NavLink>
      <NavLink to="/potter" className="nav-link" activeClassName="active">Potter</NavLink>
      <NavLink to="/indianbanks" className="nav-link" activeClassName="active">Indian Banks</NavLink>
        </div>

    </nav>
  );
}

export default Navbar;
