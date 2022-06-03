import React, { useState } from 'react'

function Pushdata() {
    const [imgData, setImgData] = useState([])

    const types = ['image/png', 'image/jpeg', 'image/jpg']
    
    const ChangeHandler = (e) => {
        // e.preventDefault()
        console.log('img',e.target.value)
        const imgtest = e.target.value
        setImgData([...imgtest])
    }


    return (
        <>
        <label for="avatar">Choose a profile picture:</label>
        <br/>
        <input type="file"
               accept="image/png, image/jpeg"
               onClick={ChangeHandler}
       />
       <div>
           저는이미지{imgData}
       </div>
        </>
    )
}

export default Pushdata
