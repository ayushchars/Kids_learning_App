import React from 'react'
import { useSelector } from 'react-redux'
import "./style.css"
function Alpha() {
    const state = useSelector(state => state.user.user.user)



    const alphabate = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
    return (
        <div className='alpha_container'>
            <h1 style={{ textAlign: "center", marginTop: "30px" }}>HI <span style={{ color: "green", fontWeight: "900", textTransform: "capitalize" }}> {state} </span>Lets LEARN Alphabate</h1>
            <div className='alphas '>
                {alphabate.map(item => {
                    return <div className='alpha_content'>
                        <h1> {item}</h1>
                    </div>
                })}
            </div >
        </div>
    )
}

export default Alpha
