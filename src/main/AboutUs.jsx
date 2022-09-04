import "./aboutus/AboutUs.css"
import AboutUsSection1 from "./aboutus/AboutUsSection1"
import AboutUsSection2 from "./aboutus/AboutUsSection2";
import AboutUsSection3 from "./aboutus/AboutUsSection3";
import AboutUsSection4 from "./aboutus/AboutUsSection4";
const AboutUS = () => {
    return ( 
        <main className="aboutUs">
           <AboutUsSection1/>
           <AboutUsSection2/>
           <AboutUsSection3/>
           <AboutUsSection4/>
        </main>
     );
}
 
export default AboutUS;