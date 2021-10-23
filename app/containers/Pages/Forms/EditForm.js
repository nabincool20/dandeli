import React from 'react';

import { Typography, Box, TextField, Button, Container, Grid, MenuItem, Select } from '@material-ui/core';



const EditForm = () => {

    const [phoneType, setPhoneType] = React.useState('');

    const handleChange = (event) => {
        setPhoneType(event.target.value);
    };

return(
   <Container component="main" maxWidth="xs">
       <Typography component="h1" variant="h5">
           Edit Data
       </Typography>
        <Box component="form" noValidate onSubmit={handleChange} sx={{mt: 3}}>
            <Grid container spacing={2}>
                <Grid  item xs={12} sm={6}> 
                    <TextField
                    name="firstName"
                    id="firstName"
                    label="First Name"
                    required
                    />
                </Grid>

                <Grid  item xs={12} sm={6}> 
                    <TextField
                    name="lastName"
                    id="lastName"
                    label="Last Name"
                    required
                    />
                </Grid>

                <Grid  item xs={12} sm={6}> 
                    <TextField
                    name="email"
                    label="Email Address"
                    id="email"
                    required
                    />
                </Grid>
                
                <Grid  item xs={12} sm={6}> 
                    <TextField
                    name="age"
                    label="Age"
                    type="number"
                    id="age"
                    required
                    />
                </Grid>

                <Grid  item xs={12} sm={6}> 
                    <TextField
                    name="gender"
                    label="Gender"
                    id="gender"
                    required
                    />
                </Grid>

                <Typography component="p">
                    Address
                </Typography>
                <Grid  item xs={12} sm={6}> 
                    <TextField
                    name="stateAdress"
                    label="State Address"
                    id="stateAdress"
                    required
                    />
                </Grid>

                <Grid  item xs={12} sm={6}> 
                    <TextField
                    name="city"
                    label="City"
                    id="city"
                    required
                    />
                </Grid>

                <Grid  item xs={12} sm={6}> 
                    <TextField
                    name="state"
                    label="State"
                    id="state"
                    required
                    />
                </Grid>
                
                <Grid  item xs={12} sm={6}> 
                    <TextField
                    name="postalCode"
                    label="Postal Code"
                    id="postalCode"
                    type="number"
                    required
                    />
                </Grid>

                <Typography component="p">
                    Phone Number
                </Typography>
                <Select
                value={setPhoneType}
                id="select"
                label="Select"
                onChange={handleChange}
                >
                 <MenuItem value=''>Home</MenuItem>   
                 <MenuItem value=' '>Fax</MenuItem>
                </Select>
                <TextField 
                id="select"
                type="number"
                />

            <Button
            type="submit"
            >
                Edit

            </Button>

            </Grid>

        </Box>
   </Container>

);
};
export default EditForm;