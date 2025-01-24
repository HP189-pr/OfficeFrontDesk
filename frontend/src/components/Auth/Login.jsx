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
import useFetch from '../../hooks/useFetch';
import Clock from './Clock';
import { GET_BIRTHDAYS, FETCH_HOLIDAYS } from '../../graphql/queries';

const Login = ({ onLogin }) => {
  const [form, setForm] = useState({ username: '', password: '' });
  const [loginError, setLoginError] = useState('');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const { login } = useAuth();

  const {
    data: birthdaysData,
    loading: birthdaysLoading,
    error: birthdaysError,
  } = useFetch(GET_BIRTHDAYS);
  const {
    data: holidaysData,
    loading: holidaysLoading,
    error: holidaysError,
  } = useFetch(FETCH_HOLIDAYS);

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
      // Replace with actual login logic
      const userData = {
        username: form.username,
        // Add other user data as needed
      };
      login(userData);
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
    <Container maxWidth="md" sx={{ mt: 5 }}>
      {/* Menu Section */}
      <Drawer anchor="left" open={isMenuOpen} onClose={toggleMenu}>
        <Box sx={{ width: 250 }}>
          <Typography variant="h6" sx={{ p: 2, textAlign: 'center' }}>
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
      <IconButton onClick={toggleMenu} sx={{ mb: 3 }}>
        <MenuIcon />
      </IconButton>

      {/* Clock Section */}
      <Box mb={5}>
        <Clock />
      </Box>

      {/* Login Section */}
      <Box mt={5}>
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
          <Alert severity="error" sx={{ mt: 2 }}>
            {loginError}
          </Alert>
        )}
        <Button
          fullWidth
          variant="contained"
          color="primary"
          sx={{ mt: 3 }}
          onClick={handleLogin}
          disabled={loading}
        >
          {loading ? <CircularProgress size={24} /> : 'Login'}
        </Button>
      </Box>

      {/* Birthdays Section */}
      <Box mt={5}>
        <Typography variant="h5" gutterBottom>
          Birthdays
        </Typography>
        {birthdaysLoading && <CircularProgress />}
        {birthdaysError && (
          <Alert severity="error">{birthdaysError.message}</Alert>
        )}
        {birthdaysData && (
          <div>
            <Typography variant="h6">Upcoming Birthdays</Typography>
            <ul>
              {birthdaysData.upcoming_birthdays.map((birthday, index) => (
                <li key={index}>
                  {birthday.empname} - {birthday.birth_date}
                </li>
              ))}
            </ul>
            <Typography variant="h6">Recent Birthdays</Typography>
            <ul>
              {birthdaysData.recent_birthdays.map((birthday, index) => (
                <li key={index}>
                  {birthday.empname} - {birthday.birth_date}
                </li>
              ))}
            </ul>
          </div>
        )}
      </Box>

      {/* Holidays Section */}
      <Box mt={5}>
        <Typography variant="h5" gutterBottom>
          Holidays
        </Typography>
        {holidaysLoading && <CircularProgress />}
        {holidaysError && (
          <Alert severity="error">{holidaysError.message}</Alert>
        )}
        {holidaysData && (
          <div>
            <Typography variant="h6">Upcoming Holidays</Typography>
            <ul>
              {holidaysData.holidays.map((holiday, index) => (
                <li key={index}>
                  {holiday.name} - {holiday.date}
                </li>
              ))}
            </ul>
          </div>
        )}
      </Box>
    </Container>
  );
};

export default Login;
