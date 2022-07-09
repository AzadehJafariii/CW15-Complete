import React, { Component } from 'react';
import './UserName.css';

class UserName extends React.Component {
    render() {
      return (
          <>
            <label>Username</label>
            <input type ="text" className='username'></input>
          </>
      );
    }
  }

  export  {UserName};