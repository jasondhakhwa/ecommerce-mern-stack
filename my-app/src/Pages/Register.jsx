import axios from 'axios';
import React, { useState } from 'react'
import styled from 'styled-components'


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
`;



const Register = () => {
    const [name, setName] = useState()
    const [username, setUsername] = useState()
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()
    const [confirm, setConfirm] = useState()

    const handleClick = (e) => {
        e.preventDefault()
        const userInfo = { name, username, email, password, confirm }
        try {
            const res = axios.post("http://localhost:5000/api/auth/register", userInfo)
            console.log(res);
            window.location.href = "http://localhost:3000/login";
        }
        catch (err) {
            console.log(err)
        }
    }

    return (

        <Container>
            <Wrapper>
                <Title>Create Account</Title>
                <Form>
                    <Input
                        placeholder="name"
                        onChange={(e) => setName(e.target.value)}
                    />
                    <Input
                        placeholder="username"
                        onChange={(e) => setUsername(e.target.value)}
                    />
                    <Input
                        placeholder="email"
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <Input
                        placeholder="password"
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <Input
                        placeholder="confirm"
                        onChange={(e) => setConfirm(e.target.value)}
                    />
                    <Button type='submit' onClick={handleClick}>Register</Button>
                </Form>
            </Wrapper>
        </Container>
    )
}

export default Register