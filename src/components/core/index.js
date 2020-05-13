import React from 'react'
import { Tabs, Tab, Paper } from '@material-ui/core'
import { useDropzone } from 'react-dropzone'
import * as XLSX from 'xlsx'
import normalize from '../../Utils/utils'
import Styles from './styles'
import TabPanel from '../TabPanel'
function Core() {
	const [tabSelected, setTabSelected] = React.useState(0)

	const handleChange = (event, selected) => {
		setTabSelected(selected)
	}

	const onDrop = React.useCallback((acceptedFiles) => {
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
		<Styles.Wrapper>
			<Styles.Container>
				<Paper square>
					<Tabs
						value={tabSelected}
						indicatorColor={'primary'}
						textColor={'primary'}
						onChange={handleChange}
					>
						<Tab label={'Treinamento'} />
						<Tab label={'Teste'} />
						<Tab label={'Resultado'} />
					</Tabs>
					<TabPanel value={tabSelected} index={0}>
						<div {...getRootProps()}>
							<input {...getInputProps()} />
							<p>Drag 'n' drop some files here, or click to select files</p>
						</div>
					</TabPanel>
					<TabPanel value={tabSelected} index={1}>
						Teste
					</TabPanel>

					<TabPanel value={tabSelected} index={2}>
						Resultado
					</TabPanel>
				</Paper>
			</Styles.Container>
		</Styles.Wrapper>
	)
}

export default Core
