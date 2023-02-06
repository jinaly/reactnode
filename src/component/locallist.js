import { Button, Table, TableCell, TableRow } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const Locallist = () => {

    const [getData, setGetData] = useState([])

    useEffect(() => {
        const data = JSON.parse(localStorage.getItem("list") || "[]")
        setGetData(data, "list")
    }, [])

    const deleteHandel = (i) => {
        let deleteData = [...getData]
        deleteData.splice(i, 1)
        setGetData(deleteData)
        localStorage.setItem("list", JSON.stringify(deleteData))
    }

    return (
        <>
            <Table>
                <TableRow>
                    <TableCell>firstname</TableCell>
                    <TableCell>lastname</TableCell>
                    <TableCell>email</TableCell>
                </TableRow>
                {getData.map((g, i) => {
                    return (
                        <TableRow key={i}>
                            <TableCell>{g.firstname}</TableCell>
                            <TableCell>{g.lastname}</TableCell>
                            <TableCell>{g.email}</TableCell>
                            <TableCell><Button onClick={() => deleteHandel(i)}>Delete</Button></TableCell>
                            <TableCell><Link to={`/updatelist/${i}`}>update</Link></TableCell>
                        </TableRow>
                    )

                })}
            </Table>

        </>
    )
}

export default Locallist