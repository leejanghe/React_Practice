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

const InputTag = styled.input`
width: 80%;
    height: 30px;
    border: 1px solid #ccc;
    border-radius: 4px;
    padding: 0 10px;
    font-size: 14px;
    outline: none;
    margin: .5rem;
    &:focus {
        border: 2px solid #0286ab;
}
`

const Result = styled.div`
background-color: #08285E;
font-size: 1.2rem;
border-radius: 3rem;
margin-top: 2rem;
color: #fff;
`

function InputState() {

    const [text, setText] = useState({
        name: '',
        email:''
    });

    const {name, email} = text;

    const onChange = (e) => {
        const {value, name} = e.target;
        setText({
            ...text,
            [name]: value
        });
    }

    const resetbtn = () => {
        setText({
            name:'',
            email:''
        });
    }

    return (
        <Wrapper>
            <InputTag
            name="name"
            onChange={onChange}
            placeholder="이름을 입력하세요"
            value={name}
            />
            <InputTag
            name="email"
            onChange={onChange}
            placeholder="이메일을 입력하세요"
            value={email}
            />
            <Btn 
            onClick={resetbtn}>reset</Btn>
            <Result>
                <p>이름:{name} 주소:({email})</p>
            </Result>
        </Wrapper>
    )
}

export default InputState
