import React,{useState,useEffect} from 'react';
import DisplayComponent from './displayComponent';
import UseTitle from './customeHooks';

const url = "http://3.17.216.66:4000/restaurants"

function HooksComponent(){

    const [title] = useState('Hooks App');
    const [count,setCount] = useState(0)
    const [count1,setCount1] = useState(0);
    const [restaurants, setRestaurants] = useState();
    const [record,setRecord] = useState(0)

    const updateCount=() =>{
        setCount(count+1)
        setCount(count+1)
    }
    
    const updateRecord=() =>{
        setRecord(count+1)
    }
    

    UseTitle(record)

    useEffect(() => {
        console.log("inside use effect11");
        fetch(url,{method:'GET'})
        .then((res) => res.json())
        .then((data) => {
            setRestaurants(data)
        })
    },[count1])

    

    return(
        <>
            <h1>{title}</h1>
            <h2>{count}</h2>
            <button onClick={updateCount}>
                Counter
            </button>
            <button onClick={updateRecord}>
                Counter
            </button>
            <h2>{count1}</h2>
            <button onClick={() => {setCount1(count1+1)}}>
                Counter
            </button>
            <DisplayComponent restData={restaurants}/>
        </>
    )

}

export default HooksComponent;