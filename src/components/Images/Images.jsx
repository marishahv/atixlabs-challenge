import React from 'react';
import Title from '../Title';
import isEmpty from 'lodash/isEmpty';
import useFetchFiles from '../../hooks/useFetchFiles';
import './images.scss';

const PAGE_TITLE = 'Image Gallery';
const ERROR_MESSAGE = `You do not have stored images`;

const Images = () => {
  const { pngFiles } = useFetchFiles()

  return (
    <div className='images' data-testid='images-page'>
      <Title text={PAGE_TITLE} errorMesssage={isEmpty(pngFiles) && ERROR_MESSAGE}/>
      <div className='images-container'>
        {
          Object.keys(pngFiles).map((fileName) => (
          <img src={`${pngFiles[fileName].type},${pngFiles[fileName].content}`} className='image' alt={`${fileName}`} key={fileName} />)
          )
        }
      </div>
    </div>
  )
}

export default Images;
