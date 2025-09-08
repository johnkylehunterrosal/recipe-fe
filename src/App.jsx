import "./styles/global.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store/store";
import ReactQueryWrapper from "./services/react-query/ReactQueryWrapper";
import MainLayout from "./layouts/MainLayout";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";

const App = () => {
  return (
    <>
      <Provider store={store}>
        <ReactQueryWrapper>
          <Router>
            <Routes>
              <Route index element={<Login />} />
              <Route path="/" element={<MainLayout />}>
                <Route path="/home" element={<Home />} />
                <Route path="/dashboard" element={<Dashboard />} />
              </Route>
            </Routes>
          </Router>
        </ReactQueryWrapper>
      </Provider>
    </>
  );
};
export default App;
