import React from 'react'
import Rayout from './../components/mypage/Rayout'

function Mypage() {

    const introInfo = [
        {title:'동물', list:['원숭이', '강아지', '코끼리']},
        {title:'선호 스타일', list:['섹시', '시크', '시원한']},
        {title:'직업', list:['개발자', '디자이너', '연구원']},
        {title:'색상', list:['빨간', '노랑', '파랑']},
    ]


    const introInfo2 = [
        {title:'당신은 어떤스타일?', content:'둥글둥글합니다'},
        {title:'아픈곳', content:'목 어깨 허리 다아파 ㅠ'},
        {title:'무슨일하나요?', content:'프론트 개발자입니다.'},
        {title:'키우는 동물', content:'고양이 키워요'},
    ]

    return (
        <div>
            <Rayout introInfo={introInfo} introInfo2={introInfo2}/>
        </div>
    )
}

export default Mypage
    

  
