import React, { useState } from 'react';
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
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import HomeIcon from '@mui/icons-material/Home';
import InfoIcon from '@mui/icons-material/Info';
import ContactMailIcon from '@mui/icons-material/ContactMail';
import useAuth from '../../hooks/useAuth';
import Clock from './Clock';
import { useQuery } from '@apollo/client';
import { GET_BIRTHDAYS, FETCH_HOLIDAYS } from '../../graphql/queries';
import '../../components/Auth/login.css';

const Login = () => {
  const [form, setForm] = useState({ username: '', password: '' });
  const [loginError, setLoginError] = useState('');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const { login } = useAuth();

  const {
    data: birthdaysData,
    loading: birthdaysLoading,
    error: birthdaysError,
  } = useQuery(GET_BIRTHDAYS);
  const {
    data: holidaysData,
    loading: holidaysLoading,
    error: holidaysError,
  } = useQuery(FETCH_HOLIDAYS, {
    variables: {
      startDate: new Date(new Date().getFullYear(), new Date().getMonth(), 1)
        .toISOString()
        .split('T')[0], // First day of the current month
      endDate: new Date(new Date().getFullYear(), new Date().getMonth() + 6, 1)
        .toISOString()
        .split('T')[0], // First day of the 6th month ahead
    },
  });
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      day: '2-digit',
      month: 'short',
      year: 'numeric',
    });
  };
  const toggleMenu = () => setIsMenuOpen((prev) => !prev);

  const handleChange = (e) => {
    const { id, value } = e.target;
    setForm((prev) => ({ ...prev, [id]: value }));
  };

  const isLoginFormValid = () => {
    if (!form.username || !form.password) {
      setLoginError('Both username and password are required.');
      return false;
    }
    return true;
  };

  const handleLogin = async () => {
    if (!isLoginFormValid()) return;

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

  const menuItems = [
    { text: 'Home', icon: <HomeIcon />, link: '/' },
    { text: 'About', icon: <InfoIcon />, link: '/about' },
    { text: 'Contact', icon: <ContactMailIcon />, link: '/contact' },
  ];

  return (
    <div className="container">
      {/* Menu Section */}
      <Drawer anchor="left" open={isMenuOpen} onClose={toggleMenu}>
        <Box className="drawer">
          <Typography variant="h6" className="menu-title">
            Menu
          </Typography>
          <Divider className="divider" />
          <List>
            {menuItems.map((item, index) => (
              <ListItem
                key={index}
                component="a"
                href={item.link}
                className="list-item"
              >
                {item.icon && (
                  <ListItemIcon className="list-item-icon">
                    {item.icon}
                  </ListItemIcon>
                )}
                <ListItemText primary={item.text} />
              </ListItem>
            ))}
          </List>
        </Box>
      </Drawer>
      <IconButton onClick={toggleMenu} className="icon-button">
        <MenuIcon />
      </IconButton>
      {/* Clock Section */}
      <Box className="clock">
        <Clock />
      </Box>
      {/* Login Section */}
      <Box className="login-section">
        <Typography variant="h5" gutterBottom>
          Login
        </Typography>
        <TextField
          fullWidth
          id="username"
          label="Username"
          variant="outlined"
          margin="normal"
          value={form.username}
          onChange={handleChange}
          className="input-field"
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
          className="input-field"
        />
        {loginError && (
          <Alert severity="error" className="alert">
            {loginError}
          </Alert>
        )}
        <Button
          fullWidth
          variant="contained"
          className="login-button"
          onClick={handleLogin}
          disabled={loading}
        >
          {loading ? (
            <CircularProgress size={24} className="circular-progress" />
          ) : (
            'Login'
          )}
        </Button>
      </Box>
      {/* Birthdays Section */}
      <Box className="birthdays">
        <Typography variant="h5" gutterBottom>
          Birthdays
        </Typography>
        {birthdaysLoading && <CircularProgress className="circular-progress" />}
        {birthdaysError && (
          <Alert severity="error">{birthdaysError.message}</Alert>
        )}
        {birthdaysData && (
          <div>
            <Typography variant="h6">Upcoming Birthdays</Typography>
            <ul>
              {birthdaysData.upcoming_birthdays?.map((birthday, index) => (
                <li key={index}>
                  {birthday.empname} - {birthday.birth_date}
                </li>
              ))}
            </ul>
            <Typography variant="h6">Recent Birthdays</Typography>
            <ul>
              {birthdaysData.recent_birthdays?.map((birthday, index) => (
                <li key={index}>
                  {birthday.empname} - {birthday.birth_date}
                </li>
              ))}
            </ul>
          </div>
        )}
      </Box>
      {/* Holidays Section */}
      <Box className="holidays">
        <Typography variant="h5" gutterBottom>
          Holidays
        </Typography>
        {holidaysLoading && <CircularProgress className="circular-progress" />}
        {holidaysError && (
          <Alert severity="error">{holidaysError.message}</Alert>
        )}
        {holidaysData && (
          <div>
            <Typography variant="h6">Upcoming Holidays</Typography>
            <ul>
              {holidaysData.holiday?.map((holiday) => (
                <li key={holiday.hdid}>
                  {formatDate(holiday.holiday_date)} - {holiday.holiday_day} -{' '}
                  {holiday.holiday_name}
                </li>
              ))}
            </ul>
          </div>
        )}
      </Box>
    </div>
  );
};

export default Login;
