import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import Footer from './Footer';
import Home from '../Component/Home/Home';
import Listing from '../Component/listing/listing';
import Details from '../Component/Details/details';
import PlaceOrder from '../Component/orders/placeOrder';
import ViewOrder from '../Component/orders/viewOrder';
import Login from './login/Login';
import Register from './login/Register';

const Routing = () => {
    return(
        <BrowserRouter>
            <Route exact path="/" component={Home}/>
            <Route path="/listing/:mealId" component={Listing}/>
            <Route path="/details" component={Details}/>
            <Route path="/viewBooking" component={ViewOrder}/>
            <Route path="/placeOrder/:restName" component={PlaceOrder}/>
            <Route exact path="/login" component={Login}/>
            <Route exact path="/register" component={Register}/>
            <Footer/>
        </BrowserRouter>
    )
}

export default Routing;