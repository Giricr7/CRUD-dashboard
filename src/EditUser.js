import {TextField,Paper,Button  } from '@mui/material';
import { useState } from "react";
import { useParams,useNavigate } from "react-router-dom"
import Swal from "sweetalert2";
import Alert from '@mui/material/Alert';
import ModeEditOutlineIcon from '@mui/icons-material/ModeEditOutline';
import AlertTitle from '@mui/material/AlertTitle';
import Collapse from '@mui/material/Collapse';


function EditUser() {

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


    //state variables
    const [username, setUsername] = useState(user.username);
    const [email, setEmail] = useState(user.email);
    const [confirm_password, setConfirmPassword] = useState("");
    const [password, setPassword] = useState(user.password);
    const [open, setOpen] = useState(false);
    
   let navigate = useNavigate()

    //resetting the form after submission
    function resetData()
    {
        setUsername('')
        setEmail('')
        setPassword('')
        setConfirmPassword('')
    }

 //function that handles form submission
    let handleSubmit = (e) => {
        e.preventDefault();

        if (password !== confirm_password) {
        
            Swal.fire({
                icon: 'error',
                title: 'Password mismatch',
                text: `Passwords doesn't match one another!`,
                })
        }else if (username === "" || email === ""  || password === "" || confirm_password ==="")
        {
          
            Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'please fill all the required fields!',
            })
        } else {
             //submitting the endorsed user data to localstorage
            let details = { id: +id, username: username, email: email, password: password };
            users[index].id = details.id;
            users[index].username = details.username;
            users[index].email = details.email;
            users[index].password = details.password;

            localStorage["id"]= JSON.stringify(id);
            localStorage["users"] = JSON.stringify(users);
            Swal.fire({
                icon: 'success',
                title: 'Success',
                text: 'User Updated Successfully!',
            }).then(() => {
                resetData()
                e.target.reset();
                navigate("/users");
            })
            
           
        }




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
                    className="createUserDiv">
                
                    <Paper style={{ padding: "5%", width: "50%",borderTop: "20px solid violet", borderRadius: "20px" }}>
                    
                        <div style={{display:"flex",width:"100%",justifyContent:"center",paddingBottom:"3%"}}>
                            <ModeEditOutlineIcon style={{ color: "violet", fontSize: "500%", border: "2px solid black", borderRadius: "20px" }} />
                            &nbsp;<h1>Edit User</h1><br></br>
                        </div>
                    
                        <form onSubmit={handleSubmit}>
                            <TextField
                                required
                                label="Username"
                                color="secondary"
                                type="input"
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                                inputProps={{ minLength: "8" }}
                                variant="standard"
                                style={{ width: "100%" }}
                            /><br></br><br></br>
                        
                            <TextField
                                required
                                label="Email"
                                color="secondary"
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                variant="standard"
                                style={{ width: "100%" }}
                            /><br></br><br></br>                           

                            <TextField
                                required
                                label="Password"
                                color="secondary"
                                type="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                variant="standard"
                                style={{ width: "100%" }}
                                inputProps={{ minLength: "8" }}
                            /><br></br><br></br>


                            <TextField
                                required
                                label="Confirm Password"
                                color="secondary"
                                type="password"
                                value={confirm_password}
                                onChange={(e) => {
                                    setConfirmPassword(e.target.value)
                                    if (password !== e.target.value) {
                                        setOpen(true)
                                    } else {
                                        setOpen(false)
                                    }
                                    
                                }}
                                variant="standard"
                                style={{ width: "100%" }}
                                inputProps={{ minLength: "8" }}
                            /><br></br><br></br><br></br>

                            <Collapse in={open}>
                                <Alert severity="error"
                                >
                                <AlertTitle>Error</AlertTitle>
                                 passwords mismatch — <strong>check it out!</strong>
                                </Alert>
                            </Collapse><br></br><br></br><br></br><br></br>


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
                    </Paper>
                </div>
        </>
    )
}


    export default EditUser;