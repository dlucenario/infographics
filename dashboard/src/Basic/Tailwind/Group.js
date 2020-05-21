import React from 'react';

import runIcon from '../../assets/icons/animation.svg';

export default function Group() {
    return(
        <div>
            <h2>Group Hover Effect in Tailwind: Try to Hover through the Cards</h2>
            <div className = {'flex my-4'}>
                <div 
                    className = {'group flex items-center justify-center h-32 w-2/6 bg-cover bg-center rounded-md bg-gray-400 mx-2'}>
                        <button className = {'p-4 bg-gray-100 transition-opacity duration-500 ease-in-out rounded-lg opacity-0 group-hover:opacity-100'} type = 'button'>
                            CALL TO ACTION
                        </button>
                </div>

                <div
                    className = {'group flex items-center justify-center h-32 w-2/6 bg-cover bg-center rounded-md bg-gray-400 mx-2 relative'} >

                        {/* overlay background */}
                        <div className = {'absolute w-full h-full bg-black opacity-0 group-hover:opacity-50 transition-opacity duration-500 ease-in-out'}>
                        </div>

                        <button className = {'z-10 p-4 bg-gray-100 transition-opacity duration-500 ease-in-out rounded-lg opacity-0 group-hover:opacity-100 shadow-2xl'} type = 'button'>
                            CALL TO ACTION
                        </button>
                </div>
            </div>

            <div className = {'flex my-4'}>
                <div className = {'w-2/6 rounded-md bg-gray-300 p-6 group hover:bg-gray-900'}>

                    <p className = {'text-xl font-bold mb-4 group-hover:text-white'}>Example: Hover Me</p>
                    <p className = {'text-justify group-hover:text-white'}>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s. 
                        When an unknown printer took a galley of type and scrambled it to make a type specimen book.
                    </p>
                </div>
            </div>

            <div className = {'flex my-4'}>
                <div 
                    className = {'group flex items-center h-32 w-2/6 bg-cover bg-center rounded-md bg-gray-400 mx-2 overflow-hidden'} >
                        <button className = {'ml-4 transform -translate-x-20 transition-all duration-500 ease-in-out p-4 bg-gray-100 rounded-full group-hover:translate-x-0'} type = 'button'>
                            <img src = {runIcon} alt = 'run-button' />
                        </button>
                </div>
            </div>

            {/* <div className = {'flex my-4'}>
                <div className = {clsx('group flex items-center justify-center rounded-md bg-gray-500 p-6 h-32 w-2/6 relative',classes.myCard)}>
                    <p>Hover Me</p>
                    <button className = {clsx('rounded-full opacity-100 p-2 bg-gray-300 absolute',classes.buttonGroup)}>
                        <img src = {runLogo} alt = "button"></img>
                    </button>
                </div>
            </div> */}
            
        </div>
    )
}