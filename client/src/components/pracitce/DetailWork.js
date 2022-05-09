import React, { useState } from 'react'
import Table2 from '../Table2'
import { Link } from 'react-router-dom'
import DetailNavTag from './DesignNavbar'

function DetailWork({navs}) {

    const [show, setShow] = useState(true)

    const closeTab = (e) => {
        if(show){
            document.querySelector('.backgroundNav')
            .style.display = 'none'
            setShow(false)
        }else{
            document.querySelector('.backgroundNav')
            .style.display = 'block'
            setShow(true)
        }
        
    }

    return (
        <>
        <Table2 />
        <h1>아래 클릭하면 텝메뉴를 사라지게 해보자!</h1>
        <button onClick={(e)=>{closeTab()}}>click me!</button>
        <Link to="/"><button>뒤로 가기 버튼!</button></Link>
        <h1>gdgdgd</h1>
        </>
    )
}

export default DetailWork
