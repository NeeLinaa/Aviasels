import React, { useEffect, useState } from 'react';
import TickedInfo from '../ticked-info/TickedInfo';
import {connect} from 'react-redux';
import * as actions from '../../actions/action';

import classes from './TickedCard.module.scss'
import S7_Logo from '../../img/S7_Logo.png'

const TickedCard = ({ allTickets }) => {

    console.log(allTickets)

    function createTicketCard(data) {

        function priceFormatting(num) {
            return String(num).slice(0, -3) + ' ' + String(num).slice(-3)
        }

        <div className={classes.tickedCard} key={data.price }>
            <div className={classes.sumAndLogo}>
                <span className={classes.price}>{priceFormatting(data.price)} P</span>
                <img  src={S7_Logo} alt='S7 Airlines'/>
            </div>

            <TickedInfo dataInfo={data.segments[0]}/>
            <TickedInfo dataInfo={data.segments[1]}/>
        </div>
    }

    return (
        <div>
            {allTickets.slice(0, 5).map(ticket => createTicketCard(ticket))}
        </div>
    )
}

const mapStateToProps = (state) => {
    console.log(state)
    return {
        allTickets: state.ticketsArr[0]
    }
}

export default connect(mapStateToProps, actions)(TickedCard);