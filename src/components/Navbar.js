import { NavLink } from "react-router-dom";

const Navbar = ({savedItemsCount, cartCount}) => 
{
    return (  
        <nav>
            <NavLink to="/">Home</NavLink>
            <NavLink to="/cart">Cart <sup>{cartCount}</sup></NavLink>
            <NavLink to="/saved">Saved items <sup>{savedItemsCount}</sup></NavLink>
        </nav>
    );
}
 
export default Navbar;