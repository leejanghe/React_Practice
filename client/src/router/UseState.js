import React,{useState} from 'react'


function UseState() {

    const [num, setNum] = useState(0);

    const plustOnClick = () => {
        setNum(num + 1);
    }

    const minusOnClick = () => {
        setNum(num - 1);
    }
    
    return (
        <div>
            <h1>숫자 : {num}</h1>
            <button onClick={plustOnClick}>+1</button>
            <button onClick={minusOnClick}>-1</button>
        </div>
    )
}

export default UseState
