import Paginator from "../../common/Paginator/Paginator";
import User from "./User";

const Users = ({
  totalUsersCount,
  pageSize,
  onPageChanged,
  currentPage,
  users,
  unfollow,
  follow,
  followingInProgress,
}) => {
  return (
    <div>
      <Paginator
        onPageChanged={onPageChanged}
        currentPage={currentPage}
        totalItemsCount={totalUsersCount}
        pageSize={pageSize}
      />
      {users.map(user => (
        <User
          user={user}
          followingInProgress={followingInProgress}
          unfollow={unfollow}
          follow={follow}
        />
      ))}
    </div>
  );
};

export default Users;
