import React from 'react'
import styled from 'styled-components'
import chart from "../../Assets/chart.png"

const Chart = () => {
  return (
    <div>
        <Container>
            <Pic>
                <Img src={chart}/>
            </Pic>
        </Container>
    </div>
  )
}

export default Chart
const Img = styled.img`

@media screen and (max-width: 500px) {
  width:100%;
  height: 100%;
  object-fit: cover;
  margin-top: 200px;
  background-color: gray;
  margin-bottom: 50px;
}

@media screen and (max-width: 768px) {
  width:100%;
  height: 100%;
  object-fit: cover;
  margin-top: 50px;
  background-color: gray;
  border-radius: 20px;
  margin-bottom: 20px;
  
}
`

const Pic = styled.div`
margin-top: -40px;
box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;

@media screen and (max-width: 500px) {
  margin-top: 0;
  
}
`


const Container = styled.div`
display: flex;
align-items: center;
justify-content: center;
`