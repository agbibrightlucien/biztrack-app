# BizTrack UI Components

This document describes the reusable UI components available in the BizTrack application.

## Components Overview

All components are designed to be simple, clean, and follow consistent styling patterns using Tailwind CSS.

## Import Components

```typescript
import {
  TextInput,
  Button,
  FormError,
  FormContainer,
  LinkText,
  Logo,
  LoadingSpinner,
} from "@/components/ui";
```

## Component Documentation

### TextInput

A styled input field for text, email, or password input.

**Props:**

- `type?: "text" | "email" | "password"` - Input type (default: "text")
- `placeholder: string` - Placeholder text
- `value: string` - Current input value
- `onChange: (e: React.ChangeEvent<HTMLInputElement>) => void` - Change handler
- `error?: string` - Error message to display
- `name?: string` - Input name attribute
- `required?: boolean` - Whether the field is required

**Example:**

```tsx
<TextInput
  type="email"
  placeholder="Enter your email"
  value={email}
  onChange={handleEmailChange}
  error={emailError}
  name="email"
  required
/>
```

### Button

A primary button component with loading state support.

**Props:**

- `text: string` - Button text
- `onClick?: () => void` - Click handler
- `disabled?: boolean` - Whether button is disabled
- `loading?: boolean` - Show loading spinner
- `type?: "button" | "submit" | "reset"` - Button type (default: "button")
- `variant?: "primary" | "secondary"` - Button style (default: "primary")
- `fullWidth?: boolean` - Full width button

**Example:**

```tsx
<Button
  text="Submit"
  onClick={handleSubmit}
  loading={isLoading}
  disabled={!isValid}
  fullWidth
/>
```

### FormError

Displays error messages in a styled container.

**Props:**

- `message: string` - Error message to display

**Example:**

```tsx
<FormError message="Invalid email address" />
```

### FormContainer

Centers a form on the screen with card styling.

**Props:**

- `children: React.ReactNode` - Form content
- `title?: string` - Optional form title

**Example:**

```tsx
<FormContainer title="Login">
  <form>{/* Form fields */}</form>
</FormContainer>
```

### LinkText

Styled clickable text link.

**Props:**

- `text: string` - Link text
- `onClick?: () => void` - Click handler (for navigation)
- `href?: string` - URL for external links
- `className?: string` - Additional CSS classes

**Example:**

```tsx
<LinkText
  text="Forgot password?"
  onClick={handleForgotPassword}
/>

<LinkText
  text="Terms of Service"
  href="/terms"
/>
```

### Logo

App logo component with optional animation.

**Props:**

- `animated?: boolean` - Enable pulse animation (default: false)
- `size?: "small" | "medium" | "large"` - Logo size (default: "medium")

**Example:**

```tsx
<Logo size="large" animated />
```

### LoadingSpinner

Simple loading spinner component.

**Props:** None

**Example:**

```tsx
<LoadingSpinner />
```

## Usage Patterns

### Basic Form Example

```tsx
import React, { useState } from "react";
import { TextInput, Button, FormError, FormContainer } from "@/components/ui";

const MyForm = () => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = () => {
    setLoading(true);
    // Handle form submission
  };

  return (
    <FormContainer title="Contact Us">
      <FormError message={error} />

      <TextInput
        type="email"
        placeholder="Your email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        error={error}
      />

      <Button
        text="Submit"
        onClick={handleSubmit}
        loading={loading}
        fullWidth
      />
    </FormContainer>
  );
};
```

### Login/Register Flow

```tsx
import { Logo, LinkText, FormContainer } from "@/components/ui";

const AuthPage = () => {
  return (
    <FormContainer>
      <div className="text-center mb-6">
        <Logo size="medium" />
      </div>

      {/* Form fields */}

      <div className="text-center mt-4">
        <span>Need an account? </span>
        <LinkText text="Sign up" onClick={goToRegister} />
      </div>
    </FormContainer>
  );
};
```

## Styling Notes

- All components use Tailwind CSS for styling
- Components follow a consistent color scheme (blue primary, gray neutrals)
- Responsive design is built-in
- Focus states and accessibility are included
- Error states are clearly indicated with red colors
