import React from 'react';

import githubIcon from '../assets/icons/github.svg';
import searchIcon from '../assets/icons/search.svg';
import IconButton from '../components/iconButton';

export default function Appbar() {
    return(
        <div className = "p-4 flex items-center justify-between">
            <div>
                <IconButton>
                    <img className = 'w-5 h-5' src= {searchIcon} alt = 'menu-button'/>
                </IconButton>
            </div>

            <div>
                <IconButton
                    action = {()=> {window.open('https://github.com/dlucenario/infographics')}}>
                    <img className = 'w-6 h-6' src= {githubIcon} alt = 'menu-button'/>
                </IconButton>
            </div>
        </div>
    )
}