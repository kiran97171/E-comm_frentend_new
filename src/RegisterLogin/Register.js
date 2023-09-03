import React, { useState } from 'react'
import '../Components/Components.css'
import { NavLink, useNavigate } from 'react-router-dom'
import axios from 'axios'
import { MdOutlineArrowBackIosNew } from 'react-icons/md'
import { Link } from 'react-router-dom'

const Register = () => {
    const [name, setName] = useState('')
    const [age, setAge] = useState('')
    const [address, setAddress] = useState('')
    const [phone, setPhone] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')


    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            await axios.post('https://e-comm-backend-new03.onrender.com/users/register', {
                name, age, address, phone, email, password
            })
                .then(res => {
                    if (res.data === "User already registered Plz try to login") {
                        alert("User already registered Plz try to login")
                    }
                    else if (res.data === "User Registered Successfully") {
                        alert("User Registered Successfully")
                    }
                })
                .catch(e => {
                    console.log(e)
                })
        }
        catch (err) {
            console.log(err)
        }
    }

    const goBackFromRegisterPage = () => {
        navigate(-1)
    }
    return (
        <>
            <div id='register-page'>
                <MdOutlineArrowBackIosNew className='login-register-back-icon' onClick={goBackFromRegisterPage} />
                <div className='login-register-header'>
                    <Link to='/' className='shop-logo-link'><h1>Shopify</h1></Link>
                </div>
                <div className='login-register-container'>
                    <div className='login-register-form'>
                        <p className='login-register'>Register</p>
                        <form action='POST'>
                            <label className='login-register'>Name :</label><br />
                            <input type='text' placeholder='Name' onChange={(e) => { setName(e.target.value) }} className='login-register' /><br />
                            <label className='login-register'>Age :</label><br />
                            <input type='number' placeholder='Age' onChange={(e) => { setAge(e.target.value) }} className='login-register' /><br />
                            <label className='login-register'>Address :</label><br />
                            <input type='text' placeholder='Address' onChange={(e) => { setAddress(e.target.value) }} className='login-register' /><br />
                            <label className='login-register'>Phone :</label><br />
                            <input type='tel' placeholder='98******' onChange={(e) => { setPhone(e.target.value) }} className='login-register' /><br />
                            <label className='login-register'>Email :</label><br />
                            <input type='email' placeholder='abc@gmile.com' onChange={(e) => { setEmail(e.target.value) }} className='login-register' /><br />
                            <label className='login-register'>Password :</label><br />
                            <input type='password' placeholder='*******' onChange={(e) => { setPassword(e.target.value) }} className='login-register' /><br />
                            <input type='submit' onClick={handleSubmit} value='Register' id='register-btn' />
                        </form>
                    </div>
                    <div id='goto-login-btn'>
                        <p>Already have an account?</p>
                        <NavLink to='/login' className='links go-to-login-link'>Login</NavLink>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Register