import React from 'react';
import {UserName ,Password, Button} from './components';
import './App.css';

class App extends React.Component {
  render() {
    return (
        <div className='container'>
            <UserName />
            <Password />
            <Button />
        </div>    
    );
  }
}
export default App;