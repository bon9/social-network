import React from "react";
import s from "./Profile.module.css";

import MyPosts from "./MyPosts/MyPosts";

const Profile = () => {
  return (
    <div>
      <div>
        <img
          src="https://p.bigstockphoto.com/GeFvQkBbSLaMdpKXF1Zv_bigstock-Aerial-View-Of-Blue-Lakes-And--227291596.jpg"
          alt="img"
        />
      </div>
      <div>ava+desctr</div>
      <MyPosts />
    </div>
  );
};

export default Profile;
