// Path: /frontend/src/components/Auth/Login.js

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
import { gql, useQuery, useMutation } from '@apollo/client';
import useAuth from '../../hooks/useAuth';
import Clock from './Clock';

// GraphQL Queries and Mutation
const GET_REMINDERS = gql`
  query GetReminders {
    reminders {
      empname
      birth_date
      emp_des
    }
  }
`;

const GET_HOLIDAYS = gql`
  query GetHolidays {
    holidays {
      empname
      birth_date
      emp_des
    }
  }
`;

const GET_BIRTHDAYS = gql`
  query GetBirthdays {
    birthdays {
      empname
      birth_date
      emp_des
    }
  }
`;

const LOGIN_MUTATION = gql`
  mutation Login($username: String!, $password: String!) {
    login(username: $username, password: $password) {
      token
    }
  }
`;

// Component
const Login = () => {
  const { login } = useAuth();
  const [form, setForm] = useState({ username: '', password: '' });
  const [loginError, setLoginError] = useState('');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Apollo Hooks
  const {
    data: remindersData,
    loading: remindersLoading,
    error: remindersError,
  } = useQuery(GET_REMINDERS);
  const {
    data: holidaysData,
    loading: holidaysLoading,
    error: holidaysError,
  } = useQuery(GET_HOLIDAYS);
  const {
    data: birthdaysData,
    loading: birthdaysLoading,
    error: birthdaysError,
  } = useQuery(GET_BIRTHDAYS);

  const [loginMutation, { loading: loginLoading }] =
    useMutation(LOGIN_MUTATION);

  // Extract data
  const reminders = remindersData?.reminders || [];
  const holidays = holidaysData?.holidays || [];
  const birthdays = birthdaysData?.birthdays || [];

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
    try {
      const { data } = await loginMutation({
        variables: { username: form.username, password: form.password },
      });

      if (data?.login?.token) {
        login(data.login.token);
        window.location.href = '/post-login';
      } else {
        throw new Error('Login failed.');
      }
    } catch (error) {
      setLoginError(error.message || 'Invalid username or password.');
    }
  };

  const menuItems = [
    { text: 'Home', icon: <HomeIcon />, link: '/' },
    { text: 'About', icon: <InfoIcon />, link: '/about' },
    { text: 'Contact', icon: <ContactMailIcon />, link: '/contact' },
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

  const isLoading = remindersLoading || holidaysLoading || birthdaysLoading;
  const fetchError = remindersError || holidaysError || birthdaysError;

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

      {/* Dashboard Sections */}
      {isLoading ? (
        <Box textAlign="center" mb={3}>
          <CircularProgress />
        </Box>
      ) : (
        <>
          {renderList('Reminders', reminders, 'No reminders available')}
          {renderList('Birthdays', birthdays, 'No birthdays available')}
          {renderList('Holidays', holidays, 'No holidays available')}
        </>
      )}

      {fetchError && (
        <Alert severity="error">
          {fetchError.message || 'An error occurred.'}
        </Alert>
      )}

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
          disabled={loginLoading}
        >
          {loginLoading ? <CircularProgress size={24} /> : 'Login'}
        </Button>
      </Box>
    </Container>
  );
};

export default Login;
