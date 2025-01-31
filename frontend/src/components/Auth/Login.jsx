import React, { useState } from 'react';
import { useQuery } from '@apollo/client';
import { FETCH_HOLIDAYS } from '../../graphql/queries';
import Clock from './Clock';
import useAuth from '../../hooks/useAuth';

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
    <div className="h-screen flex items-center justify-center bg-gradient-to-br from-[#00b3b3] via-[#009966] to-[#4b0082] animate-gradient">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 p-8 w-full max-w-5xl">
        {/* Clock Section */}
        <div className="flex flex-col items-center justify-center">
          <div className="bg-white p-6 rounded-xl shadow-lg text-center w-full max-w-sm border-4 border-[#00b3b3]">
            <Clock />
          </div>

          {/* Holiday Toggle Section */}
          <div className="mt-6 w-full max-w-sm">
            <button
              className="w-full bg-gradient-to-r from-[#00b3b3] to-[#009966] text-white px-6 py-2 rounded-full shadow-lg hover:opacity-80 transition font-semibold"
              onClick={() => setShowHolidays(!showHolidays)}
            >
              {showHolidays ? 'Hide Holidays' : 'Show Holidays'}
            </button>

            {showHolidays && (
              <div className="mt-4 bg-white p-4 rounded-xl shadow-lg border-4 border-[#4b0082]">
                <h3 className="text-center text-lg font-semibold text-gray-800 mb-4">
                  Upcoming Holidays
                </h3>
                {holidaysLoading ? (
                  <p className="text-center text-[#4b0082]">Loading...</p>
                ) : (
                  <div className="space-y-3">
                    {holidaysData?.holiday?.map((holiday) => (
                      <div
                        key={holiday.hdid}
                        className="bg-[#009966] text-white p-3 rounded-full text-center shadow-lg"
                      >
                        {formatDate(holiday.holiday_date)} -{' '}
                        {holiday.holiday_name}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
        <div className="text-white bg-blue-500 p-5 rounded-lg shadow-lg">
          Tailwind is Working with Colors! 🎉
        </div>
        {/* Login Form Section */}
        <div className="bg-white p-8 rounded-xl shadow-lg w-full max-w-md mx-auto border-4 border-[#4b0082]">
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
    </div>
  );
};

export default Login;
