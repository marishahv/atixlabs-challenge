import React from 'react';
import Typography from '@mui/material/Typography';
import './title.scss';

const Title = ({ text, errorMesssage }) => (
  <div className='title' data-testid='title'>
    <Typography className='title-small' variant='h5' gutterBottom component='h5' data-testid='title-text-small'>
      {text}
    </Typography>
    <Typography className='title-big' variant='h2' gutterBottom component='h2' data-testid='title-text-big'>
      {text}
    </Typography>
    {!!errorMesssage && <p className='errorMesssage'>{errorMesssage}</p>}
  </div>
)

export default Title;
