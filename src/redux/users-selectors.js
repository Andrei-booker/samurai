import { createSelector } from "reselect";

const getUsersSelector = state => {
  return state.usersReducer.users;
};

export const getUsers = createSelector(getUsersSelector, users =>
  users.filter(u => true)
);

export const getPageSize = state => {
  return state.usersReducer.pageSize;
};

export const getUsersCount = state => {
  return state.usersReducer.totalUsersCount;
};

export const getCurrentPage = state => {
  return state.usersReducer.currentPage;
};

export const getIsFetching = state => {
  return state.usersReducer.isFetching;
};

export const getFollowingInProgress = state => {
  return state.usersReducer.followingInProgress;
};
