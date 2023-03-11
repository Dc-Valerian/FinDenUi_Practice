import React from 'react'
import styled from 'styled-components'

const Story = () => {
  return (
    <div>
        <Container>
            <Wrapper>
                <First></First>
                <Second>
                    <Third></Third>
                    <Fourth></Fourth>
                </Second>
            </Wrapper>
        </Container>
    </div>
  )
}

export default Story

const Fourth = styled.div``

const Third = styled.div``

const Second = styled.div``

const First = styled.div``

const Wrapper = styled.div``

const Container = styled.div``