"use client"
import { useState } from 'react'
import './../style.css'
export default function Page() {
    const [name, setName] = useState("");
    const [age, setAge] = useState("");
    const [email, setEmail] = useState("");
    const addUser = async () => {
        let respones = await fetch("http://localhost:3000/api/users", {
            method: "Post",
            body: JSON.stringify({ name, age, email })
        });
        respones = await respones.json()
        if (respones.success) {
            alert("Add New User")
        } else {
            alert("some error with data please check and try again")
        }
        console.log(respones);
    }
    return (
        <div className='add-user'>
            <h1>Add New User</h1>
            <input type="text" value={name} placeholder="Enter Name" onChange={(e) => setName(e.target.value)} className='input-field' />
            <input type="text" value={age} placeholder="Enter Age" onChange={(e) => setAge(e.target.value)} className='input-field' />
            <input type="text" value={email} placeholder="Enter Email" onChange={(e) => setEmail(e.target.value)} className='input-field' />
            <button className='btn' onClick={addUser}>Add User</button>

        </div>
    )
}  