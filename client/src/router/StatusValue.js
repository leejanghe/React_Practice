import React,{useState} from 'react'
import styled from 'styled-components'

function StatusValue() {

const [data, setData] = useState([
       {id:0, title:'가나다', amount:'34333', status:'PAYMENT_STATUS_001',regDt:'2021.09.12 13:22'},
       {id:1, title:'헤이헤이', amount:'50000', status:'PAYMENT_STATUS_002',regDt:'2021.09.12 13:22'},
       {id:2, title:'자자자', amount:'444210', status:'PAYMENT_STATUS_001',regDt:'2021.09.03 10:22'},
       {id:3, title:'가나다', amount:'330442', status:'PAYMENT_STATUS_003',regDt:'2021.10.12 14:32'},
])


    return (
        <>
        <div>
            {
                data.map(e=>(
                    <div key={e.id}>
                        <p>{e.id}</p>
                        <p>{e.title}</p>
                        <p>{e.amount}</p>
                        <p>{e.regDt}</p>
                        {
                            e.status === 'PAYMENT_STATUS_001'?(<p>대기대기!</p>)
                        :   e.status === 'PAYMENT_STATUS_002'?(<p>완료!!!</p>)
                        :   (<p>취소취소!</p>)
                        }
                    </div>
                ))
            }
        </div>
        </>
    )
}

export default StatusValue
