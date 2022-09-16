import * as React from 'react';
import { rows,columns } from './StudentData';
import DataTable from '../DataTable';


export default function StudentTable() {
  return (
    <>
    <DataTable 
    rows={rows} 
    columns={columns} 
    height={400} 
    width={'75%'} 
    padding={'12.5%'} 
    color={'rgb(0, 150, 255)'} 
    />
    </>
  );
}