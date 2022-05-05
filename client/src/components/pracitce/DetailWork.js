import React, { useState } from 'react'
import Table2 from '../Table2'
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
        </>
    )
}

export default DetailWork
