import { useNavigate, useParams } from "react-router-dom"
import { USERS } from "../constants/users";

const UserPage = () => {
    const navigate = useNavigate()
    const params = useParams()
    const user= USERS.find(element => element.userId === params.userId)
    console.log(user);
    return <div>
        <button onClick={() => navigate(`/`)}>Back to users</button>
        <img src={user.profileImage} alt="" />
        <h1>Hi! My name is {user.name}</h1>
        <p>I&apos;m {user.age}</p>
        <p>My username is {user.username}</p>
        <p>You can contact me in {user.email}</p>
        <p>My adress is:</p>
        <p>{user.address.street}</p>
        <p>{user.address.city}</p>
        <p>{user.address.zipCode}</p>
        <p>You can call me at {user.phone}</p>
    </div>
}

export default UserPage