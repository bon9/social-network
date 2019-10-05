import React from "react";
import classes from "./Users.module.css";
import axios from "axios";
import userPhoto from "../../assets/images/user.png";

class Users extends React.Component {
    componentDidMount() {
        axios
            .get(
                `https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`
            )
            .then(res => {
                this.props.onSetUsers(res.data.items);
                this.props.onSetTotalUsersCount(res.data.totalCount);
            });
    }

    onPageChanged = pageNum => {
        this.props.onSetCurrentPage(pageNum);
        axios
            .get(
                `https://social-network.samuraijs.com/api/1.0/users?page=${pageNum}&count=${this.props.pageSize}`
            )
            .then(res => {
                this.props.onSetUsers(res.data.items);
            });
    };

    render() {
        const {
            users,
            onToogleFollow,
            pageSize,
            currentPage,
            totalUsersCount
        } = this.props;
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
                            className={`${currentPage === p &&
                                classes.selectedPage} ${classes.numberPage}`}
                            onClick={() => this.onPageChanged(p)}
                        >
                            {p}
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
                                    <button
                                        onClick={() => onToogleFollow(u.id)}
                                    >
                                        Follow
                                    </button>
                                ) : (
                                    <button
                                        onClick={() => onToogleFollow(u.id)}
                                    >
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
}

export default Users;
