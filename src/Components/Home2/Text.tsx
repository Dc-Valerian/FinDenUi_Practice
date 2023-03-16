import React from 'react'
import styled from 'styled-components'
import bg from "../../Components/Assets/line.png"


const Text = () => {
  return (
    <div>
        <Container>
           
                <Txt>
                    Natural Mineral Water Comes From <br /> Underground Reserves, Bearing Nature's Own <br />
                    Original Purity! It Contributes.
                    <Line>
                        <Img src={bg}/>
                      
                    </Line>
                </Txt>
           
        </Container>
    </div>
  )
}

export default Text

const Img = styled.img``

const Line = styled.div`

`

const Txt = styled.div`
text-align: center;
line-height: 30px;
font-size: 25px;
/* background-color: red; */

`



const Container = styled.div`
/* background-color: aliceblue; */
display: flex;
justify-content: center;
align-items: center;
width: 100%;
margin-top: 40px;
margin-bottom: 30px;

@media screen and (max-width:500px) {
    margin-bottom: 10px;
}

@media screen and (max-width:768px) {
    /* background-color: blue; */
    margin-top: 90px;
}

`