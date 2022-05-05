import React,{useState, useEffect} from 'react'
import DesignNavbar from './DesignNavbar'
import styled from 'styled-components'
import DetailReq from './DetailReq'
import DetailPay from './DetailPay'
import DetailWork from './DetailWork'

export const DetailLayout = styled.div`
max-width:1280px;
margin:auto;
`
const MainttextTag = styled.div`
margin-bottom:2rem;
font-weight:700;
font-size:1.3rem;
color:#333333;
margin-top: 2rem;

.backgroundNav{
    color: red;
    background-color: yellow;
}
`


function Tabtab() {
  
const [active, setActive] = useState('1')
const [showRequest, setShowRequest] = useState(false)
const [showPayment, setShowPayment] = useState(false)
const [showWork, setShowWork] = useState(false)

const navs = [
    {id:'1', title:"로티애니메이션" },
    {id:'2',  title:"테이블1" },
    {id:'3', title:"테이블2" },
]

    useEffect(() => {
        setShowRequest(false)
        setShowPayment(false)
        setShowWork(false)

        if(active==='1'){
            setShowRequest(true)
        }else if(active==='2'){
            setShowPayment(true)
        }else if(active==='3'){
            setShowWork(true)
        }
        console.log('useEffect')
    },[active])

    // console.log(1,navs[0].title)
    console.log('어떤반응?')
  return (
      <>
      <DetailLayout>
          <MainttextTag>
              <div className="backgroundNav">
              메뉴 &nbsp;&gt;&nbsp;{
            navs[active-1].title
          }
            
            </div>
          
          </MainttextTag>
      <DesignNavbar
      setActive={setActive} 
      navs={navs} 
      active={active}
      />
      {showRequest&& <DetailReq/>}
      {showPayment&& <DetailPay/>}
      {showWork&& <DetailWork navs={navs}/>}
      </DetailLayout>
      </>
  )
}

export default Tabtab