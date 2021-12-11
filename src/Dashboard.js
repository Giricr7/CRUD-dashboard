import { Paper } from '@mui/material';
import DashboardIcon from '@mui/icons-material/Dashboard';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import PeopleIcon from '@mui/icons-material/People';
import { IconButton } from '@mui/material'
import {Link} from "react-router-dom"


function Dashboard() {





    return (
        <>
            <div
                    style={
                        {
                        padding: "5%",
                        width: "100%",
                        background:"#EDE7F6"
                        }
                    }
                className="dashboardDiv">
                <div style={{display:"flex"}}>
                <DashboardIcon className="dashboardIcon" style={{fontSize:"500%"}}/><h1>Dashboard</h1>
                </div>
                
                <Paper
                    style={{
                    padding: "5%",
                    width: "50%",
                    borderRadius: "20px",
                    height: "50%",
                    display: "flex",
                    }}
                    className="dashPaper"
                >
                    <div>
                        
                        <div style={{ display: "flex" }} >
                       <Link to={"/create-user"}> <IconButton>
                                <AddCircleOutlineIcon style={{ fontSize: "400%", color: "#6200EA" }} />
                                <h2 style={{color:"#6200EA"}}>ADD USER</h2>
                        </IconButton></Link>
                           
                            
                        </div>
                        
                        <br />
                        
                        <div style={{ display: "flex" }}>
                        <Link to={"/users"}> <IconButton>
                                <PeopleIcon style={{ fontSize: "400%",color:"#D81B60" }} />
                                <h2 style={{color:"#D81B60"}}>USERS</h2>
                            </IconButton></Link>    
                    </div>


                    </div>  

                    </Paper>
                </div>


            </>
    )
}

export default Dashboard