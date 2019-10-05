import { connect } from "react-redux";
import Users from "./Users";

import {
    toggleFollowAC,
    setUserAC,
    setCurrentPageAC,
    setTotalCountAC
} from "../../redux/usersReducer";

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
)(Users);
