import { Button, Input } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from "react-router-dom";

const Updatelist = () => {

    const [formd, setFormd] = useState({
        firstname: '',
        lastname: '',
        email: ''
    })
    const { id } = useParams()
    const navigate = useNavigate();
    useEffect(() => {
        const getData = JSON.parse(localStorage.getItem("list") || "[]")
        // console.log(id, getData[id]);
        setFormd(getData[id])

    }, [id])

    const onHandleChange = (e) => {
        setFormd({ ...formd, [e.target.name]: e.target.value })
    }

    const onSubmit = (e) => {
        e.preventDefault();
        const getData = JSON.parse(localStorage.getItem("list") || "[]")
        getData[id] = formd
        localStorage.setItem("list", JSON.stringify(getData))
        setFormd({
            firstname: '',
            lastname: '',
            email: ''
        })
        navigate('/locallist')

    }


    return (
        <>

            <form >
                First Name:-
                <Input type="text" name='firstname' value={formd.firstname} onChange={onHandleChange} />
                Last Name:-
                <Input type="text" name='lastname' value={formd.lastname} onChange={onHandleChange} />
                Email:-
                <Input type="text" name='email' value={formd.email} onChange={onHandleChange} />
                <Button type="submit" onClick={onSubmit}>Save</Button>
            </form>

        </>
    )
}

export default Updatelist