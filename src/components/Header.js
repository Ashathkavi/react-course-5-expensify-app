

import React from 'react';
import { NavLink, Outlet} from 'react-router-dom';


const Header = (props) => (
    <div>
        <h1>Expensify</h1>
        <nav>
            <NavLink className={({ isActive }) => isActive ? "is-active" : ""} to="/dashboard">Dashborad</NavLink>
            <NavLink className={({ isActive }) => isActive ? "is-active" : ""} to="/create">Create</NavLink>
            <NavLink className={({ isActive }) => isActive ? "is-active" : ""} to="/help">Help</NavLink>
        </nav>
        <Outlet/>
    </div>
)
export default Header