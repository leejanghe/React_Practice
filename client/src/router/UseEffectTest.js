import React,{useState,useEffect} from 'react'

function UseEffectTest() {

    const [count, setCount] = useState(1)
    const [name, setName] = useState('')

    const handleCountUpdata = () => {
        setCount(count + 1)
    }

    const handleInputChange = (e) => {
        setName(e.target.value)
    }

    //렌더링 될때마다 매번 실행됨
    useEffect(() => {
        console.log('렌더링')
    })

       //렌더링 될때마다 매번 실행됨
       useEffect(() => {
        console.log('count가 바뀔때마다 실행됨')
    },[count])

       //렌더링 될때마다 매번 실행됨
       useEffect(() => {
        console.log('name이 바뀔때마다 실행됨')
    },[name])

    return (
        <div>
            <button onClick={handleCountUpdata}>update</button>
            <span>{count}</span>
            <input value={name} onChange={handleInputChange}/>
            <span>name : {name}</span>
        </div>
    )
}

export default UseEffectTest
