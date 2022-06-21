import React from 'react'
import styled from 'styled-components'

// const Contains = styled.div`
//   margin: 2em;
//   width: 100%;
//   display: flex;
//   justify-content: center;
// `
const Save = styled.button`

  background-color: #27f743; /* Green */
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
const Crud = (item) => {
  return (
    <div>
      <TR>
        <TD>{item.id}</TD>
        <TD>{item.name}</TD>
        <TD>{item.category}</TD>
        <TD>{item.size}</TD>
        <TD>{item.color}</TD>
        <TD>{item.price}</TD>
        <TD>{item.quantity}</TD>
        <TD><Save>Save</Save></TD>
        <TD><Delete>Delete</Delete></TD>
      </TR>
    </div>
  )
}

export default Crud