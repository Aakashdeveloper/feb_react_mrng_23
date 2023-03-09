import React,{Component} from 'react';
import './search.css';

class Search extends Component {
    render(){
        return(
            <>
                <div id="search">
                    <div id="logo">
                        <span>D!</span>
                    </div>
                    <div id="heading">
                        Search Place Near To You
                    </div>
                    <div id="dropdown">
                        <select>
                            <option>
                                ---Select City---
                            </option>
                        </select>
                        <select className="restSelect">
                            <option>
                                ---Select Restaurants---
                            </option>
                        </select>
                    </div>
                </div>
            </>
        )
    }
}

export default Search;