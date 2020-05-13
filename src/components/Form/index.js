import React from 'react'
import Styles from './styles'
import {
	Radio,
	RadioGroup,
	FormControl,
	FormControlLabel,
	FormLabel,
} from '@material-ui/core'

function Form() {
	return (
		<Styles.Form>
			<Styles.FormWrapper>
				<Styles.TextField
					label={'Camada de Entrada'}
					disabled={true}
					value={5}
					variant={'filled'}
				/>

				<Styles.TextField
					label={'Camada de Saida'}
					disabled={true}
					variant={'filled'}
					value={5}
				/>

				<Styles.TextField label={'Camada de Oculta'} />

				<Styles.TextField label={'Taxa de aprendizagem '} />

				<hr />
				<p>Criterio de Parada</p>
				<Styles.TextField label={'Erro'} />
				<Styles.TextField label={'Iterações'} />
			</Styles.FormWrapper>
			<hr />
			<p>Funções de Transferencia</p>
			<Styles.WrapperControl>
				<Styles.FormControl component="fieldset">
					<FormLabel component="legend">Saida</FormLabel>
					<RadioGroup aria-label="saida" name="saida">
						<FormControlLabel
							value="Linear"
							control={<Radio />}
							label="Linear"
						/>
						<FormControlLabel
							value="Logistica"
							control={<Radio />}
							label="Logistica"
						/>
						<FormControlLabel
							value="Hiperbolica"
							control={<Radio />}
							label="Hiperbolica"
						/>
					</RadioGroup>
				</Styles.FormControl>

				<Styles.FormControl component="fieldset">
					<FormLabel component="legend">Neuronio</FormLabel>
					<RadioGroup aria-label="saida" name="saida">
						<FormControlLabel
							value="Linear"
							control={<Radio />}
							label="Linear"
						/>
						<FormControlLabel
							value="Logistica"
							control={<Radio />}
							label="Logistica"
						/>
						<FormControlLabel
							value="Hiperbolica"
							control={<Radio />}
							label="Hiperbolica"
						/>
					</RadioGroup>
				</Styles.FormControl>
			</Styles.WrapperControl>

			<Styles.ButtonBar>
				<Styles.Button>Salvar</Styles.Button>

				<Styles.Button>Restaurar</Styles.Button>
			</Styles.ButtonBar>
		</Styles.Form>
	)
}

export default Form
