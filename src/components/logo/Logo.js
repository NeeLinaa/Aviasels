import React from 'react';

import './Logo.scss';

import Logotype from '../../img/Logo.png'

const Logo = () => {

    return (
        <div className='logo'>
            <img  src={Logotype} alt='Logo Airlines'/>
        </div>
    )
}

export default Logo;