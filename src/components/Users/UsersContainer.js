import React from "react";
import { connect } from "react-redux";

import Users from "./Users";
import Preloader from "./../common/Preloader/Preloader";

import { getUsersThunk, toggleFollowingThunk } from "../../redux/usersReducer";
import { withAuthRedirect } from "./../../hoc/withAuthRedirect";
import { compose } from "redux";

class UsersContainer extends React.Component {
  componentDidMount() {
    this.props.getUsers(this.props.currentPage, this.props.pageSize);
  }

  onPageChanged = pageNum => {
    this.props.getUsers(pageNum, this.props.pageSize);
  };

  onToggleFollowing = (followed, userId) => {
    this.props.toggleFollowing(followed, userId);
  };

  render() {
    const {
      users,
      pageSize,
      currentPage,
      totalUsersCount,
      isFetching,
      usersInFollowingChanging
    } = this.props;

    return (
      <>
        {isFetching ? (
          <Preloader />
        ) : (
          <Users
            users={users}
            pageSize={pageSize}
            currentPage={currentPage}
            totalUsersCount={totalUsersCount}
            onPageChanged={this.onPageChanged}
            usersInFollowingChanging={usersInFollowingChanging}
            onToggleFollowing={this.onToggleFollowing}
          />
        )}
      </>
    );
  }
}

const mapStateToProps = state => {
  return {
    users: state.usersPage.users,
    pageSize: state.usersPage.pageSize,
    totalUsersCount: state.usersPage.totalUsersCount,
    currentPage: state.usersPage.currentPage,
    isFetching: state.usersPage.isFetching,
    usersInFollowingChanging: state.usersPage.usersInFollowingChanging
  };
};

export default compose(
  connect(
    mapStateToProps,
    {
      getUsers: getUsersThunk,
      toggleFollowing: toggleFollowingThunk
    }
  ),
  withAuthRedirect
)(UsersContainer);
