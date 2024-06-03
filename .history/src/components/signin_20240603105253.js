import React, { useState } from 'react';
import '../css/main.css'; // Import the CSS file
import '../css/login.css';
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';
import { getAuth, EmailAuthProvider, GoogleAuthProvider } from 'firebase/auth'


export default function Signin() {

    const firebaseUIConfig = {
        signInOptions: [ //array of sign in options supported
          //array can include just "Provider IDs", or objects with the IDs and options
          GoogleAuthProvider.PROVIDER_ID,
          { provider: EmailAuthProvider.PROVIDER_ID, requiredDisplayName: true },
        ],
        signInFlow: 'popup', //don't redirect to authenticate
        credentialHelper: 'none', //don't show the email account chooser
        callbacks: { //"lifecycle" callbacks
          signInSuccessWithAuthResult: () => {
            return false; //don't redirect after authentication
          }
        }
      }
    const auth = getAuth(); //access the "authenticator"


    return (
        <div class="login-body">
            <div class="login-section">
                <div class="form-container">
                    <p class="welcome-message">Good to see you again</p>
                    <p class="message">Ready to check on your plants?</p>
                    <StyledFirebaseAuth uiConfig={firebaseUIConfig} firebaseAuth={auth} />

                    {/* <form>
                        <!-- Reference: https://www.w3schools.com/howto/howto_css_login_form.asp -->
                        <input class="login-input-text-email" type="email" name="email" placeholder="Email" required />
                        <input class="login-input-text-password" type="password" name="password" placeholder="Password" required />
                        <div class="remember-container">
                            <label><input type="checkbox" class="remember-checkbox" />&nbsp;Remember Me</label>
                            <a href="#">Forgot Password?</a>
                        </div>
                        <button type="submit">Login</button>
                    </form>
                    <p class="signup-message">Don't have an account? <a href="#">Sign up here</a></p> */}
                </div>
            </div>
            <div class="image-section">
                <img src="../img/monstera.jpg" alt="Monstera Plant" />
            </div>
        </div>

    );

}