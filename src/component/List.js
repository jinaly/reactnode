import { Button, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const List = () => {
    const [table, setTable] = useState([])

    useEffect(() => {
        tableList()

    }, [])

    const tableList = async () => {
        const list = await axios.get('http://localhost:6001/list')
        console.log(list);
        setTable(list.data)
        console.log(list.data);

    }

    const deletehandel = async (id) => {
        const url = `http://localhost:6001/list/${id}`
        const del = await axios.delete(url);
        console.log(del);
        await tableList();
    }
    return (
        <>
            <TableContainer style={{ width: '400px' }}>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>id</TableCell>
                            <TableCell>firstname</TableCell>
                            <TableCell>lastname</TableCell>
                            <TableCell>Email</TableCell>
                            <TableCell>Action</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {table.map((t, i) => {
                            return (

                                <TableRow key={t.id}>
                                    <TableCell >{i + 1}</TableCell>
                                    <TableCell>{t.firstname}</TableCell>
                                    <TableCell>{t.lastname}</TableCell>
                                    <TableCell>{t.email}</TableCell>
                                    <TableCell><Button onClick={() => deletehandel(t.id)}>Delete</Button></TableCell>
                                    <TableCell><Link to={`/update/${t.id}`}>update</Link></TableCell>
                                </TableRow>


                            )
                        })}
                    </TableBody>
                </Table>
            </TableContainer>
        </>
    )
}

export default List