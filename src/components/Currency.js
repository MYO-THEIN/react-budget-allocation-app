import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const Currency = ()=>{
    const { dispatch } = useContext(AppContext);

    const changeCurrency = (val)=>{
        dispatch({
            type: "CHG_CURRENCY",
            payload: {
                currency: val
            }
        });
    }

    return (
        <div className="alert bg-info">
            Currency: {
                <select class="bg-transparent border-0 outline-0" name="currency" id="currency" onChange={e => changeCurrency(e.target.value)}>
                    <option value="£">£ Pound</option>
                    <option value="₹">₹ Rupee</option>
                    <option value="€">€ Euro</option>
                    <option value="$">$ Dollar</option>
                </select>
            }
        </div>
    );
}

export default Currency;
