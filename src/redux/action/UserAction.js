import {SET_USER,SET_ERRORS,CLEAR_ERRORS,LOADING_UI} from '../type'; 
import axios from 'axios';

export const loginUser = (userData,history) =>(dispatch) => {
    dispatch({type : LOADING_UI});

    axios
    .post('/login',userData)
    .then(res=>{
      const FBidToken = `Bearer ${res.data.token}`; 
      localStorage.setItem('FBidToken',FBidToken);
      axios.defaults.headers.common['Authorization']= FBidToken;
      dispatch(GetuserData());
      dispatch({type : CLEAR_ERRORS});
      history.push('/home');
    })
    .catch(err=>{
      dispatch({
          type : SET_ERRORS,
          payload : err.response.data
      })
    });
}

export const GetuserData = () =>(dispatch) =>{
    axios.get('/user')
    .then(res =>{
        dispatch({
            type : SET_USER,
            payload : res.data
        })
    })

}