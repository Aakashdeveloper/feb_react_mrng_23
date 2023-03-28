import React,{Component} from 'react';
import {Link} from 'react-router-dom';

const url = "http://3.17.216.66:5000/api/auth/userinfo"

class Profile extends Component {
    constructor(props){
        super(props)

        this.state={
            user:''
        }
    }

    conditionalRender = () => {
        if(this.state.user.role){
            if(this.state.user.role === "Admin"){
                return(
                    <Link to="/users" className="btn btn-success">
                        Users
                    </Link>
                )
            }
        }
    }

    handleLogout = () => {
        sessionStorage.removeItem('ltk')
        sessionStorage.removeItem('rtk')
        this.props.history.push('/')
    }

    render(){
        if(sessionStorage.getItem('ltk') === null){
            this.props.history.push('/')
        }
        sessionStorage.setItem('rtk',this.state.user.role)
        return(
            <div className="container">
                <div className="panel panel-danger">
                    <div className="panel-heading">
                        Profile
                    </div>
                    <div className="panel-body">
                        <h1>Hi {this.state.user.name}</h1>
                        <h2>Your email Id is {this.state.user.email}</h2>
                        <h2>Your Phone Id is {this.state.user.phone}</h2>
                        <h2>Your role Id is {this.state.user.role}</h2>
                        {this.conditionalRender()} &nbsp;
                        <button className="btn btn-danger"
                        onClick={this.handleLogout}>
                            Logout
                        </button>
                    </div>
                </div>
            </div>
        )
    }


    //on page load 
    componentDidMount(){
        fetch(url,{
            method:'GET',
            headers:{
                'x-access-token':sessionStorage.getItem('ltk')
            }
        })
        .then((res) =>  res.json())
        .then((data) => {
            this.setState({
                user:data
            })
        })
    }

}

export default Profile