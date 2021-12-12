import {TextField,Paper,Button  } from '@mui/material';
import { useState } from "react";
import { useParams,useNavigate } from "react-router-dom"
import Swal from "sweetalert2";
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import ModeEditOutlineIcon from '@mui/icons-material/ModeEditOutline';
import Select from '@mui/material/Select';


function EditProfile() {

  //getting id from url  
    let users;
    let { id } = useParams();

//getting the users from localstorage
    if (localStorage.getItem('users') === '') {
        users = []
   } else {
       users = JSON.parse(localStorage.getItem('users'));
   }

    //getting the index of the user from the users array
   let index = users.findIndex(user => {
     return ( +user.id === +id) 
   })
    
   let user = users[index]

    //validation to store empty string values in below variables
   let userRole = user.role, userGender = user.gender, userNationality = user.nationality,
        userPhone = user.phone, userMaritalStatus = user.maritalStatus, userCity = user.city
    
if (!user.role) {
   userRole = "";
}
if (!user.gender) {
   userGender = "";
}
if (!user.nationality) {
   userNationality = "";
}
if (!user.phone) {
   userPhone = "";
}
if (!user.maritalStatus)
{
   userMaritalStatus = "";
}
if (!user.city) {
   userCity = "";
}
    
 
//state variables
    const [role, setRole] = useState(userRole);
    const [gender, setGender] = useState(userGender);
    const [nationality, setNationality] = useState(userNationality);
    const [phone, setPhone] = useState(userPhone);
    const [maritalStatus, setMaritalStatus] = useState(userMaritalStatus);
    const [city, setCity] = useState(userCity);

    let navigate = useNavigate()

    //function that handles form submission
    let handleSubmit = (e) => {
        e.preventDefault();

    //submitting the endorsed user data to localstorage
        user['role'] = role
        user['gender'] = gender
        user['nationality'] = nationality
        user['phone'] = phone
        user['maritalStatus'] = maritalStatus
        user['city'] = city
            users[index] = user;
            localStorage["id"]= JSON.stringify(id);
            localStorage["users"] = JSON.stringify(users);
            Swal.fire({
                icon: 'success',
                title: 'Success',
                text: 'Profile Updated Successfully!',
            }).then(() => {
                e.target.reset();
                navigate(`/profile/${user.id}`);
            })
            




    }


    return (
        <>

                <div
                    style={
                        {
                        padding: "5%",
                        width: "100%",
                        background:"#F3E5F5"
                        }
                    }
                    className="editProfileDiv">
                
                <Paper
                    style={{
                    padding: "5%",
                    width: "50%",
                    borderTop: "20px solid violet",
                    borderRadius: "20px"                    
                    }}
                    
                >
                    <div className="editProfilePaper">

                    
                        <div style={{display:"flex",width:"100%",justifyContent:"center",paddingBottom:"3%"}}>
                            <ModeEditOutlineIcon style={{ color: "violet", fontSize: "500%", border: "2px solid black", borderRadius: "20px" }} />
                            &nbsp;<h1>Edit Profile</h1><br></br>
                        </div>
                        <h2 style={{textAlign:"center",color:"brown"}}> { user.username } </h2>
                        <form onSubmit={handleSubmit} style={{border:"2px solid violet", padding:"5%", borderRadius: "20px"}}>
                            
                        
                        <InputLabel id="demo-simple-select-helper-label">Role</InputLabel>
                        <Select                               
                            value={role}
                            onChange={(e) => { setRole(e.target.value) }}
                                className="profileInput"
                                style={{borderRadius:"20px"}}
                            >
                            <MenuItem value="">
                                <em>None</em>
                            </MenuItem>
                            <MenuItem value={"Developer"}>Developer</MenuItem>
                            <MenuItem value={"Tester"}>Tester</MenuItem>
                            <MenuItem value={"Admin"}>Admin</MenuItem>
                        </Select>    <br></br><br></br><br></br>
                        
                        <InputLabel id="demo-simple-select-helper-label">Gender</InputLabel>
                        <Select
                            className="profileInput"    
                            value={gender}
                                onChange={(e) => { setGender(e.target.value) }}
                                style={{borderRadius:"20px"}}
                            >
                            <MenuItem value="">
                                <em>None</em>
                            </MenuItem>
                            <MenuItem value={"Male"}>Male</MenuItem>
                            <MenuItem value={"Female"}>Female</MenuItem>
                            <MenuItem value={"Others"}>Others</MenuItem>
                        </Select>    <br></br><br></br><br></br>
                       
                        
                         
                        <InputLabel id="demo-simple-select-helper-label">Nationality</InputLabel>
                        <Select
                            className="profileInput"    
                            value={nationality}
                            onChange={(e) => { setNationality(e.target.value) }}
                            style={{borderRadius:"20px"}}
                            >
                            <MenuItem value="">
                                <em>None</em>
                            </MenuItem>
                            <MenuItem value={"India"}>India</MenuItem>
                            <MenuItem value={"USA"}>USA</MenuItem>
                            <MenuItem value={"Pakistan"}>Pakistan</MenuItem>
                            <MenuItem value={"China"}>China</MenuItem>
                        </Select>    <br></br><br></br><br></br>

                        <TextField
                                className="profileInput"    
                                label="Phone"
                                color="secondary"
                                type="number"
                                value={phone}
                                onChange={(e) => setPhone(e.target.value)}
                                inputProps={{ minLength: "10",maxLength:"10" }}
                                variant="standard"
                             
                        /> <br></br><br></br><br></br><br></br>

                        <InputLabel id="demo-simple-select-helper-label">Marital Status</InputLabel>
                        <Select
                            className="profileInput"    
                            value={maritalStatus}
                            onChange={(e) => { setMaritalStatus(e.target.value) }}
                            style={{borderRadius:"20px"}}
                            >
                            <MenuItem value="">
                                <em>None</em>
                            </MenuItem>
                            <MenuItem value={"Married"}>Married</MenuItem>
                            <MenuItem value={"Single"}>Single</MenuItem>
                        </Select>    <br></br><br></br><br></br>

                        <TextField
                                className="profileInput"
                                label="City"
                                color="secondary"
                                type="input"
                                value={city}
                                onChange={(e) => setCity(e.target.value)}
                                variant="standard"
                              
                        /> <br></br><br></br><br></br><br></br><br></br>
                        

                            <div className="submit_btn_div">
                                <Button
                                    className="create_user_submit"
                                    variant="outlined"
                                    type="submit"
                                    color="secondary"
                                    style={{ width: "50%", borderRadius: "20px", color: "black" }}
                                >Update</Button>
                            </div>
                            
                    </form>
                    </div>
                    </Paper>
                </div>
        </>
    )
}


    export default EditProfile;