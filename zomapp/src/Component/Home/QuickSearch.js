import React,{Component} from 'react';
import './quickSearch.css';

class QuickSearch extends Component {
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
                    <div className="tileContainer">
                        <div className="tileComponent1">
                            <img src="https://i.ibb.co/8rPxkWP/lunch.jpg" alt="dinner"/>
                        </div>
                        <div className="tileComponent2">
                            <div className="componentHeading1">
                                <a href="">Lunch</a>
                            </div>
                            <div className="componentHeading2">
                                Start your day with exclusive breakfast options
                            </div>
                        </div>
                    </div>
                    <div className="tileContainer">
                        <div className="tileComponent1">
                            <img src="/images/snacks.png" alt="dinner"/>
                        </div>
                        <div className="tileComponent2">
                            <div className="componentHeading1">
                                <a href="">Lunch</a>
                            </div>
                            <div className="componentHeading2">
                                Start your day with exclusive breakfast options
                            </div>
                        </div>
                    </div>
                    <div className="tileContainer">
                        <div className="tileComponent1">
                            <img src="https://i.ibb.co/8rPxkWP/lunch.jpg" alt="dinner"/>
                        </div>
                        <div className="tileComponent2">
                            <div className="componentHeading1">
                                <a href="">Lunch</a>
                            </div>
                            <div className="componentHeading2">
                                Start your day with exclusive breakfast options
                            </div>
                        </div>
                    </div>
                    <div className="tileContainer">
                        <div className="tileComponent1">
                            <img src="https://i.ibb.co/FVhSTWK/breakfast.jpg" alt="dinner"/>
                        </div>
                        <div className="tileComponent2">
                            <div className="componentHeading1">
                                <a href="">Lunch</a>
                            </div>
                            <div className="componentHeading2">
                                Start your day with exclusive breakfast options
                            </div>
                        </div>
                    </div>
                    <div className="tileContainer">
                        <div className="tileComponent1">
                            <img src="https://i.ibb.co/YR0S6fV/drinks.jpg" alt="dinner"/>
                        </div>
                        <div className="tileComponent2">
                            <div className="componentHeading1">
                                <a href="">Lunch</a>
                            </div>
                            <div className="componentHeading2">
                                Start your day with exclusive breakfast options
                            </div>
                        </div>
                    </div>
                    <div className="tileContainer">
                        <div className="tileComponent1">
                            <img src="https://i.ibb.co/wchCHfb/snacks.jpg" alt="dinner"/>
                        </div>
                        <div className="tileComponent2">
                            <div className="componentHeading1">
                                <a href="">Lunch</a>
                            </div>
                            <div className="componentHeading2">
                                Start your day with exclusive breakfast options
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            </>
        )
    }
}

export default QuickSearch;