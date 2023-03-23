import React,{useState} from 'react';

function HooksComponent(){

    const [title] = useState('Hooks App');
    const [count,setCount] = useState(0)
    const [count1,setCount1] = useState(0)

    const updateCount = () => {
        setCount(count+1)
    }

    return(
        <>
            <h1>{title}</h1>
            <h2>{count}</h2>
            <button onClick={updateCount}>
                Counter
            </button>
            <h2>{count1}</h2>
            <button onClick={() => {setCount1(count1+1)}}>
                Counter
            </button>
        </>
    )

}

export default HooksComponent;