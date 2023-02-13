import React,{useState} from 'react';
import {Tabs,Tab} from "@mui/material"
import {AddBank} from "./AddBank"
import { ShowBank } from './ShowBank';
import { ShowBankbyCity } from './ShowBankbyCity';
import{ShowBankByAny} from "./ShowBankByAny";
import {ShowAdvanceBank} from "./ShowAdvanceBank"
import { ShowBenef } from './Showbenef';
import{Deposit} from './Deposit'
import { Debit } from './Debit';



export const Banks=()=>{
    const [val,setVal]=useState("showbanks")
    return(
        <div>
            <h3>Bank</h3>
            <Tabs value={val} onChange={(e,val)=>setVal(val)}>
                <Tab value="accholder" label="Account holder"/>
                <Tab value="deposit" label="Deposit"/>
                <Tab value="debit" label="Debit"/>
            <Tab value ="addbank" label="Add Bank"/>
            <Tab value="showbanks" label="Show Bank"/>
            <Tab value="showbycity" label="Show Bank By City"/>
            <Tab value="ShowBankByAny" label="Show Bank By Any"/>
            <Tab value="showadvance" label="Show Advance Search"/>

            </Tabs>
            {val==="accholder" && <ShowBenef/>}
            {val==="addbank" && <AddBank/>}
            {val==="showbanks" && <ShowBank/>}
            {val==="showbycity" && <ShowBankbyCity/>}
            {val==="ShowBankByAny" && <ShowBankByAny/>}
            {val==="showadvance" && <ShowAdvanceBank/>}
            {val==="deposit" && <Deposit/>}
            {val==="debit" && <Debit/>}
        </div>
    )
}