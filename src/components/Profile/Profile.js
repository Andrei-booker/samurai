import MyPostsContainer from "./MyPosts/MyPostsContainer";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

// import classes from "./Profile.module.css";

function Profile({ profile, status, updateStatus }) {
  return (
    <div>
      <ProfileInfo
        profile={profile}
        status={status}
        updateStatus={updateStatus}
      />
      <MyPostsContainer />
    </div>
  );
}

export default Profile;
