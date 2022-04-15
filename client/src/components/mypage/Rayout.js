import React from 'react'
import styled from 'styled-components'


const IntrBox = styled.div`
width:1190px;
height:126px;
/* background-color:#E2F7FD; */
margin:auto;
margin-top:30px;
border-radius:5px;
border: 3px solid #E2F7FD;
display: flex;
justify-content:space-around ;
align-items:center;

`

const GridBox = styled.div`
/* display:flex; */
flex-direction:column;

>p{
font-size: 1.5rem;
color:#48BEDF;
}

>h3{
  font-weight:300;
  font-size:1rem ;
}
`

const WrapIntro = styled.div`
display:grid;
grid-template-columns:500px 500px;
/* gap:10px; */
border-top:2px solid #D8D8D8 ;
width:1190px;
margin:auto ;
margin-top:39px;
padding-top:30px;
justify-content:space-around;

`

const IntoTagWrap = styled.div`
display:flex;
margin:10px;
>div{
  display:inline-block ;
    padding-top: 27;
    padding-bottom:28;
    background-color:#E2F7FD;
    padding: 8px;
    margin-bottom:27px;
    margin-right:12px;
    border-radius:20px;
}
`


function Rayout({introInfo,introText}) {
    return (
        <div>
         <IntrBox>
         {introText.map(info => (
             <GridBox>
             <h3>{info.title}</h3>
             <p>{info.contents}</p>
             </GridBox>
         ))}
         </IntrBox>
         
         <WrapIntro>{introInfo.map(info => (
             <GridBox>
             <h3>{info.title}</h3>
             <IntoTagWrap>
             {info.list.map(item => (
                 <div>
                     {item}
                 </div>
             ))}
             </IntoTagWrap>
             </GridBox>
         ))}</WrapIntro>
       </div>
       )
     }


export default Rayout












