export const GET_CLIENT = "GET_CLIENT"
export const GET_CLIENT_SUCCESS = "GET_CLIENT_SUCCESS"
export const GET_CLIENT_FAILURE = "GET_CLIENT_FAILURE"
export const ADD_CLIENT = "ADD_CLIENT"
export const ADD_CLIENT_SUCCESS = "ADD_CLIENT_SUCCESS"
export const ADD_CLIENT_FAILURE = "ADD_CLIENT_FAILURE"
export const UPDATE_CLIENT = "UPDATE_CLIENT"
export const UPDATE_CLIENT_SUCCESS = "UPDATE_CLIENT_SUCCESS"
export const UPDATE_CLIENT_FAILURE = "UPDATE_CLIENT_FAILURE"



export const getClient = () => dispatch => {
    dispatch({ type: GET_CLIENT})
    fetch ('http://localhost:5000/clients')
    .then(res => res.json())
    .then(clients => {
        dispatch({
            type: GET_CLIENT_SUCCESS,
            payload: clients
        })
    })
    .catch(err => {
        dispatch({
            type: ADD_CLIENT_FAILURE,
            payload: err
        })
    })
}

export const addClient =  client => dispatch => {
   dispatch({ type: ADD_CLIENT})
   fetch ('http://localhost:5000/clients', {
       method: 'POST',
       headers: {"Content-Type": 'application/json'},
       body: JSON.stringify(client)
   })
   .then(res => res.json())
    .then(clients => {
        dispatch({
            type: ADD_CLIENT_SUCCESS,
            payload: clients
        })
    })
    .catch(err => {
        dispatch({
            type: ADD_CLIENT_FAILURE,
            payload: err
        })
    })
}

export const updateClient =  newClient => dispatch => {
    dispatch({ type: UPDATE_CLIENT})
    fetch ('http://localhost:5000/clients', {
        method: 'PUT',
        headers: {"Content-Type": 'application/json'},
        body: JSON.stringify(newClient)
    })
    .then(res => res.json())
     .then(newClient => {
         dispatch({
             type: UPDATE_CLIENT_SUCCESS,
             payload: newClient
         })
     })
     .catch(err => {
         dispatch({
             type: UPDATE_CLIENT_FAILURE,
             payload: err
         })
     })
 }