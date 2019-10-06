import React from "react";
import classes from "./Users.module.css";
import userPhoto from "../../assets/images/user.png";
import { NavLink } from "react-router-dom";
import axios from "axios";

function Users({
  users,
  pageSize,
  currentPage,
  totalUsersCount,
  follow,
  unFollow,
  onPageChanged
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
                  onClick={() => {
                    axios
                      .delete(
                        `https://social-network.samuraijs.com/api/1.0/follow/${u.id}`,
                        {
                          withCredentials: true,
                          headers: {
                            "API-KEY": "9e658743-2610-4515-8426-4e4e628bf81f"
                          }
                        }
                      )
                      .then(res => {
                        if (res.data.resultCode === 0) {
                          unFollow(u.id);
                        }
                      });
                  }}
                >
                  Unfollow
                </button>
              ) : (
                <button
                  onClick={() => {
                    axios
                      .post(
                        `https://social-network.samuraijs.com/api/1.0/follow/${u.id}`,
                        {},
                        {
                          withCredentials: true,
                          headers: {
                            "API-KEY": "9e658743-2610-4515-8426-4e4e628bf81f"
                          }
                        }
                      )
                      .then(res => {
                        if (res.data.resultCode === 0) {
                          follow(u.id);
                        }
                      });
                  }}
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
