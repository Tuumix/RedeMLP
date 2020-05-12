import React, {useCallback} from 'react'
import {useDropzone} from 'react-dropzone'
import { Button, TextField, withStyles} from '@material-ui/core';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import * as XLSX from 'xlsx';
import { JsonToTable } from "react-json-to-table";
import styles from './App.css';


function App(props) {
  const linha = [];

  function toObject(vetor,titulo){
    let aux = {};
    for(let i = 0; i < vetor.length;i++){
      aux[titulo[i]] = vetor[i];
    }
    return aux;
  }

  const onDrop = useCallback((acceptedFiles) => {
    acceptedFiles.forEach((file) => {
      const reader = new FileReader()
      reader.onabort = () => console.log('file reading was aborted')
      reader.onerror = () => console.log('file reading has failed')
      reader.onload = () => {
        const bstr = reader.result;
        const wb = XLSX.read(bstr, {type:'binary'});
        const wsname = wb.SheetNames[0];
        const ws = wb.Sheets[wsname];
        const data = XLSX.utils.sheet_to_json(ws, {header:1});
        let titulo = data[0];
        
        for(let i = 1; i < data.length;i++){
          linha.push(toObject(data[i],titulo));
        }
      }
      reader.readAsBinaryString(file)
    })
    
  }, [])
  const {getRootProps, getInputProps} = useDropzone({onDrop})

  return (
    <div className="main">
      <div className="div_esquerda">
        <div>
       </div>
      </div>
      <div className="div_direita">
        <div {...getRootProps()}>
          <input {...getInputProps()} />
          <p>Drag 'n' drop some files here, or click to select files</p>
        </div>
      </div>
    </div>
  );
}

export default App;
