import React,{useState} from 'react'
import {Tabs,Tab} from "@mui/material"

import {AddBenef} from "./AddBenef"
import {ShowBenef} from "./Showbenef"
export const Benef=()=>{
    const[val,setVal]=useState("addbenef")
    return(
        <div>
            <h3>Manage Beneficiary</h3>
            <Tabs value={val} onChange={(e,value)=>setVal(value)}>
            <Tab value="addbenef" label="Add Beneficiary"/>
            <Tab value="showenef" label="Show Beneficiary"/>
            </Tabs>
            {val==="addbenef" && <AddBenef/>}
            {val==="showenef" && <ShowBenef/>}
        </div>
    )
}