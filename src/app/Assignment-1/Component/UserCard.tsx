import styles from "@/app/Assignment-1/styles/profile.module.css"
import React from "react";

interface UserCardProps{
  name:string,
  email:string,
  avatarUrl:string
}

const UserCard = (props:UserCardProps) => {
  const { name, email, avatarUrl } = props;
  return (
    <div>
      <img src={avatarUrl} alt="avatar" className={styles["profileImg"]}/>
      <h1>Name :{name}</h1>
      <h1>Email :{email}</h1>
    </div>
  );
};

export default UserCard;
