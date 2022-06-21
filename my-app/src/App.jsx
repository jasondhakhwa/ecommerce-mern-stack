import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css'
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate
} from "react-router-dom";
import styled from 'styled-components';
import { useSelector } from 'react-redux';

import Navbar from './Components/Navbar';

import Home from './Pages/Home.jsx';
import Cart from './Pages/Cart.jsx';
import Product from './Pages/Product';
import ProductList from './Pages/ProductList';
import Login from './Pages/Login';
import Register from './Pages/Register';
import AddProduct from './Pages/AddProduct';
import EditProduct from './Pages/EditProduct';
import DeleteProduct from './Pages/DeleteProduct';
import CRUD from './Pages/CRUD';


const Background = styled.div`
`
const Body = styled.div`
  min-height: 700px;
  background-color: #f3f3f3;
  display: flex;
  justify-content: center;
`

function App() {
  const user = useSelector(state=>state.user)
  return (
    <Background>
      <Router>
        <Navbar />
        <Body>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/login" element={user.currentUser ? <Navigate to="/" /> : <Login />} />
            <Route exact path="/register" element={user.currentUser ? <Navigate to="/" /> : <Register />} />
            <Route path="/products/:cat" element={<ProductList />} />
            <Route exact path="/products" element={<ProductList />} />
            <Route exact path="/product/:id" element={<Product />} />
            <Route exact path="/cart" element={<Cart />} />
            <Route exact path="/crud" element={<CRUD />} />
            <Route exact path="/addproduct" element={<AddProduct />} />
            <Route exact path="/editproduct/:id" element={<EditProduct />} />
            <Route exact path="/deleteproduct/:id" element={<DeleteProduct />} />
          </Routes>
        </Body>
      </Router>
    </Background>
  );
}

export default App;
