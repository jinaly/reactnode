import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { login } from '../features/userSlice'

const Login = () => {

    const [form, setForm] = useState({
        name: '',
        email: '',
        password: ''
    })

    const formOnChange = (key, value) => {
        setForm({ ...form, [key]: value })
    }

    const dispatch = useDispatch();

    const onSubmit = (e) => {
        e.preventDefault();
        dispatch(
            login({
                name: form.name,
                email: form.email,
                password: form.password,
                loggedIn: true,
            })
        )
    }

    return (
        <>
            <form onSubmit={onSubmit}>
                <h1>Login form</h1>
                <input type='text' placeholder='name' name='name' value={form.name} onChange={(e) => formOnChange("name", e.target.value)} />
                <input type='email' placeholder='email' name='email' value={form.email} onChange={(e) => formOnChange("email", e.target.value)} />
                <input type='password' placeholder='password' name='password' value={form.password} onChange={(e) => formOnChange("password", e.target.value)} />
                <button type='submit'>submit</button>
            </form>
        </>
    )
}

export default Login