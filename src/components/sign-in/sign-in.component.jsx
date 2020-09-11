import React from 'react';
import FormInput from '../form-input/form-input.component'
import CustomButton from '../custom-button/custom-button.component';
import {auth, signInWithGoogle} from '../../firebase/firebase.utils'
import './sign-in.styless.scss';

class SignIn extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            email: '',
            password: ''
        }
    }

    handleChange = e => {
        const {value, name} = e.target
        this.setState({[name]: value})
    }
    
    handleSubmit = async e => {
        e.preventDefault();
        const {email, password} = this.state

        try{
            await auth.signInWithEmailAndPassword(email, password)
            this.setState({ email: '', password: ''})
        } catch(error){
            alert("Please register first - we can't see you here yet")
            this.setState({ email: '', password: ''})
            console.log(error)
        }
    }

    render(){
        return (
            <div className='sign-in'>
                <h2 className='title'>I already Have an account</h2>
                <span>Sing in with your email address and password</span>

                <form onSubmit={this.handleSubmit}>
                    <FormInput 
                        type="email" 
                        label="email"
                        name="email"
                        value={this.state.email} 
                        handleChange={this.handleChange} 
                        required />

                        <FormInput 
                        type="password" 
                        label="password"
                        name="password"
                        value={this.state.password} 
                        handleChange={this.handleChange} 
                        required />

                    <div className="buttons">
                        <CustomButton type="submit">Sign in</CustomButton>
                        <CustomButton onClick={signInWithGoogle} isGoogleSignIn>{' '}Sign in with Google{' '}</CustomButton>
                    </div>
                </form>
            </div>
        )
    }
}

export default SignIn;

