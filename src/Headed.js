import React from "react";
import "./Header.css";
import SearchIcon from '@mui/icons-material/Search';
import HomeIcon from '@mui/icons-material/Home';
import FlagIcon from '@mui/icons-material/Flag';
import SubscriptionsIcon from '@mui/icons-material/Subscriptions';
import StorefrontIcon from '@mui/icons-material/Storefront';
import SupervisedUserCircleIcon from '@mui/icons-material/SupervisedUserCircle';
import { Avatar, IconButton } from "@mui/material";
import AddIcon from '@mui/icons-material/Add';
import ForumIcon from '@mui/icons-material/Forum';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

function Header(){
    return(
        <dev className= "header">
            <div className="header_left">
                <img src="https://upload.wikimedia.org/wikipedia/en/thumb/0/04/Facebook_f_logo_%282021%29.svg/512px-Facebook_f_logo_%282021%29.svg.png?20210818083032" alt="" />


                <div className="header_input">
                    <SearchIcon/>
                    <input type="text" placeholder="Search Facebook"/>
                </div>

            </div>



            <div className="header_center">
                <div className="header_option 
                header_option--active" >
                    <HomeIcon fontSize="large" />
                </div>
                <div className="header_option">
                    <FlagIcon fontSize="large" />
                </div>
                <div className="header_option">
                    <SubscriptionsIcon fontSize="large" />
                </div>
                <div className="header_option">
                    <StorefrontIcon fontSize="large" />
                </div>
                <div className="header_option">
                    <SupervisedUserCircleIcon fontSize="large" />
                </div>
            </div>

            <div className="header_right">
                <div className="header_info">
                     <Avatar src="data:image/jpeg;base64,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"/>
                    <h4>raj</h4>
                </div>

                <IconButton>
                    <AddIcon />
                </IconButton>
                <IconButton>
                    <ForumIcon />
                </IconButton>
                <IconButton>
                    <NotificationsActiveIcon />
                </IconButton>
                <IconButton>
                    <ExpandMoreIcon />
                </IconButton>

            </div>


        </dev>
    )
}
export default Header