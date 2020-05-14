import React from 'react'
import { Tabs, Tab, Paper } from '@material-ui/core'
import Styles from './styles'
import TabPanel from '../TabPanel'

import Training from './Training'

function Core() {
	const [tabSelected, setTabSelected] = React.useState(0)

	const handleChange = (event, selected) => {
		setTabSelected(selected)
	}

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
						<Training />
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
