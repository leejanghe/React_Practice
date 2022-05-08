import React from 'react'
import styled from 'styled-components'

export const DetailNavTag =styled.div`
  font-weight: bold;
  display: grid;
  grid-template-columns:1fr 1fr 1fr;
  justify-content:space-between;
  align-items: center;
  text-align:center;
  margin:auto;
  margin-bottom:3rem;
  color:#333333;
  cursor: pointer;
 
 .navItem {
     padding:1rem ;
     border:1px solid #CBCBCB;
 }

 .activeNav {
    color:#fff;
    background-color: #48BEDF;
}
`


function DesignNavbar({ setActive, navs }) {
    const clickHandler = (e) => {
        const target = e.currentTarget.classList

        if(target.contains('activeNav')){
            return false
        }else{
            document.querySelectorAll('.navItem').forEach((item) => {
                if(item.classList.contains('activeNav')){
                    item.classList.remove('activeNav')
                }else{
                    return false
                }
            })
            
            target.add('activeNav')
            setActive(target[1])
        }
    }
    // console.log(1,navs.title)
    return (
        <DetailNavTag>
            {navs.map((item, idx) => (
                <>
                <div id={item.id} className={`navItem ${item.id} ${idx===0 ? 'activeNav' : ''}`} onClick={clickHandler}>
                    <span>{item.title}</span>
                </div>
                </>
            ))}
        </DetailNavTag>
    )
}

export default DesignNavbar