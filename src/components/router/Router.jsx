import { Route, Routes } from "react-router-dom"
import UserList from "../users-list/UserList"
import UserPage from "../../pages/UserPage"

const Router = () => {
    return(
        <Routes>
            <Route path="/" element= {<UserList/>}/>
            <Route path='/user/:userId' element={<UserPage/>}/>
        </Routes>
    )
}


export default Router