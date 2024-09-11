import React, { useContext } from 'react';

////////////////////////////////////////////////////////////////////////////
//
type User = {
     id: number,
     name: string
};

const UserContext = React.createContext<User | null>(null);

////////////////////////////////////////////////////////////////////////////
//
const MessageToUser = () => {
      const user_incontext = useContext(UserContext);

      return (
      	     user_incontext != null ? <p>Hello, {user_incontext.name}</p> : <p>no user</p>
      );
};

////////////////////////////////////////////////////////////////////////////
//
const TimeContent = () => {
      const now = new Date();

      return (
      	     <div style={{background: '#E583F2'}}>
		<p>Current Time: {now.toLocaleString()}</p>
		<MessageToUser />
	     </div>
      );
};

////////////////////////////////////////////////////////////////////////////
//
const MyContext = () => {
  const user: User = {
  	id: 1,
	name: 'Alice'
  };
  
  return (
    <UserContext.Provider value={user}>
	<TimeContent />
    </UserContext.Provider>
  );
}

export default MyContext;