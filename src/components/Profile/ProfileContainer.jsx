import React from "react";
import Profile from "./Profile";
import {connect} from "react-redux";
import {getUsersProfile} from "../../Redux/profile-reducer";
import {Redirect, withRouter} from "react-router-dom";



class ProfileContainer extends React.Component {


	componentDidMount() {
		let userId = this.props.match.params.userId; //withRouter имеет свойство MATCH который проверяет на совпадение id и PARAMS который имеет userId
		if (!userId) {
			userId = 1393;
		}
		this.props.getUsersProfile(userId);
	}

	render() {
		if (this.props.isAuth === false){
			return <Redirect to={"/login"}/>
		}
		return (
			<Profile {...this.props} profile={this.props.profile}/>
		)
	}


}
let mapStateToProps = (state) => {
	return {
		profile: state.profilePage.profile,
		isAuth: state.auth.isAuth
	}
};

let WithUrlDataContainerComponent = withRouter(ProfileContainer);


export default connect(mapStateToProps, {getUsersProfile})(WithUrlDataContainerComponent);
