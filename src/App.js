import logo from "./logo.svg";
import "./App.css";
import SignUp from "./components/signUp";
import { Container } from "react-bootstrap";
import { AuthProvider } from "./components/context/authContext";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import DashBoard from "./components/dashBoard";
import LogIn from "./components/logIn";
import PrivateRoute from "./components/privateRoute";

function App() {
  return (
    <Container
      className="d-flex align-items-center justify-content-center"
      style={{ minHeight: "100vh" }}
    >
      <div className="w-100" style={{ maxWidth: "400px" }}>
        <Router>
          <AuthProvider>
            <Switch>
              <PrivateRoute exact path="/" component={DashBoard} />
              <Route path="/signup" component={SignUp} />
              <Route path="/login" component={LogIn} />
            </Switch>
          </AuthProvider>
        </Router>
      </div>
    </Container>
  );
}

export default App;
