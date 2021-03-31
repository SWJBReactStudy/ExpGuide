import React, {useState} from 'react'
import styled from 'styled-components'


import GreenButton from '../../components/WholeBody/Buttons/ButtonGreen.jsx'
import BlueButton from '../../components/WholeBody/Buttons/ButtonBlue.jsx'
import RedButton from '../../components/WholeBody/Buttons/ButtonRed.jsx'

const FLEX = styled.div`
    display: flex;
`

const Container = styled.div`
    margin: 0 auto;

    //position
    margin-top: 10px;

    //size
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

// var ButtonMargin = '80px';


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


const MainSection = styled.div`
    width: 1170px;
    height: 600px;

    // position
    margin-top: 10px;

    border-radius: 30px;
    border: 1px solid #fafafa;
    background-color: #fce9e9;
    box-shadow: 0px 5px 53px -32px rgba(0,0,0,0.36);
`

// 함수 부분


const WholeBodyPage = () =>{

    const [Time, setTime] = useState(0)
    
    
    return(
        <Container>
            <FLEX>
                <SettingSection>
                    <Title>난이도를 선택하세요!</Title>
                    <FLEX>
                        {/* 텍스트는 각각의 버튼의 export에 있음 */}
                        <GreenButton onClick={()=>{setTime(15)} }>초보자</GreenButton> {/*익명함수 만들어서 setTime 함수 실행*/}
                        <BlueButton onClick={()=>{setTime(12)} }>중급자</BlueButton>
                        <RedButton onClick={()=>{setTime(10)} }>숙련자</RedButton>
                    </FLEX>
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



export default WholeBodyPage

//참고글 https://blog.nerdfactory.ai/2019/10/25/react-styled-components.html
//폰트어썸 사용하기 https://www.daleseo.com/react-font-awesome/ 
//설명 잘 되어있는 글 https://jae04099.tistory.com/164

//onClick={this.Lv3} 버튼 이벤트