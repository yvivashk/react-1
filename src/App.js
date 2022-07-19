import React from 'react';
import './App.css';
import Header from './components/Header/Header';
// import Profile from './components/Profile/Profile';
import Sidebar from './components/Sidebar/Sidebar';
import Dialogs from './components/Dialogs/Dialogs';

const App = () => {
  return (
    <div className="app-wrapper">
      <Header />
      <Sidebar />
      {/* <Profile /> */}
      <section className="main">
        <Dialogs title="DIALOGS" />
      </section>
    </div>
  );
};

export default App;
