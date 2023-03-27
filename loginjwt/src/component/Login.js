import React,{Component} from 'react';

const url = "http://3.17.216.66:5000/api/auth/login"

class Login extends Component {
    constructor(props){
        super(props)

        this.state={
            email:'yash@gmail.com',
            password:'',
            message:''
        }
    }

    handleChange = (event) =>{
        this.setState({[event.target.name]:event.target.value})
    }

    register =()=>{
        fetch(url,{
            method:'POST',
            headers:{
                'accept':'application/json',
                'Content-Type':'application/json'
            },
            body:JSON.stringify(this.state)
        })
        .then((res) => res.json())
        .then((data) => {
            if(data.auth === false){
                this.setState({message:data.token})
            }else{
                sessionStorage.setItem('ltk',data.token);
                this.props.history.push('/profile')
            }
        })

    }

    render(){
        return(
            <>
                <div className="container">
                    <div className="panel panel-success">
                        <div className='panel-heading'>
                            <h3>Login</h3>
                        </div>
                        <div className='panel-body'>
                            <div className='row'>
                                <h2 style={{color:'red'}}>{this.state.message}</h2>
                                <div className='form-group col-md-6'>
                                    <label>Email</label>
                                    <input className='form-control' name="email" value={this.state.email}
                                    onChange={this.handleChange}/>
                                </div>
                                <div className='form-group col-md-6'>
                                    <label>Password</label>
                                    <input className='form-control' name="password" value={this.state.password}
                                    onChange={this.handleChange}/>
                                </div>
                                <button className="btn btn-info" onClick={this.register}>
                                    Login
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                

            </>
        )
    }
}



export default Login;