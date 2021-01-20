import { useState, useEffect } from 'react';
import { Provider } from 'react-redux';
import axios from 'axios';

import Todo from './components/Todo';
import store from './redux/store';
import './App.css';

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
    return (
      <Provider store={store}>
        <Todo />
      </Provider>
    );
  } else {
    return <p>Loading..</p>;
  }
}

export default App;
