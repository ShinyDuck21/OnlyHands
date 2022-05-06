import { useEffect } from 'react';
import { getAuth } from 'firebase/auth';
import './App.css';

function GetData(val) {
  return val.target
}

function App() {
  useEffect(() => {
    if (localStorage.getItem("login") === null) {
      localStorage.setItem("login", false)
    }
  }, [])

  const url = '0;URL=' + window.location.href + "home"
  const auth = getAuth();

  return (
    <div className="App">
      {localStorage.getItem("login") === 'true' && <meta httpEquiv='refresh' content={url} />}
      <div className='login'>
        <h1>Login or <a href='/signup'>Sign Up</a></h1>
        <input type='text' className='username' placeholder='Enter Username' />
        <input type='text' className='password' placeholder='Enter Password' />
        <br />
        <button className='username-login'>LOGIN</button>
      </div>

    </div>
  );
}

export default App;
