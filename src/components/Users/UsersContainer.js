import React, { useEffect, useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";

import Users from "./Users";
import Preloader from "./../common/Preloader/Preloader";
import { getUsersThunk, toggleFollowingThunk } from "../../redux/usersReducer";
import {
  getUsers,
  getPageSize,
  getTotalUsersCount,
  getCurrentPage,
  getIsFetching,
  getUsersInFollowingChanging
} from "./../../redux/users-selectors";

function UsersContainer() {
  const users = useSelector(state => getUsers(state));
  const pageSize = useSelector(state => getPageSize(state));
  const totalUsersCount = useSelector(state => getTotalUsersCount(state));
  const currentPage = useSelector(state => getCurrentPage(state));
  const isFetching = useSelector(state => getIsFetching(state));
  const usersInFollowingChanging = useSelector(state =>
    getUsersInFollowingChanging(state)
  );

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUsersThunk(currentPage, pageSize));
  }, [currentPage, dispatch, pageSize]);

  const onPageChanged = pageNum => {
    dispatch(getUsersThunk(pageNum, pageSize));
  };

  const onToggleFollowing = useCallback(
    (followed, userId) => dispatch(toggleFollowingThunk(followed, userId)),
    [dispatch]
  );

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
          onPageChanged={onPageChanged}
          usersInFollowingChanging={usersInFollowingChanging}
          onToggleFollowing={onToggleFollowing}
        />
      )}
    </>
  );
}

export default UsersContainer;
