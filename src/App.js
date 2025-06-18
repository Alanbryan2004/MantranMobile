import React, { useState, useEffect } from 'react';
import Sidebar from './components/Sidebar/Sidebar';
import Home from './pages/Home';
import Profile from './pages/Profile';
import Settings from './pages/Settings';
import Login from './pages/Login';

export default function App() {
  const [token, setToken] = useState(localStorage.getItem('token') || null);
  const [page, setPage] = useState('home');

  useEffect(() => {
    if (token) {
      localStorage.setItem('token', token);
    } else {
      localStorage.removeItem('token');
    }
  }, [token]);

  if (!token) {
    return <Login onLogin={(tok) => setToken(tok)} />;
  }

  let Content;
  switch (page) {
    case 'home':
      Content = <Home onLogout={() => setToken(null)} />;
      break;
    case 'profile':
      Content = <Profile />;
      break;
    case 'settings':
      Content = <Settings />;
      break;
    default:
      Content = <Home onLogout={() => setToken(null)} />;
  }

  return (
    <div style={{ display: 'flex', height: '100vh' }}>
      <Sidebar currentPage={page} onChangePage={setPage} onLogout={() => setToken(null)} />

      <main style={{ flexGrow: 1, padding: 20 }}>

        {Content}
        {/* () => {
            if ({ page } == 'home') {
              return <Home onLogout={() => setToken(null)} />
            }
            else {
              return Content
            }
          }
        } */}

      </main>
    </div>
  );
}
