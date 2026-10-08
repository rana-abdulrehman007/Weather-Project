import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'

export default function Student() {
  return (
    <div>

<h1>Student component</h1>

{/* 
<NavLink to="/Student">

</NavLink> */}


<NavLink to="/student/studentname">
    Studentname

</NavLink>
<br />
<NavLink to="/student/studentage">
    Studentage

</NavLink> 



<Outlet/>


      
    </div>
  )
}
