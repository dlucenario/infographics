import React from 'react';
import Links from './Links';

import IconButton from '../components/iconButton';
import menuIcon from '../assets/icons/menu.svg';

export default function Sidebar(props) {
    return(
        <div className = 'h-screen border-solid border-2 border-gray-300 bg-gray-100'>
            <div className = 'p-3 flex items-center'>
                <IconButton 
                    action = { props.drawerState === true ? props.closeDrawer : props.openDrawer }>
                    <img className = 'w-4 h-4' src= {menuIcon} alt = 'menu-button'/>
                </IconButton>
                <div className = 'ml-5 text-base'>Infographic</div>
            </div>


            <Links
                infoDrawer = {props.infoDrawer}
                openInfoDrawer = {props.openInfoDrawer}
                closeInfoDrawer = {props.closeInfoDrawer}

                animationDrawer = {props.animationDrawer}
                openAnimationDrawer = {props.openAnimationDrawer}
                closeAnimationDrawer = {props.closeAnimationDrawer}

                basicDrawer = {props.basicDrawer}
                openBasicDrawer = {props.openBasicDrawer}
                closeBasicDrawer = {props.closeBasicDrawer}
            ></Links>
        </div>
    )
}