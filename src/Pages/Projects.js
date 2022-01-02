import React from 'react'
import Homebar from '../Components/Homebar'
import ProfileComp from '../Components/ProfileComp'

function Projects() {
    return (
        <div className='dashboard'>
            <Homebar />
            <div className='container-d'>
                <ProfileComp />
                <div className='information'>
                    <h1>Projects</h1>
                </div>
            </div>
        </div>
    )
}

export default Projects
