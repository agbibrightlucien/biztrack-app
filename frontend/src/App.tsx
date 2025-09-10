import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import {
  CssBaseline,
  AppBar,
  Toolbar,
  Typography,
  Button,
  Container,
} from "@mui/material";
import Home from "./pages/Home";
import Register from "./pages/Register";
import Login from "./pages/Login";
import ForgotPassword from "./pages/ForgotPassword";
import ResetPassword from "./pages/ResetPassword";
import Dashboard from "./pages/Dashboard";
import ComponentDemo from "./pages/ComponentDemo";
import "./App.css";

// Create Material-UI theme
const theme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#4F46E5",
      light: "#6366F1",
    },
    secondary: {
      main: "#6B7280",
    },
    background: {
      default: "#F9FAFB",
      paper: "#FFFFFF",
    },
    text: {
      primary: "#111827",
      secondary: "#6B7280",
    },
  },
  typography: {
    fontFamily: '"Inter", sans-serif',
    button: {
      textTransform: "none",
      fontWeight: 500,
    },
  },
  shape: {
    borderRadius: 8,
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <div className="min-h-screen bg-background">
          <AppBar
            position="static"
            className="mb-8"
            sx={{ backgroundColor: "#4F46E5" }}
          >
            <Toolbar>
              <Typography
                variant="h6"
                component="div"
                sx={{
                  flexGrow: 1,
                  fontFamily: "Inter, sans-serif",
                  fontWeight: 600,
                }}
              >
                BizTrack
              </Typography>
              <Button color="inherit" component={Link} to="/" className="mx-2">
                Home
              </Button>
              <Button
                color="inherit"
                component={Link}
                to="/register"
                className="mx-2"
              >
                Register
              </Button>
              <Button
                color="inherit"
                component={Link}
                to="/login"
                className="mx-2"
              >
                Login
              </Button>
              <Button
                color="inherit"
                component={Link}
                to="/dashboard"
                className="mx-2"
              >
                Dashboard
              </Button>
              <Button
                color="inherit"
                component={Link}
                to="/demo"
                className="mx-2"
              >
                Demo
              </Button>
            </Toolbar>
          </AppBar>

          <Container maxWidth="lg" className="py-8">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/register" element={<Register />} />
              <Route path="/login" element={<Login />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/forgot-password" element={<ForgotPassword />} />
              <Route path="/reset-password" element={<ResetPassword />} />
              <Route path="/demo" element={<ComponentDemo />} />
            </Routes>
          </Container>
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;
