import React from 'react'
import Homebar from '../Components/Homebar'
import ProfileComp from '../Components/ProfileComp'

function Dashboard() {
    return (
        <div className='dashboard'>
            <Homebar />
            <div className='container-d'>
                <ProfileComp />
                <div className='information'>

                </div>
            </div>
        </div>
    )
}

export default Dashboard
