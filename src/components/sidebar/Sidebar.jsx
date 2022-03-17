import React from 'react'
import './sidebar.scss'

const Sidebar = () => {
    return (
        <div className="sidebar">
            <div className="top" >
                <span className="logo">Swinpost Admin</span>
            </div>
            <div className="center" >
                <ul>
                    <li>
                        <span>Dashboard</span>
                    </li>
                    <li>
                        <span>Dashboard</span>
                    </li>
                    <li>
                        <span>Dashboard</span>
                    </li>
                    <li>
                        <span>Dashboard</span>
                    </li>
                </ul>
            </div>
            <div className="bottom" >Color Options</div>
        </div>
    )
}

export default Sidebar
