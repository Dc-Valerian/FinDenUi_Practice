import React from 'react'
import styled from 'styled-components'
import GlobalButton from '../../Global/GlobalButton'

const Online = () => {
  return (
    <div>
        <Container>
            <Wrapper>
                <First>
                    <Right>
                        <Title>
                        Get The Desktop Version      
                      </Title>                    
                    <p>
                    We're constantly improving our trading platform, trying to make it the best on the market
                    </p>
                    </Right>
                    <Left>
                    <GlobalButton name='Download Now' bcc='white' border='none' cl="#644FF6"/>
                     <p>
                            500+ credit at first sign up 
                        </p>
                    </Left>
                </First>
                <Second>
                 <Text>
                 Online Banking In A Way That Is {"  "}
                 <span>
                 SuperCharged
                 </span>
                 </Text>
                 <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis quaerat harum eaque
                 </p>
                 <Sub>
                 50% Off For Your Brand New Account In Finden {" "}
                 <span>
                 Sign Up Today
                 </span>
                 </Sub>
                </Second>

            </Wrapper>
        </Container>
    </div>
  )
}

export default Online
const Sub = styled.div`
color: white;
 span{
    font-size: 18px;
    color:#644FF6 ;
 }
`

const Text = styled.div`
font-size: 35px;
font-weight: 600;
color: white;

span{
    font-size: 39px;
    color:#644FF6 ;
}
`

const Left = styled.div`
p{
    margin: 0;
}
`
const Title = styled.div`
font-size: 35px;
font-weight: 600;
color: white;
`

const Right = styled.div`
/* margin-top: 20px; */

p{
    color: white;
}
`

const Second = styled.div`
margin-top: 80px;
display: flex;
flex-direction: column;
/* background-color: azure ; */
align-items: center;
justify-content: center;    

p{
    font-size: 15px;
    color: white;
    margin: 15px;
}
`

const First = styled.div`
display: flex;
justify-content: space-between;
background-color: #644FF6;
align-items: center;
border-radius: 20px;
width: 90%;
height: 100px;
padding: 30px;
margin-top: 30px;
`

const Wrapper = styled.div`
/* background-color: aquamarine; */
width: 90%;
display: flex;
justify-content: center;
flex-direction: column;
align-items: center;
`

const Container = styled.div`
/* background-color: red; */
width: 100%;
display: flex;
justify-content: center;
align-items: center;
margin-top: -38%;
z-index: 4;
`