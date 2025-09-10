import React from "react";
import {
  Card,
  CardContent,
  Typography,
  Box,
  Chip,
  IconButton,
} from "@mui/material";
import {
  TrendingUp,
  TrendingDown,
  AttachMoney,
  People,
  ShoppingCart,
  MoreVert,
} from "@mui/icons-material";

const Dashboard: React.FC = () => {
  // Mock data for demonstration
  const stats = [
    {
      title: "Total Revenue",
      value: "$24,567",
      change: "+12.5%",
      trend: "up",
      icon: <AttachMoney className="text-green-500" />,
    },
    {
      title: "Active Users",
      value: "1,234",
      change: "+5.2%",
      trend: "up",
      icon: <People className="text-blue-500" />,
    },
    {
      title: "Orders",
      value: "456",
      change: "-2.1%",
      trend: "down",
      icon: <ShoppingCart className="text-orange-500" />,
    },
    {
      title: "Conversion Rate",
      value: "3.2%",
      change: "+0.8%",
      trend: "up",
      icon: <TrendingUp className="text-purple-500" />,
    },
  ];

  return (
    <Box>
      <Typography
        variant="h4"
        component="h1"
        className="mb-6 font-bold text-gray-800"
      >
        Dashboard
      </Typography>

      <Typography variant="body1" className="text-gray-600 mb-8">
        Welcome back! Here's an overview of your business performance.
      </Typography>

      {/* Stats Grid */}
      <Box className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {stats.map((stat, index) => (
          <Card
            key={index}
            className="shadow-lg hover:shadow-xl transition-shadow"
          >
            <CardContent>
              <Box className="flex justify-between items-start mb-4">
                <Box className="flex items-center">{stat.icon}</Box>
                <IconButton size="small">
                  <MoreVert />
                </IconButton>
              </Box>

              <Typography
                variant="h4"
                component="div"
                className="font-bold mb-2"
              >
                {stat.value}
              </Typography>

              <Box className="flex items-center justify-between">
                <Typography variant="body2" className="text-gray-600">
                  {stat.title}
                </Typography>
                <Chip
                  icon={stat.trend === "up" ? <TrendingUp /> : <TrendingDown />}
                  label={stat.change}
                  size="small"
                  className={`${
                    stat.trend === "up"
                      ? "bg-green-100 text-green-800"
                      : "bg-red-100 text-red-800"
                  }`}
                />
              </Box>
            </CardContent>
          </Card>
        ))}
      </Box>

      {/* Recent Activity */}
      <Box className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <Box className="lg:col-span-2">
          <Card className="shadow-lg">
            <CardContent>
              <Typography
                variant="h6"
                component="h2"
                className="mb-4 font-semibold"
              >
                Recent Activity
              </Typography>
              <Box className="space-y-4">
                {[1, 2, 3, 4].map((item) => (
                  <Box
                    key={item}
                    className="flex items-center space-x-4 p-3 bg-gray-50 rounded-lg"
                  >
                    <Box className="w-2 h-2 bg-blue-500 rounded-full"></Box>
                    <Box className="flex-1">
                      <Typography variant="body2" className="font-medium">
                        New order received
                      </Typography>
                      <Typography variant="caption" className="text-gray-500">
                        2 minutes ago
                      </Typography>
                    </Box>
                  </Box>
                ))}
              </Box>
            </CardContent>
          </Card>
        </Box>

        <Box>
          <Card className="shadow-lg">
            <CardContent>
              <Typography
                variant="h6"
                component="h2"
                className="mb-4 font-semibold"
              >
                Quick Actions
              </Typography>
              <Box className="space-y-3">
                <Box className="p-3 border border-gray-200 rounded-lg hover:bg-gray-50 cursor-pointer transition-colors">
                  <Typography variant="body2" className="font-medium">
                    Generate Report
                  </Typography>
                </Box>
                <Box className="p-3 border border-gray-200 rounded-lg hover:bg-gray-50 cursor-pointer transition-colors">
                  <Typography variant="body2" className="font-medium">
                    Add New Product
                  </Typography>
                </Box>
                <Box className="p-3 border border-gray-200 rounded-lg hover:bg-gray-50 cursor-pointer transition-colors">
                  <Typography variant="body2" className="font-medium">
                    View Analytics
                  </Typography>
                </Box>
              </Box>
            </CardContent>
          </Card>
        </Box>
      </Box>
    </Box>
  );
};

export default Dashboard;
