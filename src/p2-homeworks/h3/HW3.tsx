import React, { useState } from 'react';
import GreetingContainer from './GreetingContainer';
import { v1 } from 'uuid';


export type UserType = {
  id: string
  name: string
}

function HW3() {
  const [users, setUsers] = useState<Array<UserType>>([]);

  const addUserCallback = ( name: string) => {
    const newUser = {id: v1(), name: name}
    setUsers([newUser, ...users]);
  };


  return (
    <div>
      <hr/>
      homeworks 3

      <GreetingContainer users={users} addUserCallback={addUserCallback}/>

      <hr/>

    </div>
  );
}

export default HW3;
