import React from "react";

import Paginator from "../common/Paginator/Paginator";
import User from "./User";

function Users({
  users,
  pageSize,
  currentPage,
  totalUsersCount,
  onPageChanged,
  usersInFollowingChanging,
  onToggleFollowing
}) {
  return (
    <>
      <Paginator
        totalItemsCount={totalUsersCount}
        pageSize={pageSize}
        currentPage={currentPage}
        onPageChanged={onPageChanged}
      />
      {users.map(user => (
        <User
          user={user}
          usersInFollowingChanging={usersInFollowingChanging}
          onToggleFollowing={onToggleFollowing}
          key={user.id}
        />
      ))}
    </>
  );
}

export default Users;
