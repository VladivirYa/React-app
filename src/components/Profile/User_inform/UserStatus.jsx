import React from 'react';

class UserStatus extends React.Component {

	state = {
		editMode: false,
		status: this.props.status
	};

	activateEditMode() {
		this.setState({
			editMode: true
		})
		// this.state.editMode = true;
		// this.forceUpdate()
	};

	deactivateEditMode() {
		this.setState({
			editMode: false
		});
		this.props.updateUserStatus(this.state.status);
		// this.props.updateUserStatus();
		// this.state.editMode = true;
		// this.forceUpdate()
	};

	onStatusChange = (e) => {
		this.setState({
			status: e.currentTarget.value
		});

	};

	componentDidUpdate(prevProps, prevState) {
		if (prevProps.status !== this.props.status) {
			this.setState({
				status: this.props.status
			})
		}
	}

	render() {
		return (
			<div>
				{!this.state.editMode &&
				<div>
					<span onDoubleClick={this.activateEditMode.bind(this)}>{this.props.status || 'Статус не указан'}</span>
				</div>
				}
				{this.state.editMode &&
				<div>
					<input onChange={this.onStatusChange} autoFocus={true} onBlur={this.deactivateEditMode.bind(this)}
					       value={this.state.status}/>
				</div>
				}
			</div>
		)
	}
}

export default UserStatus;