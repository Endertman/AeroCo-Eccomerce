import React from "react";
import styled from "styled-components";

function Cart() {
    return (
        <CartButton>
            <CartIcon>
                <i class="fi fi-br-shopping-bag"></i>
            </CartIcon>
        </CartButton>  
    )
}

export default Cart;

const CartButton = styled.button`
    background-color: #000;
    border: 3px solid #fff;
    display: flex;
    align-items: center;
    padding: 10px;
    border-radius: 5px
    max-height: 40px;
    margin-left: 20px;
`

const CartIcon = styled.i`
    color: #fff;
`
