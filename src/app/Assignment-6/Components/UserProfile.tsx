interface UserProfileInterface{
    name:string,
    email:string,
    phoneNo:string
}

const UserProfile:React.FC<UserProfileInterface>=({name,email,phoneNo})=>{
    return(
        <div>
        <h3>User Profile</h3>
        <h4>Name :{name}</h4>
        <h4>Email :{email}</h4>
        <h4>Phone Number :{phoneNo}</h4>
        </div>
    )

}

export default UserProfile;