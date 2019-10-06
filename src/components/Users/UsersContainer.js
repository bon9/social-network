import React from "react";
import axios from "axios";
import { connect } from "react-redux";

import Users from "./Users";
import Preloader from "./../common/Preloader/Preloader";

import {
  follow,
  unFollow,
  setUsers,
  setCurrentPage,
  setTotalCount,
  setIsFetching
} from "../../redux/usersReducer";

class UsersContainer extends React.Component {
  componentDidMount() {
    this.props.setIsFetching(true);
    axios
      .get(
        `https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`,
        {
          withCredentials: true
        }
      )
      .then(res => {
        this.props.setIsFetching(false);
        this.props.setUsers(res.data.items);
        this.props.setTotalCount(res.data.totalCount);
      });
  }

  onPageChanged = pageNum => {
    this.props.setCurrentPage(pageNum);
    this.props.setIsFetching(true);
    axios
      .get(
        `https://social-network.samuraijs.com/api/1.0/users?page=${pageNum}&count=${this.props.pageSize}`,
        {
          withCredentials: true
        }
      )
      .then(res => {
        this.props.setIsFetching(false);
        this.props.setUsers(res.data.items);
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
      isFetching
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
    isFetching: state.usersPage.isFetching
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
    setIsFetching
  }
)(UsersContainer);
