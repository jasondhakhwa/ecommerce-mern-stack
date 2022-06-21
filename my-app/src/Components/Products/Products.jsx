import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux'


// import { popularProducts } from '../data'
import Product from './Product';
import axios from "axios";

const Container = styled.div`
    display: flex;
    flex-wrap: wrap;
`;
const AdminProducts = styled.div`
display: flex;
flex-wrap: wrap;
`
const Contains = styled.div`
    padding: 10px 20px;
    
`
const AddButton = styled.button`    
    background-color: #27f743; /* Green */
    border: none;
    color: white;
    padding: 15px 32px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 16px;  
    right: 150px; 
`
const CRUDButton = styled.button`    
    background-color: #3a8efc; /* Green */
    border: none;
    color: white;
    padding: 15px 32px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 16px;  
    right: 150px; 
`

const Products = ({ cat, filters, sort }) => {
    const user = useSelector(state => state.user)
    const isAdmin = (user.currentUser) ? user.currentUser.isAdmin : false
    const [products, setProducts] = useState([]);
    useEffect(() => {
        const getProducts = async () => {
            try {
                const res = await axios.get(cat ? `http://localhost:5000/api/product?category=${cat}` : "http://localhost:5000/api/product");
                console.log(res);
                setProducts(...products, res.data)
            }
            catch (err) {
                console.log(err);
            }
        }
        getProducts();
    }, [cat]);


    return (
        <Contains>
            <Container>
                {products.map((item) => (
                    <Product item={item} key={item._id} />
                ))}
            </Container>
            {isAdmin ?
                <AdminProducts>
                    <Link to='/addproduct'><AddButton>AddProduct</AddButton></Link>
                    <Link to='/crud'><CRUDButton>CRUD</CRUDButton></Link>
                </AdminProducts>
                :
                <>
                </>
            }
        </Contains>
    )
}

export default Products