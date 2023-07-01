import "./header.css"
import { NavLink } from "react-router-dom";

const getStyle=({isActive})=>({
    color: isActive ? "red" : "",
    border: isActive ? "1 rem" : "0.5rem",
    padding: isActive ? "3 rem" : "2rem",
    margin: "1rem",
 textDecoration : "none"
})

export function Header() {
    return (
        <header>
          <div class="container">
              <span class="title">  magnet store</span>
            <nav>
        <NavLink style={getStyle} to="/">
          Home
        </NavLink>
        
        <NavLink style={getStyle} to="/products">
          Products
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

  