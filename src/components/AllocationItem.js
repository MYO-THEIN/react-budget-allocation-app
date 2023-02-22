import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';
import { FaPlusCircle, FaMinusCircle, FaTrash } from 'react-icons/fa';

const AllocationItem = (props)=>{
    const { currency, dispatch } = useContext(AppContext);

    const increaseBy10 = ()=>{
        dispatch({
            type: "INC_BY",
            payload: {
                department: props.department,
                value: 10
            }
        });
    }
    const decreaseBy10 = ()=>{
        dispatch({
            type: "DEC_BY",
            payload: {
                department: props.department,
                value: 10
            }
        });
    }
    const deleteItem = ()=>{
        dispatch({
            type: "DELETE_ITEM",
            payload: {
                department: props.department
            }
        });
    }

    return (
        <tr>
            <td>{ props.department }</td>
            <td>{ currency }{ props.budget }</td>
            <td><FaPlusCircle size='2.2em' color="red" onClick={ increaseBy10 }></FaPlusCircle></td>
            <td><FaMinusCircle size='2.2em' color="red" onClick={ decreaseBy10 }></FaMinusCircle></td>
            <td><FaTrash size='2.2em' color="red" onClick={ deleteItem }></FaTrash></td>
        </tr>
    );
}

export default AllocationItem;
