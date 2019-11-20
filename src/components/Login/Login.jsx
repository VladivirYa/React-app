import React from 'react';
import s from "./login.module.scss";
import {Field, reduxForm} from "redux-form";
import {Input} from "../common/FormsControls/FormsControls";
import {maxLengthCreator, required} from "../../utils/validators/validators";
import {login} from "../../Redux/auth-reducer";
import {connect} from "react-redux";
import {Redirect} from "react-router-dom";

const maxLength10 = maxLengthCreator(30);

const LoginForm = (props) => {
	return (
				<form onSubmit={props.handleSubmit}>
					<div>
						<Field type="text" name={"email"} placeholder={"email"} component={Input} validate={[required, maxLength10]}/>
					</div>
					<div>
						<Field type="password" name={"password"} placeholder={"Password"} component={Input} validate={[required, maxLength10]}/>
					</div>
					<div className={s.checkbox}>
						<Field type="checkbox" name={"rememberMe"} component={Input}/> remember me
					</div>
					{props.error && <div className={s.formSummaryError}>
						{props.error}
					</div>}
					<div className={s.button}>
						<button type="submit">Login</button>
					</div>
				</form>
	)
};

const LoginReduxForm = reduxForm({form: 'login'})(LoginForm);

const Login = (props) => {
	const onSubmit = (formData) =>{
		props.login(formData.email, formData.password, formData.rememberMe);
	};

	if(props.isAuth){
		return <Redirect to="/profile"/>
	}

	return (
		<div className={s.block}>
			<div className={s.block_box}>
				<h1 className={s.title}>Login</h1>
				<LoginReduxForm onSubmit={onSubmit}/>
			</div>
		</div>
	)
};
const mapStateToProps = (state) =>{
	return{
	isAuth: state.auth.isAuth
	}
};
export default connect(mapStateToProps, {login}) (Login);