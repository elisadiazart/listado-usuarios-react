import styled, { css } from "styled-components";

const StyledCard = styled.div`
    display: flex;
    width: 600px;
    box-shadow: rgba(0, 0, 0, 0.2) 0px 0px 10px;
    align-items: center;
    border-radius: 10px;
    justify-content: space-between;
    padding: 1rem;
`
const StyledUserContainer = styled.div`
    display: flex;
    align-items: center;
    gap: 1rem;

`

const StyledIcon = styled.img`
    width: 50px;
    height: 50px;
    border-radius: 50%;
`
const StyledUserInfo = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: .2rem;
`

const StyledName = styled.p`
    margin: 0;
    font-weight: 800;
`

const StyledUser = styled.p`
    margin: 0;
    font-size: .75rem;
`

const StyledDetails = styled.div`
    display: flex;
    gap: 2rem;
    align-items: center;
`

const StyledState = styled.p`
    ${props => {
		switch (props.state) {
			case false:
                return css`
                    color: red;
                `
		
        default:
            return css`
                color: limegreen;
            `
        }
	}};
`

export{StyledCard, StyledUserContainer, StyledIcon, StyledUserInfo, StyledName, StyledUser, StyledDetails, StyledState}