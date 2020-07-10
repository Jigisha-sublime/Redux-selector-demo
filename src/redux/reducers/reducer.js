const initialState = {
  count: 0,
  empList: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_ITEM':
      return {
        ...state,
        count: state.count + action.payload,
      };
    case 'ADD_LIST_DATA':
      return {
        ...state,
        empList: [...action.payload],
      };
    default:
      return state;
  }
};

export const higherSalarySelectors = (state) => state.sampleReducer.empList.filter((emp) => emp.employee_salary > 200000);
