import { NavLink } from "react-router-dom";
const Nav=()=>{
    return(
        <div className="nav">
           <div>
              <NavLink to="/">Login</NavLink>
              <NavLink to="/profile">Profile</NavLink>
           </div>
        </div>
    )
}
export default Nav;