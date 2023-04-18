// ***********************
// Author : Fahad Kamran
// Date : 18-APR-2023
// Comment : Counter App with React, redux & reduxjs/toolkit
// ***********************

import React, { Fragment } from 'react';
// global css file
import './App.css';
import Display from './Components/display';
import Increament from './Components/increament';
import Decreament from './Components/decreament';

function App() {
  return (
    <Fragment>
      <Display />
      <div className='d-flex justify-content-center'>
        <Increament />
        <Decreament />
      </div>
    </Fragment>
  )
}

export default App;