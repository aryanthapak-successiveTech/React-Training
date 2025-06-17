import styles from "@/app/styles/profile.module.css"

const UserCard = (props) => {
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
