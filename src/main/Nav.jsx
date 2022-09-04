import { Link } from "react-router-dom";
import {BsCart, BsCartFill} from "react-icons/bs";
import {HiUser, HiOutlineUser, HiOutlineChevronDoubleDown , HiOutlineChevronDoubleUp,HiOutlineSearch} from "react-icons/hi";
import {useState} from "react";
import NavM from "./NavM";
import{motion,AnimatePresence} from "framer-motion"
const  NavBar = () => {
    const [cart, setCart] = useState(false)
    const [user, setUser] = useState(false)
    const [dropDown, setDropDown] = useState(false)

    return ( 
        <nav >
            <div className="navBack">
                <div className="mainImg">
                 <img src="img/main_logo.png" alt="company logo"/>  
                </div>
                <div className="navBar">
                    <div className="navLink">       
                        <Link to="/">home</Link>
                        <Link to="/products">product</Link>
                        <Link to="/aboutus">aboutUs</Link>
                        <Link to="/contact">contact</Link>
                    </div>
                    <div className="userItm">
                        <div className="itm"
                        onMouseEnter={()=>setUser(true)} 
                        onMouseLeave={()=>setUser(false)} 
                        onClick={()=>{setDropDown(!dropDown)}}
                        
                        >{user === false ? <HiOutlineUser className="itm" /> : <HiUser className="itm" />} 
                        <span className="itm ">account</span>{dropDown ?<HiOutlineChevronDoubleUp className="itm"/>:<HiOutlineChevronDoubleDown className="itm"/>}
                        </div>
                        <AnimatePresence>
                        {dropDown && <NavM/>}
                        </AnimatePresence>
                        <Link className="itm"
                        onMouseEnter={()=>setCart(true)} 
                        onMouseLeave={()=>setCart(false)} 
                        
                        to="/cart"
                        >{cart === false ? <BsCart className="itm" /> : <BsCartFill className="itm" />}
                        <motion.span className="itm" whileHover={{ scale:1.1}}>Cart</motion.span > </Link>
                    </div>
                </div>
                <div className="search" >
             <input
               placeholder="search products ,categories and brand"
                    type="search"
                /> <label><HiOutlineSearch/></label>
            </div>
            </div>
           
        </nav>
     );
}

export default NavBar ;