import React from 'react'
import styled from 'styled-components'
import {
    Link
} from 'react-router-dom';

const Container = styled.div`
    margin: 8px;
    text-decoration: none;
`
const Card = styled.div`
    margin: 10px 10px;
    border: .2px whitesmoke;
    width: 18rem;
    border-radius: 8px;
    background-color: #d1d1d1;
`
const Image = styled.img`
    height: 15em;
    display: block;
    margin: 15px 15px; 
`
const CardBody = styled.div`
    background-color: #ffffff;
    height: 100px;
    padding: 8px 15px;
    display: flex;
    border-radius: 0px 0px 8px 8px;


`
const CardContainer = styled.div`
    margin: 10px;
`

const Price = styled.div`
    color: #eb4e4e;
    font-size: x-large;
    text-decoration: none;
`

const Product = ({ item }) => {
    return (
        <Link item={item._id} key={item.id} to={`/product/${item._id}`} style={{textDecoration:"none"}}>
            <Container>
                <Card>
                    <Image src={item.image} alt="..." />
                    <CardBody>
                        <CardContainer>
                            <h5 className="card-title" style={{color:"#444444"}}>{item.name}</h5>
                            <Price className="card-text">Rs. {item.price}</Price>
                        </CardContainer>
                    </CardBody>
                </Card>
            </Container>
        </Link>
    )
}

export default Product