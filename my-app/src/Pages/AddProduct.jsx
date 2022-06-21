// import axios from 'axios'
import React from 'react'
import { useState } from 'react'
import styled from 'styled-components'
import { addProductRequest } from '../requestMethods'



const Form = styled.form``
const Data = styled.span``
const Input = styled.input`
  padding: 10px;
  margin: 10px;
`

const Button = styled.button``

const AddProduct = () => {
    const [name, setName] = useState("")
    const [category, setCategory] = useState("")
    const [size, setSize] = useState("")
    const [image, setImage] = useState(null)
    const [color, setColor] = useState("")
    const [price, setPrice] = useState(100)
    const [quantity, setQuantity] = useState(1)


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

        setName("");
        setCategory("");
        setSize("");
        setImage("");
        setColor("");
        setPrice("");
        setQuantity("");

        try {
            const res = await addProductRequest.post("product/create", formData)
            console.log("Added Product:")
            console.log(res.data)
        } catch (err) {
            console.log(err);
        }
    }

    return (
        <Form encType='multipart/form-data'>
            <table>
                <tbody>
                    <tr>
                        <td><Data>Name:</Data></td>
                        <td><Input name='name' placeholder='Name'onChange={(e) => setName(e.target.value)} /></td>
                    </tr>
                    <tr>
                        <td><Data>Category:</Data></td>
                        <td>
                            <Input name='category' placeholder='Category' onChange={(e) => setCategory(e.target.value)} />
                        </td>
                    </tr>
                    <tr>
                        <td><Data>Image:</Data></td>
                        <td><Input name='image' type='file' placeholder='Image' onChange={(e) => setImage(e.target.files[0])} /></td>
                    </tr>
                    <tr>
                        <td><Data>Size:</Data></td>
                        <td><Input name='size' placeholder='Size' onChange={(e) => setSize(e.target.value)} /></td>
                    </tr>
                    <tr>
                        <td><Data>Color:</Data></td>
                        <td><Input name='color' placeholder='Color' onChange={(e) => setColor(e.target.value)} /></td>
                    </tr>
                    <tr>
                        <td><Data>Price:</Data></td>
                        <td><Input name='price' type="number" placeholder='Rs....' onChange={(e) => setPrice(e.target.value)} /></td>
                    </tr>
                    <tr>
                        <td><Data>Quantity:</Data></td>
                        <td><Input name='quantity' type="number" placeholder='Number' onChange={(e) => setQuantity(e.target.value)} /></td>
                    </tr>
                </tbody>
            </table>
            <Button onClick={handleClick}>Add Product</Button>
        </Form>
    )
}

export default AddProduct