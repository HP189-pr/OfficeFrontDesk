import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, Container, Typography, Box } from '@mui/material';

const PostLogin: React.FC = () => {
  const navigate = useNavigate();

  // Simulated user data (this can come from context, Redux, or an API)
  const user = {
    name: 'John Doe',
    email: 'johndoe@example.com',
    role: 'Admin',
  };

  // Handle navigation to other parts of the app
  const handleNavigation = (path: string) => {
    navigate(path);
  };

  return (
    <Container maxWidth="sm" sx={{ textAlign: 'center', mt: 5 }}>
      <Typography variant="h4" gutterBottom>
        Welcome, {user.name}!
      </Typography>
      <Typography variant="body1" gutterBottom>
        Your email: {user.email}
      </Typography>
      <Typography variant="body1" gutterBottom>
        Role: {user.role}
      </Typography>

      <Box mt={4}>
        <Typography variant="h6" gutterBottom>
          Quick Actions
        </Typography>
        <Box display="flex" justifyContent="center" gap={2}>
          <Button
            variant="contained"
            color="primary"
            onClick={() => handleNavigation('/dashboard')}
          >
            Go to Dashboard
          </Button>
          <Button
            variant="contained"
            color="secondary"
            onClick={() => handleNavigation('/profile')}
          >
            View Profile
          </Button>
          <Button
            variant="outlined"
            color="primary"
            onClick={() => handleNavigation('/settings')}
          >
            Settings
          </Button>
        </Box>
      </Box>
    </Container>
  );
};

export default PostLogin;
