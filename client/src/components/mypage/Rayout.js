import React from 'react'

function Rayout({introInfo}) {
    return (
        <div className="designerIntroWrap">
            <div className="reputationInfo"></div>
            {introInfo.map(info => (
                <>
                <h5>{info.title}</h5>
                <div className="infoTagWrap">
                {info.list.map(item => (
                    <div className="roundItemTag">
                        {item}
                    </div>
                ))}
                </div>
                </>
            ))}
        </div>
    )
}

export default Rayout
