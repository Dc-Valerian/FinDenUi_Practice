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
const Img = styled.img``

const Pic = styled.div`
margin-top: -50px;
box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;
`


const Container = styled.div`
display: flex;
align-items: center;
justify-content: center;
`