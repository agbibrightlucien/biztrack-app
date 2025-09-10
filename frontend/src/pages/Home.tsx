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
    <Container maxWidth="lg">
      <Box className="text-center mb-12">
        <Typography
          variant="h2"
          component="h1"
          className="mb-4 font-bold text-gray-800"
        >
          Welcome to BizTrack
        </Typography>
        <Typography variant="h5" component="p" className="text-gray-600 mb-8">
          Your complete business tracking and analytics solution
        </Typography>
        <Button
          variant="contained"
          size="large"
          className="bg-blue-600 hover:bg-blue-700 px-8 py-3"
        >
          Get Started
        </Button>
      </Box>

      <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
        <div>
          <Card className="h-full shadow-lg hover:shadow-xl transition-shadow">
            <CardContent className="text-center p-6">
              <TrendingUp
                className="text-blue-500 mb-4"
                sx={{ fontSize: 48 }}
              />
              <Typography
                variant="h5"
                component="h3"
                className="mb-3 font-semibold"
              >
                Analytics
              </Typography>
              <Typography variant="body1" className="text-gray-600">
                Track your business performance with detailed analytics and
                insights.
              </Typography>
            </CardContent>
          </Card>
        </div>

        <div>
          <Card className="h-full shadow-lg hover:shadow-xl transition-shadow">
            <CardContent className="text-center p-6">
              <Assessment
                className="text-green-500 mb-4"
                sx={{ fontSize: 48 }}
              />
              <Typography
                variant="h5"
                component="h3"
                className="mb-3 font-semibold"
              >
                Reports
              </Typography>
              <Typography variant="body1" className="text-gray-600">
                Generate comprehensive reports to understand your business
                better.
              </Typography>
            </CardContent>
          </Card>
        </div>

        <div>
          <Card className="h-full shadow-lg hover:shadow-xl transition-shadow">
            <CardContent className="text-center p-6">
              <Business
                className="text-purple-500 mb-4"
                sx={{ fontSize: 48 }}
              />
              <Typography
                variant="h5"
                component="h3"
                className="mb-3 font-semibold"
              >
                Management
              </Typography>
              <Typography variant="body1" className="text-gray-600">
                Manage all aspects of your business from one centralized
                platform.
              </Typography>
            </CardContent>
          </Card>
        </div>
      </div>
    </Container>
  );
};

export default Home;
