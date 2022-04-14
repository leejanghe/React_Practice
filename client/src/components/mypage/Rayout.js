import React from 'react'
import styled from 'styled-components'


const Wrapper = styled.div`
margin: 0 auto;
text-align: center;
`

const JobTag = styled.div`
/* display: flex; */
justify-content: center;
`


function Rayout({introInfo,introInfo2}) {
    return (
        <Wrapper>
            <JobTag>
            {introInfo2.map(info => (
                <>
                <h2>{info.title}</h2>
                <p>{info.content}</p>
                </>
            ))}
            </JobTag>
            {introInfo.map(info => (
                <>
                <h1>{info.title}</h1>
                <div className="infoTagWrap">
                {info.list.map(item => (
                    <div className="roundItemTag">
                        {item}
                    </div>
                ))}
                </div>
                </>
            ))}
        </Wrapper>
    )
}

export default Rayout
