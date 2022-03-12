import React, {FC, useContext, useState} from 'react';
import {storeContext} from '../store/context';
import {observer} from 'mobx-react-lite';

const AddUser: FC = observer(() => {
  const [userForm, setUserForm] = useState('');
  const store = useContext(storeContext);
  if (!store) throw Error("Store shouldn't be null");
  const submitHandler = (event: any) => {
    store?.addUser(userForm);
    setUserForm("");
    event.preventDefault();
  };
  return (
    <div>
      <form onSubmit={submitHandler}>
        <input type="text" value={userForm} onChange={e => {
          setUserForm(e.target.value);
        }}/>
        <button type="submit">push</button>
      </form>
    </div>
  )
});

export default AddUser;
