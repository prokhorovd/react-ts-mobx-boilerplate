import React, {FC, useContext} from 'react';
import {storeContext} from '../store/context';
import {observer} from 'mobx-react-lite';

const UserList: FC = observer(() => {
  const store = useContext(storeContext);
  if (!store) throw Error("Store shouldn't be null");
  return (
    <ul>
      {store.userNames.map(user => (
        <li key={user}>{user}</li>
      ))}
    </ul>
  );
});

export default UserList;
