import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  TextInput,
  Button,
  FormError,
  FormContainer,
  LinkText,
  Logo,
} from "../components/ui";

const Login: React.FC = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
    // Clear error when user starts typing
    if (error) setError("");
  };

  const handleSubmit = async () => {
    setLoading(true);
    setError("");

    // Validation
    if (!formData.email.trim()) {
      setError("Email is required");
      setLoading(false);
      return;
    }

    if (!formData.password) {
      setError("Password is required");
      setLoading(false);
      return;
    }

    try {
      // API call to backend login endpoint
      const response = await fetch("http://localhost:5000/api/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        const data = await response.json();
        console.log("Login successful:", data);
        // Store token and redirect to dashboard
        localStorage.setItem("token", data.token);
        navigate("/dashboard");
      } else {
        const errorData = await response.json();
        setError(errorData.message || "Invalid credentials");
      }
    } catch {
      setError("Network error. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const handleForgotPassword = () => {
    // TODO: Navigate to forgot password page
    console.log("Navigate to forgot password page");
  };

  const handleRegisterClick = () => {
    navigate("/register");
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <FormContainer>
        {/* Logo */}
        <div className="text-center mb-8">
          <Logo size="medium" />
        </div>

        {/* Title */}
        <div className="text-center mb-8">
          <h1 className="text-2xl font-bold text-gray-900">Welcome Back</h1>
        </div>

        {/* Error Display */}
        <FormError message={error} />

        {/* Form */}
        <div className="space-y-4">
          <TextInput
            type="email"
            placeholder="Email Address"
            value={formData.email}
            onChange={handleChange}
            name="email"
            required
          />

          <TextInput
            type="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            name="password"
            required
            showPasswordToggle
          />

          <div className="pt-2">
            <Button
              text="Login"
              onClick={handleSubmit}
              loading={loading}
              fullWidth
            />
          </div>
        </div>

        {/* Links */}
        <div className="space-y-3 mt-6">
          <div className="text-center">
            <LinkText text="Forgot Password?" onClick={handleForgotPassword} />
          </div>
          
          <div className="text-center">
            <span className="text-gray-600">Don't have an account? </span>
            <LinkText text="Register" onClick={handleRegisterClick} />
          </div>
        </div>
      </FormContainer>
    </div>
  );
};

export default Login;
