import React from 'react'
import styled from 'styled-components'
import logo from "../Assets/darklogo.png"
import img from "../Assets/nice3rm.png"


const Register = () => {
  return (
    <div>
      <Container>
        <Wrapper>
          <First>
            <Logo src={logo}/>
            <p>Welcome to our Platform</p>

            <Form>
              <h5>Name</h5>
              <Input placeholder='Please Input Your Name' type="text"/>
            </Form>
            <Form>
              <h5>Email</h5>
              <Input placeholder='Please Input Your Name' type="text"/>
            </Form>
            <Form>
              <h5>Address</h5>
              <Input placeholder='Please Input Your Name' type="text"/>
            </Form>
            <Form>
              <h5>Password</h5>
              <Input placeholder='Please Input Your Name' type="password"/>
            </Form>
            <Form>
              <h5>Confirm Password</h5>
              <Input placeholder='Please Input Your Name' type="password"/>
            </Form>
            <p>Don't Have an Account Yet..?
              <a href="">
                Sign Up
              </a>
            </p>
          </First>
          <Second>
            <Img src={img}/>
          </Second>
        </Wrapper>
      </Container>
    </div>
  )
}

export default Register
const Input = styled.input`
width: 430px;
height: 50px;
background-color:#EDF2F7;
border-radius: 5px;
border: none;
outline: none;
padding-left: 15px;
`

const Form = styled.div`
display: flex;
flex-direction: column;
margin: 10px 0px 10px 0px;

h5{
  margin: 0;
  margin-bottom: 5px;
  text-align: start;
  color:gray;

}
`

const Img = styled.img`
width: 100%;
display: flex;
justify-content: center;
align-items: center;
`

const Logo = styled.img``

const Second = styled.div`
/* background-color: ; */
height: 100%;
width: 100%;
`

const First = styled.div`
background-color: white;
height: 100%;
width: 100%;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
border-radius: 20px;
`

const Wrapper = styled.div`
width:80%;
height: 90vh;
background-color: whitesmoke;
display: flex;
justify-content: center;
align-items:center;
border-radius: 20px;
`

const Container = styled.div`
width: 100%;
height: 100vh;
background-color: grey;
display: flex;
justify-content: center;
align-items: center;
`