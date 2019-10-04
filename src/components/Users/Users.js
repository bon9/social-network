import React from "react";
import classes from "./users.module.css";
import axios from "axios";
import userPhoto from "../../assets/images/user.png";

function Users({ users, onToogleFollow, onSetUsers }) {
    if (users.length === 0) {
        axios
            .get("https://social-network.samuraijs.com/api/1.0/users")
            .then(res => {
                onSetUsers(res.data.items);
            });
    }

    return (
        <div>
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
