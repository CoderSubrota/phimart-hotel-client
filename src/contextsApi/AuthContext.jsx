
import React, { createContext, useState, useEffect } from 'react';

export const AuthContext = createContext({
  token: null,
  user: null,
  login: async (username, password) => {},
  logout: () => {},
});

export function AuthProvider({ children, apiUrl }) {
  const [token, setToken] = useState(() =>
    localStorage.getItem('token')
  );
  const [user, setUser] = useState(() => {
    const u = localStorage.getItem('user');
    return u ? JSON.parse(u) : null;
  });

  useEffect(() => {
    if (token) {
      localStorage.setItem('token', token);
    } else {
      localStorage.removeItem('token');
    }
  }, [token]);

  useEffect(() => {
    if (user) {
      localStorage.setItem('user', JSON.stringify(user));
    } else {
      localStorage.removeItem('user');
    }
  }, [user]);


  const login = async (username, password) => {
    const resp = await fetch(`${apiUrl}/login/`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ username, password }),
    });
  
    if (!resp.ok) {
      const err = await resp.json();
      const msg = Object.values(err).flat().join(' ') || resp.statusText;
      throw new Error(msg);
    }
  
    // Extract balance alongside other fields
    const { token: tk, user_id, username: uname, balance,first_name, last_name, email,role } = await resp.json();
    setToken(tk);
  
    const userObj = { id: user_id, username: uname, balance,first_name, last_name, email,role }; 
    setUser(userObj);
  };
  


  const logout = () => {
    setToken(null);
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ token, user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}
