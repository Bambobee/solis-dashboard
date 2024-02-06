const ReceiptReducer = (state, action) => {
  switch (action.type) {
    case 'CREATE_RECEIPT':
      return {
        ...state,
        error: null,
        createReceiptSuccess: true
      };
    case 'PRINT_RECEIPT':
      return {
        ...state,
        error: null,
        addPrintQueueSucces: true
      };
    case 'EMAIL_RECEIPT':
      return {
        ...state,
        error: null,
        emailReceiptSuccess: true
      };
    case 'ARCHIEVE_RECEIPT':
      return {
        ...state,
        error: null,
        ArchiveReceiptSuccess: true
      };
    default:
      break;
  }
};
export default ReceiptReducer;
