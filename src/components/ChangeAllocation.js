import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';

const ChangeAllocation = ()=>{
    const { allocations, remaining, currency, dispatch } = useContext(AppContext);

    const [department, setDepartment] = useState("");
    const [action, setAction] = useState("");
    const [amount, setAmount] = useState(0);

    const submitEvent = ()=>{
        if (amount > remaining) {
            alert("Amount exceeds the remaining budget");
            return;
        }

        let payload = {
            department,
            budget: parseInt(amount)
        };

        if (action === "Add") {
            dispatch({
                type: "ADD_BUDGET",
                payload
            });
        } else if (action === "Reduce") {
            dispatch({
                type: "RED_BUDGET",
                payload
            });
        }
    };

    return (
        <div>
            <div className="row">
                <div className="input-group mb-3" style={{ marginLeft: "2rem" }}>
                    <div className="input-group-prepend">
                        <label className="input-group-text" htmlFor="selectboxDepartments">Department</label>
                    </div>
                    <select className="custom-select" id="selectboxDepartments" onChange={e => setDepartment(e.target.value)}>
                        <option defaultValue>choose ...</option>
                        { allocations.map(a => (
                            <option value={ a.department } name={ a.department }>{ a.department }</option>
                        ))}
                    </select>

                    <div className="input-group-prepend" style={{ marginLeft: "2rem" }}>
                        <label className='input-group-text' htmlFor="selectboxActions">Allocation</label>                
                    </div>
                    <select className="custom-select" id="selectboxActions" onChange={e => setAction(e.target.value)}>
                        <option defaultValue>choose ...</option>
                        <option value="Add" name="Add">Add</option>
                        <option value="Reduce" name="Reduce">Reduce</option>
                    </select>

                    <span className="eco" style={{ marginLeft: "2rem", marginRight: "8px" }}>{ currency }</span> 
                    <input type="number" id="amount" value={ amount } style={{ size: 10 }} required="required" onChange={e => setAmount(e.target.value)}></input>
                    <button className="btn btn-primary" onClick={ submitEvent } style={{ marginLeft: "2rem" }}>Save</button> 
                </div>
            </div>
        </div>
    );
}

export default ChangeAllocation;
