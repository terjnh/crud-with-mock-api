import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Create from './components/create';
import Read from './components/read';
import Update from './components/update';


function App() {
  return (
    <Router>
      <Box bgcolor="primary.main"></Box>
      <div className="main">
        <h2>React CRUD Operations</h2>

        <Routes>
          <Route
            path="/create"
            element={<Create/>}
          />
          <Route/>

          <Route
            path="/read"
            element={<Read/>}
          />

<Route
            path="/update"
            element={<Update/>}
          />
          <Route/>
        </Routes>

      </div>
    </Router>
  );
}

export default App;