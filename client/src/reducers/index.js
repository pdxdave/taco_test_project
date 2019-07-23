import { 
    GET_CLIENT, 
    GET_CLIENT_SUCCESS,
    GET_CLIENT_FAILURE,
    ADD_CLIENT,
    ADD_CLIENT_SUCCESS,
    ADD_CLIENT_FAILURE,
    UPDATE_CLIENT,
    UPDATE_CLIENT_SUCCESS,
    UPDATE_CLIENT_FAILURE,
    

} from '../actions';

const initialState = {
    clients: [],
    gettingClients: false,
    addingClient: false,
    updatingClient: false,
    deletingClient: false,
    error: null
}

export default function clientsReducer(state = initialState, action){
    switch(action.type){
        case GET_CLIENT: 
          return {
            ...state,
            fetchingClients: true  
          }
        case GET_CLIENT_SUCCESS:
            return {
                ...state,
                fetchingClients: false,
                clients: state.clients.concat(action.payload)
            }
        case GET_CLIENT_FAILURE:
            return {
                ...state,
                fetchingClients: false,
                error: action.payload
            }
        case ADD_CLIENT: 
            return {
                ...state,
                addingClient: true,
            }
        case ADD_CLIENT_SUCCESS: 
            return {
                ...state,
                addingClient: false,
                clients: state.clients.concat(action.payload)
            }
        case ADD_CLIENT_FAILURE:
            return {
                ...state,
                addingClients: false,
                error: action.payload
            }
        case UPDATE_CLIENT:
            return {
                ...state,
                updatingClients: true,
                client: action.payload
            }
         case UPDATE_CLIENT_SUCCESS:
            return {
                ...state,
                updatingClients: false,
                clients: state.clients.concat(action.payload)
            }
        case UPDATE_CLIENT_FAILURE:
            return {
                ...state,
                updatingClients: false,
                error: action.payload
            }
        
        default:
            return state
    }
}