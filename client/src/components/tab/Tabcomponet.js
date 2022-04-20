import React from 'react'




function Tabcomponet({clickevent,obj,tab}) {
    return (
        <div>
            <div>
                <li onClick={()=>clickevent(0)}>1번나와랏!</li>
                <li onClick={()=>clickevent(1)}>2번나와랏!</li>
                <li onClick={()=>clickevent(2)}>3번나와랏!</li>
            </div>
            <div>
            {obj[tab.active]}
            </div>
        </div>
    )
}

export default Tabcomponet
