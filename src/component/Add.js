import { Button, Input } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import DateRangePicker from 'react-daterange-picker'
import 'react-daterange-picker/dist/css/react-calendar.css'

const Add = () => {
    const [formd, setFormd] = useState({
        firstname: '',
        lastname: '',
        email: '',
        gender: '',
        date: null
    })

    const [date, setDate] = useState();
    // const navigate = useNavigate();

    const [addrtype, setAddrType] = useState('')


    const groupEvent = (e) => {
        setFormd({ ...formd, [e.target.name]: e.target.value })
    }

    const onSelect = (date) => {
        setFormd({ ...formd, date: date })
    }

    // const handleAddrTypeChange = (e) => {
    //     setAddrType(addrtype)
    //     console.log(addrtype);
    // }

    const onClickData = (e) => {
        e.preventDefault();
        setFormd(formd)

        console.log(formd);
    }

    // const onSubmit = (e) => {
    //     e.preventDefault();
    //     const temp = JSON.parse(localStorage.getItem("list") || "[]")
    //     temp.push(formd)
    //     localStorage.setItem("list", JSON.stringify(temp))
    //     setFormd({
    //         firstname: '',
    //         lastname: '',
    //         email: ''
    //     })
    //     navigate('/locallist')
    // }



    // async (e) => {
    //     e.preventDefault();
    //     const res = await axios.post("http://localhost:6001/add", formd)
    //     alert("done");
    //     navigate('/list')
    //     console.log(res);
    // }

    return (
        <>
            <form >
                First Name:-
                <Input type="text" name='firstname' value={formd.firstname} onChange={groupEvent} />
                Last Name:-
                <Input type="text" name='lastname' value={formd.lastname} onChange={groupEvent} />
                Email:-
                <Input type="text" name='email' value={formd.email} onChange={groupEvent} />
                <div onChange={groupEvent}>
                    <input type="radio" value="MALE" name="gender" /> Male
                    <input type="radio" value="FEMALE" name="gender" /> Female
                </div>
                <div><DateRangePicker name="dates" value={formd.date} onSelect={(date) => onSelect(date)} /></div>
                {/* (value) => { console.log(value) */}
                <select id="dropdown" defaultValue={addrtype}
                    onChange={(e) => setAddrType(e.target.value)}>
                    <option value="N/A">N/A</option>
                    <option value="1">home</option>
                    <option value="2">cort</option>
                    <option value="3">goat</option>
                    <option value="4">lol</option>
                </select>

                <Button type="submit" onClick={onClickData}>Save</Button>
            </form>



        </>
    );
}

export default Add;