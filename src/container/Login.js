import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { login } from '../fetures/loginSlice'
import "./style.css"
function Login() {
    const [user, setuser] = useState("")
    const [email, setemail] = useState("")
    const [password, setpassword] = useState("")


    const dispatch = useDispatch()

    const loginHandle = (e) => {
        e.preventDefault();


        if (user === "") {
            alert("username is empty")
        }
        else if (email === "") {
            alert("email is empty")
        }
        else if (password === "") {
            alert("password is empty")
        }
        else if (password < 3) {
            alert("password must be more then three Letter")
        }

        else {

            dispatch(login({
                user: user,
                email: email,
                password: password
            }))

        }








    }

    const state = useSelector(state => state)

    useEffect(() => {

    }, [state])




    return (
        <div className='container'>
            <div className='Login_container'>
                <h1 style={{ textAlign: "center" }}>Welcome in world of learning</h1>
                <form>
                    <div className='Login_Content'>
                        <input type="text" value={user} onChange={e => setuser(e.target.value)} placeholder="UserName" />
                    </div>
                    <div className='Login_Content'>
                        <input type="text" value={email} onChange={e => setemail(e.target.value)} placeholder="Email" />
                    </div>

                    <div className='Login_Content'>
                        <input type="password" value={password} onChange={e => setpassword(e.target.value)} placeholder="Password" />
                    </div>
                    <div className='Login_Content'>
                        <button onClick={(e) => loginHandle(e)} style={{ fontSize: "30px", width: "80%", margin: "3px", borderWidth: 0, cursor: "pointer", backgroundColor: "#FBEED0" }}>Login</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Login
