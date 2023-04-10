import React,{Component} from 'react';
import {connect} from 'react-redux';
import {movieList} from '../actions/actionFile';
import DisplayComponent from '../component/DisplayComponent';

class Home extends Component {

    //calling action 
    componentDidMount(){
        this.props.dispatch(movieList())
    }

    render(){
        return(
            <div>
                <h1>Redux</h1>
                <DisplayComponent datalist={this.props.mydata}/>
            </div>
        )
    }


}
// here we will latest state  from store;
function mapStateToProps(state){
    console.log(state)
    return{
        mydata:state.films
    }
}


export default connect(mapStateToProps)(Home)