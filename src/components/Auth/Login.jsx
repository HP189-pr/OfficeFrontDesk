import React, { useState } from 'react';
import { useQuery } from '@apollo/client';
import { FETCH_HOLIDAYS } from '../../graphql/queries';
import Clock from './Clock';
import useAuth from '../../hooks/useAuth.js'; // Correct import
import MenuIcon from '@mui/icons-material/Menu';

const Login = () => {
  const { login } = useAuth();
  const [form, setForm] = useState({ username: '', password: '' });
  const [loginError, setLoginError] = useState('');
  const [loading, setLoading] = useState(false);
  const [showHolidays, setShowHolidays] = useState(false);

  const { data: holidaysData, loading: holidaysLoading } = useQuery(
    FETCH_HOLIDAYS,
    {
      variables: {
        startDate: new Date(new Date().getFullYear(), new Date().getMonth(), 1)
          .toISOString()
          .split('T')[0], // First day of the current month
        endDate: new Date(
          new Date().getFullYear(),
          new Date().getMonth() + 6,
          1,
        )
          .toISOString()
          .split('T')[0], // First day of the 6th month ahead
      },
    },
  );

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      day: '2-digit',
      month: 'short',
      year: 'numeric',
    });
  };

  const handleChange = (e) => {
    const { id, value } = e.target;
    setForm((prev) => ({ ...prev, [id]: value }));
  };

  const handleLogin = async () => {
    console.log('Handle login called with:', form);
    if (!form.username || !form.password) {
      setLoginError('Both fields are required.');
      return;
    }

    setLoginError('');
    setLoading(true);
    try {
      await login(form.username, form.password);
      console.log('Login successful, redirecting to dashboard');
      window.location.href = '/dashboard';
    } catch (error) {
      console.error('Login error:', error);
      setLoginError('Invalid username or password.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="h-screen w-screen flex items-center justify-center peacock-background">
      {/* Clock (Top Right Corner) */}
      <div className="absolute top-1 right-2 ">
        <Clock className="text-[#4b0082] text-xl" />
      </div>
      {/* Holiday Toggle (Top Left Corner) */}
      <div className="absolute top-4 left-4">
        <button
          className="flex items-center gap-2 bg-gradient-to-r from-peacockPurple via-peacockGreen to-peacockTeal 
                    text-white px-4 py-2 rounded-lg shadow-lg hover:opacity-90 transition font-semibold"
          onClick={() => setShowHolidays(!showHolidays)}
        >
          Show Holidays
          <MenuIcon />
        </button>

        {/* Holiday List (Only Shows When `showHolidays` is True) */}
        {showHolidays && (
          <div className="mt-2 bg-white p-4 rounded-lg shadow-lg border border-gray-300 w-64">
            <h3 className="text-center text-lg font-semibold text-gray-800 mb-2">
              Upcoming Holidays
            </h3>
            {holidaysLoading ? (
              <p className="text-center text-peacockPurple">Loading...</p>
            ) : (
              <div className="space-y-2">
                {holidaysData?.holiday?.map((holiday) => (
                  <div
                    key={holiday.hdid}
                    className="bg-gradient-to-r from-peacockTeal to-peacockGreen 
                   text-white p-2 rounded-md text-center shadow-md"
                  >
                    {formatDate(holiday.holiday_date)},{' '}
                    {holiday.holiday_day.slice(0, 3)} - {holiday.holiday_name}
                  </div>
                ))}
              </div>
            )}
          </div>
        )}
      </div>
      {/* Login Form (Centered) */}
      <div className="flex flex-col md:flex-row bg-gradient-to-b from-[#fefefe] to-[#ecf8ff] rounded-xl opacity-85 shadow-lg w-full max-w-3xl border-4 border-[#4b0082]">
        {/* Left Side - Welcome Message & Login Form */}
        <div className="w-full md:w-1/2 p-8 flex flex-col justify-center">
          <h2 className="text-3xl font-bold text-gray-800 text-center mb-4">
            Welcome
          </h2>
          <p className="text-gray-600 text-center mb-6">
            Please log in to continue.
          </p>

          {/* Username Input */}
          <input
            id="username"
            type="text"
            placeholder="Username"
            value={form.username}
            onChange={handleChange}
            className="w-full p-3 border rounded-md mb-3 focus:ring-4 focus:ring-[#009966] transition outline-none"
          />

          {/* Password Input */}
          <input
            id="password"
            type="password"
            placeholder="Password"
            value={form.password}
            onChange={handleChange}
            className="w-full p-3 border rounded-md mb-3 focus:ring-4 focus:ring-[#009966] transition outline-none"
          />

          {/* Login Error Message */}
          {loginError && (
            <p className="text-red-500 text-sm text-center">{loginError}</p>
          )}

          {/* Login Button */}
          <button
            onClick={handleLogin}
            className="w-full bg-gradient-to-r from-[#4b0082] to-[#009966] hover:opacity-80 text-white py-2 rounded-md mt-4 transition font-semibold"
          >
            {loading ? 'Logging in...' : 'Login'}
          </button>
        </div>

        {/* Right Side - Logo & University Name */}
        <div className="w-full md:w-1/2 bg-[#2d90d300] bg-opacity-90 p-8 flex flex-col justify-center items-center text-[#008dc2]">
          {/* Logo */}
          <img
            src="/assets/logo.png"
            alt="KSV Logo"
            className="h-30 w-30 mb-4"
          />

          {/* University Name */}
          <h3 className="text-3xl font-bold text-center">
            Kadi Sarva Vishwavidyalaya
          </h3>
        </div>
      </div>
    </div>
  );
};

export default Login;
