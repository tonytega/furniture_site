import {BrowserRouter as Router,Route,Routes} from 'react-router-dom';
import  "./Eric-myers.css"
import NavBar from './main/Nav';
import Home from './main/Home';
import { Product } from './main/Product';
import AboutUS from './main/AboutUs';
import Contact from './main/Contact';
import { Cart } from './main/Cart';
<<<<<<< HEAD
import Footer from './main/Footer';
import Auth from './main/log/Auth';
=======
import {useEffect,useState,createContext} from 'react';
>>>>>>> 414250be7690521aaf3488604d9f0f01ea1174e9


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
<<<<<<< HEAD
      <Router>
        <NavBar/>
        <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/products' element={<Product/>}/>
        <Route path='/aboutUs' element={<AboutUS/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/auth/*' element={<Auth/>}/>
        </Routes>
        <Footer/>
      </Router>
=======
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
>>>>>>> 414250be7690521aaf3488604d9f0f01ea1174e9
     
    </div>
  )
}

export default App
