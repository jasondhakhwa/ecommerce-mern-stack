import axios from 'axios'
import React from 'react'
import { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
// import styled from 'styled-components'
// import { addProductRequest } from '../requestMethods'


const DeleteProduct = () => {
    const location = useLocation();
    const [product, setProduct] = useState({});
    const id = location.pathname.split("/")[2];
    useEffect(() => {
        const getProduct = async () => {
            try {
                const res = await axios.get(`http://localhost:5000/api/product/find/${id}`)
                setProduct(res.data);
                const resDelete = await axios.delete(`http://localhost:5000/api/product/delete/${id}`)
                console.log(resDelete)
            } catch (error) {
                console.log(error)
            }
        }
        getProduct();
    }, [id])
    return (
        <div>Deleted Product: {product.name}</div>
    )
}

export default DeleteProduct