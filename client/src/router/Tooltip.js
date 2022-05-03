import React,{useState} from 'react'
// import { ToolTipContainer } from '../components/ToolTipContainer'

function Tooltip() {

    const [showTooltip, setShowTooltip] = useState(false)
    return (
        <div>
            <span>물음표에 마우스를 올려보세요!
            <p onMouseOver={(e)=>setShowTooltip(true)} onMouseLeave={(e)=>setShowTooltip(false)}>?</p>
            </span>
            { showTooltip && <ToolTipContainer text={
            <>
                    <span>신기하다 툴팁 구현!</span><br/>
                    <span>저는 툴팁입니다!</span><br/>
                    <span>많이 이용하자!</span>
            </>
            }/>
            }
        </div>
    )
}

export const ToolTipContainer = ({ text }) => {
    return (
        <div className="toolTipContainer">
            {text}
        </div>
    )
}


export default Tooltip

            