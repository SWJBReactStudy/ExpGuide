import React from 'react'
import styled from 'styled-components'
import './style.css'

const FLEX = styled.div`
    display: flex;
`

const Container = styled.div`
    margin: 0 auto;
    width: 1200px;
    height: 100%;
`

const SettingSection = styled.div`
    width: inherit;
    height: 200px;

    background-color: #fce9e9;
    border-radius: 15px;
    border: 1px solid #fafafa;

    box-shadow: 0px 5px 53px -32px rgba(0,0,0,0.36);

`

//제목
const Title = styled.p`
    

    //size
    width: 220px;
    height: 30px;

    // position
    margin-left: 27%;
    margin-top: 10px;

    padding-top: 5px;

    //property
    font-size: 20px;
    text-align: center;
    background-color: #fff9f9;

    border-radius: 10px;
`

const MainSection = styled.div`
    background-color: #fff;
    border-radius: 30px;
    border: 1px solid #ddd;

    box-shadow: 0px 5px 53px -32px rgba(0,0,0,0.36);
`


//난이도 별 버튼
// var ButtonMargin = '80px';
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

//타이머 부분
const TimerSetting = styled.div`

    //position
    margin-left: 20px;
    
    //size
    width: 430px;
    //property
    background-color: #fce9e9;
    border-radius: 15px;
    border: 1px solid #fafafa;
`


// 함수 부분


const MainPage = () =>{
    
    
    return(
        <Container>
            <FLEX>
                <SettingSection>
                    <Title>난이도를 선택하세요!</Title>
                    <BtnLv1 >초보자</BtnLv1>
                    <BtnLv2 >중급자</BtnLv2>
                    <BtnLv3 >숙련자</BtnLv3>
                </SettingSection>

                <TimerSetting>
                    <Title>타이머</Title>
                    
                    {/* {Time} */}
                </TimerSetting>
            </FLEX>
            <MainSection>
                
            </MainSection>
            
        </Container>
    )
}



export default MainPage

//참고글 https://blog.nerdfactory.ai/2019/10/25/react-styled-components.html
//폰트어썸 사용하기 https://www.daleseo.com/react-font-awesome/ 
//설명 잘 되어있는 글 https://jae04099.tistory.com/164

//onClick={this.Lv3} 버튼 이벤트