import React, { useState } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Checkbox from '@mui/material/Checkbox';
import axios from 'axios';
import { alpha, styled } from '@mui/material/styles';



export default function Create() {

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [checked, setChecked] = React.useState(true);

    const handleChange = (event) => {
        console.log(event.target.checked);
        setChecked(event.target.checked);
    };

    const postData = () => {
        axios.post(`https://6202a0774d21c200170b9934.mockapi.io/fakeData`, {
            firstName,
            lastName,
            checked
        })
            .then(response => {
                console.log("response:", response)
                console.log("res-status:", response.status)
            })
            .catch(error => {
                console.log("error:", error)
            });
    }


    return (
        <form>
            <CssTextField sx={{ input: { color: 'white' } }}
                style={{ width: "250px", margin: "5px" }}
                type="text"
                label="First Name"
                variant="outlined"
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
                onChange={(e) => {
                    setLastName(e.target.value)
                }}
            />
            <br />
            <Checkbox
                checked={checked}
                onChange={handleChange}
                inputProps={{ 'aria-label': 'controlled' }}
                label="Enable"
            />
            
            <br /><br />
            <Box component="span" style={{ marginLeft: "120px" }}>
                <Button variant="contained"
                    onClick={postData}>
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

