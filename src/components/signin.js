
import React, { useState, useEffect } from 'react';
import '../css/main.css'; // Import the CSS file
import '../css/login.css';
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';
import { getAuth, EmailAuthProvider, GoogleAuthProvider, onAuthStateChanged, signOut } from 'firebase/auth';

export default function Signin() {
  const [user, setUser] = useState(null);
  const auth = getAuth(); // access the "authenticator"

  const firebaseUIConfig = {
    signInOptions: [
      GoogleAuthProvider.PROVIDER_ID,
      { provider: EmailAuthProvider.PROVIDER_ID, requiredDisplayName: true },
    ],
    signInFlow: 'popup',
    credentialHelper: 'none',
    callbacks: {
      signInSuccessWithAuthResult: () => {
        return false;
      }
    }
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (firebaseUser) => {
      if (firebaseUser) {
        setUser(firebaseUser); // Set the user state when signed in
      } else {
        setUser(null); // Reset the user state when signed out
      }
    });

    // Cleanup subscription on unmount
    return () => unsubscribe();
  }, [auth]);

  const handleLogout = () => {
    signOut(auth).then(() => {
      console.log('User signed out');
    }).catch((error) => {
      console.error('Error signing out: ', error);
    });
  };

  return (
    <div className="login-body">
      <div className="login-section">
        <div className="form-container">
          {user ? (
            <>
              <p className="welcome-message">Welcome back, {user.displayName}</p>
              <button className='sign-out-btn'  onClick={handleLogout}>Sign Out</button>
            </>
          ) : (
            <>
              <p className="welcome-message">Good to see you again</p>
              <p className="message">Ready to check on your plants?</p>
              <StyledFirebaseAuth uiConfig={firebaseUIConfig} firebaseAuth={auth} />
            </>
          )}
        </div>
      </div>
      <div className="image-section">
        <img src="../img/monstera.jpg" alt="Monstera Plant" />
      </div>
    </div>
  );
}