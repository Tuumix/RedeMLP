import React from 'react'
import { useDropzone } from 'react-dropzone'
import * as XLSX from 'xlsx'
import DescriptionOutlinedIcon from '@material-ui/icons/DescriptionOutlined'
import CheckCircleOutlineOutlinedIcon from '@material-ui/icons/CheckCircleOutlineOutlined'
import LinearProgress from '@material-ui/core/LinearProgress'
import AlarmOnOutlinedIcon from '@material-ui/icons/AlarmOnOutlined'
import { Paper } from '@material-ui/core'
import Styles from './styles'
import normalize from '../../../Utils/utils'
import Table from '../../table'

function Training() {
	const [file, setFile] = React.useState(false)
	const [header, setHeader] = React.useState([])
	const [rows, setRows] = React.useState([])
	const [loading, setLoading] = React.useState(false)

	const onDrop = React.useCallback((acceptedFiles) => {
		try {
			setLoading(true)
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

					setFile(true)
					setHeader(normal[0])
					setRows(rows)
					setLoading(false)
				}
				reader.readAsBinaryString(file)
			})
		} catch (err) {
			setLoading(false)
			setFile(false)
		}
	}, [])

	const { getRootProps, getInputProps } = useDropzone({ onDrop })

	return (
		<>
			<Styles.Wrapper>
				<Styles.FileButton
					enable={file}
					{...getRootProps()}
					style={{ alignSelf: 'flex-start' }}
				>
					<input {...getInputProps()} />
					{file ? (
						<CheckCircleOutlineOutlinedIcon fontSize={'large'} />
					) : (
						<DescriptionOutlinedIcon fontSize={'large'} />
					)}
					<p>Arquivo de Treinamento</p>
				</Styles.FileButton>
				<Styles.FileButton style={{ alignSelf: 'flex-end' }} enable={file}>
					<AlarmOnOutlinedIcon fontSize={'large'} />
					<p>Iniciar Treinamento</p>
				</Styles.FileButton>
			</Styles.Wrapper>

			{loading ? <LinearProgress /> : <Table header={header} rows={rows} />}
		</>
	)
}

export default Training
