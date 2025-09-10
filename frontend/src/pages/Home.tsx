import React from "react";
import {
  Typography,
  Card,
  CardContent,
  Button,
  Box,
  Container,
} from "@mui/material";
import { TrendingUp, Assessment, Business } from "@mui/icons-material";

const Home: React.FC = () => {
  return (
    <Container maxWidth="lg" className="py-12">
      <Box className="text-center mb-16">
        <Typography
          variant="h2"
          component="h1"
          className="mb-6 font-bold text-text-primary"
        >
          Welcome to BizTrack
        </Typography>
        <Typography variant="h5" component="p" className="text-text-secondary mb-8 max-w-2xl mx-auto">
          Your complete business tracking and analytics solution
        </Typography>
        <Button
          variant="contained"
          size="large"
          className="bg-primary-500 hover:bg-primary-600 text-white px-8 py-3 shadow-md hover:shadow-lg transition-all duration-200"
        >
          Get Started
        </Button>
      </Box>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <Card className="h-full shadow-soft hover:shadow-md transition-all duration-200 rounded-card border border-border bg-white">
          <CardContent className="text-center p-8">
            <TrendingUp
              className="text-primary-500 mb-6 mx-auto"
              sx={{ fontSize: 56 }}
            />
            <Typography
              variant="h5"
              component="h3"
              className="mb-4 font-semibold text-text-primary"
            >
              Analytics
            </Typography>
            <Typography variant="body1" className="text-text-secondary">
              Track your business performance with detailed analytics and
              insights.
            </Typography>
          </CardContent>
        </Card>

        <Card className="h-full shadow-soft hover:shadow-md transition-all duration-200 rounded-card border border-border bg-white">
          <CardContent className="text-center p-8">
            <Assessment
              className="text-secondary-500 mb-6 mx-auto"
              sx={{ fontSize: 56 }}
            />
            <Typography
              variant="h5"
              component="h3"
              className="mb-4 font-semibold text-text-primary"
            >
              Reports
            </Typography>
            <Typography variant="body1" className="text-text-secondary">
              Generate comprehensive reports to understand your business
              better.
            </Typography>
          </CardContent>
        </Card>

        <Card className="h-full shadow-soft hover:shadow-md transition-all duration-200 rounded-card border border-border bg-white">
          <CardContent className="text-center p-8">
            <Business
              className="text-accent-500 mb-6 mx-auto"
              sx={{ fontSize: 56 }}
            />
            <Typography
              variant="h5"
              component="h3"
              className="mb-4 font-semibold text-text-primary"
            >
              Management
            </Typography>
            <Typography variant="body1" className="text-text-secondary">
              Manage all aspects of your business from one centralized
              platform.
            </Typography>
          </CardContent>
        </Card>
      </div>
    </Container>
  );
};

export default Home;
