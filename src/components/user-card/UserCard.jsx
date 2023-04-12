import { useNavigate } from "react-router-dom"
import { StyledCard, StyledUserContainer, StyledIcon, StyledUserInfo, StyledName, StyledUser, StyledDetails, StyledState} from "./styles"

const UserCard = ({image, name, user, state, online, id }) => {
    const navigate = useNavigate()

    return <StyledCard>
        <StyledUserContainer>
        <StyledIcon src={image} alt={name} />
        <StyledUserInfo>
            <StyledName>{name}</StyledName>
            <StyledUser>@{user}</StyledUser>
        </StyledUserInfo>
        </StyledUserContainer>
        <StyledDetails>
        <StyledState state={state}>{online}</StyledState>
        <button onClick={() => navigate(`/user/${id}`)}>Ver Detalles</button>
        </StyledDetails>
    </StyledCard>
}

export default UserCard