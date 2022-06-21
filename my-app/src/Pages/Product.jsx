import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

import ProductDescription from '../Components/Products/ProductDescription.jsx';

const Product = () => {
    const location = useLocation();
    const id = location.pathname.split('/')[2];
    const [product, setProduct] = useState({});
    useEffect(() => {
        const getProduct = async () => {
            try {
                const res = await axios.get(`http://localhost:5000/api/product/find/${id}`)
                console.log(res);
                setProduct(res.data)
            }
            catch (err) {
                console.log(err)
            }
        }
        getProduct();
    }, [id])

    return (
            <ProductDescription product={product} />
    )
}

export default Product