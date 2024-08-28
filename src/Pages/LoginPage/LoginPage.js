import React, { useState } from 'react';


const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [username, setUsername] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [accountError, setAccountError] = useState('');
  const [isLogin, setIsLogin] = useState(true);

  const handleLoginSubmit = async (e) => {
    e.preventDefault();

    if (!email || !password) {
      setError('Please fill in all fields');
      return;
    }

    try {
      const response = await fetch('https://your-auth-api.com/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      if (response.ok) {
        console.log('Login successful', data);
      } else {
        setError(data.message || 'Login failed');
      }
    } catch (err) {
      setError('An error occurred. Please try again.');
    }
  };

  const handleCreateAccountSubmit = async (e) => {
    e.preventDefault();

    if (!username || !email || !password || !confirmPassword) {
      setAccountError('Please fill in all fields');
      return;
    }

    if (password !== confirmPassword) {
      setAccountError('Passwords do not match');
      return;
    }

    try {
      const response = await fetch('https://your-auth-api.com/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, email, password }),
      });

      const data = await response.json();

      if (response.ok) {
        console.log('Account created successfully', data);
      } else {
        setAccountError(data.message || 'Account creation failed');
      }
    } catch (err) {
      setAccountError('An error occurred. Please try again.');
    }
  };

  return (
    <div className="login-container" id="login">
      <h2>{isLogin ? 'Login' : 'Create Account'}</h2>
      {isLogin ? (
        <>
          {error && <p className="error">{error}</p>}
          <form onSubmit={handleLoginSubmit}>
            <div>
            
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your Email"
                required
              />
            </div>
            <div>
            
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter your Password"
                required
              />
            </div>
            <button type="submit">Login</button>
          </form>
          <p>
            Don't have an account?{' '}
            <button onClick={() => setIsLogin(false)}>Create Account</button>
          </p>
        </>
      ) : (
        <>
          {accountError && <p className="error">{accountError}</p>}
          <form onSubmit={handleCreateAccountSubmit}>
            <div>
              
              <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="Enter your Username"
                required
              />
            </div>
            <div>
          
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your Email"
                required
              />
            </div>
            <div>
              
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter your Password"
                required
              />
            </div>
            <div>
              
              <input
                type="password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                placeholder="Confirm your Password"
                required
              />
            </div>
            <button type="submit">Create Account</button>
          </form>
          <p>
            Already have an account?{' '}
            <button onClick={() => setIsLogin(true)}>Login</button>
          </p>
        </>
      )}
    </div>
  );
};

export default LoginPage;
