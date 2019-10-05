import React from "react";
import axios from "axios";
import { connect } from "react-redux";

import Users from "./Users";

import {
    toggleFollowAC,
    setUserAC,
    setCurrentPageAC,
    setTotalCountAC
} from "../../redux/usersReducer";

class UsersContainer extends React.Component {
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

        return (
            <Users
                users={users}
                onToogleFollow={onToogleFollow}
                pageSize={pageSize}
                currentPage={currentPage}
                totalUsersCount={totalUsersCount}
                onPageChanged={this.onPageChanged}
            />
        );
    }
}

const mapStateToProps = state => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage
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
        }
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(UsersContainer);
