import React, { useState } from 'react';
import { connect } from 'react-redux';
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';
import './sign-up.styles.scss';
import { signUpStart } from '../../redux/user/user.actions';

const SignUp = ({ signUpStart }) => {
  const [userCrednetials, setUserCredentials] = useState({
    displayName: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const { displayName, email, password, confirmPassword } = userCrednetials;

  const handleChange = (e) => {
    const { value, name } = e.target;
    setUserCredentials({ ...userCrednetials, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert("Pasword don't match");
      return;
    }

    signUpStart({ displayName, email, password });
  };

  return (
    <div className="sign-up">
      <h2>I already Have an account</h2>
      <span>Sing in with your email address and password</span>

      <form className="sign-up-form" onSubmit={handleSubmit}>
        <FormInput
          type="text"
          label="displayName"
          name="displayName"
          value={displayName}
          handleChange={handleChange}
          required
        />

        <FormInput
          type="email"
          label="email"
          name="email"
          value={email}
          handleChange={handleChange}
          required
        />

        <FormInput
          type="password"
          label="password"
          name="password"
          value={password}
          handleChange={handleChange}
          required
        />
        <FormInput
          type="password"
          label="confirmPassword"
          name="confirmPassword"
          value={confirmPassword}
          handleChange={handleChange}
          required
        />

        <CustomButton type="submit">SIGN UP</CustomButton>
      </form>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  signUpStart: (userCredentials) => dispatch(signUpStart(userCredentials)),
});

export default connect(null, mapDispatchToProps)(SignUp);
