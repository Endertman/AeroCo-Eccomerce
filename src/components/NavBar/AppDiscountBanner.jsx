import React from 'react'
import styled from 'styled-components'

function AppDiscount() {
    return(
    <Banner>      
      <a href="">
        33% DE DESCUENTO EXCLUSIVO EN LA APP
        <span>
          <i class="fi fi-br-arrow-right"></i>
        </span>
      </a>
    </Banner>
    )
}

export default AppDiscount

const Banner = styled.div`
  background-color: var(--accent-green);
  display: flex;
  align-items: center;  
  justify-content: center;

  a{
    color: black;
    font-size: 1rem;
    font-family: 'avalon', sans-serif;
    margin: 4px;
    display: flex;
    align-items: center;  
    justify-content: center;
  
    span{
      font-size: 1rem;
      margin-left: 5px;
    }
  }
`

