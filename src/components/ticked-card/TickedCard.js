import React from 'react';
import TickedInfo from '../ticked-info/TickedInfo';

import classes from './TickedCard.module.scss'
import S7_Logo from '../../img/S7_Logo.png'

const TickedCard = () => {
    return (
        <div className={classes.tickedCard}>
            <div className={classes.sumAndLogo}>
                <span className={classes.price}>13 400 P</span>
                <img  src={S7_Logo} alt='S7 Airlines'/>
            </div>

            <TickedInfo />
            <TickedInfo />
        </div>
        
    )
}

export default TickedCard;