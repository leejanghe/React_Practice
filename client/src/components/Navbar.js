import React from 'react'
import {Link} from 'react-router-dom'
import styled from 'styled-components'

const HeaderTag = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 50px;
    background-color: #b6bece;
    font-size: 20px;
    font-weight: bold;
    text-decoration: none;
    color: inherit;
    /* border-top-left-radius: 1em;
    border-top-right-radius: 1em; */
    box-shadow: rgba(0, 0, 0, 0.07) 0px 1px 2px, rgba(0, 0, 0, 0.07) 0px 2px 4px, rgba(0, 0, 0, 0.07) 0px 4px 8px, rgba(0, 0, 0, 0.07) 0px 8px 16px, rgba(0, 0, 0, 0.07) 0px 16px 32px, rgba(0, 0, 0, 0.07) 0px 32px 64px;
    > a {
        text-decoration: none;
        color: inherit;
        color: rgb(68, 37, 97);
        margin: 20px;
        &:hover {
            color:rgb(232, 110, 110);
        }
    }
`


function Navbar() {
    return (
        <HeaderTag>
             <Link to="/">Api 요청하기</Link>
             <Link to="/test1">useState</Link>
             <Link to="/test2">input 상태관리</Link>
             <Link to="/test3">lottie 애니메이션 출력</Link>
             <Link to="/test4">marker 구현</Link>
        </HeaderTag>
    )
}

export default Navbar