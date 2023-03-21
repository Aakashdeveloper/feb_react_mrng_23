import React,{Component} from 'react';
import axios from 'axios';
import './listing.css';
import ListingDisplay from './listingDisplay';
import CuisineFilter from '../filters/cuisineFilter';

const base_url = "http://3.17.216.66:4000"

class Listing extends Component{
    constructor(){
        super()

        this.state={
            restaurantList:''
        }
    }

    render(){
        return(
           <>
            <div className="row">
                <div id="mainListing">
                    <div id="filter">
                        <hr/>
                        <CuisineFilter/>
                        <hr/>
                    </div>
                    <ListingDisplay listData={this.state.restaurantList}/>
                </div>

            </div>
           </>
        )
    }

    componentDidMount(){
        let mealId = this.props.match.params.mealId;
        sessionStorage.setItem('mealId',mealId)
        axios.get(`${base_url}/restaurant?mealtype_id=${mealId}`)
        .then((res) =>  this.setState({restaurantList:res.data}))
    }
}

export default Listing
