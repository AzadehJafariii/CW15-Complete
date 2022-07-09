import React, { Component } from 'react';
import './Password.css';

class Password extends React.Component {
    render() {
      return (
          <>
            <label>Password</label>
            <input type ="text" className='password'></input>
          </>
      );
    }
  }

  export  {Password};