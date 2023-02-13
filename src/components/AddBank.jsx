import React from 'react';
import {Grid,Button,TextField,Card,CardContent,Alert} from '@mui/material'
import { useState } from 'react';
import { useEffect } from 'react';
import axios from 'axios';

export const AddBank=()=>{
    const[name,setName]=useState("");
    const[branch,setBranch]=useState("");
    const[city,setCity]=useState("");
    const[isvalid,setIsvalid]=useState(false);
    const[isSuccess,setIsSuccess]=useState(false);

    const handleSubmit=async()=>{
        const url="http://localhost:4040/api/addbank";
        const payload={
            name,
            branch,
            city
        };
      const result=await  axios.post(url,payload);
      if (result.status===200) {
        setIsSuccess(true);
        setName("");
        setBranch("");
        setCity("");
      }
    }

    const handleCancel=()=>{
        setName("");
        setCity("");
        setBranch("");
    }

    useEffect(()=>{
        setIsvalid(name.length>=3 && city.length>=3 && branch.length>3)
    },[name,city,branch])

    return(
        <div>
            {/* <h5>Add Bank Home</h5> */}
            <Card>
                <CardContent>
                    <Grid container spacing={2}>
                        <Grid item xs={4}>
                            Bank Name
                        </Grid>
                        <Grid item xs={8}>
                            <TextField label="Enter bank name" variant='outlined' value={name} onChange={(e)=>setName(e.target.value.toUpperCase())}/>
                        </Grid>
                        <Grid item xs={4}>
                            Bank Branch Name
                        </Grid>
                        <Grid item xs={8}>
                            <TextField label="Enter Branch " variant='outlined' value={branch} onChange={(e)=>setBranch(e.target.value.toUpperCase())}/>
                        </Grid>
                        <Grid item xs={4}>
                            City Name
                        </Grid>
                        <Grid item xs={8}>
                            <TextField label ="Enter City Name" variant='outlined' value={city} onChange={(e)=>setCity(e.target.value.toUpperCase())}/>
                        </Grid>
                        <Grid item xs={4}></Grid>
                        <Grid item xs={2}>
                            <Button variant='contained' disabled={!isvalid} onClick={handleSubmit} >Submit</Button>
                        </Grid>
                        <Grid item xs={2}>
                            <Button variant='contained' onClick={handleCancel}>Cancel</Button>
                        </Grid>
                        <Grid item xs={4}></Grid>
                        <Grid xs={12}>
                            {isSuccess && <Alert severity="success">Bank is Successfully added!!!!</Alert>}
                        </Grid>
                    </Grid>
                </CardContent>
            </Card>
        </div>
    )
}