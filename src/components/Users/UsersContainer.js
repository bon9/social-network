import React from "react";
import { connect } from "react-redux";

import Users from "./Users";
import Preloader from "./../common/Preloader/Preloader";

import { usersAPI } from "./../../api/api";

import {
  follow,
  unFollow,
  setUsers,
  setCurrentPage,
  setTotalCount,
  setIsFetching,
  toggleFollowingProgress
} from "../../redux/usersReducer";

class UsersContainer extends React.Component {
  componentDidMount() {
    this.props.setIsFetching(true);
    usersAPI
      .getUsers(this.props.currentPage, this.props.pageSize)
      .then(data => {
        this.props.setIsFetching(false);
        this.props.setUsers(data.items);
        this.props.setTotalCount(data.totalCount);
      });
  }

  onPageChanged = pageNum => {
    this.props.setCurrentPage(pageNum);
    this.props.setIsFetching(true);
    usersAPI.getUsers(pageNum, this.props.pageSize).then(data => {
      this.props.setIsFetching(false);
      this.props.setUsers(data.items);
    });
  };

  render() {
    const {
      users,
      follow,
      unFollow,
      pageSize,
      currentPage,
      totalUsersCount,
      isFetching,
      toggleFollowingProgress,
      followingProgress
    } = this.props;

    return (
      <>
        {isFetching ? (
          <Preloader />
        ) : (
          <Users
            users={users}
            follow={follow}
            unFollow={unFollow}
            pageSize={pageSize}
            currentPage={currentPage}
            totalUsersCount={totalUsersCount}
            onPageChanged={this.onPageChanged}
            toggleFollowingProgress={toggleFollowingProgress}
            followingProgress={followingProgress}
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
    followingProgress: state.usersPage.followingProgress
  };
};

export default connect(
  mapStateToProps,
  {
    follow,
    unFollow,
    setUsers,
    setCurrentPage,
    setTotalCount,
    setIsFetching,
    toggleFollowingProgress
  }
)(UsersContainer);
