import React, { useCallback } from 'react'
import { useDropzone } from 'react-dropzone'
import { Button, TextField, withStyles } from '@material-ui/core'

import * as XLSX from 'xlsx'
import { JsonToTable } from 'react-json-to-table'

import Table from '../components/table'
import normalize from '../Utils/utils'
function App(props) {
	const linha = []
	const [header, setHeader] = React.useState([])
	const [rows, setRows] = React.useState([])

	function toObject(vetor, titulo) {
		let aux = {}
		for (let i = 0; i < vetor.length; i++) {
			aux[titulo[i]] = vetor[i]
		}
		return aux
	}

	const onDrop = useCallback((acceptedFiles) => {
		acceptedFiles.forEach((file) => {
			const reader = new FileReader()
			reader.onabort = () => console.log('file reading was aborted')
			reader.onerror = () => console.log('file reading has failed')
			reader.onload = () => {
				const bstr = reader.result
				const wb = XLSX.read(bstr, { type: 'binary' })
				const wsname = wb.SheetNames[0]
				const ws = wb.Sheets[wsname]
				const data = XLSX.utils.sheet_to_json(ws, { header: 1 })
				const { normal, MAX, MIN, rows } = normalize(data)

				setHeader(normal[0])
				setRows(rows)
				/*
        for(let i = 1; i < data.length;i++){
          linha.push(toObject(data[i],titulo));
        } */
			}
			reader.readAsBinaryString(file)
		})
	}, [])
	const { getRootProps, getInputProps } = useDropzone({ onDrop })

	return (
		<div className="main">
			<div className="div_esquerda">
				<Table header={header} rows={rows} />
			</div>
			<div className="div_direita">
				<div {...getRootProps()}>
					<input {...getInputProps()} />
					<p>Drag 'n' drop some files here, or click to select files</p>
				</div>
			</div>
		</div>
	)
}

export default App
