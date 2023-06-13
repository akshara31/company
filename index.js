import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import UserContext from './UserContext';

const root = ReactDOM.createRoot(document.getElementById('root'));

const UserContextProvider = ({ children }) => {
  const [name, setName] = useState('');
  const [id, setId] = useState('');

  return (
    <UserContext.Provider value={{ id, setId, name, setName }}>
      {children}
    </UserContext.Provider>
  );
};

root.render(
  <UserContextProvider>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </UserContextProvider>
);

reportWebVitals();
