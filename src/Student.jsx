// import React from 'react'
import React, { useEffect, useState } from 'react'
import { NavLink, Link } from 'react-router-dom'



export default function Student() {

    const [students, setStudents] = useState([])

    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [age, setAge] = useState("")

    async function getdata() {
        const url = "http://localhost:3000/student"
        const res = await fetch(url)

        const data = await res.json()
        setStudents(data)
        console.log(data)
    }

    useEffect(() => {
        getdata()
    }, [])

    async function handleSubmit(e) {
        e.preventDefault()
        const newStudent = {
            name,
            email,
            age,
        }
        if (name === "" || email === "" || age === "") {
            alert("Fill the Field");
            return;
        }

        const response = await fetch("http://localhost:3000/student", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newStudent)
        })
        const data = [...students, newStudent]
        setStudents(data)
        setName("")
        setEmail("")
        setAge("")
    }

    async function deleteStudent(id) {
        try {
            const response = await fetch(`http://localhost:3000/student/${id}`, {
                method: "DELETE",
            });

            if (!response.ok) {
                console.log("error")
            }

            console.log("Deleted successfully from API");

            setStudents(students.filter((item) => item.id !== id));
        } catch (err) {
            console.error("Error deleting student:", err);
        }
    }

    return (
        <>
            <div>

                <h1 style={{ color: "black", fontSize: "50px" }}>Student CRUD App</h1>
                <br />
                <form style={{ border: "5px solid black", width: "200px", backgroundColor: "black", color: "white" }} onSubmit={handleSubmit}>

                    <input
                        type="text"
                        placeholder="Student Name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                    <br />
                    <br />

                    <input
                        type="email"
                        placeholder="Student Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <br />
                    <br />


                    <input
                        type="number"
                        placeholder="Student Age"
                        value={age}
                        onChange={(e) => setAge(e.target.value)}
                    />
                    <br />
                    <br />


                    <button>Add Student</button>

                </form>
                <br />
                <br />



                <h2 >Students : </h2>
                <div style={{
                    display: "flex",
                    flexWrap: "wrap",
                    gap: "16px",
                    padding: "16px",
                }}>

                    {students.map((student, index) => (
                        <div style={{
                            backgroundColor: "#ffffff",
                            borderRadius: "12px",
                            padding: "16px",
                            border: "1px solid #e5e5e5",
                            width: "220px"

                        }} key={index}>
                            <h2>id :{student.id} </h2>
                            <h3>Name :{student.name}</h3>
                            <p>Email : {student.email}</p>
                            <p>Age : {student.age}</p>
                            <button style={{
                                padding: "6px 14px",
                                fontSize: "14px",
                                borderRadius: "6px",
                                border: "none",
                                backgroundColor: "#ef4444",
                                color: "#fff",
                                cursor: "pointer"
                            }} onClick={() => deleteStudent(student.id)}>Delete</button>
                            <br />
                            <br />
                            <button style={{
                                padding: "6px 14px",
                                fontSize: "14px",
                                borderRadius: "6px",
                                border: "none",
                                backgroundColor: "black",
                                color: "#fff",
                                cursor: "pointer"
                            }}>
                                <Link to={`/update/${student.id}`}>
                                    Edit
                                </Link>
                            </button>

                        </div>
                    ))}
                </div>


            </div>

        </>
    )

}