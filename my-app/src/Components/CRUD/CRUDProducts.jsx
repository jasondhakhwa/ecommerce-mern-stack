import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import Popup from 'reactjs-popup';


// import { popularProducts } from '../data'
import axios from "axios";
import AddProduct from '../../Pages/AddProduct';
// import { addProductRequest } from '../../requestMethods';

const Contains = styled.div`
    margin: 2em;
    width: 100%;
    display: flex;
    justify-content: center;
    flex-direction: column;
`
const Save = styled.button`
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
const Add = styled.button`
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
const Delete = styled.button`

background-color: #f72727; /* Green */
border: none;
color: white;
padding: 15px 32px;
text-align: center;
text-decoration: none;
display: inline-block;
font-size: 16px;
`
const TR = styled.tr`
  background-color: white;
  width: 95%;
  display: flex;
  justify-content: space-between;
  border-radius: 4px;
  margin-bottom: 1em;
`
const TD = styled.td`
  margin: 10px;
  display: flex;
  text-align: center;
  justify-content: center;
  
`
const Input = styled.input`
    width: 6em;
    padding: .5em;
`

const CRUDProducts = () => {
    const [products, setProducts] = useState([]);
    const [newProducts, setNewProducts] = useState([]);
    const [changed, setChanged] = useState([]);
    //to get products from database
    // useEffect use nagarda chai array map ma problem aira cha 
    useEffect(() => {
        const getProducts = async () => {
            try {
                // console.log("res");
                const res = await axios.get("http://localhost:5000/api/product");
                // console.log(res);
                setProducts(...products, res.data)
            }
            catch (err) {
                console.log(err);
            }
        }
        getProducts();
    }, [])

    const handleChange = (name, id, e, value) => {
        e.preventDefault()
        console.log(changed)
        setChanged({
            ...changed,
            [e.target.name]: value
        })
        setNewProducts({
            ...newProducts,
            [id]: { ...changed, }
        })
    }
    console.log(newProducts)

    const handleDelete = () => {
        window.location.reload(false);
    }

    const onAddProduct = (e) => {
        e.preventDefault()
    }

    const onSubmit = async (submitedProducts, e) => {
        e.preventDefault();
        console.log("Submitted Products:");
        // await console.log(newID)
        // submitedProducts.map((newProduct) => {
        //     // const formData = new FormData();
        //     // if(newProduct) formData.append("name", newProduct.name)
        //     // if(newProduct) formData.append("category", newProduct.category)
        //     // if(newProduct) formData.append("size", newProduct.size)
        //     // if(newProduct) formData.append("color", newProduct.color)
        //     // if(newProduct) formData.append("quantity", newProduct.quantity)
        //     // if(newProduct) formData.append("price", newProduct.price)
        //     // try {
        //     //     const res = await addProductRequest.put(`product/update/${}`)
        //     // }
        // console.log("newProduct")
        // console.log(newProduct)
        // })
        try {
            console.log(submitedProducts)
        }
        catch (err) {
            console.log(err)
        }

    }
    // console.log(newProducts)

    return (
        <Contains>
            <form encType='multipart/form-data'>
                <table style={{ width: "100%" }}>
                    <tbody>
                        <TR>
                            <TD style={{ width: "200px" }}>ID</TD>
                            <TD>Name</TD>
                            <TD>Category</TD>
                            <TD>Size</TD>
                            <TD>Color</TD>
                            <TD>Price</TD>
                            <TD>Quantity</TD>
                            <TD><Delete>Delete</Delete></TD>
                        </TR>
                        {/* <Form> */}
                        {
                            products.map((item) => (
                                // <>
                                <TR key={item._id}>
                                    <TD>{item._id}</TD>
                                    <TD>
                                        <Input
                                            name='name'
                                            onChange={(e) => handleChange(item.name, item._id, e, e.target.value)}
                                            type='text'
                                            defaultValue={item.name}
                                            placeholder='Name'
                                        >
                                        </Input>
                                    </TD>
                                    <TD>
                                        <Input
                                            name='category'
                                            onChange={(e) => handleChange(item.name, item._id, e, e.target.value)}
                                            type='text'
                                            placeholder='Category'
                                            defaultValue={item.category}
                                        >
                                        </Input>
                                    </TD>
                                    <TD>
                                        <Input
                                            name='color'
                                            onChange={(e) => handleChange(item.name, item._id, e, e.target.value)}
                                            type='text'
                                            placeholder='Color'
                                            defaultValue={item.color}
                                        >
                                        </Input>
                                    </TD>
                                    <TD>
                                        <Input
                                            name='price'
                                            onChange={(e) => handleChange(item.name, item._id, e, e.target.value)}
                                            type='number'
                                            placeholder='Price'
                                            defaultValue={item.price}
                                        >
                                        </Input>
                                    </TD>
                                    <TD>
                                        <Input
                                            name='quantity'
                                            onChange={(e) => handleChange(item.name, item._id, e, e.target.value)}
                                            type='number'
                                            placeholder='Quantity'
                                            defaultValue={item.quantity}
                                        >
                                        </Input>
                                    </TD>
                                    <TD>
                                        <Link onClick={handleDelete} to={`/deleteproduct/${item._id}`}><Delete>Delete</Delete></Link>
                                    </TD>
                                </TR>
                                // </>
                            ))
                        }
                        {/* </Form> */}
                    </tbody>
                </table>
                <Popup trigger={<Add onClick={onAddProduct}>Add Product</Add>} position="right center">
                    <AddProduct />
                </Popup>

                <Save type='submit' onClick={(e) => onSubmit(newProducts, e)}>Save</Save>
            </form>
        </Contains >
    )
}

export default CRUDProducts