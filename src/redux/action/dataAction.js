import { LOADING_UI, ADD_CATTLE, CLEAR_ERRORS ,SET_ERRORS} from '../type';
import Axios from 'axios';



export const upcattle = (newcattle) =>(dispatch) =>{
    dispatch({type :LOADING_UI});
    Axios.post('/cattle',newcattle)
    .then(res=>{
        dispatch({
            type : ADD_CATTLE,
            payload : res.data
        });
        dispatch({type : CLEAR_ERRORS});
    })
    .catch(err=>{
        dispatch ({
            type :SET_ERRORS,
            payload : err.response.data
        })
    })
}