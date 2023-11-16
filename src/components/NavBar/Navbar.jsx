import React, { useState } from 'react'
import styled from 'styled-components'
import BurguerButton from './BurguerButton'

function Navbar() {

  const [clicked, setClicked] = useState(false)
  const handleClick = () => {
    setClicked(!clicked)
  }
  return (
    <>
      <NavContainer>
        <a href="index.html">
          <img src="src\assets\img\aeroco_multicolor.svg" alt="Aeroco Logo"/>
        </a>
        <div className={`links ${clicked ? 'active' : ''}`}>
          <a onClick={handleClick} href="#h">NUEVO</a>
          <a onClick={handleClick} href="#h">HOMBRE</a>
          <a onClick={handleClick} href="#h">MUJER</a>
          <a onClick={handleClick} href="#h">NIÑOS</a>
          <a onClick={handleClick} href="#h">OFERTAS</a>
        </div>
        <div className='burguer'>
          <BurguerButton clicked={clicked} handleClick={handleClick} />
        </div>
        <BgDiv className={`initial ${clicked ? ' active' : ''}`}></BgDiv>
      </NavContainer>
    </>
  )
}

export default Navbar

const NavContainer = styled.nav`
  padding: 2rem;
  background-color: #000;
  display: flex;
  align-items: center;
  justify-content: space-between;

  a{
    color: white;
    text-decoration: none;
    display: flex;
    align-items: center;
    justify-content: center;
    
    img{
      height: 40px;
      margin-left: 1rem;
    }

  }
  
  .links{
    position: absolute;
    top: -700px;
    left: -2000px;
    right: 0;
    margin-left: auto;
    margin-right: auto;
    text-align: center;
    transition: all .5s ease;
    
    a{
    font-family: 'Syne', sans-serif;
    font-size: 1.1rem;
    font-weight: 500;
    display: block;
    margin: 1rem;  
    }
    
    @media(min-width: 768px){
      position: initial;
      margin: 0;
      display: block;
      a{
        display: inline;
      }
    }

  }

  // .links a:last-child {
  //   margin-right: 1rem;
  // }

  .links.active{
    width: 100%;
    display: block;
    position: absolute;
    margin-left: auto;
    margin-right: auto;
    top: 30%;
    left: 0;
    right: 0;
    text-align: center;
    
    a{
      font-size: 2rem;
      margin-top: 1rem;
      color: black;
      font-weight: 600; 
    }
  }

  .burguer{
    
    @media(min-width: 768px){
      display: none;
    }

  }
`

const BgDiv = styled.div`
  background-color: #c6c6c6;
  position: absolute;
  top: -1000px;
  left: -1000px;
  width: 100%;
  height: 100%;
  z-index: -1;
  transition: all .6s ease ;
  
  &.active{
    border-radius: 0 0 10% 0;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
`