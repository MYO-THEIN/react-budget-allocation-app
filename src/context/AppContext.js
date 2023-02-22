import React, { createContext, useReducer } from 'react';

// the root Reducer
export const AppReducer = (state, action)=>{
    let new_allocations = [];

    switch (action.type) {
        case "SET_BUDGET":
            if (action.payload.budget === 0 || action.payload.budget < state.spent) {
                state.setBudget = state.spent;
                state.remaining = 0;
            } else {
                state.setBudget = action.payload.budget;
                state.remaining = state.setBudget - state.spent;
            }
            return {
                ...state
            };

        case "ADD_BUDGET":
            state.allocations.map(a => {
                if (a.department === action.payload.department)
                    a.budget += action.payload.budget;
                
                new_allocations.push(a);
                return true;
            });
            state.allocations = new_allocations;
            action.type = "DONE";
            return {
                ...state
            };

        case "RED_BUDGET":
            state.allocations.map(a => {
                if (a.department === action.payload.department)
                    a.budget -= action.payload.budget;
                
                a.budget = a.budget < 0 ? 0 : a.budget;
                new_allocations.push(a);
                return true;
            });
            state.allocations = new_allocations;
            action.type = "DONE";
            return {
                ...state
            };

        case "DELETE_ITEM":
            state.allocations.map(a => {
                if (a.department !== action.payload.department) {
                    new_allocations.push(a);
                }
                return true;
            });
            state.allocations = new_allocations;
            action.type = "DONE";
            return {
                ...state
            };

        case "INC_BY":
            state.allocations.map(a => {
                if (a.department === action.payload.department)
                    a.budget += action.payload.value;
                
                new_allocations.push(a);
                return true;
            });
            state.allocations = new_allocations;
            action.type = "DONE";
            return {
                ...state
            };

        case "DEC_BY":
            state.allocations.map(a => {
                if (a.department === action.payload.department)
                    a.budget -= action.payload.value;
                
                a.budget = a.budget < 0 ? 0 : a.budget;
                new_allocations.push(a);
                return true;
            });
            state.allocations = new_allocations;
            action.type = "DONE";
            return {
                ...state
            };

        case "CHG_CURRENCY":
            action.type = "DONE";
            state.currency = action.payload.currency;
            return {
                ...state
            };

        default:
            return state;
    }
};

const initialState = {
    setBudget: 3000,
    spent: 0,
    remaining: 0,
    allocations: [
        { department: "Marketing", budget: 50 },
        { department: "Finance", budget: 300 },
        { department: "Sales", budget: 70 },
        { department: "Human Resource", budget: 40 },
        { department: "IT", budget: 500 }
    ],
    currency: "£"
};

// creates the context which is the thing our components import and use to get the state
export const AppContext = createContext();

// Provider component wraps the components we want to give access to the state
export const AppProvider = (props)=>{
    const [state, dispatch] = useReducer(AppReducer, initialState);

    const total = state.allocations.reduce((total, allo) => {
        return total = total + allo.budget;
    }, 0);
    state.spent = total;
    state.remaining = state.setBudget - state.spent;

    return (
        <AppContext.Provider 
            value = {{
                setBudget: state.setBudget,
                spent: state.spent,
                remaining: state.remaining,
                allocations: state.allocations,
                currency: state.currency,
                dispatch
            }}>
            { props.children }
        </AppContext.Provider>
    );
};
