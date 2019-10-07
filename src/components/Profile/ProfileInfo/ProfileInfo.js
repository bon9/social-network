import React from "react";
import classes from "./ProfileInfo.module.css";
import Preloader from "./../../common/Preloader/Preloader";
import userPhoto from "../../../assets/images/user.png";

const ProfileInfo = ({ userProfile }) => {
  if (!userProfile) {
    return <Preloader />;
  }

  const { fullName, userId, photos } = userProfile;
  return (
    <>
      <div>
        <img
          src="https://p.bigstockphoto.com/GeFvQkBbSLaMdpKXF1Zv_bigstock-Aerial-View-Of-Blue-Lakes-And--227291596.jpg"
          alt="img"
        />
      </div>
      <div className={classes.descriptionBlock}>
        <img src={photos.large || userPhoto} alt="profilePhoto" />
      </div>
      <div>{`fullName: ${fullName}! userId: ${userId}`}</div>
    </>
  );
};

export default ProfileInfo;
