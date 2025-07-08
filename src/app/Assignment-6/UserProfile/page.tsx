import UserProfile from "../Components/UserProfile";

const Page = () => {
  return (
    <div>
      <p>
        Implement a UserProfile component that displays a user's name, email,
        and phone number using props. Write tests using React Testing Library to
        ensure the component correctly renders the provided user data.
      </p>
      <UserProfile
        name="Aryan Thapak"
        email="aryanthapak@gmail.com"
        phoneNo="9098334189"
      />
    </div>
  );
};

export default Page;
