import React, { useState } from "react";
import {
  Paper,
  TextField,
  Button,
  Typography,
  Box,
  Container,
  Link,
} from "@mui/material";
import { PersonAdd } from "@mui/icons-material";

const Register: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Implement registration logic
    console.log("Registration data:", formData);
  };

  return (
    <Container maxWidth="sm">
      <Paper elevation={3} className="p-8 mt-8">
        <Box className="text-center mb-6">
          <PersonAdd className="text-blue-500 mb-4" sx={{ fontSize: 48 }} />
          <Typography
            variant="h4"
            component="h1"
            className="mb-2 font-bold text-gray-800"
          >
            Create Account
          </Typography>
          <Typography variant="body1" className="text-gray-600">
            Join BizTrack and start managing your business today
          </Typography>
        </Box>

        <form onSubmit={handleSubmit} className="space-y-4">
          <TextField
            fullWidth
            label="Full Name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            variant="outlined"
            className="mb-4"
            required
          />

          <TextField
            fullWidth
            label="Email Address"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            variant="outlined"
            className="mb-4"
            required
          />

          <TextField
            fullWidth
            label="Password"
            name="password"
            type="password"
            value={formData.password}
            onChange={handleChange}
            variant="outlined"
            className="mb-4"
            required
          />

          <TextField
            fullWidth
            label="Confirm Password"
            name="confirmPassword"
            type="password"
            value={formData.confirmPassword}
            onChange={handleChange}
            variant="outlined"
            className="mb-6"
            required
          />

          <Button
            type="submit"
            fullWidth
            variant="contained"
            size="large"
            className="bg-blue-600 hover:bg-blue-700 py-3"
          >
            Create Account
          </Button>
        </form>

        <Box className="text-center mt-6">
          <Typography variant="body2" className="text-gray-600">
            Already have an account?{" "}
            <Link href="#" className="text-blue-600 hover:text-blue-800">
              Sign in here
            </Link>
          </Typography>
        </Box>
      </Paper>
    </Container>
  );
};

export default Register;
