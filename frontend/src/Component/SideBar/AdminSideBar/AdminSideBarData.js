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



export const AdminSideBarData = [
   
    {
         
        title: "Admin Doctor",
        icon: <BsHouseFill />,
        Link: "/"
    },
    
    {
        title: "Patients' Details",
        icon: <BsPeopleFill />,
        Link: "/AllPatient"
    },
    {
        title: "Doctors' Details",
        icon: <BsPeopleFill />,
        Link: "/AllDoctor"
    },
     {
        title: "Staff Details",
        icon: <BsPeopleFill />,
        Link: "/AllStaff"
    },
    {
         
        title: "Task Details",
        icon: <BsPeopleFill />,
        Link: "/TaskHome"
    },
    {
        title: "Admin Details",
        icon: <BsPeopleFill />,
        Link: "/AllAdmin"
    },
    {
         
        title: "Inventory Details",
        icon: <BsHouseFill />,
        Link: "/product"
    },
    {
         
        title: "Billing Mangement",
        icon: <BsHouseFill />,
        Link: "/BillingDashboard"
    },

    {
         
        title: "Payrol Management",
        icon: <BsHouseFill />,
        Link: "/SalaryDashboard"
    },
    {
        title: "My profile",
        icon: <BsPeopleFill />,
        Link: "/ReadAdmin/:id"
    },
   
    {
        title: "Setting",
        icon: <BsArrowDownCircleFill />,
        Link: "/Setting"
    },
    {
        title: "Chats",
        icon: <BsFillMegaphoneFill />,
        Link: "/AdminChat"
    },
   
]