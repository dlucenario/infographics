import React from 'react';

import classes from './BasicLine.module.css';

export default function BasicLine() {
    return(
        <div>
            <svg className = "bg-gray-400 w-full" height="520">
                <text x="15" y="30" fill="#222831"> SVG Canvas Location</text>

                <path d="M50 50 H410" className = {classes.path}></path>

                <path d="M50 100 H410" className = {classes.path}></path>
                <path d="M50 100 H410" className = {classes.trail}></path>

                <path d="M50 150 H410" className = {classes.path}></path>
                <path d="M50 150 H410" className = {classes.projectile}></path>
                <path d="M50 150 H410" className = {classes.trail}></path>
            
                <path d="M50 200 H410" className = {classes.path}></path>
                <path d="M50 200 H410" className = {classes.projectile}></path>
                <path d="M50 200 H410" className = {classes.trail} style={{stroke:'#000000'}}></path>
                
            </svg>
        </div>
    )
}

//references: https://www.tiny.cloud/blog/guide-svg-animation/