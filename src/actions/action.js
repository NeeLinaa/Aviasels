import { 
            CHANGE_ALL_CHECK_ON, 
            CHANGE_ALL_CHECK_OFF, 
            CHANGE_ONE_CHECK_ON,
            CHANGE_MAIN_CHECK_OFF,
            GET_All_TICKETS,
            GET_CHEAP_TICKETS,
            GET_FAST_TICKETS
        } from "../types/types"

export const changeCheckOn = () => ({
    type : CHANGE_ALL_CHECK_ON
})
    
export const changeCheckOff = () => ({type : CHANGE_ALL_CHECK_OFF})

export const changeOneCheckOn = (arr) => {
    return {
        type : CHANGE_ONE_CHECK_ON,
        arr: arr
    }
}

export const changeMainCheckOff = () => ({type : CHANGE_MAIN_CHECK_OFF})

export const getAllTickets = (items) => {
    return ({
        type: GET_All_TICKETS,
        allTickets: items
    })
}

export const getCheapTickets = (items) => {
    return ({
        type: GET_CHEAP_TICKETS,
        cheapTickets: items
    })
}

export const getFastTickets = (items) => {
    return ({
        type: GET_FAST_TICKETS,
        fastTickets: items
    })
}