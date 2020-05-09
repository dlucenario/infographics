import React from 'react';

export default function LinkButton(props) {
    return(


            <button onClick = {props.action} className = 'focus:outline-none px-5 w-full h-12 hover:bg-gray-300'>
                <div className = 'flex items-center'>
                    <img className = "h-6 w-6 mr-8" src = {props.icon} alt = ''></img>
                    <div className = "uppercase text-sm">
                        {props.children}
                    </div>
                </div>
            </button>

    )
}