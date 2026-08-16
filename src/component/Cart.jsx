// import React from "react";
// import { useDispatch, useSelector } from "react-redux";
// import {removecart} from  "../redux/Slice"
// import {clearcart}  from "../redux/Slice"

// export default function Cart() {

//   const cart = useSelector((state) => state.cart.cart);

//   const dispatch = useDispatch();
//   return (
//     <div>

//       <h1>My Cart</h1>
//       {
        
//         cart.map((item,index) => (

//           <div key={index}>

//             <h2>{item.name}</h2>

//             <p>Rs {item.price}</p>

//             <button
//               onClick={() => dispatch(removecart(item))}
//             >
//               Remove
//             </button>

//           </div>

//         ))
    

//       }


    

// {      
//         <button onClick={() => dispatch(clearcart())}>
//           Clear Cart
//         </button> }
      

//     </div>
//   );
// }