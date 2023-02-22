import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';
import AllocationItem from './AllocationItem';

const AllocationList = ()=>{
    const { allocations } = useContext(AppContext);

    return (
        <table className="table">
            <thead className="thead-light">
                <tr>
                    <th scope="col">Department</th>
                    <th scope="col">Allocated Budget</th>
                    <th scope="col">Increase by 10</th>
                    <th scope="col">Decrease by 10</th>
                    <th scope="col"></th>
                </tr>
            </thead>
            <tbody>
                { allocations.map(a => (
                    <AllocationItem key={a.Department} department={a.department} budget={a.budget} />
                ))}
            </tbody>
        </table>
    );
}

export default AllocationList;
