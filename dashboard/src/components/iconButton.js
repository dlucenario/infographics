import React from 'react';

export default function IconButton(props) {
    return(
        <button
            onClick = {props.action} 
            className = "focus:outline-none flex-none bg-gray-300 rounded-full h-10 w-10 flex items-center justify-center">
            {props.children}
        </button>
    )
}