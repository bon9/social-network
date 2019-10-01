import React from "react";
import classes from "./ProfileInfo.module.css";

const ProfileInfo = () => {
  return (
    <>
      <div>
        <img
          src="https://p.bigstockphoto.com/GeFvQkBbSLaMdpKXF1Zv_bigstock-Aerial-View-Of-Blue-Lakes-And--227291596.jpg"
          alt="img"
        />
      </div>
      <div className={classes.descriptionBlock}>ava+desctr</div>
    </>
  );
};

export default ProfileInfo;
