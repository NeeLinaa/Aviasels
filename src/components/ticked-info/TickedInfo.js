import React from 'react';

import './TickedInfo.scss'

const TickedInfo = () => {

    function showTickedInfo() {
        
        return (
            <div className='tickedInfo'>
                <div className='tickedInfoBlock'>
                    <div className='tickedInfoBlockText'>MOW-HKT</div>
                    <div className='tickedInfoBlockInfo'>10:45-08:00</div>
                </div>
                <div className='tickedInfoBlock'>
                    <div className='tickedInfoBlockText'>В ПУТИ</div>
                    <div className='tickedInfoBlockInfo'>21ч 15м</div>
                </div>
                <div className='tickedInfoBlock'>
                    <div className='tickedInfoBlockText'>2 ПЕРЕСАДКИ</div>
                    <div className='tickedInfoBlockInfo'>HKG, JNB</div>
                </div>
            </div>
        )
    }
    
    return (
        <div>{showTickedInfo()}</div>
    )
}

export default TickedInfo;