import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import { AppProvider } from './context/AppContext';
import Budget from './components/Budget';
import Spent from './components/Spent';
import Remaining from './components/Remaining';
import Currency from './components/Currency';
import AllocationList from './components/AllocationList';
import ChangeAllocation from './components/ChangeAllocation';

const App = ()=>{
	return (
		<AppProvider>
			<div className="container">
				<h1 className="mt-3">Company's Budget Allocation</h1>
				<div className="row mt-3">
					<div className="col-sm">
						<Budget />
					</div>
					<div className="col-sm">
						<Spent />
					</div>
					<div className="col-sm">
						<Remaining />
					</div>
					<div className="col-sm">
						<Currency />
					</div>
				</div>

				<h3 className="mt-3">Allocation</h3>
				<div className="row">
					<div className="col-sm">
						<AllocationList />
					</div>
				</div>

				<h3 className="mt-3">Change allocation</h3>
				<div className="row mt-3">
					<div className="col-sm">
						<ChangeAllocation />
					</div>
				</div>
			</div>
		</AppProvider>
	);
}

export default App;
