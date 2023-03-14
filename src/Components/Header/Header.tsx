import React from 'react'
import styled from 'styled-components'
import logo from "../Assets/logo1.png"


const Header = () => {
  return (
    <div>
      <Container>
        <Wrapper>
          <Logo src={logo}/>

          <NavWrapper>
            <Nav></Nav>
          </NavWrapper>
        </Wrapper>
      </Container>
    </div>
  )
}

export default Header
const Nav = styled.div``

const NavWrapper = styled.div``

const Logo = styled.img``


const Wrapper = styled.div`
display: flex;
align-items: center;
width: 90%;
height: 100%;
justify-content: space-between;
position: relative;
`

const Container = styled.div`
width: 100%;
position: sticky;
z-index: 9999;
top: 0;
height: 53px;
background-color:#030614;
box-shadow: rgba(0, 0, 0, 0.05) 0px 1px 2px 0px;
display: flex;
justify-content: center;
align-items: center;
`