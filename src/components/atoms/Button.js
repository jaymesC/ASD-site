import React from 'react'
import styled from 'styled-components'

export default function Button(props) {
  const Button = styled.button`
background-color:#e64b38;
transition:0.5s;
&:hover {
      background-color: #d12e1a;
    }
color:#fff;
width:350px;
padding-top:22px;
padding-bottom:22px;
border-radius:30px;
border: #ed6050;
cursor:pointer;
font-family:'inter';
font-size:16px;
font-weight:500;
`
  return (
    <div>
      <Button>{props.children}</Button>
    </div>
  )
}
