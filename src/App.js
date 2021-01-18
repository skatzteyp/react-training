import { useState, useEffect } from 'react';
import axios from 'axios';

import './App.css';

import Todo from './components/Todo';

function App() {
  const [isLogin, setIsLogin] = useState(false);

  useEffect(() => {
    async function login() {
      const res = await axios.post('http://localhost:4000/users');
      localStorage.setItem('token', res.data);
      setIsLogin(true);
    }

    login();
  }, []);

  if (isLogin) {
    return <Todo />;
  } else {
    return <p>Loading..</p>;
  }
}

export default App;
