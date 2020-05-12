function normalize(data) {
	let MAX = [],
		MIN = []
	let maior, menor
	let newData = []

	//menos 1 porque a ultima coluna é a de classes
	//e a primeira linha é o header da tabela
	const rowCount = data.length
	const colCount = data[0].length - 1

	newData.push(data[0])
	for (let i = 0; i < colCount; i++) {
		//o primeiro item da coluna sempre vai ser o maior e o menor
		maior = menor = data[1][i]

		for (let j = 1; j < rowCount; j++) {
			if (data[j][i] > maior) maior = data[j][i]

			if (data[j][i] < menor) menor = data[j][i]
		}
		MAX.push(maior)
		MIN.push(menor)

		let vet = []
		//calculando a coluna normalizada
		for (let j = 1; j < rowCount; j++) {
			let value = (data[j][i] - MIN[i]) / (MAX[i] - MIN[i])

			vet.push(value)
		}

		newData.push(vet)
	}

	let value = []
	for (let j = 1; j < rowCount; j++) {
		value.push(data[j][colCount])
	}

	newData.push(value)

	/* NEWDATA  [0] => HEADER
                [N] => DADOS DA COLUNA N
                [N+1] => CLASSES
    */

	const rows = toRows(newData)

	return { normal: newData, MAX, MIN, rows }
}

function toRows(data) {
	//1 porque o 0 é o cabecario
	const colCount = data[1].length
	const rowCount = data[0].length

	console.log('Row count :' + rowCount)
	let rows = []
	let row = []
	let i, j
	for (i = 0; i < colCount; i++) {
		for (j = 1; j < rowCount; j++) row.push(data[j][i])

		row.push(data[j][i])
		rows.push(row)
		row = []
	}
	console.log(rows)
	return rows
}

export default normalize
