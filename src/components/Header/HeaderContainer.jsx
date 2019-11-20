import React from 'react';
import Header from "./Header";
import {connect} from "react-redux";
import {getAuthUserData} from "../../Redux/auth-reducer";

class HeaderContainer extends React.Component {

	//  813bfaa1-3afe-4111-8956-5e81051804ec

	componentDidMount() {
		this.props.getAuthUserData();
	}

	render() {
		return (

		<Header {...this.props}/>
		)
	}
}
const mapStateToProps = (state) =>({
	isAuth: state.auth.isAuth,
	login: state.auth.login
});

export default connect (mapStateToProps, {getAuthUserData}) (HeaderContainer);