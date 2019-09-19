import React from 'react';
import s from "./login.module.scss";
import {Field, reduxForm} from "redux-form";
import {Input} from "../common/FormsControls/FormsControls";
import {maxLengthCreator, required} from "../../utils/validators/validators";

const maxLength10 = maxLengthCreator(10);

const LoginForm = (props) => {
	return (
				<form onSubmit={props.handleSubmit}>
					<div>
						<Field type="text" name={"login"} placeholder={"Login"} component={Input} validate={[required, maxLength10]}/>
					</div>
					<div>
						<Field type="text" name={"password"} placeholder={"Password"} component={Input} validate={[required, maxLength10]}/>
					</div>
					<div className={s.checkbox}>
						<Field type="checkbox" name={"rememberMe"} component={Input}/> remember me
					</div>
					<div className={s.button}>
						<button type="submit">Login</button>
					</div>
				</form>
	)
};

const LoginReduxForm = reduxForm({form: 'login'})(LoginForm);

const Login = (props) => {
	const onSubmit = (formData) =>{
		console.log(formData)
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

export default Login;