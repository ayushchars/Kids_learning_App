import React from 'react'
import "./style.css"
import { useDispatch } from 'react-redux'
import { logout } from '../fetures/loginSlice'
import { NavLink } from 'react-router-dom'
function Navbar() {



    const dispatch = useDispatch()
    const logoutHandle = (e) => {
        e.preventDefault();
        dispatch(logout())
    }
    return (
        <div className='Nav_container'>
            <div className='Nav_Title'>
                <h1>ChildHub</h1>
            </div>
            <div className='nav_content'>
                <NavLink to={"/Table"}>Table</NavLink>
                <NavLink to={"/Colours"}>Colours</NavLink>
                <NavLink to={"/Alpha"}>Alphabets</NavLink>
                <button onClick={logoutHandle} style={{ width: "100px", height: "35px", fontSize: "20px" }}>Logout</button>
            </div>

        </div>
    )
}

export default Navbar
