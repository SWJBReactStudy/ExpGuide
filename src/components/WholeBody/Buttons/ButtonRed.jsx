import React from 'react'
import styled from 'styled-components'

const BtnLv3 = styled.button`
    background-color: #fa788a;
    border: none;
    
    //size
    width: ${props => props.BtnWidth + 'px'}; //200px 버튼 width를 길이를 결정하는 props 생성
    height: ${props => props.BtnHeight + 'px'}; //80px 버튼 height를 길이를 결정하는 props 생성

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

const RedButton = ({children, Width, Height, setTime }) =>{ {/*useStae 요소들을 가져올 필요 없음 - setTime이라는 함수는 이미 값을 설정하는 함수인데 그거 자체를 넘겨주었기 때문에*/}

    return(
        <div>
            <BtnLv3 BtnWidth={Width} BtnHeight={Height} onClick={()=>{setTime(10)}}>{children}</BtnLv3>
        </div>
        
    )
    
}

export default RedButton;