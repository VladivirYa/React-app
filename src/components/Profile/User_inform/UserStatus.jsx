import React from 'react';
import s from './../User_inform/User_info.module.scss'
import Preloader from "../../common/Preloader/Preloader";

class UserStatus extends React.Component {
	state = {
		editMode: false
	};


	activateEditMode () {
		debugger
		this.setState({
			editMode: true
		})
		// this.state.editMode = true;
		// this.forceUpdate()
	};

	deactivateEditMode () {
		debugger
		this.setState({
			editMode: false
		})
		// this.state.editMode = true;
		// this.forceUpdate()
	};

	render() {
		return (
			<div>
				{!this.state.editMode &&
				<div>
					<span onDoubleClick={ this.activateEditMode.bind(this)}>{this.props.status}</span>
				</div>
				}
				{this.state.editMode &&
				<div>
					<input autoFocus={true}  onBlur={ this.deactivateEditMode.bind(this)} value={this.props.status}/>
				</div>
				}
			</div>
		)
	}
}

export default UserStatus;