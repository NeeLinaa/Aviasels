import React from 'react';

import classes from './Logo.module.scss';

import Logotype from '../../img/Logo.png'

const Logo = () => {

    return (
        <div className={classes.logo}>
            <img  src={Logotype} alt='Logo Airlines'/>
        </div>
    )
}

export default Logo;