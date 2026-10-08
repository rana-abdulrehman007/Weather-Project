// // import React from 'react'
// // import { useDispatch } from 'react-redux'
// // import { addtocart } from '../redux/Slice'

// // export default function Product() {

// //   const dispatch=useDispatch()
// //   const product=[
// //     {id:1,name:"laptop",price:50000},
// //         {id:2,name:"LCD",price:50000},
// //     {id:3,name:"computer",price:50000},
// //     {id:4,name:"mobile",price:50000},

// //   ]
// //   return (
// //     <div>

// //       {
// //         product.map((item,index)=> {
// //           return (
// //             <div key={index}>
// //               <h2> name : {item.name}</h2>
// //               <h3>price is $ : {item.price}</h3>
// //             </div>
// //           )
// //         })
// //       }

// //         <br />
// //         <button onClick={()=>dispatch(addtocart(product))}>Add Item</button>
      
// //     </div>
// //   )
// // }


// // import React from 'react'
// // import { useDispatch } from 'react-redux'
// // import { addtocart } from '../redux/Slice'

// // export default function Product() {


// //   const dispatch=useDispatch()

// //   const product=[
// //     {
// //         id:1,
// //         name:"laptop",
// //         price:"$500"
// //     },
// //         {
// //         id:2,
// //         name:"mobile",
// //         price:"$500"
// //     }

// //   ]

// //   return (
// //     <div>
      
// //   {
// //     product.map((item,index)=> {
// //         return (
// //             <div key={index}>
// //                 <h1>item:{item.name}</h1>

// //                   <h1>price $ :{item.price}</h1>

// //                   <br />
 

  
// //                   <button onClick={()=>dispatch(addtocart(item))}> add item+</button>

// //             </div>
// //         )
    
// //   }
// import React from 'react'
// import { useDispatch } from 'react-redux'
// import { addtocart } from '../redux/Slice'

// export default function Product() {
//   const dispatch = useDispatch()

//   const products = [
//     { id: 1, name: 'laptop', price: '$500' },
//     { id: 2, name: 'mobile', price: '$5000' },
//         { id: 3, name: 'mouse', price: '$800' },
//     { id: 4, name: 'lcd', price: '$50' },

//   ]

//   return (
//     <div>
//       {products.map((item) => (
//         <div key={item.id}>
//           <h1>name : {item.name}</h1>
//           <h2>price : {item.price}</h2>
//           <button onClick={() => dispatch(addtocart(item))}>add item+</button>
//         </div>
//       ))}
//     </div>
//   )
// }


