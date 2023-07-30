import './App.css';
import { NavBarP } from './MenuEventos/NavBarP';
import { Route, Routes, BrowserRouter as Router, Navigate, useNavigate } from "react-router-dom";
import { routes } from './routes';
import { Home } from './MenuEventos/Home';

function App() {
  return (
    <div className="App">
      <Router>
        <NavBarP />
        <Routes>
          {routes.map((route, index) => (
            <Route
              key={index}
              exact
              path={route.path}
              element={route.component}
            />
          ))}
        </Routes>
      </Router>
    </div>
  );
}

export default App;
