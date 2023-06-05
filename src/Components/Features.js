import React from 'react';
import Todo from '../images/icon-todo.svg';
import Calendar from '../images/icon-calendar.svg';
import Reminder from '../images/icon-reminders.svg';
import Planning from '../images/icon-planning.svg';
import '../index.css'




const Features = ({ open }) => {
    if (!open) return null

    return (
        <>
            < div className='feature-blog' >
                <p><img src={Todo} alt="" />Todo List</p>
                <p><img src={Calendar} alt="" />Calender</p>
                <p><img src={Reminder} alt="" />Reminders</p>
                <p><img src={Planning} alt="" />Planning</p>
            </div >

            <div className='company-blog display-none'>
                <p>History</p>
                <p>Our Team</p>
                <p>Blog</p>
            </div>
        </>

    )
}

export default Features;