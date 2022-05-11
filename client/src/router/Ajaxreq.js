import React,{useState, useEffect} from 'react'
import axios from 'axios'

function Ajaxreq() {

    const [data, setData] = useState([])


    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/posts/')
        .then(data => {
            setData(data.data)
            console.log(data)
        })
    } , [])    
       
        const handleClick = async () => {
                axios.post("https://jsonplaceholder.typicode.com/posts", {
                    title: '드디어 해결!!',
                    body: '저는 실험용입니다!!',
                    userId: '안녕하세요!!!',
                    id:101
                })
                .then(function (response) {
                     console.log(response);
                     let copy = [...data, {...response.data}]
                     setData(copy)
                }).catch(function (error) {
                    console.log(1,error);
                })      
        }

        
    
    return (
        <div>
            <button onClick={(e)=>handleClick(e)}>클릭!</button>
            {
                data.map(item => 
                <div key={item.id}>
                    <span>{item.userId}</span>
                    <span>{item.title}</span>
                    <span>{item.body}</span>
                </div>)
            }
        </div>
    )
}

export default Ajaxreq
