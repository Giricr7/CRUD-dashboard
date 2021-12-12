import {TextField,Paper,Button  } from '@mui/material';
import { useState } from "react";
import PersonAddAltIcon from '@mui/icons-material/PersonAddAlt';
import Swal from "sweetalert2";
import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';
import Collapse from '@mui/material/Collapse';


function CreateUser() {

    //state variables
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState('');
    const [confirm_password, setConfirmPassword] = useState('');
    const [password, setPassword] = useState('');
    const [open, setOpen] = useState(false);

    //getting or setting the localstorage for users
    let id = +(localStorage.getItem("id"));
    let users;

    if (localStorage.getItem('users') === '') {
         users = []
    } else {
        users = JSON.parse(localStorage.getItem('users'));
    }

    //resetting the form after submission
    function resetData() {
        setUsername('')
        setEmail('')
        setPassword('')
        setConfirmPassword('')
    }

    //function that handles form submission
    let handleSubmit = (e) => {
        e.preventDefault();

        //checking if both pswd and cnfm-pswd matches
        if (password !== confirm_password) {
        
            Swal.fire({
                icon: 'error',
                title: 'Password mismatch',
                text: `Passwords doesn't match one another!`,
                })
        } else if (username === "" || email === "" || password === "" || confirm_password === "")
        {
            Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'please fill all the required fields!',
            })
        } else {

            //storing the user data to localstorage
            id = ++id;
            let details = { id: id, username: username, email: email, password: password };
            localStorage["id"]= JSON.stringify(id);
            users.push(details);
            localStorage["users"] = JSON.stringify(users);
            Swal.fire({
                icon: 'success',
                title: 'Success',
                text: 'User Added Successfully!',
            })
            resetData()
            e.target.reset();
        }




    }


    return (
        <div>

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
                    
                        <div style={{display:"flex",width:"100%",justifyContent:"center"}}>
                            <PersonAddAltIcon style={{ color: "violet", fontSize: "500%", border: "2px solid black", borderRadius: "20px" }} />
                            &nbsp;<h1>Create User</h1><br></br>
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
                                >Create</Button>
                            </div>
                        </form>
                    </Paper>
                </div>
        </div>
    )
}


    export default CreateUser;