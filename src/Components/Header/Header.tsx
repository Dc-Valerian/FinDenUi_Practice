import React from 'react'
import styled from 'styled-components'

const Header = () => {
  return (
    <div>
        <Container>
            <Wrapper>
                <Img>
                <Logo/>
                </Img>

                <NavHold>
                    <nav>Home</nav>    
                    <nav>About</nav>    
                    <nav>Solution
                    <Icon></Icon>    
                    </nav>    
                    <nav>Pages
                   <Icon></Icon>
                   </nav>
                   <nav>Contact</nav>    
                </NavHold>                
            </Wrapper>
        </Container>
    </div>
  )
}

export default Header

const Icon = styled.div``

const NavHold = styled.div``

const Img = styled.div``

const Logo = styled.img``

const Wrapper = styled.div``

const Container = styled.div``