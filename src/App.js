import React from 'react';
import { BrowserRouter,Route } from 'react-router-dom';
import Home from './Pages/Home';
import Register from './Pages/Register';
import "./App.css";
import Login from './Pages/Login';
import PrivateRoute from './Component/PrivateRoute';
const App = () => {
  return (
    <div>
      <BrowserRouter>
      <PrivateRoute exact path="/" component={Home} />
      <Route path="/register" component={Register} />
      <Route path="/login" component={Login} />
      </BrowserRouter>
      
    </div>
  );
}

export default App;

