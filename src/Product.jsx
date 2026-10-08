import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

export default function Product() {

    const data = [
        { id: 1, name: "Laptop" },
        { id: 2, name: "Mobile" },
        { id: 3, name: "LCD" },
        { id: 4, name: "Mouse" },
        { id: 5, name: "Keyboard" }

    ]

    return (
        <>
            <div>
                <h1>Product</h1>
            </div>


            {
                data.map((item, index) => {
                    return (
                        <div key={index} >
                            <h3> name :{item.name}</h3>
                            <h3> id :{item.id}</h3>


                            <Link to={`/product/${item.id}`}>
                                view details
                            </Link>


                        </div>
                    )
                })



            }



        </>






    )
}
