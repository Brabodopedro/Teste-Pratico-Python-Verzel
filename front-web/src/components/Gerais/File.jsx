import React from 'react';
import { MDBFile } from 'mdb-react-ui-kit';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';


export default function File() {
  return (
    <div>
      <MDBFile label='Default file input example' id='customFile' />
    </div>
  );
}