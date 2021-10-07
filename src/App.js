import React from 'react';
import { BrowserRouter,Route } from 'react-router-dom';
import Home from './Pages/Home';
import Register from './Pages/Register';
import PriveRoute from './Component/PriveRoute';
import "./App.css";
import Login from './Pages/Login';
const App = () => {
  return (
    <div>
      <BrowserRouter>
      <PriveRoute exact path="/" component={Home} />
      <Route path="/register" component={Register} />
      <Route path="/login" component={Login} />
      </BrowserRouter>
      
    </div>
  );
}

export default App;

