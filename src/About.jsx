// import React from 'react'

// function About() {
//   return (
//     <div style={{display:"flex", justifyContent:"center",backgroundColor:"blue",flexDirection:"column",height:"500px"}}>
//       <h2>About Us</h2>
//       <p>
//         We are a frontend development company.
//         We build modern websites using React.
//       </p>
//     </div>
//   )
// }

// export default About


// 
import React from 'react'
import { NavLink} from 'react-router-dom'


export default function About() {
  return (
    <div>
      <h1>About</h1>
      <NavLink to="/">       <button >go to home</button>
      </NavLink>

    </div>
  )
}
