import { LOADING_DATA, ADD_CATTLE } from '../type';

const initialState = {
    cattles : [],
    cattle : [],
    loading :false
};

export default function(state = initialState,action){
    switch(action.type){
        case LOADING_DATA :
            return {
                ...state,
                loading :true
            };
        case ADD_CATTLE :
            return{
                ...state,
                cattles : [action.payload, ...state.cattles]
            }
        default : return state;
}
}