import React from 'react';
import PersonList from './PersonList';
import PersonInput from './PersonInput';
import DeletePerson from './DeletePerson';
function App() {
  return (
    <div className='App'>
      <PersonInput />
      <DeletePerson />
      <PersonList />
    </div>
  );
}

export default App;
