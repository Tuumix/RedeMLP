import React, {useCallback} from 'react'
import {useDropzone} from 'react-dropzone'
import { Button, TextField, withStyles} from '@material-ui/core';
import * as XLSX from 'xlsx';
import styles from './App.css';

const CssTextField = withStyles({
  root: {
    '& label.Mui-focused': {
      color: '#2ecc71',
    },
    '& label.color': {
      color: '#2ecc71',
    },
    '& .MuiInput-underline:after': {
      borderBottomColor: '#2ecc71',
    },
    '& .MuiOutlinedInput-root': {
      '& fieldset': {
        borderColor: 'red',
      },
      '&:hover fieldset': {
        borderColor: 'yellow',
      },
      '&.Mui-focused fieldset': {
        borderColor: 'green',
      },
    },
  },
})(TextField);



function App(props) {
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
      const data = XLSX.utils.sheet_to_csv(ws, {header:1});
      console.log("Data>>>"+data);
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
