import {useEffect, useState} from 'react';
import type {User} from 'firebase/auth';
import {login, logout, watchUserState} from '../firebase/auth';

const Navbar = () => {
  const [currentUser, setCurrentUser] = useState<User | null>(null);
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  useEffect(() => {
    const unsubscribe = watchUserState((user: User | null) => {
      setCurrentUser(user);
    });
    return () => unsubscribe();
  }, []);

  const handleLogin = async () => {
    try {
      await login(email, password);
      setEmail('');
      setPassword('');
    } catch (error) {
      console.error('Login failed:', error);
    }
  };

  const handleLogout = async () => {
    await logout();
  };

  return (
    <nav style={{display:'flex', justifyContent:'space-between', padding:'10px', alignItems:'center'}}>
      <h2>Makana Movement</h2>

      {currentUser ? (
        <div style={{display:'flex', gap:'10px', alignItems:'center'}}>
          <span>Welcome, {currentUser.email}</span>
          <button onClick={handleLogout}>Logout</button>
        </div>
      ) : (
        <div style={{display:'flex', gap:'10px', alignItems:'center'}}>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e)=>setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e)=>setPassword(e.target.value)}
          />
          <button onClick={handleLogin}>Login</button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;