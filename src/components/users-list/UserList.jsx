import { v4 } from "uuid";
import UserCard from "../../components/user-card/UserCard";
import { StyledUsersList } from "./styles";

const UserList = ({users}) => {
	if(users.length===0) return <p>No hay usuarios</p>
    return <StyledUsersList>
		{users.map(user => (
			<UserCard key={v4()} image={user.profileImage} name={user.name} user={user.username} online={user.active ? 'Activo' : 'Inactivo'} state={user.active} id={user.userId}/>
		))}
	</StyledUsersList>
}

export default UserList