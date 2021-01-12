import { BrowserRouter } from 'react-router-dom';

import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Body from './components/Body';

import './App.css';

function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <Header />
        <div className="app-main">
          <div className="app-main-sidebar">
          <Sidebar />
          </div>
          <div className="app-main-body">
            <Body />
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
