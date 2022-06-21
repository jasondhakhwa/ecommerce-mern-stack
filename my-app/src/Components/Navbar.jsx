import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import './CSS/Navbar.css'
import { useDispatch, useSelector } from 'react-redux'
import { logout } from '../redux/apiCalls';

const NavContainner = styled.div`
  background-color: white;
  text-decoration: none;
`
const Buttons = styled.div`
  min-width: 100px;
  max-width: 400px;
  display: flex;
  justify-content: space-around;
`
const Button = styled.button`
  border: none;
  background-color: #ffffff;
  padding: 0px 0px;
  margin: 0px 15px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
`
const SearchBar = styled.form`
  
`

const SearchInput = styled.input`
  border: 0.5px solid #bebebe;
  padding: 2px 15px;
  border-radius: 5px;
`
const SearchSubmit = styled.button`
  border: 0.5px solid #bebebe;
  padding: 2px 15px;
  border-radius: 5px;  
`

const Navbar = () => {
  const user = useSelector(state => state.user)
  const isAdmin = (user.currentUser) ? user.currentUser.isAdmin : false
  const username = (user.currentUser) ? user.currentUser.username : "Login"
  // console.log("username" + username)
  const quantity = useSelector(state => state.cart.quantity)
  console.log(quantity)

  //For Logout
  const dispatch = useDispatch();
  const handleLogout = () => {
    logout(dispatch);
    window.location.reload(false);
  }

  return (
    <NavContainner>
      <div className='nav-wrapper'>
        <Link className="logo" to='/'><Button style={{ fontWeight: "bold" }}>LOGO</Button></Link>
        <SearchBar className="search" method='get'>
          <SearchInput type='text' placeholder="Search" className='search-container' />
          <SearchSubmit type='submit'>S</SearchSubmit>
        </SearchBar>
        <Buttons>
          {/* <Link to='/products'>Filter</Link> */}
          {/* if admin it will show *Admin* in user name and Logout */}

          {user.currentUser ?
            <>
              <Button>
                {isAdmin ?
                  <>
                    <span> {username} *Admin*</span>
                    <Link onClick={handleLogout} to='/'><Button>Logout</Button></Link>
                  </>
                  :
                  <>
                    <Link to='/cart'><Button>Cart {quantity}</Button></Link>
                    <span>{username}</span>
                    <Link onClick={handleLogout} to='/'><Button>Logout</Button></Link>

                  </>
                }
              </Button>
            </>
            :
            <Link to='/login'><Button>{username}</Button></Link>
          }
        </Buttons>

      </div>
    </NavContainner>
  )
}

export default Navbar