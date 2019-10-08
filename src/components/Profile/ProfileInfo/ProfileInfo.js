import React from "react";
import classes from "./ProfileInfo.module.css";
import Preloader from "./../../common/Preloader/Preloader";
import userPhoto from "../../../assets/images/user.png";
import ProfileStatus from "./ProfileStatus";

const ProfileInfo = ({ userProfile, status, updateStatus }) => {
  if (!userProfile) {
    return <Preloader />;
  }
  const { fullName, userId, photos } = userProfile;
  return (
    <>
      <div className={classes.descriptionBlock}>
        <img src={photos.large || userPhoto} alt="profilePhoto" />
      </div>
      <div>{`fullName: ${fullName}! userId: ${userId}`}</div>
      <ProfileStatus status={status} updateStatus={updateStatus} />
    </>
  );
};

export default ProfileInfo;
