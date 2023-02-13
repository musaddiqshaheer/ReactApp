import React,{useState,useEffect} from 'react';
import axios from "axios"
import{ShowBankItem}from "./ShowBankItem"

export const ShowBank=()=>{
    const[data,setData]=useState([]);
    const getData= async ()=>{
        const result = await axios.get("http://localhost:4040/bank");
        console.log(result.data);
        setData(result.data);
    }
    useEffect(()=>{
        getData();

    },[])
    return(
        <div>
            {/* <h5>Show Bank</h5> */}
            {
                data.map((item)=>(
                    <ShowBankItem item={item}/>
                ))
            }
        </div>
    )
}