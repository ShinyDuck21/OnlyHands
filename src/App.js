import GoogleButton from 'react-google-button';
import './App.css';
import { signInWithGoogle } from "./firebase"

function App() {
  return (
    <>
      <GoogleButton onClick={signInWithGoogle} />
    </>
  )
}
export default App;
