import {useRef} from "react";
import './home/home.css'
import HomeSection1 from "./home/HomeSection1";
import HomeSection2 from "./home/HomeSection2";
import HomeSection3 from "./home/HomeSection3";
import HomeSection4 from "./home/HomeSection4";
import {HiOutlineChevronDoubleDown} from "react-icons/hi";
import{motion} from "framer-motion"
const Home = () => {
    const ref =useRef(null);
    const handleClick =()=>{
        ref.current ?.scrollIntoView({behavior:'smooth'})
    };
    const style ={
        cursor: 'pointer'
    }
    return ( 
        <main className='Home'>
            <div ><h1 className='welcome'><span>naxtinc  </span><span>furnitures</span> <motion.div onClick={handleClick} animate={{scale:1.1}} transition={{yoyo:Infinity, duration:0.4}} style={style}><HiOutlineChevronDoubleDown/></motion.div> </h1></div>
           
            <div ref={ref}>
            <HomeSection1 key={HomeSection1}/>
            <HomeSection2 key={HomeSection2}/>
            <HomeSection3 key={HomeSection3}/>
            <HomeSection4 key={HomeSection4}/>
            </div>
        </main>
     );
}
 
export default Home;