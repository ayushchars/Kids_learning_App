import React from 'react'
import "./style.css"
function Colours() {


    const colours = ["red", "yellow", "blue", "green", "pink", "orange", "purple", "grey", "black"]

    return (
        <div className=' colour_container'>

            <h1 style={{ textAlign: "center", marginTop: "30px", textTransform: "uppercase" }}>hii Let`s learn colors</h1>

            <div className='colours'>

                {colours.map(item =>
                    <div className='colors'>
                        <h1>{item}</h1>
                    </div>
                )}



            </div>

        </div>

    )
}

export default Colours

