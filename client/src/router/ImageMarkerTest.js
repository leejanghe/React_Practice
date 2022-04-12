import React, {useState} from 'react'
import ImageMarker from 'react-image-marker'
import styled from 'styled-components'
import CustomMarker from '../components/CustomMarker'


const Wrapper = styled.div`
width: 30%;
margin: 0 auto;
margin-top: 3rem;
display: flex;
flex-direction: column;
align-items: center;
`

const Btn = styled.button`
width: 30%;
margin-top: 1rem;
`



// const CustomMarker = (a) => {


//     console.log(1,a)
//     return (
//         <>
//         <Marker>
//             <NumberTag>{a.itemNumber}</NumberTag>
//         </Marker>
//         {a.itemNumber}<input 
//              onChange={onChange}
//         />
//         </>
//     )
// }


function ImageMarkerTest(a) {

    const [markers, setMarkers] = useState([])
    const [text, setText] = useState('')

    const onChange = (e) => {
        console.log(1,e.target.value)
        console.log(2, markers)
        setText(e.target.value)
    }

    const inputDelete = (id) => {
        console.log(1,id)
       setMarkers(markers.filter(mark => mark.id !== id))
    }


    return (
        <>
        <Wrapper>
        <ImageMarker
        style={{backgroundColor: '#blue'}}
        src="https://www.newsworks.co.kr/news/photo/202002/433057_327801_345.jpg"
        markers={markers}
        onAddMarker={(marker) => setMarkers((prev) => [...prev, marker])}
        markerComponent={CustomMarker}
        />

<Btn disabled={!markers.length > 0} onClick={() => setMarkers([])}>
        Reset
</Btn>



    <div>
    {
    markers.length ===0 ?  <div>요청한게 없음</div> :
    markers && markers.map((markers => 
        (
            <div key={markers.id}>
                {markers.itemNumber}
            <input 
            onChange={onChange}
            />
            <button onClick={inputDelete}>삭제</button>
            <button>수정</button>
            <button>저장</button>
            </div>
        )
    ))}
    </div>
</Wrapper>

    </>
    )
}

export default ImageMarkerTest
