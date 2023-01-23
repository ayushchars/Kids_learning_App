import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import "./style.css"
function Table() {
    const state = useSelector(state => state.user.user.user)

    const num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    const [data, setdata] = useState(2)

    if (data < 0) {
        setdata(0);
    }
    return (
        <>
            <div className='table_container'>
                <h1 style={{ paddingTop: "150px" }}>hii <span style={{ color: "green" }}>{state} </span> lets learn table</h1>
                <div>

                    <div className='table_input'>
                        <input type="number" value={data} onChange={e => setdata(e.target.value)} style={{ MozAppearance: "textfield" }} />
                    </div>

                    {num.map(item => <div className='table'>
                        <h1> {data} x {item} = {data * item}</h1>
                    </div>)}
                </div>
            </div>
        </>
    )
}

export default Table
