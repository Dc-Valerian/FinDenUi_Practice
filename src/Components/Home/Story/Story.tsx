import React from 'react'
import styled from 'styled-components'
import line from "../../Assets/line.png"
import Card from './Card'
import icon from "../../Assets/icon.png"
import nice from "../../Assets/nice2.png"


const Story = () => {
  return (
    <div>
        <Container>
            <Wrapper>
                <First>
                  <Title>
                    What's Our Story
                    <Imag>
                    <Img src={line}/>
                    </Imag>
                  </Title>
                  <Sub>Our company was founded in 2008. Water Brand bottle is great for drinking, cooking, activities, and <br />
                     even for children. The product is certified in 50 countries.</Sub>
                </First>
                <Second>
                    <Third>
                      <Card title='No Preservatives' img={icon} sub='Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eius, fugit!'/>
                      <Card title='No Preservatives' img={icon} sub='Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eius, fugit!'/>
                      <Card title='No Preservatives' img={icon} sub='Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eius, fugit!'/>
                    </Third>
                    <Pic src={nice}/>
                    <Fourth>
                      
                    </Fourth>
                </Second>
            </Wrapper>
        </Container>
    </div>
  )
}

export default Story

const Fourth = styled.div``

const Third = styled.div``

const Pic = styled.img``

const Second = styled.div`
display: flex;
justify-content: space-between;
`

const Sub = styled.div`
margin: 10px;
text-align: center;
color: grey;
font-size: 13px;
`

const Imag = styled.div`
display: flex;
align-items: center;
margin: 5px;
justify-content: center;
`

const Img = styled.img``

const Title = styled.div`
font-weight: 800;
font-size: 48px;
display: flex;
flex-direction: column;
`

const First = styled.div`
display: flex;
align-items: center;
flex-direction: column;
`

const Wrapper = styled.div``

const Container = styled.div`
display: flex;
justify-content: center;
align-items: center;
background-color: aliceblue;
margin-top: 70px;
margin-bottom: 30px;
`