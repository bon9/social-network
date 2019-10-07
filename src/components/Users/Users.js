import React from "react";
import classes from "./Users.module.css";
import userPhoto from "../../assets/images/user.png";
import { NavLink } from "react-router-dom";
import { usersAPI } from "./../../api/api";

function Users({
  users,
  pageSize,
  currentPage,
  totalUsersCount,
  follow,
  unFollow,
  onPageChanged,
  followingProgress,
  toggleFollowingProgress
}) {
  const pagesCount = Math.ceil(totalUsersCount / pageSize); // 5
  const pages = []; // 1,2,3,4,5
  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i);
  }

  const handleFollowClick = (followed, id) => {
    toggleFollowingProgress(true, id);
    usersAPI.changeFollow(followed, id).then(data => {
      if (data.resultCode === 0) {
        followed ? unFollow(id) : follow(id);
      }
      toggleFollowingProgress(false, id);
    });
  };

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
        <div key={u.id}>
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
                  disabled={followingProgress.some(id => id === u.id)}
                  onClick={() => handleFollowClick(u.followed, u.id)}
                >
                  Unfollow
                </button>
              ) : (
                <button
                  disabled={followingProgress.some(id => id === u.id)}
                  onClick={() => handleFollowClick(u.followed, u.id)}
                >
                  follow
                </button>
              )}
            </div>
          </span>
          <span>
            <span>
              <div>{u.name}</div>
              <div>{u.status}</div>
            </span>
            <span>
              <div>{"u.location.country"}</div>
              <div>{"u.location.city"}</div>
            </span>
          </span>
        </div>
      ))}
    </div>
  );
}

export default Users;
