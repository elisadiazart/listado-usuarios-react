import { useState } from "react";
import UserList from "../users-list/UserList"
import { StyledDiv, StyledCheckbox } from "./styles"
import { USERS } from "../../constants/users";
import { v4 } from "uuid";

const Filters = () => {
    const [active, setActive] = useState(false);
    const [find, setFinder] = useState('');
    const [order, setOrder] = useState(0);
    let usersFiltered = filterByActive(USERS, active)
    usersFiltered= filterbySearch(usersFiltered,find)
    usersFiltered= filterbyName(usersFiltered, order)
    return <>
    <StyledDiv>
        <input type="text" onChange={(e) => {setFinder(e.target.value)}}/>
        <StyledCheckbox>
            <label htmlFor="checkbox">Sólo activos</label>
            <input value={active} type="checkbox" onClick={(e) =>{setActive(e.target.checked)}}/>
        </StyledCheckbox>
        <select onChange={(e) => {setOrder(e.target.value)}}>
            <option value="0">Por Defecto</option>
            <option value="1">Por Nombre</option>
        </select>
        
    </StyledDiv>
    <UserList users={usersFiltered}/>
    </>
}

const filterByActive = (users, active) =>{
    if(active) return users.filter(user => user.active === true)
    return [...users]
}

const filterbySearch = (users, value) => {
    if(!value) return [...users]
    return users.filter(user => user.name.toLowerCase().includes(value.toLowerCase()))
}

const filterbyName = (users, value) => {
    if (Number(value) === 0) return [...users]
    return [...users].sort((a,b)=>{
        if(a.name < b.name) return -1
        if(a.name > b.name) return 1
        return 0
    })
}

export default Filters
