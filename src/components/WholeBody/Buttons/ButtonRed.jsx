import React from 'react'
import styled from 'styled-components'

const BtnLv3 = styled.button`
    background-color: #fa788a;
    border: none;
    
    //size
    width: 200px;
    height: 80px;

    // position
    margin-top:  30px;
    margin-left: 30px;
    margin-right: 30px;
    

    //property
    color: white;
    font-size: 18px;
    border-radius: 20px;
    cursor: pointer;

    transition: 0.1s;
    &:hover{
        background-color: #fa3598;

        transform: scale(1.05)
    }
`

const RedButton = ({children}) =>{

    return(
        <div>
            <BtnLv3>{children}</BtnLv3>
        </div>
        
    )
    
}

export default RedButton;