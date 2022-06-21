import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { addProduct } from '../../redux/cartRedux'
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import Login from '../../Pages/Login'


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
  max-width: 23rem;
  height: auto;
`
const Info = styled.div`
  margin: 20px;
`
const Title = styled.h1`

`
const Description = styled.div`
  margin: 10px 0px;
  max-height: 20rem;
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
`
// const Buy = styled.button`
//     background-color: #4CAF50; /* Green */
//   border: none;
//   color: white;
//   padding: 15px 32px;
//   text-align: center;
//   text-decoration: none;
//   display: inline-block;
//   font-size: 16px;
// `
const Cart = styled.button`
  background-color: #f17a35; /* Green */
  border: none;
  color: white;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
`
const Inc = styled.button`
  border: none;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
`
const Dec = styled.button`
  border: none;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
`
const Edit = styled.button`

  background-color: #fac95f; /* Green */
  border: none;
  color: white;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;

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
const AddCart = styled.div`
  color: #4CAF50;
`

const ProductDescription = ({ product }) => {
  console.log(product)
  const dispatch = useDispatch();
  const [quantity, setQuantity] = useState(1);
  const [addedQuantity, setAddeQuantity] = useState();
  const [addedToCard, setAddedToCard] = useState(false)

  const handleQuantity = (type) => {
    if (type === "dec") {
      if (quantity > 0) {
        setQuantity(quantity - 1)
      }
    }
    else {
      setQuantity(quantity + 1)
    }
  }

  //for admin options
  const user = useSelector(state => state.user)
  const isAdmin = (user.currentUser) ? user.currentUser.isAdmin : false

  const handleClick = () => {
    dispatch(addProduct({ ...product, quantity, }));
    setAddedToCard(true)
    setAddeQuantity(quantity)
    console.log(addedToCard)
  }

  // const isAdmin = JSON.parse(JSON.parse(localStorage.getItem("persist:root")).user).currentUser.isAdmin
  // console.log(JSON.parse(JSON.parse(localStorage.getItem("persist:root")).user).currentUser.isAdmin)
  // console.log(product.price)
  return (
    <Container>
      <Contains>
        <Image alt="..." />
        <Info>
          <Title>{product.name}</Title>
          <Description>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
            molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum
            numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium
            optio, eaque rerum! Provident similique accusantium nemo autem. Veritatis
            obcaecati tenetur iure eius earum ut molestias architecto voluptate aliquam
            nihil, eveniet aliquid culpa officia aut! Impedit sit sunt quaerat, odit,
            tenetur error, harum nesciunt ipsum debitis quas aliquid. Reprehenderit,
            quia. Quo neque error repudiandae fuga? Ipsa lauda
          </Description>
          <Price>Rs. {product.price}</Price>

          {/* if user is not loged in login popup */}
          {
            user.currentUser ?
              <>
                {isAdmin ?
                  <>
                    <Link to={`/editproduct/${product._id}`}><Edit>Edit</Edit></Link>
                    <Link to={`/deleteproduct/${product._id}`}><Delete>Delete</Delete></Link>
                  </>
                  :
                  <>
                    <QuantityDiv>
                      <Quantity>Quantity:</Quantity>
                      <Dec onClick={() => handleQuantity("dec")}>-</Dec>
                      <Amt>{quantity}</Amt>
                      <Inc onClick={() => handleQuantity("inc")}>+</Inc>
                    </QuantityDiv>
                    <Cart onClick={handleClick}>Cart</Cart>
                    {
                      addedToCard &&
                      <AddCart>Added {addedQuantity} to cart </AddCart>
                    }
                  </>
                }
              </>
              :
              <>

                <Popup trigger={<Cart onClick={handleClick}>Login</Cart>} position="right center">
                  <Login />
                </Popup>
              </>
          }

        </Info>
      </Contains>
    </Container>
  )
}

export default ProductDescription