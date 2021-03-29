import React from 'react'
import styled from 'styled-components'


const BtnLv2 = styled.button`
    background-color: #5c71cf;
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
        background-color: #4f29b6;

        transform: scale(1.05)
    }
`

const BlueButton = () => {

    return (
        <div>
            <BtnLv2>중급자</BtnLv2>
        </div>

    )

}

export default BlueButton;