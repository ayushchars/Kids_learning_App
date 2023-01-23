import React from 'react'
import { useSelector } from 'react-redux'
import Login from './container/Login'
import Logout from './container/Logout'

function App() {
    const state = useSelector(state => state.user.user)


    return (
        <div>
            {state ? <Logout /> :
                <Login />
            }
        </div>
    )
}

export default App
