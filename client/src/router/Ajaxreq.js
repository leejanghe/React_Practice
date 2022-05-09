import React,{useState, useEffect} from 'react'
import axios from 'axios'

function Ajaxreq() {

    const [data, setData] = useState([])


    useEffect(() => {
        axios.get('https://codingapple1.github.io/shop/data2.json')
        .then(data => {
            setData(data.data)
            console.log(data)
        })
    } , [])

    const handleClick = () => {
        setData([...data, {name: '새로운 상품'}])
    }

    // {id: 3, title: 'Flowey', content: 'only 5 inches', price: 120000}
    return (
        <div>
            <button onClick={handleClick}>클릭!</button>
            {
                data.map(item => <div>
                    <span>{item.id}</span>
                    <span>{item.title}</span>
                    <span>{item.content}</span>
                    <span>{item.price}</span>
                </div>)
            }
        </div>
    )
}

export default Ajaxreq
