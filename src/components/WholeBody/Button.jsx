import React from 'react'
import styled from 'styled-components'

const Button = styled.button`
    //size
    width: ${props => props.BtnWidth + 'px'}; //200px 버튼 width를 길이를 결정하는 props 생성
    height: ${props => props.BtnHeight + 'px'}; //80px 버튼 height를 길이를 결정하는 props 생성

    background-color: ${props => props.BtnColor};       //HEX 값
    border-radius: ${props => props.BtnRadius + 'px'};  //border 둥글기 px


`

const Button = ({children, wh, color, radius}) =>{
    return(
        <Button BtnWidth={wh[0]} BtnHeight={wh[1]} BtnColor={color} BtnRadius={radius} >{children}</Button>
    );
}

export default Button