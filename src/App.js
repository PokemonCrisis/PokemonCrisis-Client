import React from 'react';
import Header from './components/dashboard/header'
import ChatRoom from './components/dashboard/chatroom'
import Dashboard from './components/dashboard/dashboard'



function App() {
  return (
    //eslint-disable-next-line
  <React.Fragment>
    <Header />
    <Dashboard />
    <ChatRoom />
  </React.Fragment>
  );
}

export default App;
