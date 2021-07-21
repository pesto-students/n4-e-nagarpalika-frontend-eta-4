/** @format */

import React, { useEffect, useState } from "react";
import { connect } from "react-redux";

import AppLayout from "./common/components/AppLayout";
import AppRoutes from "./common/components/AppRoutes";

import firebase from "./common/firebase";

import { logIn, authInit } from "./store/actionCreators/auth";

function App({ actionLogIn, actionAuthInit }) {
  const [initializing, setInitializing] = useState(true);

  // Handle user state changes
  async function onAuthStateChanged(user) {
    // if user is not logged in, only initialize the account state.
    if (!user) {
      actionAuthInit();
    }

    if (user) {
      try {
        const token = await user.getIdToken();

        actionLogIn({ firebaseToken: token });
      } catch (error) {
        actionAuthInit();
      }
    }

    if (initializing) {
      setInitializing(false);
    }
  }

  useEffect(() => {
    const unSubscriber = firebase.auth().onAuthStateChanged(onAuthStateChanged);

    return unSubscriber; // unsubscribe on unmount
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <AppLayout>
      {initializing ? (
        <div className="spinner-border" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      ) : (
        <AppRoutes />
      )}
    </AppLayout>
  );
}

const mapDispatchToProps = {
  actionLogIn: logIn,
  actionAuthInit: authInit,
};

export default connect(null, mapDispatchToProps)(App);
