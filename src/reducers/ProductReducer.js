const ProductReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_PRODUCT':
      return {
        ...state,
        error: null,
        addProductSuccess: true
      };
    case 'FETCH_PRODUCT_SUCCESS':
      return {
        ...state,
        error: null,
        fetchProductSuccess: true,
        products: action.data.data
      };
    case 'FETCH_CUSTOMERS_FAILURE':
      return {
        ...state,
        error: action.data,
        fetchProductSuccess: false
      };
    case 'FETCH_SINGLE_PRODUCT':
      return {
        ...state
      };
    case 'DELETE_PRODUCT':
      return {
        ...state
      };
    case 'UPDATE_PRODUCT_SUCCESS':
      return {
        ...state,
        message: action.data.data,
        updateProductSuccess: true
      };
    default:
      break;
  }
};

export default ProductReducer;
