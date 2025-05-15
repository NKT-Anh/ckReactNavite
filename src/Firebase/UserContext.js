import { StyleSheet, Text, View } from 'react-native';
import React, { useEffect, useState, createContext } from 'react';
import { onAuthStateChanged } from 'firebase/auth';
import { auth, db } from './firebaseconfig';
import { doc, onSnapshot } from 'firebase/firestore';

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribeAuth = onAuthStateChanged(auth, (firebaseUser) => {
      if (firebaseUser) {
        const userRef = doc(db, 'User', firebaseUser.uid);
  
        const unsubscribeUser = onSnapshot(userRef, (snapshot) => {
          if (snapshot.exists()) {
            const userData = snapshot.data();
            setUser({
              id: firebaseUser.uid, 
              email: firebaseUser.email,
              fullName: userData.fullName || '',
              address: userData.address || '',
              phone: userData.phone || '',
              avatar: userData.avatar || '',
              role: userData.role || '',
            });
          } else {
            setUser(null);
          }
        });
        return () => unsubscribeUser();
      } else {
        setUser(null);
      }
    });
  
    return () => unsubscribeAuth();
  }, []);
  

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};