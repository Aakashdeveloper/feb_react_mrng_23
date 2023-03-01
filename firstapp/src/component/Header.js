import React,{Component} from 'react';
import './Header.css'

class Header extends Component {

    render(){
        return(
            <>
                <header>
                    <div className="logo">React App</div>
                    <input/>
                    <div style={{color:'white',fontSize:'20px'}}>User Text Here</div>
                </header>
                <hr/>
            </>
        )
    }
    
}

export default Header;