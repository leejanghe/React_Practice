import React from 'react'
import Lottie from 'lottie-react-web'
import animation from '../animation/animation.json'
import styled from 'styled-components'
import loading from '../animation/loading.json'
import boom from '../animation/boom.json'

const Wrapper = styled.div`
display: flex;
margin-top: 5rem;
`

function LottieTest() {
    return (
        <Wrapper>
        <Lottie 
            options={{
                animationData: animation
            }}
        />
        <Lottie 
            options={{
                animationData: loading
            }}
        />
         <Lottie 
            options={{
                animationData: boom
            }}
        />
        </Wrapper>
    )
}

export default LottieTest
