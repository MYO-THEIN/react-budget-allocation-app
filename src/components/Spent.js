import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const Spent = ()=>{
    const { currency, spent } = useContext(AppContext);

    return (
        <div className="alert alert-secondary">
            <span>Spent so far: { currency }{ spent }</span>
        </div>
    );
}

export default Spent;
