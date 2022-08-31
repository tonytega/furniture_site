import {BrowserRouter as Router,Route,Routes} from 'react-router-dom';
import  "./Eric-myers.css"
import NavBar from './main/Nav';
import Home from './main/Home';
import { Product } from './main/Product';
import AboutUS from './main/AboutUs';
import Contact from './main/Contact';
import { Cart } from './main/Cart';
import {useEffect,useState,createContext} from 'react';


export const DataContext = createContext();
function App() {
   const [data,setData] = useState(null);
  // console.log(data)
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
            // .catch((error)=>{console.log(error)})

    },[]
)
  return (
    <div className="App">
      <DataContext.Provider value={data}>
        <Router>
          <NavBar/>
          <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/products' element={<Product data={data}/>}/>
          <Route path='/aboutUs' element={<AboutUS/>}/>
          <Route path='/contact' element={<Contact/>}/>
          <Route path='/cart' element={<Cart/>}/>
          </Routes>
        </Router>
      </DataContext.Provider>
     
    </div>
  )
}

export default App
