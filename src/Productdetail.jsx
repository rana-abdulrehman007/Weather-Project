// import React from 'react'
// import { NavLink, Outlet, useParams } from 'react-router-dom'

// export default function Productdetail() {

//     const {id}=useParams()

    
// const data=[
//     {id:1 ,name:"Laptop"},
//     {id:2 ,name:"Mobile"},
//     {id:3 ,name:"LCD"},
//     {id:4 ,name:"Mouse"},
//     {id:5 ,name:"Keyboard"}

// ]

// const product=data.find((p)=> {
//     return p.id===parseInt(id)
// })

//   return (
//     <div>
//         <h1>product detail</h1>
//         <h2>Name : {product.name}</h2>
//         <h3> id is : {id}</h3>
//         <NavLink to="/product">
//           product
//         </NavLink>
//       <Outlet/>
//     </div>
//   )
// }
