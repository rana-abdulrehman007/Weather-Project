import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'


export default function Navbar2() {


    return (
        <div>
            <nav style={{ display: "flex", justifyContent: "space-between", backgroundColor: "black", color: "white", padding: "20px 30px" }}>
                <h2>My Shop</h2>
                <ul style={{ display: "flex", gap: "80px", listStyle: "none", marginRight: "50px", padding: "20px" }}>

                    <NavLink to="/"> <li>home</li>
                    </NavLink>
                    <NavLink to="/About">                    <li>about</li>
                    </NavLink  >
                    <NavLink to="/Contact">                    <li>contact</li>
                    </NavLink>
                    <NavLink to="/Search">                    <li>search</li>
                    </NavLink>

                    <NavLink to="/Student">
                        <li>Student</li>
                    </NavLink>

                    <NavLink to="/product">
                        <li>Product</li>
                    </NavLink>

                     <NavLink to="/login">
                        <li>Login</li>
                    </NavLink>


                    <NavLink to="/productdetail">
                        <li>Product Detail</li>
                    </NavLink>



                </ul>
            </nav>
            <Outlet />
        </div>
    )
}
