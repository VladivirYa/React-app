import React from 'react';
import {connect} from 'react-redux';
import {follow, unfollow, setCurrentPage, getUsersThunk} from '../../Redux/users-reducer';
import Users from './Users';
import Preloader from "../common/Preloader/Preloader";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";




class UsersContainer extends React.Component {

	componentDidMount() {
		this.props.getUsers(this.props.currentPage, this.props.pageSize);
	}

	onPageChanged = (pageNumber) => {
		this.props.getUsers(pageNumber, this.props.pageSize);
	};

	render() {
		return (
			<>
				{this.props.isFetching ? <Preloader/> : null}
				<Users totalUsersCount={this.props.totalUsersCount}
				       pageSize={this.props.pageSize}
				       currentPage={this.props.currentPage}
				       onPageChanged={this.onPageChanged}
				       users={this.props.users}
				       follow={this.props.follow}
				       unfollow={this.props.unfollow}
				       followingInProgress={this.props.followingInProgress}
				/>
			</>
		)
	}
}


let mapStateToProps = (state) => {
	return {
		users: state.usersPage.users,
		pageSize: state.usersPage.pageSize,
		totalUsersCount: state.usersPage.totalUsersCount,
		currentPage: state.usersPage.currentPage,
		isFetching: state.usersPage.isFetching,
		followingInProgress:state.usersPage.followingInProgress
	}
};

// let mapDispatchToProps = (dispatch) => {
// 	return {
// 		follow: (userId) => {
// 			dispatch(followActionCreator(userId));
// 		},
// 		unfollow: (userId) => {
// 			dispatch(unfollowActionCreator(userId));
// 		},
// 		setUsers: (users) => {
// 			dispatch(setUsersAC(users));
// 		},
// 		setCurrentPage: (pageNumber) => {
// 			dispatch(setCurrentPageAC(pageNumber));
// 		},
// 		setTotalUsersCount: (totalCount) => {
// 			dispatch(setTotalUsersCountAC(totalCount));
// 		},
// 		toggleIsFetching: (isFetching) => {
// 			dispatch(toggleIsFetchingAC(isFetching));
// 		}
// 	}
// };

let withRedirect = withAuthRedirect(UsersContainer);

export default connect(mapStateToProps, {follow, unfollow, setCurrentPage, getUsers: getUsersThunk})(withRedirect);