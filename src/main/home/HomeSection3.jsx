import {HiOutlineChevronDoubleLeft , HiOutlineChevronDoubleRight} from "react-icons/hi";
import{motion} from "framer-motion"
const HomeSection3 = () => {
    const slideLeft =()=>{
        var slider= document.getElementById('slider3')
        slider.scrollLeft=slider.scrollLeft -500
    }
    const slideRight =()=>{
        var slider= document.getElementById('slider3')
        slider.scrollLeft=slider.scrollLeft +500
    }
    const images=[ '../img/mimg6.jpg',
                    '../img/mimg6.jpg',
                    '../img/mimg6.jpg',
                    '../img/mimg6.jpg',
                    '../img/mimg6.jpg',
                    '../img/mimg6.jpg',
                    '../img/mimg6.jpg',
                    '../img/mimg6.jpg',
                    '../img/mimg6.jpg',
                    '../img/mimg6.jpg',
                    '../img/mimg6.jpg',
                    '../img/mimg6.jpg',
                    '../img/mimg6.jpg',
                    '../img/mimg6.jpg',
                    '../img/mimg6.jpg',
                    '../img/mimg6.jpg'
                 
                   
]

    return ( 
        <section className="horSlider fixedWidth-Homesection homeSection3">
            <h1>LATEST PRODUCTS</h1>
            <div  className="rBtn rBtn1" onClick={slideLeft}>
            <HiOutlineChevronDoubleLeft size={25}/>
            </div>
            <div className="cover">
                <div id= "slider3" className="scroll-images">
                    {images.map((each)=>{
                        return(
                            <motion.div whileHover={{scale:1.1}} className="child"><img src={each}alt="categories"/></motion.div>

                        )
                       
                    })}
                    
                    
                    
                </div>
            </div>
            <div  className="rBtn rBtn2" onClick={slideRight}>
            <HiOutlineChevronDoubleRight />
            </div>
        </section>
     );
}
 
export default HomeSection3;