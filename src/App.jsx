import React, { useCallback, useEffect, useReducer, useRef, useState } from 'react'
import './App.css';
import Calculator from './Calculator';


export default function App() {




  return (
    <>

    

        <Calculator/>


    </>
  )



}










//   const [data, setdata] = useState([])
//   const [loading, setloading] = useState(true)
//   const [error, seterror] = useState(null)
//   const [search, setsearch] = useState('')

//   async function fetchdata() {
//     try {
//       const response = await fetch('https://dummyjson.com/users')
//       if (!response.ok) {
//         throw new Error('something went wrong')
//       }
//       const data = await response.json()
//       setdata(data.users)
//       console.log(data)

//     } catch (error) {
//       seterror(error.message)
//     } finally {
//       setloading(false)
//     }
//   }

//   useEffect(() => {
//     fetchdata()
//   }, [])

//   if (loading) {
//     return <h1>Loading...</h1>
//   }

//   if (error) {
//     return <h1>{error}</h1>
//   }

//   function handledelete(index) {
//     setdata(data.filter((item, i) => {
//       return i !== index
//     }))
//   }

//   const filtersearch = data.filter((item) => {
//     return item.firstName.toLowerCase().includes(search.toLowerCase())
//   })




//   return (
//     <>
//       <h1>App component</h1>
//       <input type="text" placeholder='search' onChange={(e) => setsearch(e.target.value)} />

//       {
//         filtersearch.map((item, index) => {
//           return (
//             <div key={item.id}>
//               <h1>{item.firstName} - {item.lastName}</h1>
//               <button onClick={() => handledelete(index)}>Delete</button>
//             </div>

//           )
//         })
//       }

//     </>
//   )
// }