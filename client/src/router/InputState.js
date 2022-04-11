import React,{useState} from 'react'

function InputState() {

    const [text, setText] = useState({
        name: '',
        email:''
    });

    const {name, email} = text;

    const onChange = (e) => {
        const {value, name} = e.target;
        setText({
            ...text,
            [name]: value
        });
    }

    const resetbtn = () => {
        setText({
            name:'',
            email:''
        });
    }

    return (
        <div>
            <input
            name="name"
            onChange={onChange}
            placeholder="이름을 입력하세요"
            value={name}
            />
            <input
            name="email"
            onChange={onChange}
            placeholder="이메일을 입력하세요"
            value={email}
            />
            <button 
            onClick={resetbtn}>reset</button>
            <div>
                <p>이름:{name} 주소:({email})</p>
            </div>
        </div>
    )
}

export default InputState
