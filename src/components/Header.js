import { useState } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSun } from '@fortawesome/free-solid-svg-icons';
import { faMoon } from '@fortawesome/free-solid-svg-icons';

function Header(){
    const [currentTheme, setCurrentTheme] = useState('light');

    return (
        <div className="navbar bg-base-100">
            <div className="flex-1">
                <button className="btn btn-ghost text-xl">Rick & Morty Characters</button>
            </div>
            <div className="flex-none">
                {
                currentTheme === 'dark' ? 
                <button data-set-theme="light" data-act-class="ACTIVECLASS" onClick={() => setCurrentTheme('light')} className="btn btn-square btn-ghost">
                    <FontAwesomeIcon icon={faSun} />
                </button> 
                    : 
                <button data-set-theme="dark" data-act-class="ACTIVECLASS" onClick={() => setCurrentTheme('dark')} className="btn btn-square btn-ghost">
                    <FontAwesomeIcon icon={faMoon} />
                </button>
                }
            </div>
        </div>
    )

}

export default Header