import React from 'react';
import '../index.css'

const Company = ({ open2 }) => {
    if (!open2) return null
    return (
        <div className='company-blog display-none'>
            <p>History</p>
            <p>Our Team</p>
            <p>Blog</p>
        </div>
    )
}
export default Company;