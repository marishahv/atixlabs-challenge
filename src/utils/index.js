import { Buffer } from 'buffer';
import without from 'lodash/without';

export const getBase64 = (file) => {
  return new Promise((resolve,reject) => {
     const reader = new FileReader();

     reader.onload = () => resolve(reader.result);
     reader.onerror = error => reject(error);
     reader.readAsDataURL(file);
  });
}

export const decodeBase64CsvToArray = (base64Csv) => {
  const arrayFromBase64Csv = Buffer.from(base64Csv, 'base64').toString().split('\r\n');
  
  return without(arrayFromBase64Csv, '');
}

export const getCsvDimension = (csvData) => {
  const arrayFromCsv = decodeBase64CsvToArray(csvData.content)
  const columnsCount = arrayFromCsv[0].split(',').length
  const rowsCount = arrayFromCsv.length - 1

  return { columnsCount, rowsCount }
}
