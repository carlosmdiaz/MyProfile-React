import React from 'react'
import Homebar from '../Components/Homebar'
import Profile from '../Components/Profile'

function Dashboard() {
    return (
        <div className='dashboard'>
            <Homebar />
            <div className='container-d'>
                <Profile />
                <div className='information'>

                </div>
            </div>
        </div>
    )
}

export default Dashboard
