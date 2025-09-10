import React, { useState } from "react";
import {
  TextInput,
  Button,
  FormError,
  FormContainer,
  LinkText,
  Logo,
  LoadingSpinner,
} from "../components/ui";

const ComponentDemo: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = () => {
    setLoading(true);
    setError("");

    // Simulate API call
    setTimeout(() => {
      if (!email || !password) {
        setError("Please fill in all fields");
      } else if (email === "test@error.com") {
        setError("Invalid credentials");
      } else {
        console.log("Login successful:", { email, password });
      }
      setLoading(false);
    }, 2000);
  };

  const handleForgotPassword = () => {
    console.log("Navigate to forgot password");
  };

  const handleSignUp = () => {
    console.log("Navigate to sign up");
  };

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-8">
          <Logo size="large" animated />
          <h1 className="text-3xl font-bold mt-4 mb-8">Component Demo</h1>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Login Form Demo */}
          <div>
            <FormContainer title="Login Demo">
              <FormError message={error} />

              <div className="space-y-4">
                <TextInput
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  name="email"
                  error={!email && error ? "Email is required" : ""}
                />

                <TextInput
                  type="password"
                  placeholder="Enter your password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  name="password"
                  error={!password && error ? "Password is required" : ""}
                />

                <Button
                  text="Sign In"
                  onClick={handleSubmit}
                  loading={loading}
                  fullWidth
                />

                <div className="flex justify-between items-center text-sm">
                  <LinkText
                    text="Forgot password?"
                    onClick={handleForgotPassword}
                  />
                  <LinkText text="Sign up" onClick={handleSignUp} />
                </div>
              </div>
            </FormContainer>
          </div>

          {/* Component Showcase */}
          <div className="space-y-6">
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-xl font-bold mb-4">Button Variants</h3>
              <div className="space-y-4">
                <Button text="Primary Button" variant="primary" />
                <Button text="Secondary Button" variant="secondary" />
                <Button text="Disabled Button" disabled />
                <Button text="Loading Button" loading />
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-xl font-bold mb-4">Logo Sizes</h3>
              <div className="space-y-4">
                <div>
                  <p className="text-sm text-gray-600 mb-2">Small:</p>
                  <Logo size="small" />
                </div>
                <div>
                  <p className="text-sm text-gray-600 mb-2">Medium:</p>
                  <Logo size="medium" />
                </div>
                <div>
                  <p className="text-sm text-gray-600 mb-2">Large:</p>
                  <Logo size="large" />
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-xl font-bold mb-4">Loading Spinner</h3>
              <div className="flex items-center space-x-4">
                <LoadingSpinner />
                <span className="text-gray-600">Loading...</span>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-xl font-bold mb-4">Link Text Examples</h3>
              <div className="space-y-2">
                <div>
                  <LinkText
                    text="Click me!"
                    onClick={() => alert("Clicked!")}
                  />
                </div>
                <div>
                  <LinkText text="External Link" href="https://example.com" />
                </div>
                <div>
                  <span className="text-gray-600">Have an account? </span>
                  <LinkText
                    text="Sign in here"
                    onClick={() => console.log("Sign in")}
                  />
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-xl font-bold mb-4">Form Error</h3>
              <FormError message="This is an example error message that would appear in forms." />
            </div>
          </div>
        </div>

        <div className="mt-8 bg-white rounded-lg shadow-lg p-6">
          <h3 className="text-xl font-bold mb-4">Input Field Examples</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <TextInput
              placeholder="Regular text input"
              value=""
              onChange={() => {}}
            />
            <TextInput
              type="email"
              placeholder="Email input"
              value=""
              onChange={() => {}}
            />
            <TextInput
              type="password"
              placeholder="Password input"
              value=""
              onChange={() => {}}
            />
            <TextInput
              placeholder="Input with error"
              value=""
              onChange={() => {}}
              error="This field has an error"
            />
          </div>
        </div>

        <div className="mt-8 text-center text-gray-600">
          <p>
            Try using email "test@error.com" to see error handling in action!
          </p>
        </div>
      </div>
    </div>
  );
};

export default ComponentDemo;
