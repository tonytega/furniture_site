import { Link } from "react-router-dom";
const  NavBar = () => {
    return ( 
        <nav className="navBar">
            <div>
                <Link to="/">home</Link>
                <Link to="/products">product</Link>
                <Link to="/aboutus">aboutUs</Link>
                <Link to="/contact">contact</Link>
                <Link to="/cart">cart</Link>
            </div>

        </nav>
     );
}
 
export default NavBar ;