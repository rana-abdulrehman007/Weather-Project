import { useState, useEffect } from 'react'
import React from 'react'
import "./App.css";


export default function App() {
  const [expensename, setexpensename] = useState("")
  const [amount, setamount] = useState("")
  const [category, setcategory] = useState("")
  const [date, setdate] = useState("")

  const [expenses, setexpenses] = useState([])

  const [search, setsearch] = useState("")

  //   useEffect(() => {
  //   const savedExpenses = localStorage.getItem("expenses");

  //   if (savedExpenses) {
  //     setexpenses(JSON.parse(savedExpenses));
  //   }
  // }, []);

  // useEffect(() => {
  //   localStorage.setItem("expenses", JSON.stringify(expenses));
  // }, [expenses]);


  function submit(e) {
    e.preventDefault()
    if (!expensename || !amount || !category || !date) {
      alert("fill the field")
      return
    }
    const newexpense = {
      expensename,
      amount,
      category,
      date
    }
    const newdata = [...expenses, newexpense]
    setexpenses(newdata)

    localStorage.setItem("expenses", JSON.stringify(newdata))
    setamount("")
    setcategory("")
    setdate("")
    setexpensename("")
    setsearch("")
  }
  function deletebtn(index) {
    const newdata = expenses.filter((item, i) => {
      return i !== index
    })
    setexpenses(newdata)
    localStorage.setItem("expenses", JSON.stringify(newdata))


  }
  const total = expenses.reduce((total, item) => {
    return total + Number(item.amount)
  }, 0)

  useEffect(() => {
    const saved = localStorage.getItem("expenses");

    if (saved) {
      setexpenses(JSON.parse(saved));
    }
  }, []);




  return (
    <>
      <h1 className="title">Expense Tracker</h1>
      {/* <h1 style={{ backgroundColor: "lightblue" }}>EXPENSE TRACKER PROJECT</h1> */}
      <div className='container'>
        {/* <h1>EXPENSE TRACKER PROJECT</h1> */}
        <input className="input" type="text" placeholder='Expense Name' onChange={(e) => setexpensename(e.target.value)}
          value={expensename}
        />
        <br />
        <br />

        <input className="input" type="text" placeholder='enter your amount' onChange={(e) => setamount(e.target.value)}
          value={amount}
        />
        <br />
        <br />

        <input className="input" type="text" placeholder='enter your category' onChange={(e) => setcategory(e.target.value)}
          value={category}
        />
        <br />
        <br />

        <input className="input" type="date" placeholder='enter your date' onChange={(e) => setdate(e.target.value)}
          value={date}
        />
        <br />
        <br />
        <input className="input" type="search" placeholder='search expense' onChange={(e) => setsearch(e.target.value)}
          value={search}
        />
        <br />
        <br />
        <button className="add-btn" onClick={submit}>ADD EXPENSE</button>

        {
          expenses.filter((item) => {
            return item.expensename?.toLowerCase().includes(search.toLowerCase())
          })
            .map((item, index) => {
              return (
                <div className='expense-list' key={index}>
                  <h1>expense name : {item.expensename}</h1>
                  <h1>amount:{item.amount}</h1>
                  <h1>category:{item.category}</h1>
                  <h1>date: {item.date}</h1>
                  <button className='delete-btn' onClick={() => deletebtn(index)}>delete item</button>

                </div>
              )
            })
        }
        <h3 className='total'> Total : $ {total}</h3>



      </div>


    </>

  )
}