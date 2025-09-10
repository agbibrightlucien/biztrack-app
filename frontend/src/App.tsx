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
import Dashboard from "./pages/Dashboard";
import ComponentDemo from "./pages/ComponentDemo";
import "./App.css";

// Create Material-UI theme
const theme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#1976d2",
    },
    secondary: {
      main: "#dc004e",
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <div className="min-h-screen bg-gray-50">
          <AppBar position="static" className="mb-8">
            <Toolbar>
              <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
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
              <Route path="/demo" element={<ComponentDemo />} />
            </Routes>
          </Container>
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;
