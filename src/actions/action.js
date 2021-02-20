import { 
            CHANGE_ALL_CHECK_ON, 
            CHANGE_ALL_CHECK_OFF, 
            CHANGE_ONE_CHECK_ON,
            CHANGE_MAIN_CHECK_OFF
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
