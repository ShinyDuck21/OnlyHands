import { signOut } from 'firebase/auth';
import GoogleButton from 'react-google-button';
import './App.css';
import { signInWithGoogle, SignOut } from "./firebase"

function App() {
  return (
    <>
      <GoogleButton onClick={signInWithGoogle} />
      <h1>Logged in as {localStorage.getItem("name")}</h1>
      <button onClick={SignOut}>Log Out</button>
    </>
  )
}
export default App;
