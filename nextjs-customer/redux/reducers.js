import {FETCH_DATA, SET_SELECTED} from './actions';

function rootReducer( state = { selectedCustomer:0,customerDetails:[]}, action) {
  debugger
  switch (action.type) {
    case FETCH_DATA:
      return {...state,
        selectedCustomer: action.selectedCustomer,
        customerDetails: state.customerDetails
      };
    case SET_SELECTED:
      return {...state,
        selectedCustomer: action.selectedCustomer,
      };
    default:
      return state
  }
}

export default rootReducer;
