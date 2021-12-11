import { Routes, Route, BrowserRouter } from "react-router-dom"
import CreateUser from "./CreateUser"
import ListUsers from "./ListUsers"
import EditUser from "./EditUser"
import Profile from "./Profile"
import EditProfile from "./EditProfile"
import Dashboard from "./Dashboard"


function Routers() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/users' element={<ListUsers />} exact></Route>
                <Route path='/create-user' element={<CreateUser />} exact></Route>
                <Route path="/edit-user/:id" element={<EditUser />} exact ></Route>
                <Route path="/profile/:id" element={<Profile />} exact ></Route>
                <Route path="/edit-profile/:id" element={<EditProfile />} exact ></Route>
                <Route path="/" element={<Dashboard />} exact></Route>
            </Routes>
        </BrowserRouter>
    )
}


export default Routers;