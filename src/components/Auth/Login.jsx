import React, { useState } from 'react';
import { useQuery } from '@apollo/client';
import { FETCH_HOLIDAYS } from '../../graphql/queries';
import Clock from './Clock';
import useAuth from '../../hooks/useAuth';

// Import MUI Components
import { IconButton } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

const Login = () => {
  const { login } = useAuth();
  const [form, setForm] = useState({ username: '', password: '' });
  const [loginError, setLoginError] = useState('');
  const [loading, setLoading] = useState(false);
  const [showHolidays, setShowHolidays] = useState(false); // Toggle state for holidays

  const { data: holidaysData, loading: holidaysLoading } = useQuery(
    FETCH_HOLIDAYS,
    {
      variables: {
        startDate: new Date(new Date().getFullYear(), new Date().getMonth(), 1)
          .toISOString()
          .split('T')[0],
        endDate: new Date(
          new Date().getFullYear(),
          new Date().getMonth() + 6,
          1,
        )
          .toISOString()
          .split('T')[0],
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
    if (!form.username || !form.password) {
      setLoginError('Both fields are required.');
      return;
    }

    setLoginError('');
    setLoading(true);
    try {
      await login(form.username, form.password);
      window.location.href = '/dashboard';
    } catch (error) {
      setLoginError('Invalid username or password.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="h-screen w-screen flex items-center justify-center peacock-background">
      {/* Clock (Top Right Corner) */}
      <div className="absolute top-4 right-4 bg-white p-4 rounded-xl shadow-lg border-4 border-[#00b3b3]">
        <Clock />
      </div>

      {/* Holiday Toggle (Top Left Corner) */}
      <div className="absolute top-4 left-4">
        <button
          className="flex items-center gap-2 bg-[#009966] text-white px-4 py-2 rounded-lg shadow-lg hover:bg-[#007755] transition font-semibold"
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
              <p className="text-center text-[#4b0082]">Loading...</p>
            ) : (
              <div className="space-y-2">
                {holidaysData?.holiday?.map((holiday) => (
                  <div
                    key={holiday.hdid}
                    className="bg-[#009966] text-white p-2 rounded-md text-center shadow-md"
                  >
                    {formatDate(holiday.holiday_date)} - {holiday.holiday_name}
                  </div>
                ))}
              </div>
            )}
          </div>
        )}
      </div>

      {/* Login Form (Centered) */}
      <div className="bg-white p-8 rounded-xl shadow-lg w-full max-w-md border-4 border-[#4b0082]">
        <h2 className="text-3xl font-bold text-gray-800 text-center mb-2">
          Login
        </h2>
        <p className="text-gray-600 text-center mb-6">
          Welcome back! Please log in.
        </p>

        <input
          id="username"
          type="text"
          placeholder="Username"
          value={form.username}
          onChange={handleChange}
          className="w-full p-3 border rounded-md mb-3 focus:ring-4 focus:ring-[#009966] transition outline-none"
        />
        <input
          id="password"
          type="password"
          placeholder="Password"
          value={form.password}
          onChange={handleChange}
          className="w-full p-3 border rounded-md mb-3 focus:ring-4 focus:ring-[#009966] transition outline-none"
        />

        {loginError && (
          <p className="text-red-500 text-sm text-center">{loginError}</p>
        )}

        <button
          onClick={handleLogin}
          className="w-full bg-gradient-to-r from-[#4b0082] to-[#009966] hover:opacity-80 text-white py-2 rounded-md mt-4 transition font-semibold"
        >
          {loading ? 'Logging in...' : 'Login'}
        </button>
      </div>
    </div>
  );
};

export default Login;
