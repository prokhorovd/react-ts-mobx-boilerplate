import React, {FC} from 'react';
import './App.css';
import StoreProvider from './store/context';
import UserList from './components/UserList';
import AddUser from './components/AddUser';

const App: FC = () => (
    <StoreProvider>
      <div className="App">
        <UserList />
        <AddUser />
      </div>
    </StoreProvider>
);

export default App;
