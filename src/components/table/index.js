import React from 'react'
import {
	Table as MaterialTable,
	TableContainer,
	TableBody,
	TableHead,
	TableCell,
	TableRow,
	Paper,
} from '@material-ui/core'
// import { Container } from './styles';

function Table(props) {
	const { header, rows } = props

	return (
		<TableContainer
			style={{ overflow: 'auto', maxHeight: 500, margin: '2rem 0' }}
			component={Paper}
		>
			<MaterialTable stickyHeader size={'small'}>
				<TableHead>
					{header.map((column, key) => (
						<TableCell key align={'center'}>
							{column}
						</TableCell>
					))}
				</TableHead>
				<TableBody>
					{rows.map((row, key) => (
						<TableRow hover role="checkbox" key>
							{row.map((data, key) => {
								return (
									<TableCell key={`${key + data}`} align={'center'}>
										{typeof data === 'number' ? data.toFixed(6) : data}
									</TableCell>
								)
							})}
						</TableRow>
					))}
				</TableBody>
			</MaterialTable>
		</TableContainer>
	)
}

export default Table
