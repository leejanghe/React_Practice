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
    },[active])



  return (
      <>
      <DetailLayout>
      <MainttextTag>저는 탭기능 입니당!</MainttextTag>
      <DesignNavbar
      setActive={setActive} 
      navs={navs} 
      active={active}
      />
      {showRequest&& <DetailReq/>}
      {showPayment&& <DetailPay/>}
      {showWork&& <DetailWork/>}
      </DetailLayout>
      </>
  )
}

export default Tabtab