// import React from 'react'
// import { useDispatch } from 'react-redux'
// import { addtocart } from '../redux/Slice'

// export default function Product() {

//   const dispatch=useDispatch()
//   const product=[
//     {id:1,name:"laptop",price:50000},
//         {id:2,name:"LCD",price:50000},
//     {id:3,name:"computer",price:50000},
//     {id:4,name:"mobile",price:50000},

//   ]
//   return (
//     <div>

//       {
//         product.map((item,index)=> {
//           return (
//             <div key={index}>
//               <h2> name : {item.name}</h2>
//               <h3>price is $ : {item.price}</h3>
//             </div>
//           )
//         })
//       }

//         <br />
//         <button onClick={()=>dispatch(addtocart(product))}>Add Item</button>
      
//     </div>
//   )
// }
