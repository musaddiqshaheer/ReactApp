import React,{useState,useEffect} from 'react';
import axios from 'axios'
import {Card,CardContent,Grid,Button} from '@mui/material'
import Select from 'react-select';
import { ShowBankItem } from './ShowBankItem';
export const ShowAdvanceBank=()=>{
    const [name,setName]=useState("ALL");
    const [branch,setBranch]=useState("ALL");
    const [city,setCity]=useState("ALL");
    const[data,setData]=useState([])
    const optionsNames=[
        {value:"ALL",label:"ALL"},
        {value:"HDFC", label:"HDFC"},
        {value:"AXIS",label:"AXIS"},
        {value:"ICICI", label:"ICICI"}
    ]
    const optionBranch=[
        {value:"ALL",label:"ALL"},
        {value:"Shivaji Nagar",label:"Shivaji Nagar"},
        {value:"Taroda Naka",label:"Taroda Naka"},
        {value:"Degloor Naka",label:"Degloor Naka"}
    ]
    const optionCity=[
        {value:"ALL",label:"ALL"},
        {value:"Nanded",label:"Nanded"},
        {value:"Pune",label:"Pune"},
        {value:"Nashik",label:"Nashik"},
        {value:"Bidar",label:"Bidar"}
    ]
    const handleChangeName=(selectedVal)=>{
            setName(selectedVal.value);
    }
    const handleChangeBranch=(selectedVal)=>{
            setBranch(selectedVal.value);
    }
    const handleChangeCity=(selectedVal)=>{
        setCity(selectedVal.value)
    }
    const handleSearch= async()=>{
        const payload={};
       if (name!=="ALL") payload["name"]=name;
       if (branch!=="ALL") payload["branch"]=branch;
       if(city!=='ALL') payload["city"]=city
        // console.log(payload)
        const result=await axios.post("http://localhost:4040/api/getbank", payload);
        setData(result.data)
        // console.log(result.data)
        
    }
    return(
        <div>
            {/* <h5>Show Advance Search</h5> */}
            <Grid container spacing={3}>
                <Grid item xs={3}>
                    <Select options={optionsNames} onChange={handleChangeName}/>

                </Grid>
                <Grid item xs={3}>
                    <Select options={optionBranch} onChange={handleChangeBranch}/>
                </Grid>
                <Grid item xs={3}>
                    <Select options={optionCity} onChange={handleChangeCity}/>
                </Grid>
                <Grid item xs={3}>
                    <Button variant='contained' onClick={handleSearch}>Search</Button>
                </Grid>
            </Grid>
            <Card>
            {
                data.map((item)=>
                    <ShowBankItem item={item}/>  
                )
            }
            </Card>
        </div>
    )
}