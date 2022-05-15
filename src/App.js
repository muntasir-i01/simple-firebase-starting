import logo from './logo.svg';
import './App.css';
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import app from './firebase.init';


const auth = getAuth(app);

function App() {

  const provider = new GoogleAuthProvider();
  const handleGoogleSignIn = () => {
    // console.log('working');
    signInWithPopup(auth, provider) //callback function
    .then(result => {
      const user = result.user;
      console.log(user);
    }) 
    .catch(error => {
      console.log('error',error);
    })   
  }
  return (
    <div className="App">
      <button onClick={handleGoogleSignIn}>Google Sign in</button>
    </div>
  );
}

export default App;
