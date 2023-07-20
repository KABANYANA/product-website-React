import logo from './logo.svg';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { Link } from 'react-router-dom';
import './App.css';
import Login from './Login';
import Products from './Products';
import SingleProduct from './SingleProduct';
import AddProduct from './AddProduct';
function App() {
  return (
    <div >
     {/* <Login/>
     <Products/> */}
     <Router>
      <nav>
        <Link to="/"> LOGIN </Link>
        <Link to="/products"> PRODUCTS</Link>
        {/* <Link to="/description/:id"> PRODU </Link> */}
      </nav>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/products" element={<Products />} />
        <Route path="/products/:id" element={<SingleProduct />} />
        <Route path="/newproduct" element={<AddProduct />} />
       
      </Routes>
    </Router>
    </div>
  );
}

export default App;
