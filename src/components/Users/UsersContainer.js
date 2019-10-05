import React from "react";
import axios from "axios";
import { connect } from "react-redux";

import Users from "./Users";
import Preloader from "./../common/Preloader/Preloader";

import {
    toggleFollowAC,
    setUserAC,
    setCurrentPageAC,
    setTotalCountAC,
    setIsFetching
} from "../../redux/usersReducer";

class UsersContainer extends React.Component {
    componentDidMount() {
        this.props.onSetIsFetching(true);
        axios
            .get(
                `https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`
            )
            .then(res => {
                this.props.onSetIsFetching(false);
                this.props.onSetUsers(res.data.items);
                this.props.onSetTotalUsersCount(res.data.totalCount);
            });
    }

    onPageChanged = pageNum => {
        this.props.onSetCurrentPage(pageNum);
        this.props.onSetIsFetching(true);
        axios
            .get(
                `https://social-network.samuraijs.com/api/1.0/users?page=${pageNum}&count=${this.props.pageSize}`
            )
            .then(res => {
                this.props.onSetIsFetching(false);
                this.props.onSetUsers(res.data.items);
            });
    };

    render() {
        const {
            users,
            onToogleFollow,
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
                        onToogleFollow={onToogleFollow}
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

const mapDispatchToProps = dispatch => {
    return {
        onToogleFollow: userId => {
            dispatch(toggleFollowAC(userId));
        },
        onSetUsers: users => {
            dispatch(setUserAC(users));
        },
        onSetCurrentPage: pageNumber => {
            dispatch(setCurrentPageAC(pageNumber));
        },
        onSetTotalUsersCount: totalCount => {
            dispatch(setTotalCountAC(totalCount));
        },
        onSetIsFetching: isFetching => {
            dispatch(setIsFetching(isFetching));
        }
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(UsersContainer);
