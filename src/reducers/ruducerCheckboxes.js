import { 
            CHANGE_ALL_CHECK_ON, 
            CHANGE_ALL_CHECK_OFF, 
            CHANGE_ONE_CHECK_ON,
            CHANGE_MAIN_CHECK_OFF
        } from "../types/types"

const ruducerCheckboxes = (state = {
                            otherCheckboxes: {
                                0: false,
                                1: false,
                                2: false,
                                3: false,
                                4: false
                            }
                        }, 
                actions) => {
    if (actions.type === CHANGE_ALL_CHECK_ON) {
        return ({
            ...state,
            otherCheckboxes: {
                0: true,
                1: true,
                2: true,
                3: true,
                4: true
            }
        })
    } else if (actions.type === CHANGE_ALL_CHECK_OFF) {
        return ({
            ...state,
            otherCheckboxes: {
                0: false,
                1: false,
                2: false,
                3: false,
                4: false
            }
        })
    } else if (actions.type === CHANGE_ONE_CHECK_ON) {
        return ({
            ...state,
            otherCheckboxes: actions.arr
        })
    } else if (actions.type === CHANGE_MAIN_CHECK_OFF) {
        return ({
            ...state, 
            otherCheckboxes: {
                ...state.otherCheckboxes,
                0: false
            }
        })
    } else {
        return state
    }
}

export default ruducerCheckboxes;
