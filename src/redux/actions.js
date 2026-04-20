export const ADD_TRANSACTION = "ADD_TRANSACTION";
export const DELETE_TRANSACTION = "DELETE_TRANSACTION";

export const addTransaction = (tx) => ({ type: ADD_TRANSACTION, payload: tx });
export const deleteTransaction = (id) => ({ type: DELETE_TRANSACTION, payload: id });
