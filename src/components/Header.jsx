import "./header.css"
import { NavLink, Route } from "react-router-dom";
// import {Product} from "./pages/Product.jsx";

const getStyle=({isActive})=>({
    color: isActive ? "red" : "",
    border: "1 rem",
    padding: "0.5 rem",
    margin: "6rem",
 textDecoration : "none",
  texAlign:"center"
})

export function Header() {
    return (
        <header>
          <div class="container">
              <h2 class="title">  magnet store</h2>
            <nav>
        <NavLink style={getStyle} to="/">
          Home
        </NavLink>
        
        <NavLink style={getStyle} to="/product">
         Product
        </NavLink>

        </nav>
    
      <label class="search-bar">
        <input type="text"/>
      </label>
     <nav>
     <NavLink style={getStyle} to="/profile">
          Profile   </NavLink>
        <NavLink style={getStyle} to="/wishlist">
          Wishlist
        </NavLink>
        <NavLink style={getStyle} to="/cart">
          Cart
        </NavLink>
     </nav>
    
     
      </div>
      </header>
    );
  }

  