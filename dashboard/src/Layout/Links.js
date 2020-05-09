import React from 'react'

import { NavLink } from 'react-router-dom';
import LinkButton from '../components/linkButton';

import DashboardIcon from '../assets/icons/dashboard.svg';
import basicIcon from '../assets/icons/basic.svg';
import chartIcon from '../assets/icons/chart.svg';
import widgetIcon from '../assets/icons/widget.svg';
import animationIcon from '../assets/icons/animation.svg';

import clsx from 'clsx';

export default function Links(props) {

    return(
        <div>
            <ul>
                <li>
                    <LinkButton
                        action = {props.infoDrawer === true ? props.closeInfoDrawer : props.openInfoDrawer} 
                        icon = {DashboardIcon}>
                        infographic
                    </LinkButton>

                    <NavLink to="/dom">
                        <div className = {clsx({
                            'h-0 overflow-hidden': !props.infoDrawer,
                            'h-auto': props.infoDrawer
                        })}>
                            {/* <div className = 'flex justify-end w-full pr-4 py-2 hover:bg-gray-300 text-sm'>
                                SubNavigation
                            </div>
                            <div className = 'flex justify-end w-full pr-4 py-2 hover:bg-gray-300 text-sm'>
                                SubNavigation
                            </div> */}
                        </div>
                    </NavLink>
                </li>
                <li>
                    <LinkButton icon = {basicIcon}>
                        basic
                    </LinkButton>
                </li>
                <li>
                    <LinkButton icon = {chartIcon}>
                        charts
                    </LinkButton>
                </li>
                <li>
                    <LinkButton icon = {widgetIcon}>
                        widget
                    </LinkButton>
                </li>
                <li>
                    <LinkButton
                        action = {props.animationDrawer === true ? props.closeAnimationDrawer : props.openAnimationDrawer} 
                        icon = {animationIcon}>
                        animation
                    </LinkButton>

                    <NavLink to="/animation/basicline-1">
                        <div className = {clsx({
                            'h-0 overflow-hidden': !props.animationDrawer,
                            'h-auto': props.animationDrawer
                        })}>
                            <div className = 'flex justify-end w-full pr-4 py-2 hover:bg-gray-300 text-sm'>
                                Basic Line 1
                            </div>
                        </div>
                    </NavLink>

                    <NavLink to="/animation/board">
                        <div className = {clsx({
                            'h-0 overflow-hidden': !props.animationDrawer,
                            'h-auto': props.animationDrawer
                        })}>
                            <div className = 'flex justify-end w-full pr-4 py-2 hover:bg-gray-300 text-sm'>
                                Board
                            </div>
                        </div>
                    </NavLink>
                </li>
            </ul>
        </div>
    )
}