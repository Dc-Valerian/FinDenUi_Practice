import React from 'react'
import styled from 'styled-components'

interface props{
    name:string
    bcc:string
    border:string
}


const GlobalButton:React.FC<props> = ({name,bcc,border}) => {
  return (
    <div>
        <Button bcc={bcc} border={border}>
            {name}
        </Button>
    </div>
  )
}

export default GlobalButton

const Button = styled.button<{bcc:string;border:string}>`
background-color: ${(props)=>props.bcc};
height: 45px;
margin-top: 10px;
width: 130px;
cursor: pointer;
font-weight: bold;
font-size: 15px;
margin: 5px;
color: white;
outline: none;
border:${(props)=>props.border};
border-radius: 30px;
transition: all 350ms;

:hover{
  transform: scale(0.98);
}

@media screen and (max-width:500px) {
  width: 290px;
}
`