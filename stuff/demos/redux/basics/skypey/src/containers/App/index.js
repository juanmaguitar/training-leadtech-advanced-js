import React from 'react';
import store from '../../store';
import  _ from 'lodash'
import './index.css';

import Main from '../../components/Main'
import Sidebar from '../../components/Sidebar'


const App = () => {
  const { contacts, user, activeUserId  } = store.getState()

  return (
    <div className="App">
      <Sidebar contacts={_.values(contacts)} />
      <Main user={user} activeUserId={activeUserId} />
    </div>
  );
}

export default App;
