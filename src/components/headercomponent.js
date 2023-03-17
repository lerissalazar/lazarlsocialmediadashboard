import React from 'react';

export default function Headercomponent() {
  return (
    <>
      <header>
        <div className='headerPlace'>
          <h1 className='headerText'>Social Media Dashboard</h1>
          <p className='totalText'>Total Followers : 23,004</p>
          <div className='toggle'>
            <label htmlFor='checkbox'>Dark Mode</label>
            <input type="checkbox" className='checkbox' id='checkbox' />
            <label for="checkbox" className='label'>
              <div class="ball"></div>
            </label>
          </div>
        </div>
      </header>
    </>
  )
}
