import React from 'react';
import FilterTask from '../filter-task/FilterTask';

import './Filters.scss'

const Filters = () => {



    return (
        <div className='filtersCard'>
            <p className='text mainText'>КОЛИЧЕСТВО ПЕРЕСАДОК</p>

            <div key='Все' className='checkbox'>
                <label htmlFor='all' className='check'>
                    <input id='all' type="checkbox" value='Все' className='check_input' />
                    <span className='check_box' />
                    <span className='text'>Все</span>
                </label>
            </div>



            <FilterTask />
        </div>
        
    )
}

export default Filters;