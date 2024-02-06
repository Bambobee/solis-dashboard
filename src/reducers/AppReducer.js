const AppReducer = (state, action) => {
  switch (action.type) {
    case 'FETCH_COMPANY':
      return {
        ...state,
        business: action.data.data
      };

    case 'FETCH_SUCCESS':
      return {
        ...state,
        businessFetchSuccess: true,
        business: action.data.data
      };

    case 'FETCH_FAILED':
      return {
        ...state,
        error: action.payload
      };

    case 'ADD_CUSTOMER':
      return {
        ...state,
        selectedNew: true,
        customer: action.cust_data
      };

    case 'ADD_TEAM_MEMBER':
      return {
        ...state,
        error: null,
        message: action.data.data,
        addTeamMemberSuccess: true
      };
    case 'SINGLE_BUSINESS':
      return {
        ...state,
        fetchSingleBusinessSucess: true,
        singleBusiness: action.data.data
      };
    case ' FETCH_CUSTOMERS':
      return {
        ...state,
        customerFetch: true,
        customers: action.data.data
      };
    case 'FETCH_COMPANIES':
      return {
        ...state,
        companies: action.data.data,
        fetchCompanySuccess: true
      };
    default:
      break;
  }
};

export default AppReducer;
