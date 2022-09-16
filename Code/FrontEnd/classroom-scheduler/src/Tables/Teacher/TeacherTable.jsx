import * as React from 'react';
import { rows,columns } from './TeacherData';
import DataTable from '../DataTable';

export default function TeacherTable() {
  return (
    <>
    <DataTable 
    rows={rows} 
    columns={columns} 
    height={400} 
    width={'75%'} 
    padding={'12.5%'} 
    color={'rgb(114, 255, 255)'}/>
    </>
  );
}
