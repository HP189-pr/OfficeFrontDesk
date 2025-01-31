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
