import React from 'react';
import Title from '../Title';
import './landing-page.scss';

const TITLE = 'Hello! Please click menu item to start';

const LandingPage = () => (
  <div className='landing-page'>
    <Title text={TITLE} />
  </div>
)

export default LandingPage;
