import React from 'react'
import styled from 'styled-components'
import line from "../../Assets/line.png"
import Card from './Card'
import icon from "../../Assets/icon.png"
import icon1 from "../../Assets/icon2.png"
import icon3 from "../../Assets/icon05.png"
import icon4 from "../../Assets/icon06.png"
import icon5 from "../../Assets/icon3.png"
import nice from "../../Assets/nice2.png"
import line1 from "../../Assets/line1.png"


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
                      <Card title='Add Micro Mineral' img={icon1} sub='Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eius, fugit!'/>
                      <Card title='Natural Quantity' img={icon3} sub='Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eius, fugit!'/>
                    </Third>
                    <Pic src={nice}/>
                    <Third>
                    <Card title='Antioxodant' img={icon4} sub='Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eius, fugit!'/>
                    <Card title='All Vitamins' img={icon5} sub='Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eius, fugit!'/>
                    <Card title='Taste Like Home' img={icon} sub='Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eius, fugit!'/>
                    </Third>
                </Second>
            </Wrapper>
        </Container>
    </div>
  )
}

export default Story


const Third = styled.div`
display: flex;
flex-wrap: wrap;
align-items: center;
flex-direction: column;
margin-top: 50px;
margin-right: 40px;
margin-left: 40px;
`

const Pic = styled.img`
 @media screen and (max-width: 500px) {
  display: none;
}
`

const Second = styled.div`
display: flex;
flex-wrap: wrap;
justify-content: space-between;
margin-top: 40px;

@media screen and (max-width: 500px) {
  margin-top:-10px;
}
`

const Sub = styled.div`
margin: 10px;
text-align: center;
color: grey;
font-size: 15px;
 @media screen and (max-width: 500px) {
  font-size: 13px;
  text-align: center;
  /* padding: 5px; */
  margin-right: 10px;
  margin-left: 10px;
 }
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
 
 @media screen and (max-width: 500px) {
  font-weight: 800;
  font-size: 33px;
  text-align: center;
 }
`

const First = styled.div`
display: flex;
align-items: center;
flex-direction: column;
`

const Wrapper = styled.div`
`

const Container = styled.div`
display: flex;
justify-content: center;
align-items: center;
/* background-color: aliceblue; */
/* background-image: url(${line1}); */
margin-top: 70px;
margin-bottom: 30px;
`