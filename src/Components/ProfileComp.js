import React from 'react'
import '../Styles/Profile.css'
import pic from '../images/myprofile.png'
function Profile() {
    return (
        <div className='Profile'>
            <div className='container-pr'>
                <div className='top'>
                    <img src={pic}/>
                </div>
                <hr></hr>
                <div className='bottom'>
                    <h1 id='name'>Carlos Diaz</h1>
                    <p id='info'>Computer Science</p>
                    <p id='info'>New York</p>
                </div>
            </div>
        </div>
    )
}

export default Profile
