import React from 'react'
import styled from 'styled-components'
import GlobalButton from '../../Global/GlobalButton'
import img1 from "../../Assets/hero1.png"
import img2 from "../../Assets/hero2.png"
import img3 from "../../Assets/hero3.png"

const Hero = () => {
  return (
    <div>
      <Container>
        <Wrapper>
          <First>
            Online Banking In A <br />
            Way That Is 
            <span>
              SuperCharged
            </span>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quidem molestiae officiis velit nisi! Quis animi dolores ducimus non adipisci temporibus pariatur voluptatibus cum repellendus est.
            </p>

            <GlobalButton name='Start Now' bcc='#644FF6' border='none' />
            <GlobalButton name='Learn More' bcc="blue" border='1px solid white'/>          
          </First>
          <Second>
            <Img/>
            <Img/>
            <Img/>
          </Second>
        </Wrapper>
      </Container>
    </div>
  )
}

export default Hero

const Img = styled.img``

const Second = styled.div``

const First = styled.div``

const Wrapper = styled.div``

const Container = styled.div`
width: 100%;

`