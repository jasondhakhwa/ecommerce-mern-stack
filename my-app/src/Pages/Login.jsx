import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { login } from '../redux/apiCalls';

const Container = styled.div`

`;

const Wrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`;

const Title = styled.h1`
    text-align: center;
`;

const Form = styled.form`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`;

const Input = styled.input`

`;

const Button = styled.button`
    background-color: #76ff76;
    border: #76ff76;
    &:disabled{
        background-color: grey;
    }
`;

const Error = styled.span`
    color: red;
`
const Register = styled.span`
    
`

const Login = () => {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const dispatch = useDispatch()
    let { isFetching, error } = useSelector(state => state.user)
    const logins = isFetching ? "Loading" : "Login"
    const handleClick = (e) => {
        e.preventDefault();
        login(dispatch, { username, password })
    }

    isFetching = false;
    return (
        <Container>
            <Wrapper>
                <Title>Login</Title>
                <Form>
                    <Input
                        placeholder="username"
                        onChange={(e) => setUsername(e.target.value)}
                    />
                    <Input
                        placeholder="password"
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <Register>Don't have an account? <Link to='/register'>Register</Link></Register>
                    <Button onClick={handleClick} disabled={isFetching}>{logins}</Button>
                    {
                        error &&
                        <Error>Error!!</Error>
                    }
                </Form>
            </Wrapper>
        </Container>
    )
}

export default Login