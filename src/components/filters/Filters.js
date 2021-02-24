import React from 'react';
import {connect} from 'react-redux';
import * as actions from '../../actions/action'

import './Filters.scss'


const Filters = ({ otherCheckboxes, changeCheckOn, changeCheckOff, changeOneCheckOn, changeMainCheckOff }) => {

    const allFilters = [
        {name: 'withoutTransfers', value: 'Без пересадок', id: 1},
        {name: 'oneTransfers', value: '1 пересадка', id: 2},
        {name: 'twoTransfers', value: '2 пересадки', id: 3},
        {name: 'threeTransfers', value: '3 пересадки', id: 4}
    ]


    const changeAllCheck = (e) => {
        if (e.target.checked) {
            changeCheckOn()
        } else {
            changeCheckOff()
        }
    }

    const changeFilters = (e, obj) => {
        const array = Object.entries(obj)
        const idx = Number(e.target.id)

        array.map(elem => {
            if (Number(elem[0]) === idx) elem[1] = !elem[1]
            return elem
        })

        const newObj = Object.fromEntries(array)
        changeOneCheckOn(newObj)

        if (array[1][1] === true && 
            array[2][1] === true && 
            array[3][1] === true && 
            array[4][1] === true) {
                return changeCheckOn()
            } 

        for (let i = 1; i < array.length; i++) {
            if (array[i][1] === false) changeMainCheckOff()
        }
    }

    const filters = allFilters.map((elem) => {

        return (
            <div key={elem.name} className='checkbox'>
                <label htmlFor={elem.id} className='check'>
                    <input id={elem.id} type="checkbox"
                            className='checkInput otherCheckbox'
                            checked={otherCheckboxes[elem.id]}
                            onChange={(e) => {
                                changeFilters(e, otherCheckboxes)
                            }}
                             />
                    <span className='checkBox' />
                    <span className='text'>{elem.value}</span>
                </label>
            </div>
        )
    })
    return (
        <div className='filtersCard'>
            <p className='text mainText'>КОЛИЧЕСТВО ПЕРЕСАДОК</p>

            <div key='all' className='checkbox'>
                <label htmlFor='all' className='check'>
                    <input id='all' type="checkbox"
                            className='checkInput mainCheckbox'
                            checked={otherCheckboxes[0]}
                            onChange={(e) => changeAllCheck(e)}
                             />
                    <span className='checkBox' />
                    <span className='text'>
                        Все
                    </span>
                </label>
            </div>

            <div>{filters}</div>
        </div>

    )
}

const mapStateToProps = (state) => {
    return {
        otherCheckboxes: state.checkboxes.otherCheckboxes
    }
}


export default connect(mapStateToProps, actions)(Filters);