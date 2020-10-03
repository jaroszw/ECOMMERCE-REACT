import React from 'react';
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';
import { auth, createUserProfileDocument } from '../../firebase/firebase.utils';
import './sign-up.styles.scss';

class SignUp extends React.Component {
  constructor() {
    super();

    this.state = {
      displayName: '',
      email: '',
      password: '',
      confirmPassword: '',
    };
  }

  handleChange = (e) => {
    const { value, name } = e.target;
    this.setState({ [name]: value });
  };

  handleSubmit = async (e) => {
    e.preventDefault();
    const { displayName, email, password, confirmPassword } = this.state;
    if (password !== confirmPassword) {
      alert("Pasword don't match");
      return;
    }

    try {
      const { user } = await auth.createUserWithEmailAndPassword(
        email,
        password
      );

      await createUserProfileDocument(user, { displayName });
      console.log(displayName);

      this.setState = {
        displayName: '',
        email: '',
        password: '',
        confirmPassword: '',
      };
    } catch (error) {
      console.log(error, 'Problem with signing up');
    }
  };

  render() {
    const { displayName, email, password, confirmPassword } = this.state;

    return (
      <div className="sign-up">
        <h2>I already Have an account</h2>
        <span>Sing in with your email address and password</span>

        <form className="sign-up-form" onSubmit={this.handleSubmit}>
          <FormInput
            type="text"
            label="displayName"
            name="displayName"
            value={displayName}
            handleChange={this.handleChange}
            required
          />

          <FormInput
            type="email"
            label="email"
            name="email"
            value={email}
            handleChange={this.handleChange}
            required
          />

          <FormInput
            type="password"
            label="password"
            name="password"
            value={password}
            handleChange={this.handleChange}
            required
          />
          <FormInput
            type="password"
            label="confirmPassword"
            name="confirmPassword"
            value={confirmPassword}
            handleChange={this.handleChange}
            required
          />

          <CustomButton type="submit">SIGN UP</CustomButton>
        </form>
      </div>
    );
  }
}

export default SignUp;
