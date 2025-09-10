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

const Register: React.FC = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
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
    if (!formData.name.trim()) {
      setError("Name is required");
      setLoading(false);
      return;
    }

    if (!formData.email.trim()) {
      setError("Email is required");
      setLoading(false);
      return;
    }

    if (!formData.password || formData.password.length < 6) {
      setError("Password must be at least 6 characters");
      setLoading(false);
      return;
    }

    try {
      // Simulate API call to backend
      const response = await fetch("http://localhost:5000/api/auth/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        const data = await response.json();
        console.log("Registration successful:", data);
        // Handle success (redirect to dashboard or login)
      } else {
        const errorData = await response.json();
        setError(errorData.message || "Registration failed");
      }
    } catch {
      setError("Network error. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const handleLoginClick = () => {
    navigate("/login");
  };

  return (
    <div className="min-h-screen bg-background">
      <FormContainer>
        {/* Logo */}
        <div className="text-center mb-8">
          <Logo size="medium" />
        </div>

        {/* Title */}
        <div className="text-center mb-8">
          <h1 className="text-2xl font-bold text-text-primary">Create your account</h1>
        </div>

        {/* Error Display */}
        <FormError message={error} />

        {/* Form */}
        <div className="space-y-form">
          <TextInput
            placeholder="Full Name"
            value={formData.name}
            onChange={handleChange}
            name="name"
            required
          />

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
          />

          <div className="pt-2">
            <Button
              text="REGISTER"
              onClick={handleSubmit}
              loading={loading}
              fullWidth
            />
          </div>
        </div>

        {/* Login Link */}
        <div className="text-center mt-6">
          <span className="text-text-secondary">Already have an account? </span>
          <LinkText text="Login" onClick={handleLoginClick} />
        </div>
      </FormContainer>
    </div>
  );
};

export default Register;
