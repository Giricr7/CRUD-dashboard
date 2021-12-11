import { Paper } from "@mui/material";
import { useState } from "react";
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';
import ModeEditOutlineIcon from '@mui/icons-material/ModeEditOutline';
import { Link } from "react-router-dom"
import DeleteSweepIcon from '@mui/icons-material/DeleteSweep';
import Tooltip from '@mui/material/Tooltip';
import PeopleIcon from '@mui/icons-material/People';
import Swal from "sweetalert2"
import { IconButton } from '@mui/material';

function ListUsers() {
    
    let list

    if (localStorage.getItem('users') === '') {
        list = []
   } else {
      //getting all users from localstorage
        list = JSON.parse(localStorage.getItem('users'));
   }

    //state variable
   let [users, setUsers] = useState(list)
   
     
    
//function to delete a user
    let handleDelete = (id) => {
        

        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
          }).then((result) => {
              if (result.isConfirmed) {
                let filteredUsers = users.filter((user) => {
                            return (user.id !== id);
                        })
                        localStorage["users"] = JSON.stringify(filteredUsers);
                        setUsers(filteredUsers)
              Swal.fire(
                'Deleted!',
                'Your file has been deleted.',
                'success'
              )
            }
          })
           
     
            }
        

    return (
        <>
            <div style={{ padding: "3%", height: "fit-content", background: "#BDBDBD" }}>
                <div style={{display:"flex",width:"100%",justifyContent:"center"}}>
                <PeopleIcon style={{ fontSize: "500%", color: "#4A148C" }} />
                <h1>Users</h1>
                </div>
              
                    <div style={{ padding: "1%", background: "#F3E5F5", borderRadius: "20px" }} className="listUserInnerDiv">
                    {
                        (() => {
                            
                            if (users.length === 0) {
                                return (<h2>No Data</h2>)
                            } else {
                                return(
                                users.map((user) => {
                                    return (
                                        <>
                                            <Paper elevation={3} style={{ borderRadius: "20px" }} className="listUserPaper" >
                                                <div style={{
                                                    width: "100%",
                                                    display: "flex",
                                                    alignItems: "center",
                                                    textAlign: "center",
                                                    padding: "5%",
                                                    border: "2px solid violet",
                                                    borderRadius: "20px"
                                                }}>
                                                    <h2>ID - { user.id }</h2>
                                                    <div style={{
                                                        width: "80%",
                                                        textAlign: "center",
                                                    }}>
                                                        <h2 style={{ color: "brown" }}>{user.username }</h2>
                                                    </div>
                                                </div>
                                                <div style={{
                                                    alignItems: "end", display: "block",
                                                    paddingLeft: "5%",
                                                    paddingTop: "1%"
                                                }}>
                                                    
                                                    <IconButton color="secondary" >
                                                        <Tooltip title="View Profile" placement="right-start">
                                                        <Link to = {`/profile/${user.id}`} >
                                                        <ManageAccountsIcon className="profileIcon" />
                                                        </Link>
                                                    </Tooltip>
                                                    </IconButton>
                                                    <br />
                                                   
                                                    <IconButton color="primary" >
                                                    <Tooltip title="Edit User" placement="right-start">
                                                     <Link to = {`/edit-user/${user.id}`} >
                                                     <ModeEditOutlineIcon className="editIcon" />
                                                     </Link>
                                                    </Tooltip>
                                                    </IconButton>
                                                    <br />
                                                    
                                                    <IconButton color="error" >
                                                        <Tooltip title="Delete User" placement="right-start">                                                            
                                                        <DeleteSweepIcon className="deleteIcon" onClick={(e) => { handleDelete(user.id) }} />
                                                    </Tooltip>
                                                    </IconButton>
                                                </div>

                                            </Paper><br /><br />
                                        </>
                                    )
                        
                                }
                                    )
                                )
                            }
                        }
                        )()
                    }
                </div>
                </div>

            </>
)

}




export default ListUsers

