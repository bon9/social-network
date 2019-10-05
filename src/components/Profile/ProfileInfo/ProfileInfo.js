import React from "react";
import classes from "./ProfileInfo.module.css";
import Preloader from "./../../common/Preloader/Preloader";

const ProfileInfo = ({ userProfile }) => {
    if (!userProfile) {
        return <Preloader />;
    }
    return (
        <>
            <div>
                <img
                    src="https://p.bigstockphoto.com/GeFvQkBbSLaMdpKXF1Zv_bigstock-Aerial-View-Of-Blue-Lakes-And--227291596.jpg"
                    alt="img"
                />
            </div>
            <div className={classes.descriptionBlock}>
                <img src={userProfile.photos.large} alt="profilePhoto" />{" "}
                ava+desctr
            </div>
        </>
    );
};

export default ProfileInfo;
