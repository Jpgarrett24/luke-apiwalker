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
      <header>
        <nav>
          <Link to="/">Home</Link>
        </nav>
      </header>
      <section className="form">
        <Form inputs={inputs} setInputs={setInputs}></Form>
      </section>
      <main>
        <Router>
          <Data path="/:resource/:id" data={data} setData={setData} inputs={inputs} setInputs={setInputs}></Data>
        </Router>
      </main>
    </>
  );
}

export default App;
