import React from 'react'

function Debuger() {

    // function sum(num){
    //     let total = 0;
    //     for(let i = 0; i < num; i++){
    //         total += i;
    //         printTotal(total);
    //     }
    // }

    // function printTotal(num){
    //     console.log('예상치 못한 버그그')
    //     console.log(`total : ${num}`)
    // }

    // const result = sum(3);
    // console.log(result);

    function add(x,y){
        return x + y;
    }

    const result = add(20,14);
    console.log('답' ,result);


    return (
        <div>
            {result}
        </div>
    )
}

export default Debuger
