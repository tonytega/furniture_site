import './App.css'
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom';
import NavBar from './main/Nav';
import Home from './main/Home';
import { Product } from './main/Product';
import AboutUS from './main/AboutUs';
import Contact from './main/Contact';
import { Cart } from './main/Cart';

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
        </Routes>

      </Router>
     
    </div>
  )
}

export default App
