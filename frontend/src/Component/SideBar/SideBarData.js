import React, { Component } from 'react';
import { BsHouseFill } from "react-icons/bs";
import { BsPeopleFill } from "react-icons/bs";
import { BsStickiesFill } from "react-icons/bs";
import { BsPersonLinesFill } from "react-icons/bs";
import { BsArrowDownCircleFill } from "react-icons/bs";
import { BsFileEarmarkArrowUpFill } from "react-icons/bs";
import { BsFillMegaphoneFill } from "react-icons/bs";
import { CgProfile } from "react-icons/bs";
import { IconName } from "react-icons/fc";
import { FcBusinessman } from "react-icons/fc";



export const SidebarData = [
  
    {
         
        title: "Home",
        icon: <BsHouseFill />,
        Link: "/"
    },
    {
        title: "Profile",
        icon: <BsPeopleFill />,
        Link: "/User"
    },
   
    {
        title: "Setting",
        icon: <BsArrowDownCircleFill />,
        Link: "/Setting"
    },
    {
        title: "Help Center",
        icon: <BsFillMegaphoneFill />,
        Link: "/Help Center"
    },
   
]