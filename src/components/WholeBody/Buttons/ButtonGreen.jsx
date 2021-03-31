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



const GreenButton = ({children, setTime}) =>{ {/*useStae 요소들을 가져오기 않음 - setTime이라는 함수는 이미 값을 설정하는 함수인데 그거 자체를 넘겨주었기 때문에*/}

    return(
        <div>
            <BtnLv1 onClick={()=>{setTime(15)}}>{children}</BtnLv1>
        </div>
        
    )
    
}

export default GreenButton;