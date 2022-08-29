import { Link } from "react-router-dom";
const  NavBar = () => {
    return ( 
        <nav className="navBar">
            <div className="mainImg">
                  <img src="img/main_logo.png" alt="company logo"/>  
            </div>
            <div className="navLink">       
                <Link to="/">home</Link>
                <Link to="/products">product</Link>
                <Link to="/aboutus">about Us</Link>
                <Link to="/contact">contact</Link>
                <Link to="/cart">cart</Link>
            </div>

        </nav>
     );
}
 
export default NavBar ;