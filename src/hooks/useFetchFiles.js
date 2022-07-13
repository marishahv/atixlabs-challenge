import { useEffect, useState } from 'react';
import { acceptedFileTypes } from '../constants'

const useFetchFiles = () => {
  const [pngFiles, setPngFiles] = useState({})
  const [csvFiles, setCsvFiles] = useState({})

  useEffect(() => {
    Object.keys(localStorage).forEach((fileName) => {
      const fileBase64 = localStorage.getItem(fileName)
      const fileData = fileBase64.split(',')
      const fileType = fileData[0]
      const fileContent = fileData[1]

      
      if (fileType.includes(acceptedFileTypes.png)) {
        setPngFiles((prevState) => ({ ...prevState, [fileName]: { type: fileType, content: fileContent }}))
      } else {
        setCsvFiles((prevState) => ({ ...prevState, [fileName]: { type: fileType, content: fileContent }}))
      }
    })
  }, [])

  return { pngFiles, csvFiles };
}

export default useFetchFiles;
