import { ActionCreators } from "../app/expensesReducer";

export const GetExpenses = async (dispatch) => {
  try {
    // api call
    const expenses = [
      { id: 1, description: "Office Lunch Cost", amount: 25.83 },
      { id: 2, description: "Transport expense", amount: 275 },
      { id: 3, description: "Vacation renumeration", amount: 3620 },
      { id: 4, description: "Certification fee repayment", amount: 1340 },
    ];

    dispatch(ActionCreators.setExpenses(expenses));
  } catch {
    console.log("Error!");
  }
};

export const NewExpense = async (dispatch, expense) => {
  try {
    // api call
    dispatch(
      ActionCreators.newExpense({
        id: 10,
        description: expense.description,
        amount: expense.amount,
      })
    );
  } catch {
    console.log("Error!");
  }
};

export const EditExpense = async (dispatch, expense) => {
  try {
    // api call
    dispatch(ActionCreators.editExpense(expense));
  } catch {
    console.log("Error!");
  }
};

export const DeleteExpense = async (dispatch, expense) => {
  try {
    // api call
    dispatch(ActionCreators.deleteExpense(expense));
  } catch {
    console.log("Error!");
  }
};
