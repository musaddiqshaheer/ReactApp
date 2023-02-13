import React,{useState,useEffect} from 'react'
import axios from 'axios'
import {Card ,CardContent,Grid, TextField,Button,Alert} from '@mui/material'
export const AddBenef=()=>{
    const[isvalid,setIsvalid]=useState(false);
    const [accno,setAccno]=useState(0);
    const [bankname,setBankname]=useState("");
    const [branchname,setBranchname]=useState("");
    const [amnt,setAmnt]=useState(0);
    const [bname,setBname]=useState("");
    const [isActive]=useState(1);
    const[isSuffAmt,setIsSuffAmt]=useState(false);
    const[isValidAcc,setIsValidAcc]=useState(false);
    const[txtSuccess,setTxtSucces]=useState("")


    const handleCancel=()=>{
            setAccno(0);
            setAmnt(0);
            setBankname("");
            setBranchname("");
            setBname("")
    }

    const handleSubmit= async()=>{
        const url="http://localhost:4040/api/addbenef"
        const payload={
                accno,
                bankname,
                branchname,
                amnt,
                bname,
                isActive
                
        };
        const result = await axios.post(url,payload);
        setTxtSucces(result.data)
        // console.log(result)
    }
    useEffect(()=>{
        setIsValidAcc(accno.length===10 );
    },[accno])

    useEffect(()=>{
        setIsSuffAmt(amnt>=500 || amnt===0)

    },[amnt])
    useEffect(()=>{
        setIsvalid(
            accno.length===10 &&
            bankname.length>=3 &&
            branchname.length>=4 &&
            amnt>=500 &&
            bname.length>5

        )

    },[accno,bankname,branchname,amnt,bname])
    return(
        <div>
            <h4>Add Beneficiary</h4>
            <Card>
                <CardContent>
                    <Grid container spacing={2}>
                        {/* <Grid item xs={4}>
                            Account Number:
                        </Grid> */}
                        <Grid item xs={4}>
                            <TextField label=" Enter Account Number"
                            value={accno}
                             variant='outlined' type="number"
                             
                             required onChange={(e)=>setAccno(e.target.value)}/>
                        </Grid>
                        {/* <Grid item xs={4}>
                            Beneficiary Name:
                        </Grid> */}
                        <Grid item xs={4}>
                        <TextField label ="Beneficiary Name" 
                        value={bname} variant='outlined'
                         required 
                         onChange={(e)=>setBname(e.target.value.toUpperCase())}/>
                        </Grid>
                        {/* <Grid item xs={4}>
                            Bank Name:
                        </Grid> */}
                        <Grid item xs={4}>
                            <TextField label ="Bank Name"
                             value={bankname}
                              variant='outlined' 
                              required 
                              onChange={(e)=>setBankname(e.target.value.toUpperCase())}/>
                        </Grid>
                        {/* <Grid item xs={4}>
                            Branch Name:
                        </Grid> */}
                        <Grid item xs={4}>
                            <TextField label = " Branch Name"
                             value={branchname} 
                             variant='outlined'
                              required 
                              onChange={(e)=>setBranchname(e.target.value.toUpperCase())}/>
                        </Grid>
                        {/* <Grid item xs={4}>
                            Amount:
                        </Grid> */}
                        <Grid item xs={4}>
                            <TextField label ="Amount"
                             value={amnt} 
                             variant='outlined'
                              type="number"
                               required
                                onChange={(e)=>setAmnt(e.target.value)}/>
                        </Grid>
                        <Grid item xs={6}>
                            {
                                txtSuccess!=="" && 
                                <Alert severity='success'>{txtSuccess}</Alert>
                            }
                            {!isSuffAmt &&( <Alert severity='error'> Amount should not be lesser than 500</Alert>)}
                            {isValidAcc ? (<Alert severity='success'>Valid Account Number!</Alert>)
                            :
                            (accno!==0 &&<Alert severity='warning'>Please Enter the Valid Account Number</Alert>)
                            }
                        </Grid>
                        <Grid item xs={2}>
                            <Button variant="contained" disabled={!isvalid} 
                             onClick={handleSubmit}
                             >Submit</Button>
                        </Grid>
                        <Grid item xs={2}>
                            <Button variant="contained" onClick={handleCancel}>Cancel</Button>
                        </Grid>
                        
                    </Grid>
                  
                </CardContent>
            </Card>
        </div>
    )
}