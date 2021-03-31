import React from 'react'
import styled from 'styled-components'


const BtnLv2 = styled.button`
    background-color: #5c71cf;
    border: none;
    
    //size
    width: ${props => props.BtnWidth + 'px'}; //200px 버튼 width를 길이를 결정하는 props 생성
    height: ${props => props.BtnHeight + 'px'}; //80px 버튼 height를 길이를 결정하는 props 생성
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

const BlueButton = ({children, Width, Height, setTime }) => { {/*useStae 요소들을 가져올 필요 없음 - setTime이라는 함수는 이미 값을 설정하는 함수인데 그거 자체를 넘겨주었기 때문에*/}

    return (
        <div>
            <BtnLv2  BtnWidth={Width} BtnHeight={Height} onClick={()=>{setTime(12)}}>{children}</BtnLv2>
        </div>

    )

}

export default BlueButton;