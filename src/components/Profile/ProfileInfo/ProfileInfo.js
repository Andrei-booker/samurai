import Preloader from "../../../common/Preloader/Preloader";
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";
import classes from "./ProfileInfo.module.css";

function ProfileInfo({ profile, status, updateStatus }) {
  if (!profile) {
    return <Preloader />;
  }
  return (
    <div>
      <div>
        <img
          alt="top-background"
          src="https://png.pngtree.com/thumb_back/fh260/background/20200714/pngtree-modern-double-color-futuristic-neon-background-image_351866.jpg"
        />
      </div>
      <div className={classes.descriptionBlock}>
        <img
          className={classes.avatar}
          alt="user-logo"
          src={profile.photos.large}
        />
        <ProfileStatusWithHooks status={status} updateStatus={updateStatus} />
      </div>
    </div>
  );
}

export default ProfileInfo;
