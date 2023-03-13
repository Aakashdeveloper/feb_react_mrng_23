import React,{Component} from 'react';
import './quickSearch.css';
import QuickDisplay  from './QuickDisplay';

const base_url = "http://3.17.216.66:4000";

class QuickSearch extends Component {

    constructor(){
        super()

        this.state={
            mealType:''
        }
    }

    render(){
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
                    <QuickDisplay mealData={this.state.mealType}/>
                </div>
            </div>
            </>
        )
    }

    // api call on pageload 
    componentDidMount(){
        fetch(`${base_url}/quicksearch`, {method:'GET'})
        .then((res) => res.json())
        .then((data) => {
            this.setState({mealType:data})
        })
    }
}

export default QuickSearch;