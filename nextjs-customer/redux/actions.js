export const FETCH_DATA = 'FETCH_DATA'
export const SET_SELECTED = 'SET_SELECTED'


function getData(customerId) {
  return {
    type: FETCH_DATA,
    selectedCustomer: customerId
  }
}

export function setSelectedCustomer(customerId) {
  debugger
  return {
    type: SET_SELECTED,
    selectedCustomer: customerId
  }
}

export function getCustomerDetails(customerId) {
  return (dispatch) => {
      return dispatch(getData(customerId))
    }
}
