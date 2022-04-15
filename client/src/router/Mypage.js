import React from 'react'
import Rayout from './../components/mypage/Rayout'

function Mypage() {

    const introInfo = [
        {title:'동물', list:['원숭이', '강아지', '코끼리']},
        {title:'선호 스타일', list:['섹시', '시크', '시원한']},
        {title:'직업', list:['개발자', '디자이너', '연구원']},
        {title:'색상', list:['빨간', '노랑', '파랑']},
    ]


    const introText = [
        {title:'작업가능 시간', contents:'평일 00시~00시'},
        {title:'응답률', contents:'97%'},
        {title:'응답시간', contents:'대체로 6시간'},
        {title:'작업후기', contents:'★★★★☆'},
    ]

    return (
        <div>
            <Rayout introInfo={introInfo} introText={introText}/>
        </div>
    )
}

export default Mypage
    

  
