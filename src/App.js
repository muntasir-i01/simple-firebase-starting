import logo from './logo.svg';
import './App.css';
import {signOut, getAuth, GoogleAuthProvider, signInWithPopup, GithubAuthProvider } from "firebase/auth";
import app from './firebase.init';
import { useState } from 'react';


const auth = getAuth(app);

function App() {
  const [user, setUser] = useState({});

  const googleProvider = new GoogleAuthProvider();
  const githubProvider = new GithubAuthProvider();

  const handleSignOut = () => {
    signOut(auth)
    .then( () => {
      setUser({});
    })
    .catch(error => {
      setUser({});
    })
  }

  const handleGoogleSignIn = () => {
    signInWithPopup(auth, googleProvider)
    .then(result => {
      const user = result.user;
      setUser(user);
      console.log(user);
    })

    .catch(error => {
      console.log('error', error);
    })
  }

  const handleGithubSignIn = () => {
    signInWithPopup(auth, githubProvider)
    .then(result => {
      const user = result.user;
      console.log(user);
    })
    .catch(error => {
      console.error(error);
    })
  }
  return (
    <div className="App">
      {/* conditional rendering */}
        {
          user.uid ? <button onClick={handleSignOut}>Sign Out</button>
          :
         /*  react fragment */
          <>
            <button onClick={handleGoogleSignIn}>Google Sign In</button>
            <button onClick={handleGithubSignIn}>Github Sign In</button>
          </>
}
        <h2>Name: {user.displayName}</h2>
        {/* <img src={user.photoURL} alt="" /> */}
    </div>
  );
}

export default App;
