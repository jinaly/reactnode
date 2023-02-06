import { Button, Input } from '@mui/material';
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';

const Update = () => {

    const { id } = useParams();
    const [listuser, setListuser] = useState({
        firstname: "",
        lastname: "",
        email: ""
    });

    useEffect(() => {
        // async function getalluser() {
        //     const url = `http://localhost:6001/list/${id}`
        //     try {
        //         const listuser = await axios.get(url)
        //         console.log(listuser.data);
        //         setListuser(listuser.data)
        //     } catch (error) {
        //         console.log("something is wrong");
        //     }
        // }

        getalluser()
    }, []);

    const getalluser = async () => {
        const url = `http://localhost:6001/list/${id}`
        const listuse = await axios.get(url)
        console.log(listuse.data);
        setListuser(listuse.data)
    }

    const groupEvent = e => {
        setListuser({ ...listuser, [e.target.name]: e.target.value })
    }
    const onSubmit = async event => {
        const url = `http://localhost:6001/list/${id}`;
        event.preventDefault();
        try {
            await axios.put(url, listuser)
            alert("done");
        } catch (error) {
            console.log("somthing is wrong");
            alert("somthing wrong")
        }
    }

    return (
        <>
            <form >
                First Name:-
                <input type="text" name="firstname" value={listuser.firstname} onChange={e => groupEvent(e)} />
                Last Name:-
                <input type="text" name="lastname" value={listuser.lastname} onChange={e => groupEvent(e)} />
                Email:-
                <input type="text" name="email" value={listuser.email} onChange={e => groupEvent(e)} />
                <Button type="submit" onClick={onSubmit}>Save</Button>
            </form>

        </>
    )
}

export default Update