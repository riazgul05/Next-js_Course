"use client"
import './../../../style.css'
import { useEffect, useState } from "react";

export default function Page({ params }) {
    let id = params.userid
    const [name, setName] = useState("");
    const [age, setAge] = useState("");
    const [email, setEmail] = useState("");

    useEffect(() => {
        getUserDetails()
    }, [])

    const getUserDetails = async () => {
        let data = await fetch("http://localhost:3000/api/users/" + id);
        data = await data.json();
        setName(data.result.name)
        setAge(data.result.age)
        setEmail(data.result.email)
    }

    const updateUser = async () => {
        let result = await fetch("http://localhost:3000/api/users/" + id, {
            method: "PUT",
            body: JSON.stringify({ name, age, email })
        });
        result = await result.json();
        console.log(result);
        if (result.success) {
            alert('user information Updated')
        } else {
            alert("Please try with vaild input")
        }

    }

    return (
        <div>
            <h1>Upadte User Details</h1>
            <input type="text" value={name} placeholder="Enter Name" onChange={(e) => setName(e.target.value)} className='input-field' />
            <input type="text" value={age} placeholder="Enter Age" onChange={(e) => setAge(e.target.value)} className='input-field' />
            <input type="text" value={email} placeholder="Enter Email" onChange={(e) => setEmail(e.target.value)} className='input-field' />
            <button className='btn' onClick={updateUser}>Add User</button>

        </div>
    )
}