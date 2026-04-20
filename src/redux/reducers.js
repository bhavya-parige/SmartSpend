import { ADD_TRANSACTION, DELETE_TRANSACTION } from "./actions";

const initialState = {
  transactions: JSON.parse(localStorage.getItem("tx")) || [],
};

export const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TRANSACTION: {
      const updated = [...state.transactions, action.payload];
      localStorage.setItem("tx", JSON.stringify(updated));
      return { ...state, transactions: updated };
    }
    case DELETE_TRANSACTION: {
      const filtered = state.transactions.filter(t => t.id !== action.payload);
      localStorage.setItem("tx", JSON.stringify(filtered));
      return { ...state, transactions: filtered };
    }
    default:
      return state;
  }
};