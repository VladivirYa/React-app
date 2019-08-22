import React from "react";
import Profile from "./Profile";
import {connect} from "react-redux";
import {getUsersProfile} from "../../Redux/profile-reducer";
import {withRouter} from "react-router-dom";



class ProfileContainer extends React.Component {


	componentDidMount() {
		let userId = this.props.match.params.userId; //withRouter имеет свойство MATCH который проверяет на совпадение id и PARAMS который имеет userId
		if (!userId) {
			userId = 1393;
		}
		this.props.getUsersProfile(userId);
	}

	render() {
		return (
			<Profile {...this.props} profile={this.props.profile}/>
		)
	}


}
let mapStateToProps = (state) => {
	return {
		profile: state.profilePage.profile
	}
};

let WithUrlDataContainerComponent = withRouter(ProfileContainer);


export default connect(mapStateToProps, {getUsersProfile})(WithUrlDataContainerComponent);