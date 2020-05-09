import React from 'react';
import classes from '../Animation.module.css';

export default function Line(props) {
    return(
        <React.Fragment>
                <path d={props.pathString} className = {classes.line0}></path>
                <path d={props.pathString} className = {classes.line1}></path>
                <path d={props.pathString} className = {classes.line2}></path>
        </React.Fragment>
    )
}