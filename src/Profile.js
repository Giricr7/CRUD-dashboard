import { useParams,Link } from "react-router-dom"
import { Paper,IconButton,Tooltip } from '@mui/material';
import PersonIcon from '@mui/icons-material/Person';
import ModeEditIcon from '@mui/icons-material/ModeEdit';


function Profile() {

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
                    className="ProfileDiv">
                
                <Paper style={{ padding: "5%", width: "50%", borderTop: "20px solid violet", borderRadius: "20px" }}
                className="profilePaper"
                >
                    
                        <div style={{display:"flex",width:"100%",justifyContent:"center",paddingBottom:"3%"}}>
                            <PersonIcon style={{ color: "violet", fontSize: "500%", border: "2px solid black", borderRadius: "20px" }} />
                            &nbsp;<h1>Profile</h1><br></br>
                    </div>
                    <Tooltip title="Edit Profile" placement="right-start">
                    <Link to = {`/edit-profile/${user.id}`} >
                    <IconButton color="primary" aria-label="add an alarm">                
                    <ModeEditIcon />
                    </IconButton>
                    </Link>
                    </Tooltip>
                    <div className="profileInnerDiv" style={{ border: "2px solid violet",borderRadius: "20px"}}>
                        <div>
                            <h6>Username</h6>
                            <h2>{ user.username }</h2>
                        </div>
                        <hr />
                        <div>
                        <h6>Email</h6>
                            <h2>{user.email }</h2>
                        </div>
                        <hr />
                        <div>
                            <h6>Role</h6>
                            <h2>{ userRole }</h2>
                        </div>
                        <hr />
                        <div>
                            <h6>Gender</h6>
                            <h2>{ userGender }</h2>
                        </div>
                        <hr />
                        <div>
                            <h6>Nationality</h6>
                            <h2>{ userNationality }</h2>
                        </div>
                        <hr />
                        <div>
                            <h6>Phone</h6>
                            <h2>{ userPhone }</h2>
                        </div>
                        <hr />
                        <div>
                            <h6>Marital Status</h6>
                            <h2>{ userMaritalStatus}</h2>
                        </div>
                        <hr />
                        <div>
                            <h6>City</h6>
                            <h2>{ userCity }</h2>
                        </div>
                    </div>
                    
                    </Paper>
                </div>
        </>
    )
}


export default Profile