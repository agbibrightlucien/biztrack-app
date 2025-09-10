import React from "react";

interface FormContainerProps {
  children: React.ReactNode;
  title?: string;
}

const FormContainer: React.FC<FormContainerProps> = ({ children, title }) => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-background py-page-top px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full sm:w-[90%] md:w-full space-y-8">
        <div className="bg-background-card rounded-card shadow-card p-card">
          {title && (
            <div className="text-center mb-6">
              <h2 className="text-3xl font-bold text-text-primary">{title}</h2>
            </div>
          )}
          {children}
        </div>
      </div>
    </div>
  );
};

export default FormContainer;
