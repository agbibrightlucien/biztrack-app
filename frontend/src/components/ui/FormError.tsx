import React from "react";

interface FormErrorProps {
  message: string;
}

const FormError: React.FC<FormErrorProps> = ({ message }) => {
  if (!message) return null;

  return (
    <div className="mb-form p-3 bg-red-50 border border-red-200 text-text-error rounded-input">
      <p className="text-sm font-medium">{message}</p>
    </div>
  );
};

export default FormError;
