import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Sidebar from './components/Sidebar/Sidebar';
import Dialogs from './components/Dialogs/Dialogs';
import Profile from './components/Profile/Profile';
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';
import {BrowserRouter, Routes, Route} from 'react-router-dom';

const App = (props) => {
  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <Header/>
        <Sidebar/>
        <section className="main">
          <Routes>
            <Route path="/dialogs" element={<Dialogs title="DIALOGS" dialogs={props.dialogs} messages={props.messages}/>}/>
            <Route path="/profile" element={<Profile posts={props.posts}/>}/>
            <Route path="/news" element={<News title="НОВОСТИ"/>}/>
            <Route path="/music" element={<Music title="МУЗЫКА-МУЗЫКА"/>}/>
            <Route path="/settings" element={<Settings title="НАСТРОЙКИ"/>}/>
          </Routes>
        </section>
      </div>
    </BrowserRouter>
  );
};

export default App;
