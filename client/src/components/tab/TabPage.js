import React,{useState} from 'react'
import Tabcomponet from './Tabcomponet'
import styled from 'styled-components'
import TabFirst from './TabFirst'
import TabTwo from './TabTwo'
import TabThree from './TabThree'

const TabWrapper = styled.div`
max-width: 700px;
margin: 0 auto;
display: flex;
`



function TabPage() {


    const [tab, setTab] = useState({
        active:0,
    })

    const obj = {
        0: <TabFirst />,
        1: <TabTwo />,
        2: <TabThree />
    }
    
    const clickevent = (e) => {
        setTab({active:e})
        console.log(e)
    }



    return (
        <TabWrapper>
            <Tabcomponet obj={obj} clickevent={clickevent} tab={tab}/>
        </TabWrapper>
    )
}

export default TabPage
