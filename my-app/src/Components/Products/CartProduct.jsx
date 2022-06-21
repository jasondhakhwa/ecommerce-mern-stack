import React, { useState } from 'react'
import { useSelector } from 'react-redux'

import styled from 'styled-components'
import goku from './goku.png'


const Container = styled.div`
  padding: 30px;
`
const Contains = styled.div`
  padding: 20px;
  background-color: white;  
  border-radius: 4px;
  display: flex;
`
const Image = styled.img`
  max-width: 10rem;
  height: auto;
`
const Info = styled.div`
  margin: 20px;
`
const Title = styled.p`
`
const Price = styled.p`
  color: #f76c6c;
  font-size: 25px;
`
const QuantityDiv = styled.div`
  display: flex;
  margin: 10px 0px;
`
const Quantity = styled.p`
`
const Amt = styled.p`
  padding: 0px 10px;
`
// const Inc = styled.button`
//   border: none;
//   text-align: center;
//   text-decoration: none;
//   display: inline-block;
//   font-size: 16px;
// `
// const Dec = styled.button`
//   border: none;
//   text-align: center;
//   text-decoration: none;
//   display: inline-block;
//   font-size: 16px;
// `

const CartProduct = () => {
  // const dispatch = useDispatch()
  const cart = useSelector(state => state.cart)
  // const [quantity, setQuantity] = useState()
  // const handleQuantity = (type) => {
  //   if (type === "dec") {
  //     if (quantity > 0) {
  //       setQuantity(quantity - 1)
  //     }
  //   }
  //   else {
  //     setQuantity(quantity + 1)
  //   }
  // }
  return (
    <Container>
      {cart.products.map((product) => (
        <Contains>
          <Image src={goku} alt="..." />
          <Info>
            <Title><h5>{product.name}</h5></Title>
            <Title>{product.id}</Title>
            <Price>Rs. {product.price}</Price>
            <QuantityDiv>
              <Quantity>Quantity:</Quantity>
              {/* <Dec onClick={() => handleQuantity("dec")}>-</Dec> */}
              <Amt >{product.quantity}</Amt>
              {/* <Inc onClick={() => handleQuantity("inc")}>+</Inc> */}
              <Amt>  Total: {product.quantity * product.price}</Amt>
            </QuantityDiv>
          </Info>
        </Contains>
      ))}
    </Container>
  )
}

export default CartProduct