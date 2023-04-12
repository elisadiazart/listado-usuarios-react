import { v4 } from "uuid";
import UserCard from "../../components/user-card/UserCard";
import { USERS } from "../../constants/users";
import { StyledUsersList } from "./styles";

const UserList = () => {
    return <StyledUsersList>
		{USERS.map(user => (
			<UserCard key={v4()} image={user.profileImage} name={user.name} user={user.username} online={user.active ? 'Activo' : 'Inactivo'} state={user.active} id={user.userId}/>
		))}
	</StyledUsersList>
}

export default UserList