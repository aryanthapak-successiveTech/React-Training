import UserCard from "../Component/UserCard";
const users = [
  {
    id: 1,
    name: "Aryan Thapak",
    email: "aryanthapak8@gmail.com",
    avatarUrl:
      "https://cdn.pixabay.com/photo/2023/02/18/11/00/icon-7797704_640.png",
  },
  {
    id: 2,
    name: "Aman Mehra",
    email: "amanmehra9@gmail.com",
    avatarUrl:
      "https://cdn.pixabay.com/photo/2023/02/18/11/00/icon-7797704_640.png",
  },
  {
    id: 3,
    name: "Adarsh Trivedi",
    email: "adarshtrivedi@gmail.com",
    avatarUrl:
      "https://cdn.pixabay.com/photo/2023/02/18/11/00/icon-7797704_640.png",
  },
];

const UsersData = () => {
  return users.map((el) => (
    <UserCard
      key={el.id}
      name={el.name}
      email={el.email}
      avatarUrl={el.avatarUrl}
    />
  ));
};

export default UsersData;
