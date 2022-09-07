import {BrowserRouter as Router,Route,Routes} from 'react-router-dom';
import  "./Eric-myers.css"
import NavBar from './main/Nav';
import Home from './main/Home';
import { Product } from './main/Product';
import AboutUS from './main/AboutUs';
import Contact from './main/Contact';
import { Cart } from './main/Cart';
import Footer from './main/Footer';
import Auth from './main/Auth';
import {useEffect,useState,createContext} from 'react';

export const DataContext = createContext();
function App() {
  const [cartArray,setCartArray] = useState([]) ;
   const [data,setData] = useState(null);
useEffect(
  function fetchData(){
      fetch('../data/furniture_data.json',{
                                                            headers: { 
                                                                      'Content-Type': 'application/json',
                                                                        'Accept': 'application/json'
                                                                      }
                                                          }
            )
            .then((response)=>response.json())
            .then((data)=>{setData(data)})
    },[cartArray]
)

const array = cartArray.slice()
const handleAddToCart =(item)=>{
             const inArray = array.find((element)=>{
                    return element.name === item.name  
                })
                if(inArray === undefined){
                         const obj = {
                                  name : item.name,
                                  number : 1,
                                  image : item.image1,
                                  cost : item.cost,
                                  total : item.cost,
                                  color : item.colour
                                }
                  array.push(obj)
                  setCartArray(array)
                  }else{
                      inArray.number = inArray.number+1;
                      inArray.total = inArray.cost * inArray.number
                      setCartArray(array)
                  }
                }

const handleIncrease =(item)=>{
  const inArray = array.find(
        (element)=>(
          element.name === item.name
        )
  )
          inArray.number = inArray.number+1;
          inArray.total = inArray.total + inArray.cost
          setCartArray(array)

}
const handleDecrease =(item)=>{
  const inArray = array.find(
        (element)=>(
          element.name === item.name
        )
  )
        if(!(inArray.number <= 1)){
          inArray.number = inArray.number - 1
          inArray.total = inArray.total - inArray.cost

        }else{
           array.splice(array.indexOf(inArray),1);
           setCartArray(array)
        }

}
  return (
    <div className="App">
       <DataContext.Provider value={data}>
      <Router>
        <NavBar/>
        <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/auth/*' element={<Auth/>}/>
        <Route path='/products' element={<Product  handleAddToCart={handleAddToCart}/>}/>
        <Route path='/aboutUs' element={<AboutUS/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/cart' element={<Cart cartArray={cartArray} onIncrease={handleIncrease} onDecrease={handleDecrease}/>}/>
        </Routes>
        <Footer/>
      </Router>
      </DataContext.Provider>
     
    </div>
  )
}

export default App
