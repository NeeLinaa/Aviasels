import { GET_CHEAP_TICKETS, GET_FAST_TICKETS, GET_All_TICKETS } from "../types/types"

const reduserTickets = (state = [], actions) => {
    switch (actions.type) {
        case GET_All_TICKETS:
            return [...state, actions.allTickets]
        case GET_CHEAP_TICKETS:
            return [actions.cheapTickets]
        case GET_FAST_TICKETS:
            return [actions.fastTickets]
        default: 
            return state
    }
}

export default reduserTickets;