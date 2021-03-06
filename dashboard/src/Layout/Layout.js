import React, { useState } from 'react';
import Sidebar from './Sidebar';
import Appbar from './Appbar';

import clsx from 'clsx';
import classes from './Layout.module.css';

import { Route, Switch } from 'react-router-dom';

import BasicLine from '../Animation/BasicLine';
import Board from '../Animation/Board';

import Group from '../Basic/Tailwind/Group';

export default function Layout() {

    const [drawer,setDrawer] = useState(true);
    const [infoMenu,setInfoMenu] = useState(false);
    const [basicMenu,setBasicMenu] = useState(false);
    const [animationMenu,setAnimationMenu] = useState(false);

    return(
        <div className = "flex">
            <div className = {clsx('overflow-hidden',{
                [classes.sidebarOpen]: drawer,
                [classes.sidebarClose]: !drawer
            })}>
                <Sidebar
                    openDrawer = {() => setDrawer(true)}
                    closeDrawer = {() => {
                        setDrawer(false);
                        setInfoMenu(false);
                        setAnimationMenu(false);
                        setBasicMenu(false);
                    }}
                    drawerState = { drawer }

                    infoDrawer = { infoMenu }
                    openInfoDrawer = { () => {
                        setDrawer(true);
                        setInfoMenu(true);
                    }}
                    closeInfoDrawer = {() => setInfoMenu(false)}

                    basicDrawer = {basicMenu}
                    openBasicDrawer = { () => {
                        setDrawer(true);
                        setBasicMenu(true);
                    }}
                    closeBasicDrawer = {() => setBasicMenu(false)}

                    animationDrawer = { animationMenu }
                    openAnimationDrawer = { () => {
                        setDrawer(true);
                        setAnimationMenu(true);
                    }}
                    closeAnimationDrawer = {() => setAnimationMenu(false)}

                ></Sidebar>
            </div>
            <div className = "w-full">
                <Appbar></Appbar>
                <div className = "p-4">
                    <Switch>
                            <Route exact path="/animation/basicline-1" component = {BasicLine}></Route>
                            <Route exact path="/animation/board" component = {Board}></Route>
                            <Route exact path="/basic/group" component = {Group}></Route>
                            {/* <Route path = '*' component = {NotFound}></Route> */}
                    </Switch>
                </div>
            </div>
      </div>
    )
}