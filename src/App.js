import React from 'react';

import Search from './Components/Search';
import Users from './Components/Users';
import { fetchUsers } from './Api';

import './App.css';

function App() {
  const [userSearchValue, setUserSearchValue] = React.useState('');
  const [users, setUsers] = React.useState([]);

  React.useEffect(() => {
    fetchUsers().then(setUsers);
  }, []);

  return (
    <div className="App">
      <div className="Users-List">
        <h1>Users List</h1>
        <Search value={userSearchValue} setValue={setUserSearchValue} />
        {users.length > 0 && <Users users={users.filter((user) => user.name.toLowerCase().includes(userSearchValue.toLowerCase()))} />}
      </div>
    </div>
  );
}

export default App;
