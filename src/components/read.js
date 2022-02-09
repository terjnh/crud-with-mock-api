import React, { useEffect, useState } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import axios from 'axios';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';


export default function Read() {
    const [APIData, setAPIData] = useState([]);
    useEffect(() => {
        axios.get(`https://6202a0774d21c200170b9934.mockapi.io/fakeData`)
            .then((response) => {
                console.log("read-response:", response)
                setAPIData(response.data)

                APIData.map((profile) => {
                    console.log("profile:", profile)
                })
            })
            .catch((error) => {
                console.log("read-error:", error)
            })
    }, [])


    const setData = (data) => {
        let { id, firstName, lastName, checked } = data;
        localStorage.setItem('ID', id);
        localStorage.setItem('First Name', firstName)
        localStorage.setItem('Last Name', lastName)
        localStorage.setItem('Checkbox Value', checked)
    }

    const getData = () => {
        axios.get(`https://6202a0774d21c200170b9934.mockapi.io/fakeData`)
            .then((theData) => {
                console.log('getData:', theData)
                setAPIData(theData.data);
            })
    }

    const onDelete = (id) => {
        axios.delete(`https://6202a0774d21c200170b9934.mockapi.io/fakeData/${id}`)
        .then(() => {
            getData();
        })
    }


    return (
        <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell>First Name</TableCell>
                        <TableCell align="right">Last Name</TableCell>
                        <TableCell align="right">Checked</TableCell>
                        <TableCell align="right">Update</TableCell>
                        <TableCell align="right">Delete</TableCell>
                    </TableRow>
                </TableHead>

                <TableBody>
                    {APIData.map((profile) => (
                        <TableRow>
                            <TableCell component="th" scope="row">{profile.firstName}</TableCell>
                            <TableCell align="right" scope="row">{profile.lastName}</TableCell>
                            <TableCell align="right" scope="row">{profile.checked ? 'Checked' : 'Unchecked'}</TableCell>
                            <Link to='/update'>
                                <TableCell align="right" scope="row">
                                    <Button
                                        onClick={() => setData(profile)}
                                    >Update</Button>
                                </TableCell>
                            </Link>
                            <TableCell align="right" scope="row">
                                <Button
                                    onClick={() => onDelete(profile.id)}
                                >Delete</Button>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>

        </TableContainer>
    )
}