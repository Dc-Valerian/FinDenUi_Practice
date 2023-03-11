import React from 'react'
import styled from 'styled-components'

const Online = () => {
  return (
    <div>
        <Container>
            <Wrapper>
                <First>
                    
                </First>
                <Second>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic, est!
                </Second>
            </Wrapper>
        </Container>
    </div>
  )
}

export default Online

const Second = styled.div``

const First = styled.div``

const Wrapper = styled.div`
background-color: aliceblue;
width: 90%;
display: flex;
justify-content: center;
align-items: center;
`

const Container = styled.div`
background-color: red;
width: 100%;
display: flex;
justify-content: center;
align-items: center;
margin-top: -38%;
z-index: 4;
`