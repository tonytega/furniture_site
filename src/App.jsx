import {BrowserRouter as Router,Route,Routes} from 'react-router-dom';
import  "./Eric-myers.css"
import NavBar from './main/Nav';
import Home from './main/Home';
import { Product } from './main/Product';
import AboutUS from './main/AboutUs';
import Contact from './main/Contact';
import { Cart } from './main/Cart';
import Footer from './main/Footer';
import Auth from './main/log/Auth';

function App() {
  

  return (
    <div className="App">
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
     
    </div>
  )
}

export default App
