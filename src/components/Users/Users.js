import React from "react";
import classes from "./Users.module.css";
import userPhoto from "../../assets/images/user.png";
import { NavLink } from "react-router-dom";

function Users({
  users,
  pageSize,
  currentPage,
  totalUsersCount,
  onPageChanged,
  usersInFollowingChanging,
  onToggleFollowing
}) {
  const pagesCount = Math.ceil(totalUsersCount / pageSize); // 5
  const pages = []; // 1,2,3,4,5
  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i);
  }
  return (
    <div>
      <div>
        {pages.map(p => (
          <span
            key={p}
            className={`${currentPage === p && classes.selectedPage} ${
              classes.numberPage
            }`}
            onClick={() => onPageChanged(p)}
          >
            {`${p} `}
          </span>
        ))}
      </div>
      {users.map(u => (
        <div className={classes.user} key={u.id}>
          <span>
            <div>
              <NavLink to={`/profile/${u.id}`}>
                <img
                  src={u.photos.small || userPhoto}
                  className={classes.userPhoto}
                  alt=""
                />
              </NavLink>
            </div>
            <div>
              {u.followed ? (
                <button
                  disabled={usersInFollowingChanging.some(id => id === u.id)}
                  onClick={() => onToggleFollowing(u.followed, u.id)}
                >
                  Unfollow
                </button>
              ) : (
                <button
                  disabled={usersInFollowingChanging.some(id => id === u.id)}
                  onClick={() => onToggleFollowing(u.followed, u.id)}
                >
                  follow
                </button>
              )}
            </div>
          </span>
          <span>
            <span>
              <div>{u.name}</div>
              <div>{u.id}</div>
            </span>
          </span>
        </div>
      ))}
    </div>
  );
}

export default Users;
