/** @format */

import React, { useContext, useState, useEffect } from "react";
import PropTypes from "prop-types";
import { auth } from "./api/firebase";

const AuthContext = React.createContext();

export default function useAuth() {
  return useContext(AuthContext);
}

export function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState();
  const [loading, setLoading] = useState(true);
  const [confirm, setConfirm] = useState(null);

  function submitPhone(phone, appVerifier) {
    return auth
      .signInWithPhoneNumber(phone, appVerifier)
      .then((confirmResult) => {
        setConfirm(confirmResult);
      });
  }

  function submitOtp(otp) {
    return confirm.confirm(otp).then((result) => {
      //  eslint-disable-next-line
      const user = result.user;
      setCurrentUser(user);
      user.getIdToken().then((token) => {
        window.localStorage.setItem("authtoken", token);
      });
    });
  }

  function logout() {
    return auth.signOut();
  }

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setCurrentUser(user);
      setLoading(false);
    });

    return unsubscribe;
  }, []);

  const value = {
    currentUser,
    logout,
    submitPhone,
    submitOtp,
  };

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
}

AuthProvider.propTypes = {
  children: PropTypes.element.isRequired,
};
