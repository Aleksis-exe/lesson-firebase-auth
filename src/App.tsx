import React, { Fragment } from 'react'
import './App.css'
import 'firebase/auth'
import AutchForm from './components/AutchForm'
import { firebaseConfig } from './config'
import firebase from 'firebase/app'
import 'firebase/auth'
import {
  FirebaseAuthProvider,
  FirebaseAuthConsumer,
  //  IfFirebaseAuthed,
  //  IfFirebaseAuthedAnd
} from '@react-firebase/auth'
import SignOutBt from './components/SignOutBt'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <FirebaseAuthProvider firebase={firebase} {...firebaseConfig}>
          <FirebaseAuthConsumer>
            {({ isSignedIn, user, providerId }) => {
              if (isSignedIn === false) {
                const googleAuthProvider = new firebase.auth.GoogleAuthProvider()
                return (
                  <AutchForm
                    firebase={(email: string, password: string) =>
                      firebase.auth().signInWithPopup(googleAuthProvider)
                    }
                  />
                )
              }
              return (
                <Fragment>
                  <SignOutBt signOut={() => firebase.auth().signOut()} />
                  <pre style={{ overflow: 'auto' }}>
                    {JSON.stringify({ isSignedIn, user, providerId }, null, 2)}
                  </pre>
                </Fragment>
              )
            }}
          </FirebaseAuthConsumer>
        </FirebaseAuthProvider>
      </header>
    </div>
  )
}

export default App
