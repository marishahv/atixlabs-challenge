import React from 'react';
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import Title from '../Title';
import { getBase64 } from '../../utils';
import { acceptedFileTypes } from '../../constants';
import './home.scss';

const Input = styled('input')({
  display: 'none'
});

const PAGE_TITLE = 'Upload your file'

const Home = () => {
  const handleUploadClick = ({ target: { files } }) => {
    Object.keys(files).forEach( async (key) => {  
      try {
        const base64 = await getBase64(files[key]);
        const fileName = files[key].name;
  
        localStorage[fileName] = base64;
      } catch (err) {
        console.log(err)
      }
    })
  }

  return (
    <section className='uploader'>
      <Title text={PAGE_TITLE} />
      <form>
        <label htmlFor='contained-button-file'>
          <Input 
            onChange={handleUploadClick} 
            accept={`${acceptedFileTypes.png}, ${acceptedFileTypes.csv}`} 
            id='contained-button-file' 
            type='file' 
            multiple 
            data-testid='upload-file-input' />
          <Button variant='contained' component='span' data-testid='upload-button'>
            Upload
          </Button>
        </label>
      </form>
    </section>
  )
}

export default Home;
