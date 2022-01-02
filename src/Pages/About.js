import React from 'react'
import Homebar from '../Components/Homebar'
import ProfileComp from '../Components/ProfileComp'

function About() {
    return (
        <div className='dashboard'>
            <Homebar />
            <div className='container-d'>
                <ProfileComp />
                <div className='information'>
                    <h1>About</h1>
                </div>
            </div>
        </div>
    )
}

export default About
