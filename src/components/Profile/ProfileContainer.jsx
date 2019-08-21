import React from "react";
import Profile from "./Profile";
import * as axios from "axios";
import {connect} from "react-redux";
import {getUsersProfile} from "../../Redux/profile-reducer";
import {withRouter} from "react-router-dom";
import {usersAPI} from "../../api/api";


class ProfileContainer extends React.Component {


	componentDidMount() {
		let userId = this.props.match.params.userId;
		if (!userId) {
			userId = 1393;
		}
		this.props.getUsersProfile(userId);
	}

	render() {
		return (
			<Profile {...this.props} profile={this.props.profile}/>
		);
	}


};
let mapStateToProps = (state) => {
	return {
		profile: state.profilePage.profile
	}
};

let WithUrlDataContainerComponent = withRouter(ProfileContainer);


export default connect(mapStateToProps, {getUsersProfile})(WithUrlDataContainerComponent);
