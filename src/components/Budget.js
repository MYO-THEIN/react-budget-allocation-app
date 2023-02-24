import React, { useContext, useEffect } from 'react';
import { AppContext } from '../context/AppContext';

const Budget = ()=>{
    const { setBudget, currency, dispatch } = useContext(AppContext);

    const changeBudget = (val, max)=>{
        if (val > max) {
            alert(`Budget cannot exceeds ${max}`);
            document.getElementById("setBudget").value = max;
            val = max;
        }

        dispatch({
            type: "SET_BUDGET",
            payload: {
                budget: val
            }
        });
    }

    useEffect(()=>{
        let val = document.getElementById("setBudget").value;
        if (!val)
            document.getElementById("setBudget").value = setBudget;
    })

    return (
        <div className="alert alert-primary">
            <span>Budget: { currency }</span>
            <input type="number" step="10" id="setBudget" name="setBudget" onChange={e => changeBudget(e.target.value, 20000)} />
        </div>
    );
}

export default Budget;
