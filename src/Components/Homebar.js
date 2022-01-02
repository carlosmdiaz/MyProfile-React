import React from 'react'
import { Link } from 'react-router-dom'
import '../Styles/Homebar.css'

function Homebar() {
    return (
        <div className='homebar'>
            <div className='container'>
                <div className='name'>Carlos Diaz</div>
                <div className='container-links'>
                    <Link className='bar-links' to={'/'}>Home</Link>
                    <Link className='bar-links' to={'/profile'}>Profile</Link>
                    <Link className='bar-links' to={'/about'}>About</Link>
                    <Link className='bar-links' to={'/projects'}>Projects</Link>
                </div>
        
                <div className='logout'>Logout</div>
            </div>
        </div>
    )
}

export default Homebar
