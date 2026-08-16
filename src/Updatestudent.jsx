import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

function EditStudent() {

    const { id } = useParams();

    const navigate = useNavigate();

    const [student, setstudent] = useState({
        name: "",
        email: "",
        age: ""
    });

    //   // GET single student
    async function getdata1() {
        const res = await fetch(`http://localhost:3000/student/${id}`)
        const data = await res.json()
        console.log(data)

        setstudent(data);

    }
    useEffect(() => {
        getdata1()
    }, [])


    async function updatestudent() {
        const response = await fetch(`http://localhost:3000/student/${id}`, {
            method: 'PUT',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(student)
        })
        const data = await response.json();
        console.log(data)
        setStudent(data)
        navigate("/")
    }


    return (
        <div style={{ width: "400px", margin: "30px auto", backgroundColor: "black", color: "white" }}>


            <h1 style={{ color: "blue" }}>Edit Student</h1>

            <input
                type="text"
                placeholder="Name"
                value={student.name}
                onChange={(e) =>
                    setstudent({
                        ...student,
                        name: e.target.value
                    })
                }
            />

            <br /><br />

            <input
                type="email"
                placeholder="Email"
                value={student.email}
                onChange={(e) =>
                    setstudent({
                        ...student,
                        email: e.target.value
                    })
                }
            />

            <br /><br />

            <input
                type="number"
                placeholder="Age"
                value={student.age}
                onChange={(e) =>
                    setstudent({
                        ...student,
                        age: e.target.value
                    })
                }
            />

            <br /><br />

            <button onClick={updatestudent}>
                Update Student
            </button>

        </div>
    );
}

export default EditStudent;