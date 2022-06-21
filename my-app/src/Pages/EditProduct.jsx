import axios from 'axios'
import React from 'react'
import { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import styled from 'styled-components'
import { addProductRequest } from '../requestMethods'



const Title = styled.h1``
const Form = styled.form``
const Data = styled.span``
const Input = styled.input`
  padding: 10px;
  margin: 10px;
`

const Button = styled.button``

const EditProduct = () => {
    const location = useLocation();
    const id = location.pathname.split("/")[2];
    console.log(id)
    const [product, setProduct] = useState({});
    
    useEffect(() => {
        const getProduct = async () => {
            try {
                const res = await axios.get(`http://localhost:5000/api/product/find/${id}`)
                console.log(res);
                setProduct(res.data);
            } catch (error) {
                console.log(error)
            }
        }
        getProduct();
    }, [id])

    //using new states
    const [name, setName] = useState("")
    const [category, setCategory] = useState("")
    const [size, setSize] = useState("")
    const [image, setImage] = useState(null)
    const [color, setColor] = useState("")
    const [price, setPrice] = useState(100)
    const [quantity, setQuantity] = useState(1)

    //enter edited product
    const handleClick = async (e) => {
        e.preventDefault()
        const formData = new FormData();
        formData.append("name", name)
        formData.append("category", category)
        formData.append("image", image)
        formData.append("size", size)
        formData.append("color", color)
        formData.append("quantity", quantity)
        formData.append("price", price)

        try {
            const res = await addProductRequest.put(`product/update/${id}`, formData)
            console.log("Updated Product:")
            console.log(id)
            console.log(res.data)
        } catch (err) {
            console.log(err);
        }
    }

    return (
        <Form encType='multipart/form-data'>
            <Title>Edit Product</Title>
            <table>
                <tbody>
                    <tr>
                        <td><Data>Name:</Data></td>
                        <td>
                            <Input
                                name='name'
                                placeholder='Name'
                                defaultValue={product.name}
                                onChange={(e) => setName(e.target.value)}
                            />
                        </td>
                    </tr>
                    <tr>
                        <td><Data>Category:</Data></td>
                        <td>
                            <Input
                                name='category'
                                placeholder='Category'
                                defaultValue={product.category}
                                onChange={(e) => setCategory(e.target.value)}
                            />
                        </td>
                    </tr>
                    <tr>
                        <td><Data>Image:</Data></td>
                        <td>
                            <Input
                                name='image'
                                type='file'
                                placeholder='Image'
                                onChange={(e) => setImage(e.target.files[0])}
                            />
                        </td>
                    </tr>
                    <tr>
                        <td><Data>Size:</Data></td>
                        <td>
                            <Input
                                name='size'
                                defaultValue={product.size}
                                placeholder='Size'
                                onChange={(e) => setSize(e.target.value)}
                            />
                        </td>
                    </tr>
                    <tr>
                        <td><Data>Color:</Data></td>
                        <td>
                            <Input
                                name='color'
                                defaultValue={product.color}
                                placeholder='Color'
                                onChange={(e) => setColor(e.target.value)}
                            />
                        </td>
                    </tr>
                    <tr>
                        <td><Data>Price:</Data></td>
                        <td>
                            <Input
                                name='price'
                                defaultValue={product.price}
                                type="number"
                                placeholder='Rs....'
                                onChange={(e) => setPrice(e.target.value)}
                            />
                        </td>
                    </tr>
                    <tr>
                        <td><Data>Quantity:</Data></td>
                        <td>
                            <Input
                                name='quantity'
                                defaultValue={product.quantity}
                                type="number"
                                placeholder='Number'
                                onChange={(e) => setQuantity(e.target.value)}
                            />
                        </td>
                    </tr>
                </tbody>
            </table>
            <Button onClick={handleClick}>Edit Product</Button>
        </Form>
    )
}

export default EditProduct