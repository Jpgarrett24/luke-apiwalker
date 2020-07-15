import React, { useState, useEffect } from 'react';
import './App.css';
import axios from 'axios';
import { Router, Link, Redirect } from '@reach/router';
import Form from './components/Form';
import Data from './views/Data';

function App() {

  const [data, setData] = useState({});

  const [inputs, setInputs] = useState({
    resource: "people",
    id: false
  });

  return (
    <>
      <Link to="/">Home</Link>
      <Form inputs={inputs} setInputs={setInputs}></Form>
      <Router>
        <Data path="/:resource/:id" data={data} setData={setData}></Data>
      </Router>
    </>
  );
}

export default App;
