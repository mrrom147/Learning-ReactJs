import React from "react";

import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";
import {connect} from "react-redux";

import { auth, SignInWithGoogle } from "../../firebase/firebase.utity";

import {googleSigninStart, emailSigninStart} from "../../redux/user/user.actions";

import {
	SignInContainer,
	ButtonsBarContainer,
	SignInTitle
} from "./sign-in.styles";

class SignIn extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			email: "",
			password: ""
		};
	}

	handleSubmit = async event => {
		event.preventDefault();

		const { emailSigninStart } = this.props;
		const { email, password } = this.state;

		emailSigninStart(email, password);
	};

	handleChange = event => {
		const { value, name } = event.target;

		this.setState({ [name]: value });
	};

	render() {
		const {googleSigninStart} = this.props;
		return (
			<SignInContainer>
				<SignInTitle>I already have an account</SignInTitle>
				<span>Sign in with your email and password</span>

				<form onSubmit={this.handleSubmit}>
					<FormInput
						name="email"
						type="email"
						handleChange={this.handleChange}
						value={this.state.email}
						label="email"
						required
					/>
					<FormInput
						name="password"
						type="password"
						value={this.state.password}
						handleChange={this.handleChange}
						label="password"
						required
					/>
					<ButtonsBarContainer>
						<CustomButton type="submit"> Sign in </CustomButton>
						<CustomButton type="button" onClick={googleSigninStart} isGoogleSignIn>
							Sign in with Google
						</CustomButton>
					</ButtonsBarContainer>
				</form>
			</SignInContainer>
		);
	}
}

const mapDispatchToProps = dispatch => ({
	googleSigninStart: () => dispatch(googleSigninStart()),
	emailSigninStart: (email, password) => dispatch(emailSigninStart({email, password}))
});

export default connect(null, mapDispatchToProps)(SignIn);
