import React,{useEffect,useState} from 'react';
import './quickSearch.css';
import QuickDisplay  from './QuickDisplay';

const base_url = "http://3.17.216.66:4000";

function QuickSearch(){
    const [mealType,setMealType] = useState('')

    useEffect(() => {
        fetch(`${base_url}/quicksearch`, {method:'GET'})
        .then((res) => res.json())
        .then((data) => {
            setMealType(data)
        })
    },[])

    return(
        <>
        <div id="quickSearch">
            <span id="QuickSearchHeader">
                Quick Search
            </span>
            <span id="QuickSubHeader">
                Find Restaurant By MealType
            </span>
            <div>
                <QuickDisplay mealData={mealType}/>
            </div>
        </div>
        </>
    )
}

export default QuickSearch;