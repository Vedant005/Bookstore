import "./header.css"
import { NavLink } from "react-router-dom";

const getStyle=({isActive})=>({
    color: isActive ? "red" : ""
})

export function Header() {
    return (
        <header>
              <h1 class="title">  MAGNET STORE</h1>
            <nav>
        <NavLink style={getStyle} to="/">
          Home
        </NavLink>
        
        <NavLink style={getStyle} to="/category">
          Category
        </NavLink>
        </nav>
    
      <label >
        <input type="text"/>
      </label>
      </header>
    );
  }
  