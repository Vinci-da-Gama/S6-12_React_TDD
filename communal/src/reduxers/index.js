import { combineReducers } from 'redux';
import InebriantReducer from './inebriant-reducer';
import MisschildrenReducer from './misschildren-reducer';
import PropvalReducer from './propval-reducer';
import booksReducer from './books-reducer';
import ExpensesReducer from './expense-reducer';
import filtersReducer from './filter-reducer';

const RootReducer = combineReducers({
	inebriants: InebriantReducer,
	missChildren: MisschildrenReducer,
	propvalObj: PropvalReducer,
	books: booksReducer,
	expenses: ExpensesReducer,
	setValViaFilters: filtersReducer
});

export default RootReducer;
