import React from "react";
// import classes from "./ProfileInfo.module.css";

class ProfileStatus extends React.Component {
  state = {
    editMode: false,
    status: this.props.status
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.status !== this.props.status) {
      this.setState({ status: this.props.status });
    }
  }

  toggleStateEditMode = () => {
    this.setState(state => {
      if (state.editMode) {
        this.props.updateStatus(state.status);
        return { editMode: !state.editMode };
      } else {
        return { editMode: !state.editMode };
      }
    });
  };

  handleChangeValue = e => {
    this.setState({
      status: e.target.value
    });
  };

  render() {
    return (
      <>
        {this.state.editMode ? (
          <div>
            <input
              autoFocus
              onBlur={this.toggleStateEditMode}
              value={this.state.status}
              onChange={this.handleChangeValue}
            />
          </div>
        ) : (
          <div>
            <span onDoubleClick={this.toggleStateEditMode}>
              {this.props.status || "no status"}
            </span>
          </div>
        )}
      </>
    );
  }
}

export default ProfileStatus;
