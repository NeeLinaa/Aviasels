import React from 'react';

import classes from './TickedInfo.module.scss';

const TickedInfo = () => {

    function showTickedInfo() {
        
        return (
            <div className={classes.tickedInfo}>
                <div className={classes.tickedInfoBlock}>
                    <div className={classes.tickedInfoBlockText}>MOW-HKT</div>
                    <div className={classes.tickedInfoBlockInfo}>10:45-08:00</div>
                </div>
                <div className={classes.tickedInfoBlock}>
                    <div className={classes.tickedInfoBlockText}>В ПУТИ</div>
                    <div className={classes.tickedInfoBlockInfo}>21ч 15м</div>
                </div>
                <div className={classes.tickedInfoBlock}>
                    <div className={classes.tickedInfoBlockText}>2 ПЕРЕСАДКИ</div>
                    <div className={classes.tickedInfoBlockInfo}>HKG, JNB</div>
                </div>
            </div>
        )
    }
    
    return (
        <div>{showTickedInfo()}</div>
    )
}

export default TickedInfo;