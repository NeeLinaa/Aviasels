import React from 'react';
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux';
import * as actions from '../../actions/action'


    // const [flagCheckbox, setFlagCheckbox] = useState(false);

    // function changeMainChekbox() {
        // setFlagCheckbox(!flagCheckbox)
        // if (!flagCheckbox) {
        //     for (let i = 0; i < otherCheck.length; i++) {
        //         if (otherCheck[i].type === 'checkbox') otherCheck[i].checked=true
        //     }
        // } else {
        //     for (let i = 0; i < otherCheck.length; i++) {
        //         if (otherCheck[i].type === 'checkbox') otherCheck[i].checked=false
        //     }
        // }
    // }

    // function changeAllChekbox(e) {
    //     // for (let i = otherCheck.length; i--;) {
    //     //     let newChecked = true
    //     //     if (!otherCheck[i].checked) newChecked = false
    //     //     mainCheck.checked = newChecked ? setFlagCheckbox(true) : setFlagCheckbox(false)
    //     // }
    // }
    
import './Filters.scss'

let mainCheck = document.getElementsByClassName('mainCheck')
let otherCheck = document.getElementsByClassName('otherCheckbox')

const Filters = ({checkBox, otherCheckboxes, change_check_on, change_check_off}) => {
    console.log(checkBox, otherCheckboxes)

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
                    <input id={name} type="checkbox" value={value} 
                            className='checkInput otherCheckbox'
                            // onChange={changeAllChekbox}
                            defaultChecked={otherCheckboxes}
                             />
                    <span className='checkBox' />
                    <span className='text'>{value}</span>
                </label>
            </div>
        )
    })

    return (
        <div className='filtersCard'>
            <p className='text mainText'>КОЛИЧЕСТВО ПЕРЕСАДОК</p>

            <div key='all' className='checkbox'>
                <label htmlFor='all' className='check'>
                    <input id='all' type="checkbox" value='Все' 
                            className='checkInput mainCheckbox'
                            defaultChecked={checkBox}
                            // onChange={changeMainChekbox}
                            onClick={change_check_on}
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
        checkBox: state.checkboxes.checkBox,
        otherCheckboxes: state.checkboxes.otherCheckboxes
    }
}

export default connect(mapStateToProps, actions)(Filters);