import React from 'react'
import Rayout from './../components/mypage/Rayout'

function Mypage() {

    const introInfo = [
        {title:'보유 스킬', list:['React', 'Java Script', 'PhotoShop']},
        {title:'선호 스타일', list:['Bright', 'Joyful', 'Simple']},
        {title:'선호 업종', list:['Cafe', 'Brunch', 'Wine Bar']},
        {title:'zhzhzh', list:['Cafe', 'Brunch', 'Wine Bar']},
    ]

    return (
        <div>
            <Rayout introInfo={introInfo}/>
        </div>
    )
}

export default Mypage
    

  
