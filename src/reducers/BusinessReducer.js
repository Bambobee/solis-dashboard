const BussinessReducer = (state, action) => {
  switch (action.type) {
    case 'FETCH_COMPANIES':
      return {
        ...state,
        companies: action.data.data,
        fetchCompanySuccess: true
      };
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
    case 'SINGLE_BUSINESS':
      return {
        ...state,
        fetchSingleBusinessSucess: true,
        singleBusiness: action.data.data
      };

    default:
      break;
  }
};
export default BussinessReducer;
