import React from 'react'
import styled from 'styled-components'

function AppDiscount(props) {
    return(
    <Banner onClick={props.handleClick} className={`icon nav-icon-5 ${props.clicked ? 'open' : ''}`}>
        <div>       
            <a href="">33% DE DESCUENTO EXCLUSIVO EN LA APP</a>
        </div>
    </Banner>
    )
}

export default AppDiscount

const Banner = styled.div`
  background-color: var(--accent-green);

  a{
    color: black;
    font-size: 1rem;
    font-family: 'avalon', sans-serif;
    margin: 0;
    padding: 0;
    display: flex;
    align-items: center;
    justify-content: center
  }
`

