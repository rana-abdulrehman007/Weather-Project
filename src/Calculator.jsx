import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { appendval, clearval, calculateval } from './reduxtolkit/Slice'

export default function Calculator() {

    const btn = {
        padding: "15px",
        fontSize: "20px",
        border: "2px solid black",
        borderRadius: "8px",
        background: "#2d3142",
        color: "white",
        margin: "2px"
    };

    const value = useSelector((state) => state.calculator.value)

    const dispatch = useDispatch()



    return (
        <>
        <h1 style={{display:"flex" , justifyContent:"center", color:'black'}}>Simple Calculator App </h1>
            <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                <div style={{
                    width: "280px",
                    margin: "50px auto",
                    padding: "20px",
                    background: "#1b1d2a",
                    borderRadius: "15px",
                }}
                >



                    <button style={btn} onClick={() => dispatch(appendval("7"))}>7</button>
                    <button style={btn} onClick={() => dispatch(appendval("8"))}>8</button>
                    <button style={btn} onClick={() => dispatch(appendval("9"))}>9</button>
                    <button style={btn} onClick={() => dispatch(appendval("/"))}>/</button>
                    <br /><br />
                    <button style={btn} onClick={() => dispatch(appendval("4"))}>4</button>
                    <button style={btn} onClick={() => dispatch(appendval("5"))}>5</button>
                    <button style={btn} onClick={() => dispatch(appendval("6"))}>6</button>
                    <button style={btn} onClick={() => dispatch(appendval("*"))}>*</button>
                    <br /><br />

                    <button style={btn} onClick={() => dispatch(appendval("1"))}>1</button>
                    <button style={btn} onClick={() => dispatch(appendval("2"))}>2</button>
                    <button style={btn} onClick={() => dispatch(appendval("3"))}>3</button>
                    <button style={btn} onClick={() => dispatch(appendval("-"))}>-</button>
                    <br /><br />

                    <button style={btn} onClick={() => dispatch(appendval("0"))}>0</button>
                    <button style={btn} onClick={() => dispatch(appendval("."))}>.</button>
                    <button style={btn} onClick={() => dispatch(calculateval())}>=</button>
                    <button style={btn} onClick={() => dispatch(appendval("+"))}>+</button>

                    <br /><br />

                    <button style={btn} onClick={() => dispatch(clearval())}>Clear</button>

                    <h1
                        style={{
                            margin: "0 0 15px 0",
                            padding: "10px",
                            minHeight: "40px",
                            textAlign: "right",
                            background: "#0f1019",
                            color: "white",
                            borderRadius: "8px",
                            overflow: "hidden",
                        }}

                    >{value}</h1>
                </div>

            </div>


        </>
    )
}
