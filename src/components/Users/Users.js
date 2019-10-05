import React from "react";
import classes from "./Users.module.css";
import userPhoto from "../../assets/images/user.png";

function Users({
    users,
    pageSize,
    currentPage,
    totalUsersCount,
    onToogleFollow,
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
                        className={`${currentPage === p &&
                            classes.selectedPage} ${classes.numberPage}`}
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
                            <img
                                src={u.photos.small || userPhoto}
                                className={classes.userPhoto}
                                alt=""
                            />
                        </div>
                        <div>
                            {u.followed ? (
                                <button onClick={() => onToogleFollow(u.id)}>
                                    Follow
                                </button>
                            ) : (
                                <button onClick={() => onToogleFollow(u.id)}>
                                    Unfollow
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
