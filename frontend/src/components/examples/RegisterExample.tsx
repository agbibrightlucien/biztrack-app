import React, { useState } from "react";
import {
  TextInput,
  Button,
  FormError,
  FormContainer,
  LinkText,
  Logo,
} from "../ui";

const RegisterExample: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [errors, setErrors] = useState<string>("");
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
    // Clear errors when user starts typing
    if (errors) setErrors("");
  };

  const handleSubmit = async () => {
    setLoading(true);
    setErrors("");

    // Simple validation
    if (formData.password !== formData.confirmPassword) {
      setErrors("Passwords do not match");
      setLoading(false);
      return;
    }

    if (formData.password.length < 6) {
      setErrors("Password must be at least 6 characters");
      setLoading(false);
      return;
    }

    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 2000));
      console.log("Registration data:", formData);
      // Handle success (redirect, show message, etc.)
    } catch {
      setErrors("Registration failed. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const handleSignInClick = () => {
    console.log("Navigate to sign in page");
    // Add navigation logic here
  };

  return (
    <FormContainer title="Create Account">
      <div className="text-center mb-6">
        <Logo size="medium" />
        <p className="mt-2 text-gray-600">
          Join BizTrack and start managing your business today
        </p>
      </div>

      <FormError message={errors} />

      <form className="space-y-4">
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

        <TextInput
          type="password"
          placeholder="Confirm Password"
          value={formData.confirmPassword}
          onChange={handleChange}
          name="confirmPassword"
          required
        />

        <Button
          text="Create Account"
          onClick={handleSubmit}
          loading={loading}
          fullWidth
          type="submit"
        />
      </form>

      <div className="text-center mt-6">
        <span className="text-gray-600">Already have an account? </span>
        <LinkText text="Sign in here" onClick={handleSignInClick} />
      </div>
    </FormContainer>
  );
};

export default RegisterExample;
