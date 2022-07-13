import React, { useMemo } from 'react'
import Table from 'rc-table';
import Title from '../Title';
import isEmpty from 'lodash/isEmpty';
import useFetchFiles from '../../hooks/useFetchFiles';
import { getCsvDimension } from '../../utils';
import './sheets.scss';

const PAGE_TITLE = 'CSV Result Table'
const ERROR_MESSAGE = `You do not have stored CSV files`;

const COLUMNS = [
  {
    title: 'File name',
    dataIndex: 'name',
    key: 'name',
    className: 'table-column',
    align: 'left'
  },
  {
    title: 'Total amount of columns',
    dataIndex: 'columns',
    key: 'columns',
    className: 'table-column',
    align: 'left'
  },
  {
    title: 'Total amount of data rows',
    dataIndex: 'rows',
    key: 'rows',
    className: 'table-column',
    align: 'left'
  }
];

const Sheets = () => {
  const { csvFiles } = useFetchFiles();
  const areFilesEmpty = isEmpty(csvFiles);

  const tableData = useMemo(() => {
    return Object.keys(csvFiles).map((fileName) => {
      const { columnsCount, rowsCount } = getCsvDimension(csvFiles[fileName])

      return { name: fileName, columns: columnsCount, rows: rowsCount, key: fileName, className: 'table-row'}
    }
  )}, [csvFiles])


  return (
    <div className='sheets' data-testid='sheets-page'>
      <Title text={PAGE_TITLE} errorMesssage={areFilesEmpty && ERROR_MESSAGE}/>
      {!areFilesEmpty && <Table className='result-table' rowClassName='table-row' columns={COLUMNS} data={tableData} />}
    </div>
  )
}

export default Sheets;
