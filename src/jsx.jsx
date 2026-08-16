
//   const data = {
//     name: "abdul rehman",
//     age: 23
//   }
//   const a = 32
//   const b = 65

//   const islogin = false

//   let product = "Laptop";
//   let price = 80000;
//   let quantity = 2;

//   let age = 20

//   let fruits = ["Apple", "Banana", "Mango", "Orange"];

//   let students = [
//     { name: "Ali", age: 20 },
//     { name: "Ahmed", age: 22 },
//     { name: "Usman", age: 19 }
//   ];

//   const product1 = [
//     { name: "Laptop", price: 80000, inStock: true },
//     { name: "Phone", price: 50000, inStock: false },
//     { name: "Mouse", price: 2000, inStock: true }
//   ]
//   // if(inStock){
//   //   return <h2>in stock</h2>
//   // }else {
//   //   return <h2>out of stock</h2>
//   // }

//   return (
//     <>
//     <Navbar2/>

//       <h1 style={{ color: "red", fontSize: "50px" }}>data is : {data.name}</h1>
//       <h1>data is : {data.age}</h1>

//       <p>sum is : {a + b}</p>

//       <img src="" alt="image reload hor ahi" />
//       <div>
//         {
//           islogin ? <h1>welcome</h1> : <h2>plz login</h2>
//         }
//       </div>

//       <div>
//         <h1>product is : {product}</h1>
//         <h2>price is : {price}</h2>
//         <h3>quantity is : {quantity}</h3>
//         <h5>total  is : {price * quantity}</h5>
//       </div>


//       <div>
//         {
//           age <= 18 ? <h1>vote</h1> : <h2>you not vote</h2>
//         }

//       </div>


//       {
//         fruits.map((item, index) => {
//           return (
//             <div key={index}>
//               <ul>
//                 <h1>fruit is : {item}</h1>
//               </ul>
//             </div>
//           )
//         })
//       }

//       {
//         students.map((item, index) => {
//           return (
//             <div key={index}>
//               <h1>{item.name}</h1>
//               <h1>{item.age}</h1>
//             </div>



//           )
//         })
//       }

//       {
//         product1.map((item, index) => {
//           return (
//             <div key={index}>
//               <h2>name : {item.name}</h2>
//               <h2>price Rs : {item.price}</h2>
//              <p> {item.inStock ? <h1> inStock </h1> : <h2>"Out of Stock"</h2> }</p>



//             </div>
//           )
//         })
//       }

