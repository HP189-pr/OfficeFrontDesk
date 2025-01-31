<<<<<<< HEAD
import { Image } from "@builder.io/components";

export default function MyComponent(props) {
  onMount(() => {
    // Path: /frontend/src/components/Auth/Login.jsx
    import React, { useState } from "react";
    import {
      Box,
      Button,
      CircularProgress,
      Container,
      TextField,
      Typography,
      Alert,
      List,
      ListItem,
      ListItemText,
      Drawer,
      IconButton,
      Divider,
      ListItemIcon,
    } from "@mui/material";
    import MenuIcon from "@mui/icons-material/Menu";
    import HomeIcon from "@mui/icons-material/Home";
    import InfoIcon from "@mui/icons-material/Info";
    import ContactMailIcon from "@mui/icons-material/ContactMail";
    import useAuth from "../../hooks/useAuth";
    import Clock from "./Clock";
    import PropTypes from "prop-types"; // Placeholder data-fetching logic

    const fetchReminders = async () => [
      {
        empname: "John Doe",
        birth_date: "1990-01-01",
        emp_des: "Manager",
      },
    ];

    const fetchHolidays = async () => [
      {
        empname: "Holiday 1",
        birth_date: "2025-12-25",
        emp_des: "Christmas",
      },
    ];

    const fetchBirthdays = async () => [
      {
        empname: "Jane Smith",
        birth_date: "1995-07-15",
        emp_des: "Engineer",
      },
    ];
=======
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
>>>>>>> c6a03518a1cd9754646c88521002c5c936ec66ff

    const Login = ({ onLogin }) => {
      const { login } = useAuth();
      const [form, setForm] = useState({
        email: "",
        password: "",
      });
      const [loginError, setLoginError] = useState(null);
      const [isMenuOpen, setIsMenuOpen] = useState(false);
      const [reminders, setReminders] = useState([]);
      const [holidays, setHolidays] = useState([]);
      const [birthdays, setBirthdays] = useState([]);
      const [loading, setLoading] = useState(false);

<<<<<<< HEAD
      const toggleMenu = () => setIsMenuOpen((prev) => !prev);

      const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
      };

      const handleLogin = () => {
        // Simulate a login process
        if (form.email === "test@example.com" && form.password === "password") {
          login({
            id: 1,
            name: "Test User",
            email: form.email,
          });
          onLogin(); // Call the onLogin function to set authentication state
        } else {
          setLoginError("Invalid email or password");
        }
      };

      const fetchData = async () => {
        setLoading(true);

        try {
          const [
            remindersData,
            holidaysData,
            birthdaysData,
          ] = await Promise.all([
            fetchReminders(),
            fetchHolidays(),
            fetchBirthdays(),
          ]);
          setReminders(remindersData);
          setHolidays(holidaysData);
          setBirthdays(birthdaysData);
        } catch (error) {
          console.error("Error fetching data:", error);
        } finally {
          setLoading(false);
        }
      };

      React.useEffect(() => {
        fetchData();
      }, []);
      const menuItems = [
        {
          text: "Home",
          icon: <HomeIcon />,
          link: "/",
        },
        {
          text: "About",
          icon: <InfoIcon />,
          link: "/about",
        },
        {
          text: "Contact",
          icon: <ContactMailIcon />,
          link: "/contact",
        },
      ];

      const renderList = (title, items, placeholder) => (
        <Box mb={3}>
          <Typography variant="h6" gutterBottom>
            {title}
          </Typography>
          <List>
            {items.length ? (
              items.map((item, index) => (
                <ListItem key={index}>
                  <ListItemText
                    primary={`${item.empname} (${item.birth_date})`}
                    secondary={item.emp_des}
                  />
                </ListItem>
              ))
            ) : (
              <Typography variant="body2" color="textSecondary">
                {placeholder}
              </Typography>
            )}
          </List>
        </Box>
      );

      return (
        <Container
          maxWidth="md"
          sx={{
            mt: 5,
          }}
        >
          {/* Menu Section */}
          <Drawer anchor="left" open={isMenuOpen} onClose={toggleMenu}>
            <Box
              sx={{
                width: 250,
              }}
            >
              <Typography
                variant="h6"
                sx={{
                  p: 2,
                  textAlign: "center",
                }}
              >
                Menu
              </Typography>
              <Divider />
              <List>
                {menuItems.map((item, index) => (
                  <ListItem key={index} component="a" href={item.link}>
                    {item.icon && <ListItemIcon>{item.icon}</ListItemIcon>}
                    <ListItemText primary={item.text} />
                  </ListItem>
                ))}
              </List>
            </Box>
          </Drawer>
          <IconButton
            onClick={toggleMenu}
            sx={{
              mb: 3,
            }}
          >
            <MenuIcon />
          </IconButton>
=======
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
>>>>>>> c6a03518a1cd9754646c88521002c5c936ec66ff

          {/* Clock Section */}
          <Box mb={5}>
            <Clock />
          </Box>

          {/* Dashboard Sections */}
          {loading ? (
            <Box textAlign="center" mb={3}>
              <CircularProgress />
            </Box>
          ) : (
            <>
              {renderList("Reminders", reminders, "No reminders available")}
              {renderList("Birthdays", birthdays, "No birthdays available")}
              {renderList("Holidays", holidays, "No holidays available")}
            </>
          )}

          {/* Login Section */}
          <Box mt={5}>
            <Typography variant="h5" gutterBottom>
              Login
            </Typography>
            <TextField
              fullWidth
              id="email"
              label="Email"
              type="email"
              variant="outlined"
              margin="normal"
              value={form.email}
              onChange={handleChange}
            />
            <TextField
              fullWidth
              id="password"
              label="Password"
              type="password"
              variant="outlined"
              margin="normal"
              value={form.password}
              onChange={handleChange}
            />
            {loginError && (
              <Alert
                severity="error"
                sx={{
                  mt: 2,
                }}
              >
                {loginError}
              </Alert>
            )}
            <Button
              fullWidth
              variant="contained"
              color="primary"
              sx={{
                mt: 3,
              }}
              onClick={handleLogin}
            >
              Login
            </Button>
          </Box>
        </Container>
      );
    };

    Login.propTypes = {
      onLogin: PropTypes.func.isRequired,
    };
    export default Login;
  });

  return (
    <Image
      image="https://cdn.builder.io/api/v1/image/assets%2FYJIGb4i01jvw0SRdL5Bt%2F72c80f114dc149019051b6852a9e3b7a"
      backgroundSize="cover"
      backgroundPosition="center"
      lazy={false}
      fitContent={true}
      aspectRatio={0.7041}
      lockAspectRatio={false}
      css={{
        display: "flex",
        flexDirection: "column",
        alignItems: "stretch",
        position: "relative",
        marginTop: "20px",
        width: "100%",
        minHeight: "20px",
        minWidth: "20px",
        overflow: "hidden",
      }}
    ></Image>
  );
}
