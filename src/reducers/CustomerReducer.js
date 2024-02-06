const CustomerReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_CUSTOMER':
      return {
        ...state,
        error: null,
        addCustomerSuccess: true
      };
    case 'FETCH_CUSTOMERS_SUCCESS':
      return {
        ...state,
        error: null,
        isMounted: true,
        fetchCustomerSuccess: true,
        customers: action.data.data
      };
    case 'FETCH_CUSTOMERS_FAILURE':
      return {
        ...state,
        error: action.data,
        fetchCustomerSuccess: false
      };
    case 'UPDATE_CUSTOMER':
      return {
        ...state,
        error: null,
        message: action.data.data,
        updateCustomerSuccess: true
      };

    case 'FETCH_SINGLE_CUSTOMER':
      return {
        ...state
      };
    case 'DELETE_CUSTOMER':
      return {
        ...state
      };

    default:
      break;
  }
};

export default CustomerReducer;
