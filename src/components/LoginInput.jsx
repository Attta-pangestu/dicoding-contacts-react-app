import React from 'react';
import Proptypes from 'prop-types';

class LoginInput extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
        }

        this.onChangeEmailHandler = this.onChangeEmailHandler.bind(this);
        this.onChangePasswordHandler = this.onChangePasswordHandler.bind(this);
        this.onSubmitHandler = this.onSubmitHandler.bind(this);
    }

    onChangeEmailHandler(e) {
        const email = e.target.value;
        this.setState({email});
    }

    onChangePasswordHandler(e) {
        const password = e.target.value;
        this.setState({password});
    }

    onSubmitHandler(e) {
        e.preventDefault();
        this.props.login(this.state);
    }

    render() {
        return(
            <form className='login-input' onSubmit={this.onSubmitHandler}>
                <input type="email" placeholder='email...' value={this.state.email} onChange={this.onChangeEmailHandler}  />
                <input type="password" placeholder='password...' value={this.state.password} onChange={this.onChangePasswordHandler}  />
                <button>Login</button>
            </form>
        );
    }
}

LoginInput.propTypes = {
    login : Proptypes.func.isRequired, 
}



export default LoginInput;