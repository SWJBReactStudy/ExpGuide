import React from 'react'
import styled from 'styled-components'

const BtnLv1 = styled.button`
    background-color: #a4e785;
    border: none;
    
    //size
    width: 200px;
    height: 80px;

    // position
    margin-left: 30px;
    margin-top:  30px;

    //property
    color: white;
    font-size: 18px;
    border-radius: 20px;
    cursor: pointer;

    transition: 0.1s;
    &:hover{
        background-color: #62af6c;

        transform: scale(1.05)
    }
`



const GreenButton = ({children}) =>{

    return(
        <div>
            <BtnLv1>{children}</BtnLv1>
        </div>
        
    )
    
}

export default GreenButton;