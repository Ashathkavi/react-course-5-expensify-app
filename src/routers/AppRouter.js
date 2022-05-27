


import React from 'react'
import { BrowserRouter, Route, Routes ,NavLink, Outlet, Link} from 'react-router-dom';
import ExpenseDashoardPage from '../components/ExpenseDashboard';
import AddExpensePage from '../components/AddExpensePage';
import Header from '../components/Header';
import EditExpensePage from '../components/EditExpensePage';
import HelpPage from '../components/HelpPage';
import NotFoundPage from '../components/NotFoundPage';

const AppRouter = () => (
<BrowserRouter>
    <Routes>
        <Route path="/" element={<Header/>}>  
            <Route path="dashboard" element={<ExpenseDashoardPage/>}/>                        
            <Route path="create" element={<AddExpensePage/>}/>
            <Route path="edit/:id" element={<EditExpensePage/>}/>
            <Route path="help" element={<HelpPage/>}/>
        </Route>
        <Route path='*' element={<NotFoundPage/>}/>
    </Routes>
</BrowserRouter>
)
export default AppRouter

    