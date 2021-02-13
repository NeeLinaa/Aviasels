import React from 'react';

import './FilterTask.scss'

const FilterTask = () => {

    const allFilters = [
        {name: 'withoutTransfers', value: 'Без пересадок'},
        {name: 'oneTransfers', value: '1 пересадка'},
        {name: 'twoTransfers', value: '2 пересадки'},
        {name: 'threeTransfers', value: '3 пересадки'}
    ]

    const filters = allFilters.map(({name, value}) => {
        return (
            <div key={name} className='checkbox'>
                <label htmlFor={name} className='check'>
                    <input id={name} type="checkbox" value={value} className='check_input' />
                    <span className='check_box' />
                    <span className='text'>{value}</span>
                </label>
            </div>
        )
    })

    return (
        <div>{filters}</div>
    )
}

export default FilterTask;