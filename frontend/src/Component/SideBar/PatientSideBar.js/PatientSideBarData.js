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



export const PatientSideBarData = [
   
    {
         
        title: "Home",
        icon: <BsHouseFill />,
        Link: "/"
    },
    {
        title: "My Profile",
        icon: <BsPeopleFill />,
        Link: "/ReadPatient/:id"
    },
    {
        title: "Schedule an appointmnet",
        icon: <BsFillMegaphoneFill />,
        Link: "/AppointmentDashboard"
    },
   
    {
        title: "Setting",
        icon: <BsArrowDownCircleFill />,
        Link: "/Setting"
    },
   
   
]