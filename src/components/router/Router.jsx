import { Route, Routes } from "react-router-dom"
import UserPage from "../../pages/UserPage"
import HomePage from "../home-page/HomePage"

const Router = () => {
    return(
        <Routes>
            <Route path="/" element= {<HomePage/>}/>
            <Route path='/user/:userId' element={<UserPage/>}/>
        </Routes>
    )
}


export default Router