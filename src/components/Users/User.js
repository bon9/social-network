import React from "react";
import { NavLink } from "react-router-dom";

import userPhoto from "../../assets/images/user.png";
import classes from "./Users.module.css";

const User = ({ user, usersInFollowingChanging, onToggleFollowing }) => {
  const { id, followed, photos, name } = user;
  return (
    <div className={classes.user}>
      <span>
        <div>
          <NavLink to={`/profile/${id}`}>
            <img
              src={photos.small || userPhoto}
              className={classes.userPhoto}
              alt=""
            />
          </NavLink>
        </div>
        <div>
          {followed ? (
            <button
              disabled={usersInFollowingChanging.some(
                checkedId => checkedId === id
              )}
              onClick={() => onToggleFollowing(followed, id)}
            >
              Unfollow
            </button>
          ) : (
            <button
              disabled={usersInFollowingChanging.some(
                checkedId => checkedId === id
              )}
              onClick={() => onToggleFollowing(followed, id)}
            >
              follow
            </button>
          )}
        </div>
      </span>
      <span>
        <span>
          <div>{name}</div>
          <div>{id}</div>
        </span>
      </span>
    </div>
  );
};

export default User;
