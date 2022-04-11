import React,{useState} from 'react'
import styled from 'styled-components';

const Wrapper = styled.div`
width: 40%;
margin: 0 auto;
margin-top: 3rem;
display: flex;
flex-direction: column;
align-items: center;
`

const Btn = styled.button`
 -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  background: #0d6efd;
  color: #fff;
  margin: 0;
  padding: 0.5rem 1rem;
  font-family: 'Noto Sans KR', sans-serif;
  font-size: 1rem;
  font-weight: 400;
  text-align: center;
  text-decoration: none;
  border: none;
  border-radius: 4px;
  display: inline-block;
  width: auto;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
  cursor: pointer;
  transition: 0.5s;
  margin:.5rem;
`

const BtnWrap = styled.div`
display:flex;
`


function UseState() {

    const [num, setNum] = useState(0);

    const plustOnClick = () => {
        setNum(num + 1);
    }

    const minusOnClick = () => {
        setNum(num - 1);
    }
    
    return (
        <Wrapper>
            <h1>숫자 : {num}</h1>
            <BtnWrap>
            <Btn onClick={plustOnClick}>+1</Btn>
            <Btn onClick={minusOnClick}>-1</Btn>
            </BtnWrap>
        </Wrapper>
    )
}

export default UseState
