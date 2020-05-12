import React from 'react'
import {
	Table as MaterialTable,
	TableContainer,
	TableBody,
	TableHead,
	TableCell,
	TableRow,
} from '@material-ui/core'
// import { Container } from './styles';

function Table(props) {
	const { header, rows } = props

	return (
		<TableContainer>
			<MaterialTable stickyHeader>
				<TableHead>
					{header.map((column, key) => (
						<TableCell key align={'center'}>
							{column}
						</TableCell>
					))}
				</TableHead>
				<TableBody>
					{rows.map((row, key) => (
						<TableRow key>
							{row.map((data, key) => {
								return (
									<TableCell key={`${key + data}`} align={'center'}>
										{data}
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
