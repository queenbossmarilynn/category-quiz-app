import { TextField } from '@mui/material';
import React from 'react';
import "./Home.css";

const Home = () => {
  return (
    <div className='content'>
      <div className='settings'>
        <span style= {{ fontSize: 30 }}>Quiz Settings</span>
        <div className='settings_select'>
          <TextField 
            style={{ marginBottom: 25 }}
            label='Enter Your Name'
            variant='outlined'
          />

          <TextField 
            select label='Select Category'
            variant='outlined'
            style={{ marginBottom: 30 }}
          />
        </div>
      </div>

      <img src= '/quiz-settings.gif' className='banner' alt='quiz img'/>
    </div>
  )
}

export default Home