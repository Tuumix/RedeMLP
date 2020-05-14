import React from 'react'
import Styles from '../components/pages/App/styles'
import Form from '../components/Form'
import Core from '../components/core'
function App(props) {
	/* const onDrop = useCallback((acceptedFiles) => {
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

			}
			reader.readAsBinaryString(file)
		})
	}, []) */

	return (
		<Styles.Container>
			<Styles.Aside>
				<Form />
			</Styles.Aside>
			<Styles.Main>
				<Core />
			</Styles.Main>
		</Styles.Container>
	)
}
/* 	<div {...getRootProps()}>
		<input {...getInputProps()} />
		<p>Drag 'n' drop some files here, or click to select files</p>
	</div> */

export default App
