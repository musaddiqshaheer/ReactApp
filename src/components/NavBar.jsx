import React from 'react';
import { BottomNavigation,BottomNavigationAction } from '@mui/material';
import {Link} from "react-router-dom";
import AccountBalanceIcon from "@mui/icons-material/AccountBalance";
import SavingsIcon from "@mui/icons-material/Savings"
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';


export const NavBar=()=>{
    return(
        <div>
            <BottomNavigation>
                <Link to ="/">
                    <BottomNavigationAction label="Home" icon ={<AccountBalanceIcon fontSize="large"/>}
                    showLabel/>
                </Link>
                <Link to ="/Banks">
                    <BottomNavigationAction label="Bank" icon ={<SavingsIcon fontSize="large"/>}
                    showLabel/>
                </Link>
                <Link to = "/benef">
                    <BottomNavigationAction label="Manage Beneficiary"
                    icon = {<ManageAccountsIcon fontSize='large'/>}
                    showLabel/>
                </Link>
            </BottomNavigation>
        </div>
    )
}