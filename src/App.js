import { BrowserRouter, Route, Routes } from 'react-router-dom';
import React from 'react';
import { UserList } from './features/users/UserList';
import { AddUser } from './features/users/AddUser';
import { EditUser } from './features/users/EditUser';
import CounterContainer from './ReduxCounter';

function App(props) {
  return (
    <div>
    <BrowserRouter>
        <Routes>
          <Route path='/' element={<UserList />} />
          <Route path='/add-user' element={<AddUser/>}/>
          <Route path='/edit-user/:id' element={<EditUser/>}/>
          <Route path='/counter'element={<CounterContainer/>}/>
        </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
