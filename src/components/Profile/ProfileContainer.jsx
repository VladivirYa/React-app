import React from "react";
import Profile from "./Profile";
import {connect} from "react-redux";
import {getUsersProfile, getUsersStatus, updateUserStatus} from "../../Redux/profile-reducer";
import {withRouter} from "react-router-dom";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";


class ProfileContainer extends React.Component {


	componentDidMount() {
		console.log(this.props);
		let userId = this.props.match.params.userId; //withRouter имеет свойство MATCH который проверяет на совпадение id и PARAMS который имеет userId
		if (!userId) {
			userId = this.props.authorizedUserId;

		}
		this.props.getUsersProfile(userId);
		this.props.getUsersStatus(userId);
		// this.props.updateUserStatus(userId);
	}


	render() {
		return (
			<Profile {...this.props}
			         profile={this.props.profile}
			         status={this.props.status}
			         updateUserStatus={this.props.updateUserStatus}/>
		)
	}
}

let mapStateToProps = (state) => {
	return {
		profile: state.profilePage.profile,
		status: state.profilePage.status,
		authorizedUserId: state.auth.userId,
		isAuth: state.auth.isAuth

	}
};


export default compose(
	connect(mapStateToProps, {getUsersProfile, getUsersStatus, updateUserStatus}),
	withRouter,
	withAuthRedirect
)(ProfileContainer);
