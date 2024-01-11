import React from 'react';
import Proptypes from 'prop-types';

class RegisterInput extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            email: '',
            password: '',
        }

        this.onChangeNameHandler = this.onChangeNameHandler.bind(this);
        this.onChangeEmailHandler = this.onChangeEmailHandler.bind(this);
        this.onChangePasswordHandler = this.onChangePasswordHandler.bind(this);
        this.onSubmitHandler = this.onSubmitHandler.bind(this);
    }

    onChangeNameHandler(e) {
        const name = e.target.value;
        this.setState({name});
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
        this.props.register(this.state);
    }

    render() {
        return(
            <form className='register-input' onSubmit={this.onSubmitHandler}>
                <input type="text" placeholder='nama seseorang...' value={this.state.name} onChange={this.onChangeNameHandler}  />
                <input type="email" placeholder='email...' value={this.state.email} onChange={this.onChangeEmailHandler}  />
                <input type="password" placeholder='password...' value={this.state.password} onChange={this.onChangePasswordHandler}  />
                <button>Register</button>
            </form>
        );
    }
}

RegisterInput.propTypes = {
    register : Proptypes.func.isRequired, 
}



export default RegisterInput;