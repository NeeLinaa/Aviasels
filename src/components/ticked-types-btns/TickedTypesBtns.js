import React from 'react';

import './TickedTypesBtns.scss'

const TickedTypesBtns = () => {
    return (
        <div className='tickedTypesBtns'>
            <input type='submit' value='САМЫЙ ДЕШЕВЫЙ' className='tickedBtn cheapTicked' />
            <input type='submit' value='САМЫЙ БЫСТРЫЙ' className='tickedBtn fastTicked' />
        </div>
    )
}

export default TickedTypesBtns;