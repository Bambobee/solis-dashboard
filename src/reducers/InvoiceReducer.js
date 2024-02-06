const InvoiceReducer = (state, action) => {
  switch (action.type) {
    case 'CREATE_INVOICE':
      return {
        ...state,
        createInvoiceSuccess: true,
        invoiceData: action.data
      };

    case 'ALL_INVOICES':
      return {
        ...state,
        fetchInvoicesSuccess: true,
        invoices: action.data.data
      };
    case 'SINGLE_INVOICE':
      return {
        ...state,
        fetchSingleInvoiceSucess: true,
        invoice: action.data.data
      };
    case 'DELTE_INVOICE':
      return {
        ...state
      };
    case 'UPDATE_INVOICE':
      return {
        ...state,
        error: null,
        message: action.data.data,
        updateInvoiceSuccess: true
      };
    case 'DELETE_INVOICE_ITEM':
      return {
        ...state
      };

    default:
      break;
  }
};

export default InvoiceReducer;
