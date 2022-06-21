import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import styled from 'styled-components'
import CartProduct from '../Components/Products/CartProduct'
import { clearCart } from '../redux/cartRedux'

// const Title = styled.h1`
//     font-weight: 300;
//     text-align: center;
// `;

const Container = styled.div`
    display: flex;
    width: 90%; 
    min-height: 300px;
    background-color: #ffffff;
    border-radius: 20px;
    box-shadow: 0px 25px 40px #1687d933;  
    margin: 50px;

`
const Contains = styled.div`
    margin: 50px;
    display: flex;
    width: 100%;
`
const CartDiv = styled.div`
    width:780px;
`
const Head = styled.div`
    display: flex;
    justify-content: center;
    font-weight: bold;
`

const Carts = styled.div``
const Product = styled.div``
const Summary = styled.div`
    background-color: aliceblue;
    width: 350px;
    height: 200px;
    border-radius: 15px;
    padding: 20px 30px;

`
const Total = styled.div`
    display: flex;
    justify-content: space-between;
    margin-top: 20px;
`
const Button = styled.button`    
    background-color: #27f743; /* Green */
    border: none;
    color: #eeeeee;
    padding: 15px 32px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 16px;  
    right: 150px; 
    border-radius: 20px;
    margin-top: 30px;
    font-weight: bold;
`


const Cart = () => {
    const cart = useSelector(state => state.cart)
    const dispatch = useDispatch();
    return (
        <Container>
            <Contains>
                <CartDiv>
                    <Head>My Cart</Head>
                    <Carts>
                        <Product>
                            <CartProduct />
                        </Product>
                    </Carts>
                </CartDiv>
                <Summary>
                    <Head>Summary</Head>
                    <Total>
                        <span>Total</span>
                        <span>Rs. {cart.total}</span>
                    </Total>
                    <Head><Button>Check Out</Button></Head>
                </Summary>
            </Contains>
        </Container >
    )
}

export default Cart