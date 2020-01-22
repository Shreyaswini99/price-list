import {React, Component} from 'react';
import './Login.css';
class Login extends Component{
    render(){
        return(
            <div class="main">
                <p class="sign" align="center">Login</p>
                <i class="email" type="email" align="center" placeholder="email id"/>
                <i class="password" type="password" align="center" placeholder="password"/> 
                <input button type="button" value="login" class="submit"/>
            </div>
        );
        
    }
}
export default Login;