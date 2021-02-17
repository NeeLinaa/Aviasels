import { CHANGE_ALL_CHECK_ON, CHANGE_ALL_CHECK_OFF } from "../types/types"

const ruducerCheckboxes = (state = {
                            checkBox: false,
                            otherCheckboxes: false
                        }, 
                actions) => {
    if (actions.type === CHANGE_ALL_CHECK_ON) {
        return Object.assign({}, state, {
            checkBox: true,
            otherCheckboxes: true
        })
        // return ({
        //     ...state,
        //     checkBox: true,
        //     otherCheckboxes: true
        // })
    } else if (actions.type === CHANGE_ALL_CHECK_OFF) {
        return Object.assign({}, state, {
            checkBox: false,
            otherCheckboxes: false
        })
        // return state
    }
    return state
}

export default ruducerCheckboxes;