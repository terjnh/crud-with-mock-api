import React, { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Checkbox from '@mui/material/Checkbox';
import axios from 'axios';
import { alpha, styled } from '@mui/material/styles';
import {useNavigate} from 'react-router-dom';



export default function Update() {
    const navigate = useNavigate();
    const [id, setID] = useState(null);
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [checked, setChecked] = React.useState(false);

    const handleChange = (event) => {
        setChecked(event.target.checked);
    }

    const updateAPIData = () => {
        axios.put(`https://6202a0774d21c200170b9934.mockapi.io/fakeData/${id}`, {
            firstName,
            lastName,
            checked
        }).then(() => {
            navigate('/read')
        })
    }

    useEffect(() => {
        setID(localStorage.getItem('ID'))
        setFirstName(localStorage.getItem('First Name'));
        setLastName(localStorage.getItem('Last Name'));
        setChecked(localStorage.getItem('Checkbox Value'));
    }, []);

    return (
        <form>
            <h1> Update Page </h1>
            <CssTextField sx={{ input: { color: 'white' } }}
                style={{ width: "250px", margin: "5px" }}
                type="text"
                label="First Name"
                variant="outlined"
                value={firstName}
                onChange={(e) => {
                    setFirstName(e.target.value)
                    console.log("first name:", firstName)
                }}
            />
            <br />
            <CssTextField sx={{ input: { color: 'white' } }}
                style={{ width: "250px", margin: "5px" }}
                type="text"
                label="Last Name"
                variant="outlined"
                value={lastName}
                onChange={(e) => {
                    setLastName(e.target.value)
                }}
            />
            <br />
            <Checkbox
                checked={checked}
                onChange={handleChange}
                checked={checked}
                inputProps={{ 'aria-label': 'controlled' }}
                label="some label"
            />
            
            <br /><br />
            <Box component="span" style={{ marginLeft: "120px" }}>
                <Button variant="contained"
                    onClick={updateAPIData}>
                    Submit
                </Button>
            </Box>
        </form>
    )
}



const CssTextField = styled(TextField)({
    '& label.Mui-focused': {
        color: 'white',
    },
    '& .MuiInput-underline:after': {
        borderBottomColor: 'white',
    },
    '& .MuiOutlinedInput-root': {
        '& fieldset': {
            borderColor: 'white',
        },
    },
    '& .MuiInputBase-input': {
        borderRadius: 6,
        backgroundColor: '#2A2A2A',
    },
    '&.Mui-focused fieldset': {
        borderColor: 'lightgreen',
    },
});