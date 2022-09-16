import * as React from 'react';
import { rows,columns } from './SubjectData';
import DataTable from '../DataTable';

export default function SubjectTable() {
  return (
    <>
    <DataTable 
    rows={rows} 
    columns={columns} 
    height={400} 
    width={'40%'} 
    padding={'30%'} 
    color={'rgb(0, 215, 255)'
    } />
    </>
  );
}